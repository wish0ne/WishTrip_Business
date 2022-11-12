import styled from 'styled-components';
import palette from '../../lib/palette';

const InfoBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${palette.inversed1};
  & > img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
    border-radius: 0.4rem;
  }
`;

const Container = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: 1.2rem;
  & > span {
    font-family: 'Medium';
    font-size: 1.2rem;
    color: ${palette.default1};
    white-space: pre;
  }
  & > span:first-child {
    color: ${(props) =>
      props.status === 'on' ? palette.secondary3 : palette.inversed3};
  }
  & > h2 {
    font-family: 'Medium';
    font-size: 1.4rem;
    color: ${palette.default3};
  }
`;

interface InfoProps {
  image: string;
  title: string;
  status: string;
  location: string;
  radius: number;
}

const Info = ({ image, title, status, location, radius }: InfoProps) => {
  return (
    <InfoBlock>
      <img src={image} alt="info" />
      <Container status={status}>
        <span>{`● ${status === 'on' ? '집행중' : '중단됨'}`}</span>
        <h2>{title}</h2>
        <span>{`${location}\n반경 ${
          radius < 1000 ? radius + 'm' : radius / 1000 + 'km'
        }`}</span>
      </Container>
    </InfoBlock>
  );
};

export default Info;
