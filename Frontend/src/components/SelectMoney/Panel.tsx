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
    font-family: 'Medium';
    font-size: 1.2rem;
    color: ${palette.default1};
    margin-bottom: 0.4rem;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 2.4rem;
  & > button {
    padding: 1rem 2.4rem;
    border-radius: 0.6rem;
    font-family: Medium;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${palette.default1};
  }
`;

const Panel = () => {
  return (
    <PanelBlock>
      <Title>광고 기간 또는 예산을 선택하세요.</Title>
      <ButtonContainer>
        <button>예산 선택</button>
        <button>기간 선택</button>
      </ButtonContainer>
      <h2>예산 입력</h2>
      <Button active={false}>다음</Button>
    </PanelBlock>
  );
};

export default Panel;
