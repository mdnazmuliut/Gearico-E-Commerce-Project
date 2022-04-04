import styled from "styled-components";

const PageSelect = ({ currentPage, setCurrentPage, numProducts }) => {
  // disabling the back button if on the first page of results
  const backDisable = currentPage === 1 ? true : false;
  // disabling the next button if on the last page of results
  const nextDisable = numProducts < 10 ? true : false;

  return (
    <Wrapper
      onClick={(ev) =>
        (ev.target.value === "-1" || ev.target.value === "1") &&
        setCurrentPage(currentPage + Number(ev.target.value))
      }
    >
      <ButtonBack value={-1} disabled={backDisable}>
        BACK
      </ButtonBack>
      <CurrentPageDiv>{currentPage}</CurrentPageDiv>
      <ButtonNext value={1} disabled={nextDisable}>
        NEXT
      </ButtonNext>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
  border: 3px solid white;
  padding: 20px;
`;

const ButtonBack = styled.button`
  font-size: 14px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  background: none;
  border: none;
  visibility: ${({ disabled }) => (disabled ? "hidden" : "visible")};
`;

const ButtonNext = styled.button`
  font-size: 14px;
  font-weight: 700;
  margin: 0 20px;
  cursor: pointer;
  background: none;
  border: none;
  visibility: ${({ disabled }) => (disabled ? "hidden" : "visible")};
`;

const CurrentPageDiv = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export default PageSelect;