import styled from "styled-components";

const Sidebar = ({ setCatSelection, setSidebarToggle }) => {
  return (
    <Wrapper>
      <NavBar>
        <Title onClick={() => setSidebarToggle(false)}>CATEGORIES</Title>
        <List onClick={(ev) => ev.target.value && setCatSelection(ev.target.value)}>
          <li><Button value={"entertainment"}>Entertainment</Button></li>
          <li><Button value={"fitness"}>Fitness</Button></li>
          <li><Button value={"gaming"}>Gaming</Button></li>
          <li><Button value={"industrial"}>Industrial</Button></li>
          <li><Button value={"lifestyle"}>Lifestyle</Button></li>
          <li><Button value={"medical"}>Medical</Button></li>
          <li><Button value={"pets and animals"}>Pets and Animals</Button></li>
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

const Button = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 15px;
`;

export default Sidebar;
