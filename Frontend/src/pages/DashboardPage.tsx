import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Landing from '../assets/images/landing.jpg';
import { useEffect } from 'react';

const { naver } = window;

const center: naver.maps.LatLng = new naver.maps.LatLng(37.503545, 127.044878);
const mapOptions = {
  center: center,
  zoom: 16,
};

const DashboardPage = () => {
  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', mapOptions);
  }, []);
  return (
    <>
      <Header>도움말</Header>
      <div id="map" style={{ width: '100%', height: '100%' }} />
    </>
  );
};
export default DashboardPage;
