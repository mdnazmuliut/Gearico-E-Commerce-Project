import styled from "styled-components";
import { useContext } from "react";
import { AccountContext } from "../Hooks/AccountContext";
import { DataContext } from "../Hooks/useContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { userInfo } = useContext(AccountContext)
  const { cart } = useContext(DataContext)

  return (
    <>
      <HeaderWrap>
        <Wrapper>
          <Logo to={"/"}>Gearico</Logo>
          <NavMenu>
            <NavList>
              <NavItem>
                <LinkNav to={"/"}>Home</LinkNav>
              </NavItem>
              <NavItem>
                <LinkNav to={"/products"}>Products</LinkNav>
              </NavItem>
              {userInfo ? (
              <NavItem>
                <LinkNav to={"/account"}>Account</LinkNav>
              </NavItem>
              ):(
              <NavItem>
                <LinkNav to={"/signin"}>Sign In</LinkNav>
              </NavItem>
              )}
              <NavItem>
                <LinkNav to={"/cart"}>
                  {/* <BiShoppingBag className="cart" /> Cart */}
                  Cart ({cart.length})
                </LinkNav>
              </NavItem>
            </NavList>
          </NavMenu>
        </Wrapper>
      </HeaderWrap>
      <SpacerDiv />
    </>
  );
};

const SpacerDiv = styled.div`
  height: 80px;
`;

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

const Logo = styled(Link)`
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

const LinkNav = styled(Link)`
  color: white;
  text-transform: initial;
  position: relative;
  text-decoration: none;

  .cart {
    font-size: 20px;
  }
`;

// For Media Queries,
// instead of text, replace by ICONS

export default Header;
