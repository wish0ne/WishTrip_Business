import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
import { selectedCode } from '../../recoil/atom';

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

const Panel = () => {
  const [code, setCode] = useRecoilState(selectedCode);
  //카테고리
  const [mainList, setMainList] = useState([]);
  const [middleList, setMiddleList] = useState([]);
  const [subList, setSubList] = useState([]);

  //선택값
  const [main, setMain] = useState('');
  const [middle, setMiddle] = useState('');
  const [sub, setSub] = useState('');

  useEffect(() => {
    const getMain = async () => {
      const main = await mainCategory();
      console.log(main);
      setMainList(main);
    };
    getMain();
  }, []);

  //중분류 불러오기
  useEffect(() => {
    //초기화
    setMiddleList([]);
    setMiddle('');
    const getMiddle = async () => {
      const middle = await middleCategory(main);
      console.log(middle);
      setMiddleList(middle);
    };
    if (main !== '') getMiddle();
  }, [main]);

  //소분류 불러오기
  useEffect(() => {
    //초기화
    setSubList([]);
    setSub('');
    const getSub = async () => {
      const sub = await subCategory(middle);
      console.log(sub);
      setSubList(sub);
    };
    if (middle !== '') getSub();
  }, [middle]);

  //선택코드 업데이트
  useEffect(() => {
    if (sub !== '') setCode(sub);
    else if (middle !== '') setCode(middle);
    else if (main !== '') setCode(main);
  }, [main, middle, sub, setCode]);

  return (
    <PanelBlock>
      <Title>광고 지역을 선택하세요.</Title>
      <h2>분류 선택</h2>
      <SelectContainer>
        <Selectbox options={mainList} value={main} handleChange={setMain}>
          대분류
        </Selectbox>
        <Selectbox options={middleList} value={middle} handleChange={setMiddle}>
          중분류
        </Selectbox>
        <Selectbox options={subList} value={sub} handleChange={setSub}>
          소분류
        </Selectbox>
      </SelectContainer>
      <Line />
      <h3>지도에서 원하는 광고 지역을 선택해주세요.</h3>
      <Button active={false}>다음</Button>
    </PanelBlock>
  );
};

export default Panel;
