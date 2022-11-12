import { ReactNode } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import { ReactComponent as Right } from '../../assets/images/right.svg';

const ButtonBlock = styled.div<{ active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5.2rem;
  background-color: ${(props) =>
    props.active ? palette.primary3 : palette.inversed3};
  padding: 1.6rem 3.2rem;
  & > span {
    color: white;
    font-family: 'SemiBold';
    font-size: 1.4rem;
    line-height: 2rem;
    vertical-align: top;
    margin-right: 0.4rem;
  }
`;

interface ButtonProps {
  children: ReactNode;
  active: boolean;
}

const Button = ({ children, active }: ButtonProps) => {
  return (
    <ButtonBlock active={active}>
      <span>{children}</span>
      <Right />
    </ButtonBlock>
  );
};

export default Button;
