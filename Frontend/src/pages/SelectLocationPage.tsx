import { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Panel from '../components/SelectLocation/Panel';
import { useRecoilState } from 'recoil';
import { selectCoord, selectedCode, selectRadius } from '../recoil/atom';
import { getStores } from '../lib/api/client';

const PageBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 5.2rem;
`;

const Map = styled.div`
  width: 50%;
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

const SelectLocationPage = () => {
  const [code, setCode] = useRecoilState(selectedCode);
  const [stores, setStores] = useState<naver.maps.LatLng[]>([]);
  const [select, setSelect] = useRecoilState(selectCoord);
  const [radius, setRadius] = useRecoilState(selectRadius);
  const [address, setAddress] = useState<string>('');

  const [center, setCenter] = useState<naver.maps.LatLng>(
    new naver.maps.LatLng(37.503545, 127.044878),
  );
  const [zoom, setZoom] = useState<number>(11);

  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', {
      center: center,
      zoom: zoom,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
        style: naver.maps.ZoomControlStyle.SMALL,
      },
    });
    naver.maps.Event.addListener(map, 'click', function (e) {
      setSelect({ lat: e.coord.lat(), lng: e.coord.lng() });
      setCenter(new naver.maps.LatLng(e.coord._lat, e.coord._lng));
      setZoom(15);
    });

    naver.maps.Event.once(map, 'init', () => {
      new naver.maps.visualization.DotMap({
        data: stores,
        map: map,
        fillColor: '#0086e7',
        opacity: 0.8,
      });
    });

    //?????? ?????? ????????????
    if (select) {
      new naver.maps.Circle({
        map: map,
        center: new naver.maps.LatLng(select.lat, select.lng),
        radius: radius,
        fillColor: '#ffffff',
        fillOpacity: 0.6,
        strokeWeight: 3,
        strokeColor: '#00d8ec',
      });
      new naver.maps.Circle({
        map: map,
        center: new naver.maps.LatLng(select.lat, select.lng),
        radius: 20,
        fillColor: '#00d8ec',
        fillOpacity: 0.8,
        strokeWeight: 0,
      });

      //?????? ?????? ?????? ??????
      naver.maps.Service.reverseGeocode(
        {
          coords: new naver.maps.LatLng(select.lat, select.lng),
        },
        function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('Something wrong!');
          }

          const address = response.v2.address; // ?????? ????????? ?????? ??????

          // do Something
          setAddress(address.jibunAddress + ' ' + address.roadAddress);
        },
      );
    }
  });

  useEffect(() => {
    if (code !== '') {
      getStores(code).then((data) => {
        const result = data.map(
          (coord: any) =>
            new naver.maps.LatLng(coord.latitude, coord.longitude),
        );
        setStores(result);
      });
    }
  }, [code]);

  return (
    <>
      <Header>?????????</Header>
      <PageBlock>
        <Map id="map" />
        <Panel address={address} />
      </PageBlock>
    </>
  );
};
export default SelectLocationPage;
