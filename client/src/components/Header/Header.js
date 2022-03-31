import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrap>
      <Wrapper>
        <Logo>Gearico</Logo>
        <Text>Home</Text>
        <Text>Categories</Text>
        <Text>Products</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </Wrapper>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  background-color: black;
  color: white;
  height: 80px;
  width: 100%;
  max-height: 500px;
  z-index: 100;
`;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
`;

const Logo = styled.h3`
  cursor: pointer;
`;

const Text = styled.span`
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
