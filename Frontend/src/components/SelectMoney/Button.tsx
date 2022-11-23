import { ReactNode } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

const SelectBtn = styled.button<{ selected: boolean }>`
  padding: 1rem 2.4rem;
  border-radius: 0.6rem;
  font-family: Medium;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: ${(props) =>
    props.selected ? palette.primary3 : palette.inversed2};
  color: ${(props) => (props.selected ? 'white' : palette.default1)};
  margin-right: 0.8rem;
`;

interface ButtonProps {
  selected: boolean;
  handleClick: () => void;
  children: ReactNode;
}

const SmallButton = ({ selected, handleClick, children }: ButtonProps) => {
  return (
    <SelectBtn selected={selected} onClick={() => handleClick()}>
      {children}
    </SelectBtn>
  );
};

export default SmallButton;
