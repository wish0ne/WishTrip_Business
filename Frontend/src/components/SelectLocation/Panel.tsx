import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import Selectbox from './Selectbox';

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

const bigOptions = [''];

const Panel = () => {
  return (
    <PanelBlock>
      <Title>광고 지역을 선택하세요.</Title>
      <h2>분류 선택</h2>
      <SelectContainer>
        <Selectbox options={bigOptions}>대분류</Selectbox>
        <Selectbox>중분류</Selectbox>
        <Selectbox>소분류</Selectbox>
      </SelectContainer>
      <Line />
      <h3>지도에서 원하는 광고 지역을 선택해주세요.</h3>
      <Button active={false}>다음</Button>
    </PanelBlock>
  );
};

export default Panel;
