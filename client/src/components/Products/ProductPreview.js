import styled from "styled-components";

import bg from "../../assets/ProductBg.png";

const ProductPreview = ({ productInfo, setModal }) => {
  return (
    <Body>
      <Container onClick={()=> setModal(productInfo._id)}>
        <Wrapper>
          <ImgWrap>
            <ProductImg src={productInfo.imageSrc} />
          </ImgWrap>

          <InfoWrap>
            <ProductName>{productInfo.name}</ProductName>
            <Button>{productInfo.price}</Button>
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
  max-width: 300px;
  margin: auto 20px;
  margin-top: 60px;
`;

const Container = styled.button`
  border: none;
  margin: 0 50px;
  position: relative;
  min-width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
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
    background-color: #74ebd5;
    background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover::before {
    clip-path: circle(500px at 100%);
  }

  &:after {
    content: "GEARICO";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 8em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

const ProductImg = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  top: 20%;
  left: 20%;
  border-radius: 10px;
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

const ProductName = styled.p`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.p`
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export default ProductPreview;