import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Panel from '../components/SelectMoney/Panel';
import { useRecoilValue } from 'recoil';
import { selectCoord, selectRadius } from '../recoil/atom';
import { ReactNode, useEffect } from 'react';

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

const SelectMoneyPage = () => {
  const select = useRecoilValue(selectCoord);
  const radius = useRecoilValue(selectRadius);

  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', mapOptions);
    map.setCenter(new naver.maps.LatLng(select.lat, select.lng));
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
  }, []);

  return (
    <>
      <Header>도움말</Header>
      <PageBlock>
        <Map id="map" />
        <Panel />
      </PageBlock>
    </>
  );
};
export default SelectMoneyPage;
