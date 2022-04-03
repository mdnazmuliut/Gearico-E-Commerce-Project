import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../../Hooks/useContext";
import spons from "../../../assets/Sponsors/sponsors1.png";

const Demo = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <p></p>;
  }

  return (
    <Body>
      <Container>
        <Wrapper>
          <ImgWrap>
            <ProductImg src={spons} />
          </ImgWrap>

          <InfoWrap>
            <ProductName>Barska Force</ProductName>
            <Button>Buy Now</Button>
          </InfoWrap>
        </Wrapper>
      </Container>
    </Body>
  );
};

const Body = styled.body`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #131313;
`;

const Container = styled.div`
  margin: 0 50px;
  position: relative;
  min-width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1bbfe9;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover::before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: "NAN";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }

  /* &:hover {
    top: 0%;
    transform: translateY(-25%);
  } */

  /* &:hover {
    height: 210px;
  } */
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

const ProductImg = styled.img`
  position: absolute;
  top: 50%;
  /* left: 50%; */
  /* transform: translate(-50%, -50%) rotate(20deg); */
  width: 270px;
`;

const InfoWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 90;
`;

const ProductName = styled.h2`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
`;

const Button = styled.a``;

export default Demo;
