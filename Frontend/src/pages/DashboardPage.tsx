import { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Panel from '../components/Dashboard/Panel';
import { dashboardInfoData } from '../mock/data';

const DashboardBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 5.2rem;
`;

const Map = styled.div`
  width: 70%;
  & .marker {
    background-color: ${palette.primary3};
    width: 10px;
    height: 10px;
    border-radius: 10px;
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

const DashboardPage = () => {
  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', mapOptions);
    naver.maps.Event.addListener(map, 'click', function (e) {
      console.log(e.coord.lat(), e.coord.lng());
    });

    dashboardInfoData.forEach(({ lat, lng, radius }) => {
      new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(lat, lng),
        icon: {
          content: '<div class="marker"/>',
          size: new naver.maps.Size(10, 10),
        },
      });

      new naver.maps.Circle({
        map: map,
        center: new naver.maps.LatLng(lat, lng),
        radius: radius,
        fillColor: palette.primary2,
        fillOpacity: 0.3,
        strokeWeight: 0,
      });
    });
  }, []);
  return (
    <>
      <Header>도움말</Header>
      <DashboardBlock>
        <Map id="map" />
        <Panel />
      </DashboardBlock>
    </>
  );
};
export default DashboardPage;
