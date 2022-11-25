import { ReactNode } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import { ReactComponent as Down } from '../../assets/images/menu-down.svg';

const Select = styled.select`
  font-family: 'Medium';
  font-size: 1.3rem;
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${palette.inversed1};
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
`;

const SelectWrap = styled.div`
  width: 16rem;
  padding: 0.8rem 3.2rem 0.8rem 1.6rem;
  background-color: ${palette.inversed1};
  border-radius: 1.2rem;
  position: relative;
  & > svg {
    position: absolute;
    right: 1.6rem;
  }
`;

interface SelectboxProps {
  children: ReactNode;
  options: { code: string; name: string }[];
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const Selectbox = ({
  children,
  options,
  value,
  handleChange,
}: SelectboxProps) => {
  return (
    <SelectWrap>
      <Down width="1.6rem" height="1.6rem" />
      <Select value={value} onChange={(e) => handleChange(e.target.value)}>
        <option value="" disabled>
          {children}
        </option>
        {options.length > 0 &&
          options.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
      </Select>
    </SelectWrap>
  );
};

export default Selectbox;
