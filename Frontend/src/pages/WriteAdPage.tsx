import styled from 'styled-components';
import palette from '../lib/palette';
import Header from '../components/common/Header';
import Preview from '../components/Write/Preview';
import Edit from '../components/Write/Edit';

const WriteAdPageBlock = styled.div`
  margin-top: 5.2rem;
  height: 100%;
  width: 100%;
`;

const WriteAdPage = () => {
  return (
    <>
      <Header>도움말</Header>
      <WriteAdPageBlock>
        <Preview />
        <Edit />
      </WriteAdPageBlock>
    </>
  );
};
export default WriteAdPage;
