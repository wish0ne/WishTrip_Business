import styled from 'styled-components';
import palette from '../../lib/palette';

const StyledInput = styled.input`
  width: 100%;
  background-color: ${palette.inversed1};
  height: 4.8rem;
  padding: 1.6rem;
  font-family: 'Medium';
  font-size: 1.4rem;
  color: ${palette.default3};
`;

interface InputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ text, setText }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return <StyledInput type="text" value={text} onChange={handleChange} />;
};

export default Input;
