import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import Selectbox from './Selectbox';
import {
  mainCategory,
  middleCategory,
  subCategory,
} from '../../lib/api/client';
import { useRecoilState } from 'recoil';
import { selectedCode, selectRadius } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';

const PanelBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 8rem 3.2rem;
  position: relative;
  & > h2 {
    font-family: 'Medium';
    font-size: 1.2rem;
    color: ${palette.default1};
    margin-bottom: 0.4rem;
  }
  & > h3 {
    font-family: 'Medium';
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${palette.primary3};
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Line = styled.div`
  width: 12rem;
  height: 0.1rem;
  background-color: ${palette.inversed2};
  margin: 2.4rem 0;
`;

const Address = styled.div`
  width: 100%;
  padding: 1.6rem;
  background-color: ${palette.inversed1};
  border-radius: 1.2rem;
  font-family: 'Medium';
  font-size: 1.3rem;
  line-height: 2rem;
  margin-bottom: 2.4rem;
`;

const SliderContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.8rem;
  & > div {
    display: flex;
    justify-content: space-between;
    & > span {
      font-family: Medium;
      font-size: 1.3rem;
      line-height: 1.6rem;
      color: ${palette.default1};
    }
  }

  & .slider {
    width: 100%;
    margin-bottom: 0.4rem;
  }
`;

const RadiusContainer = styled.div`
  display: flex;
  font-family: Medium;
  align-items: center;
  font-size: 1.3rem;
  line-height: 2rem;
  & > .radius {
    background-color: ${palette.inversed1};
    padding: 1.6rem;
    border-radius: 1.2rem;
    color: ${palette.default2};
    width: 12rem;
    margin-right: 0.8rem;
  }
  & > span {
    color: ${palette.default1};
  }
`;

interface PanelProps {
  address: string;
}

const Panel = ({ address }: PanelProps) => {
  const [code, setCode] = useRecoilState(selectedCode);
  //????????????
  const [mainList, setMainList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [subList, setSubList] = useState([]);

  //?????????
  const [main, setMain] = useState('');
  const [middle, setMiddle] = useState('');
  const [sub, setSub] = useState('');

  const [radius, setRadius] = useRecoilState(selectRadius);

  const navigate = useNavigate();

  const handleRadius = (e: number | number[]) => {
    if (!Array.isArray(e)) setRadius(e);
  };

  useEffect(() => {
    const getMain = async () => {
      const main = await mainCategory();
      console.log(main);
      setMainList(main);
    };
    getMain();
  }, []);

  //????????? ????????????
  useEffect(() => {
    //?????????
    setMiddleList([]);
    setMiddle('');
    const getMiddle = async () => {
      const middle = await middleCategory(main);
      console.log(middle);
      setMiddleList(middle);
    };
    if (main !== '') getMiddle();
  }, [main]);

  //????????? ????????????
  useEffect(() => {
    //?????????
    setSubList([]);
    setSub('');
    const getSub = async () => {
      const sub = await subCategory(middle);
      console.log(sub);
      setSubList(sub);
    };
    if (middle !== '') getSub();
  }, [middle]);

  //???????????? ????????????
  useEffect(() => {
    if (sub !== '') setCode(sub);
    else if (middle !== '') setCode(middle);
    else if (main !== '') setCode(main);
  }, [main, middle, sub, setCode]);

  return (
    <PanelBlock>
      <Title>?????? ????????? ???????????????.</Title>
      <h2>?????? ??????</h2>
      <SelectContainer>
        <Selectbox options={mainList} value={main} handleChange={setMain}>
          ?????????
        </Selectbox>
        <Selectbox options={middleList} value={middle} handleChange={setMiddle}>
          ?????????
        </Selectbox>
        <Selectbox options={subList} value={sub} handleChange={setSub}>
          ?????????
        </Selectbox>
      </SelectContainer>
      <Line />
      {address === '' && <h3>???????????? ????????? ?????? ????????? ??????????????????.</h3>}
      {address !== '' && (
        <>
          <h2>?????? ??????</h2>
          <Address>{address}</Address>
          <h2>?????? ?????? ??????</h2>
          <RadiusContainer>
            <SliderContainer>
              <Slider
                min={0}
                max={2000}
                className="slider"
                step={100}
                onChange={handleRadius}
                value={radius}
              />
              <div>
                <span>0</span>
                <span>1km</span>
                <span>2km</span>
              </div>
            </SliderContainer>
            <div className="radius">{radius}</div>
            <span className="meter">??????</span>
          </RadiusContainer>
        </>
      )}
      <Button active={address !== ''}>??????</Button>
    </PanelBlock>
  );
};

export default Panel;
