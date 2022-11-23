import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import SmallButton from './Button';

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
  & > h6{
    font-family:Medium;
    font-size:1.4rem;
    line-height:2rem;
    color${palette.default2};
  }
`;
const Text = styled.div`
  font-family: Medium;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${palette.primary3};
`;

const Bold = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${palette.primary3};
  font-family: SemiBold;
`;

const Container = styled.div`
  padding: 1.6rem;
  border-radius: 1.2rem;
  background-color: ${palette.inversed1};
  width: 14rem;
  display: flex;
  font-family: Medium;
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${palette.default2};
`;

const Margin = styled.div`
  margin-bottom: 2.4rem;
`;

const PayPanel = () => {
  return (
    <PanelBlock>
      <Title>결제를 완료하면 광고가 시작됩니다.</Title>
      <h2>결제 수단</h2>
      <SmallButton selected={false} handleClick={() => {}}>
        신용카드
      </SmallButton>
      <SmallButton selected={false} handleClick={() => {}}>
        무통장입금
      </SmallButton>
      <Container></Container>
      <Text>총 결제 금액</Text>
      <Bold>300,000원</Bold>
      <Margin />
      <h6>결제 내용을 확인하였으며, 정보 제공 등에 동의합니다.</h6>
      <Margin />
      <SmallButton selected={true} handleClick={() => {}}>
        결제하기
      </SmallButton>
      <Button active={false}>광고 시작하기</Button>
    </PanelBlock>
  );
};

export default PayPanel;
