import styled from 'styled-components';
import Header from '../components/common/Header';
import Preview from '../components/Write/Preview';
import TitleEdit from '../components/Write/TitleEdit';

const WriteTitlePageBlock = styled.div`
  padding-top: 5.2rem;
  height: 100%;
  width: 100%;
  display: flex;
`;

const WriteTitlePage = () => {
  return (
    <>
      <Header>도움말</Header>
      <WriteTitlePageBlock>
        <Preview />
        <TitleEdit />
      </WriteTitlePageBlock>
    </>
  );
};
export default WriteTitlePage;
