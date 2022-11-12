import styled from 'styled-components';
import palette from '../../lib/palette';
import { Empty } from './Empty';

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const EmptyBlock = styled(Empty)`
  width: 0;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  gap: 0.9rem;
  width: 100%;
`;

const Icon = styled.div<{ size: string }>`
  background-color: ${palette.inversed2};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 3rem;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.4rem;
`;

const Comment = () => {
  return (
    <CommentBlock>
      <Container>
        <Icon size="2.4rem" />
        <EmptyBlock width="100%" height="3rem" />
      </Container>
      <Container>
        <Icon size="1.8rem" />
        <EmptyContainer>
          <Empty width="30%" />
          <Empty width="100%" />
        </EmptyContainer>
      </Container>
      <Container>
        <Icon size="1.8rem" />
        <EmptyContainer>
          <Empty width="30%" />
          <Empty width="100%" />
        </EmptyContainer>
      </Container>
    </CommentBlock>
  );
};

export default Comment;
