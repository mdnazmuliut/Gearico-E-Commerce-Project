import styled from "styled-components";

const Sidebar = ({ setCatSelection, setSidebarToggle, setCurrentPage }) => {
  
  const handleClick = (ev) => {
    if (ev.target.value) {
      setCatSelection(ev.target.value);
      setCurrentPage(1);
    }
  }
  
  return (
    <Wrapper>
      <NavBar>
        <Title onClick={() => setSidebarToggle(false)}>CATEGORIES</Title>
        <List onClick={(ev) => handleClick(ev)}>
          <li><Button value={"Entertainment"}>Entertainment</Button></li>
          <li><Button value={"Fitness"}>Fitness</Button></li>
          <li><Button value={"Gaming"}>Gaming</Button></li>
          <li><Button value={"Industrial"}>Industrial</Button></li>
          <li><Button value={"Lifestyle"}>Lifestyle</Button></li>
          <li><Button value={"Medical"}>Medical</Button></li>
          <li><Button value={"Pets and Animals"}>Pets and Animals</Button></li>
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
