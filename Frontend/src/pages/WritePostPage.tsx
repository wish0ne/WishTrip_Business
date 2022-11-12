import styled from 'styled-components';
import Header from '../components/common/Header';
import Preview from '../components/Write/Preview';
import PostEdit from '../components/Write/PostEdit';

const WritePostPageBlock = styled.div`
  padding-top: 5.2rem;
  height: 100%;
  width: 100%;
  display: flex;
`;

const WritePostPage = () => {
  return (
    <>
      <Header>도움말</Header>
      <WritePostPageBlock>
        <Preview />
        <PostEdit />
      </WritePostPageBlock>
    </>
  );
};
export default WritePostPage;
