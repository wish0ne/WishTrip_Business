import styled from 'styled-components';
import palette from '../../lib/palette';
import Title from '../common/Title';
import Button from '../common/Button';
import Input from './Input';
import { editTitle } from '../../recoil/atom';
import { useRecoilState } from 'recoil';

const EditBlock = styled.div`
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

const TitleEdit = () => {
  const [title, setTitle] = useRecoilState(editTitle);
  return (
    <EditBlock>
      <Title>광고 정보를 입력하세요</Title>
      <h2>광고명</h2>
      <Input text={title} setText={setTitle} />
      <Button active={title !== ''}>다음</Button>
    </EditBlock>
  );
};

export default TitleEdit;
