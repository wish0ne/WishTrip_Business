import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Landing from '../assets/images/landing.jpg';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Cover = styled.div`
  background-color: rgba(54, 81, 106, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0rem;
  left: 10%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'SemiBold';
  color: white;
  font-size: 3.2rem;
  line-height: 4.2rem;
  white-space: pre;
`;
const StartButton = styled.button`
  background-color: ${palette.primary3};
  border-radius: 0.6rem;
  font-family: 'Medium';
  color: white;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 1rem 2.4rem;
  margin-top: 2.4rem;
  width: fit-content;
`;

const LandingPage = () => {
  return (
    <>
      <Header />
      <Background>
        <Image src={Landing} />
        <Cover />
        <Content>
          <Title>{`모든 여행객들에게\n내 비즈니스를 소개하세요.`}</Title>
          <StartButton>시작하기</StartButton>
        </Content>
      </Background>
    </>
  );
};
export default LandingPage;
