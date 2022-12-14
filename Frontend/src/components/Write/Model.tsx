import styled from 'styled-components';
import palette from '../../lib/palette';
import EmptyContent from './EmptyContent';
import cafe from '../../assets/images/cafe.jpg';
import { ReactComponent as Heart } from '../../assets/images/regular-heart.svg';
import Comment from './Comment';
import { editContent, editImage } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';

const ModelBlock = styled.div`
  width: 28rem;
  height: 90%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 0.8rem 1rem rgba(58, 58, 58, 0.1);
`;

const ImageBlock = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 1rem 1rem 0 0;
  background-color: ${palette.inversed2};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

const BodyBlock = styled.div`
  padding: 1.5rem 1.8rem;
  background-color: white;
`;

const Writer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const WriterInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h1 {
    font-family: 'SemiBold';
    font-size: 1rem;
    color: ${palette.default2};
  }
  & > h2 {
    font-family: 'Medium';
    font-size: 0.9rem;
    color: ${palette.default1};
  }
`;

const WriterIcon = styled.img`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 3rem;
  margin-right: 0.7rem;
`;

const ContentBlock = styled.div`
  font-family: 'Medium';
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${palette.default2};
  white-space: pre;
`;

const Content = () => {
  const content = useRecoilValue(editContent);
  return <ContentBlock>{content}</ContentBlock>;
};

const Model = () => {
  const image = useRecoilValue(editImage);
  const content = useRecoilValue(editContent);
  return (
    <ModelBlock>
      <ImageBlock>{image !== '' && <Image src={image} />}</ImageBlock>
      <BodyBlock>
        <Writer>
          <WriterIcon src={cafe} />
          <WriterInfo>
            <h1>?????????</h1>
            <h2>??????</h2>
          </WriterInfo>
          <Heart width="2.4rem" height="2.4rem" />
        </Writer>
        {content === '' ? <EmptyContent /> : <Content />}
        <Comment />
      </BodyBlock>
    </ModelBlock>
  );
};

export default Model;
