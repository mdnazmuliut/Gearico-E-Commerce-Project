import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = ({ setSidebarToggle }) => {
  
  return (
    <Wrapper>
      <NavBar>
        <Title onClick={() => setSidebarToggle(false)}>CATEGORIES</Title>
        <List>
          <li><CatLink to={"/products/Entertainment"}>Entertainment</CatLink></li>
          <li><CatLink to={"/products/Fitness"}>Fitness</CatLink></li>
          <li><CatLink to={"/products/Gaming"}>Gaming</CatLink></li>
          <li><CatLink to={"/products/Industrial"}>Industrial</CatLink></li>
          <li><CatLink to={"/products/Lifestyle"}>Lifestyle</CatLink></li>
          <li><CatLink to={"/products/Medical"}>Medical</CatLink></li>
          <li><CatLink to={"/products/Pets and Animals"}>Pets and Animals</CatLink></li>
        </List>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.button`
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: #000;
  background: none;
  cursor: pointer;
`;

const List = styled.ul`
  font-size: 25px;
  > li {
    margin: 25px 0;
  }
`;

const CatLink = styled(Link)`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 15px;
`;

export default Sidebar;
