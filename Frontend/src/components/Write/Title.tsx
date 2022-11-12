import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/palette';
import { ReactComponent as Left } from '../../assets/images/left.svg';

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
  & > h1 {
    font-family: 'SemiBold';
    font-size: 2.4rem;
    color: ${palette.default3};
  }
`;

const Back = styled.button`
  display: flex;
  align-items: center;
  background: white;
  & > span {
    font-family: 'Medium';
    font-size: 1.3rem;
    line-height: 2rem;
    color: ${palette.default1};
  }
`;

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <TitleBlock>
      <h1>{children}</h1>
      <Back onClick={() => navigate(-1)}>
        <Left width="2rem" height="2rem" />
        <span>이전 페이지</span>
      </Back>
    </TitleBlock>
  );
};

export default Title;
