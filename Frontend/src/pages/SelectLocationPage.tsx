import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Panel from '../components/SelectLocation/Panel';
import { useRecoilState } from 'recoil';
import { selectedCode } from '../recoil/atom';
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

const center: naver.maps.LatLng = new naver.maps.LatLng(37.503545, 127.044878);

const mapOptions = {
  center: center,
  zoom: 11,
  zoomControl: true,
  zoomControlOptions: {
    position: naver.maps.Position.TOP_LEFT,
    style: naver.maps.ZoomControlStyle.SMALL,
  },
};

const SelectLocationPage = () => {
  const [code, setCode] = useRecoilState(selectedCode);
  const [stores, setStores] = useState<naver.maps.LatLng[]>([]);

  useEffect(() => {
    const map: naver.maps.Map = new window.naver.maps.Map('map', mapOptions);
    naver.maps.Event.addListener(map, 'click', function (e) {
      console.log(e.coord.lat(), e.coord.lng());
    });

    naver.maps.Event.once(map, 'init', () => {
      new naver.maps.visualization.DotMap({
        data: stores,
        map: map,
        fillColor: '#0086e7',
        opacity: 0.8,
      });
    });
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
      <Header>도움말</Header>
      <PageBlock>
        <Map id="map" />
        <Panel />
      </PageBlock>
    </>
  );
};
export default SelectLocationPage;
