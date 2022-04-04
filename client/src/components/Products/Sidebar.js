import styled from "styled-components";
import { Link } from "react-router-dom";

import listbg from "../../assets/ListBg.gif";

const Sidebar = ({ setSidebarToggle }) => {
  return (
    <Wrapper>
      <NavBar>
        <Title onClick={() => setSidebarToggle(false)}>CATEGORIES</Title>
        <List>
          <li>
            <CatLink to={"/products/Gaming"}>Gaming</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Fitness"}>Fitness</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Medical"}>Medical</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Lifestyle"}>Lifestyle</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Industrial"}>Industrial</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Entertainment"}>Entertainment</CatLink>
          </li>
          <li>
            <CatLink to={"/products/Pets and Animals"}>
              Pets and Animals
            </CatLink>
          </li>
        </List>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  color: white;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  top: 200px;
  width: 210px;
`;

const Title = styled.button`
  font-size: 20px;
  font-weight: 700;
  border: none;
  background: none;
  cursor: pointer;
`;

const List = styled.ul`
  font-size: 35px;
  font-weight: 600;

  > li {
    width: 180px;
    height: 50px;
    margin: 25px 0;
    transition: all 0.3s;
    border-radius: 20px;
  }

  > li:hover {
    color: white;
    background-image: url(${listbg});
  }
`;

const CatLink = styled(Link)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  transition: 0.3s;
  padding: 27px;
`;

export default Sidebar;
