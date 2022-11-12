import styled from 'styled-components';
import { Empty } from './Empty';

const EmptyContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const EmptyBlock = styled(Empty)``;

const EmptyContent = () => {
  return (
    <EmptyContentBlock>
      <EmptyBlock width="100%" />
      <EmptyBlock width="100%" />
      <EmptyBlock width="80%" />
      <EmptyBlock width="0" />
      <EmptyBlock width="100%" />
      <EmptyBlock width="50%" />
      <EmptyBlock width="0" />
      <EmptyBlock width="30%" />
      <EmptyBlock width="50%" />
    </EmptyContentBlock>
  );
};

export default EmptyContent;
