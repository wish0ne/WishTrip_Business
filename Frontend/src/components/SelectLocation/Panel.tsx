import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';

const PanelBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 8rem 3.2rem;
  position: relative;
  & > h2 {
    font-family: 'Regular';
    font-size: 1.2rem;
    color: ${palette.default1};
    margin-bottom: 0.4rem;
  }
`;

const Panel = () => {
  return (
    <PanelBlock>
      <Title>광고 지역을 선택하세요.</Title>
      <h2>분류 선택</h2>
      <h2>광고 지역</h2>
      <h2>광고 반경 선택</h2>
      <Button active={false}>다음</Button>
    </PanelBlock>
  );
};

export default Panel;
