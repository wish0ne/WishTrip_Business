import { useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Info from '../components/Dashboard/Info';
import Panel from '../components/Dashboard/Panel';
import { dashboardInfoData } from '../mock/data';
import { clickInfo } from '../recoil/atom';
import { useRecoilState } from 'recoil';

const DashboardBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 5.2rem;
`;

const Map = styled.div`
  width: 70%;
  & .marker {
    background-color: ${palette.primary3};
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
  & .infoWindow {
    border-radius: 0.8rem 0.8rem 0.8rem 0;
    background-color: white;
    padding: 1.6rem;
    width: 30rem;
    position: relative;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    .anchor {
      width: 0px;
      height: 0px;
      border-bottom: 1.6rem solid transparent;
      border-left: 1.6rem solid white;
      position: absolute;
      bottom: -1.6rem;
      left: 0;
    }
  }
`;

const { naver } = window;

const center: naver.maps.LatLng = new naver.maps.LatLng(37.503545, 127.044878);

const mapOptions = {
  center: center,
  zoom: 15,
  zoomControl: true,
  zoomControlOptions: {
    position: naver.maps.Position.TOP_LEFT,
    style: naver.maps.ZoomControlStyle.SMALL,
  },
};

const infoWindows: naver.maps.InfoWindow[] = [];
const markers: naver.maps.Marker[] = [];

const DashboardPage = () => {
  const [clicked, setClicked] = useRecoilState(clickInfo);
  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', mapOptions);
    naver.maps.Event.addListener(map, 'click', function (e) {
      console.log(e.coord.lat(), e.coord.lng());
    });

    dashboardInfoData.forEach(
      ({ img, title, location, status, lat, lng, radius }) => {
        const marker = new naver.maps.Marker({
          map: map,
          position: new naver.maps.LatLng(lat, lng),
          icon: {
            content: '<div class="marker"/>',
            size: new naver.maps.Size(10, 10),
          },
        });

        const info = new naver.maps.InfoWindow({
          content:
            '<div class="infoWindow">' +
            ReactDOMServer.renderToStaticMarkup(
              <Info
                image={img}
                title={title}
                location={location}
                radius={radius}
                status={status}
              />,
            ) +
            '<div class="anchor"/>' +
            '</div>',
          backgroundColor: 'transparent',
          disableAnchor: true,
          borderWidth: 0,
          pixelOffset: { x: 149, y: 0 },
        });

        new naver.maps.Circle({
          map: map,
          center: new naver.maps.LatLng(lat, lng),
          radius: radius,
          fillColor: palette.primary2,
          fillOpacity: 0.3,
          strokeWeight: 0,
          clickable: true,
        });

        infoWindows.push(info);
        markers.push(marker);
      },
    );

    function getClickMarker(seq: number) {
      return function (e: any) {
        let marker = markers[seq];
        let infoWindow = infoWindows[seq];
        if (infoWindow.getMap()) {
          infoWindow.close();
          setClicked(-1);
        } else {
          setClicked(seq);
          infoWindow.open(map, marker);
        }
      };
    }

    markers.forEach((marker, idx) => {
      naver.maps.Event.addListener(marker, 'click', getClickMarker(idx));
    });
  }, []);

  useEffect(() => {
    console.log(clicked);
    if (clicked >= 0) markers[clicked].trigger('click');
  }, [clicked]);
  return (
    <>
      <Header>?????????</Header>
      <DashboardBlock>
        <Map id="map" />
        <Panel />
      </DashboardBlock>
    </>
  );
};
export default DashboardPage;
