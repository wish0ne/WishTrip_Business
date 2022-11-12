import styled from 'styled-components';
import palette from '../../lib/palette';

export const Empty = styled.div<EmptyContentProps>`
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '1rem')};
  background-color: ${palette.inversed2};
  border-radius: 0.4rem;
  opacity: 0.5;
`;

interface EmptyContentProps {
  width: string;
  height?: string;
}
