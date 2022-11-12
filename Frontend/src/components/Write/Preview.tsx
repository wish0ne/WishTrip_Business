import styled from 'styled-components';
import palette from '../../lib/palette';
import Model from './Model';

const PreviewBlock = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${palette.inversed1};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Preview = () => {
  return (
    <PreviewBlock>
      <Model />
    </PreviewBlock>
  );
};

export default Preview;
