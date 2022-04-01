import styled from "styled-components";
import { useEffect } from "react";

const Header = () => {
  return (
    <HeaderWrap>
      <Wrapper>
        <Logo href="/">Gearico</Logo>
        <NavMenu>
          <NavList>
            <NavItem>
              <LinkNav href="/">Home</LinkNav>
            </NavItem>
            <NavItem>
              <LinkNav href="/products">Products</LinkNav>
            </NavItem>
            <NavItem>
              <LinkNav href="/">Contact</LinkNav>
            </NavItem>
            <NavItem>
              <LinkNav href="/">Cart</LinkNav>
            </NavItem>
          </NavList>
        </NavMenu>
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
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Open Sans", sans-serif;
`;

const Wrapper = styled.nav`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-weight: 600;
  font-size: 30px;
  color: white;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  column-gap: 1rem;
  position: relative;
`;

const NavList = styled.ul`
  flex-direction: row;
  column-gap: 4rem;
  display: flex;
  row-gap: 2.5rem;
  list-style: none;
`;

const NavItem = styled.li``;

const LinkNav = styled.a`
  color: white;
  text-transform: initial;
  position: relative;
  text-decoration: none;
`;

export default Header;
