import styled from 'styled-components';
import palette from '../../lib/palette';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 2.4rem;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 0.4rem 0.8rem rgba(58, 58, 58, 0.1);
  justify-content: space-between;
  box-sizing: border-box;
`;

const HeaderTitle = styled.span`
  font-family: 'SemiBold';
  font-size: 1.4rem;
  color: ${palette.default1};
  margin-left: 0.4rem;
  line-height: 2rem;
`;

const Button = styled.button`
  padding: 1.2rem;
  background-color: ${palette.primary3};
  border-radius: 0.6rem;
  font-family: 'Medium';
  font-size: 1.3rem;
  color: white;
  border: none;
`;

const User = styled.span`
  font-family: 'Medium';
  font-size: 1.3rem;
  color: black;
  line-height: 2rem;
  margin-right: 1.6rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface HeaderPropsType {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderPropsType) => {
  return (
    <StyledHeader>
      <Container>
        <Logo width="7.2rem" height="2rem" />
        <HeaderTitle>비즈니스 관리자</HeaderTitle>
      </Container>
      <Container>
        <User>홍길동 님</User>
        <Button>로그인</Button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
