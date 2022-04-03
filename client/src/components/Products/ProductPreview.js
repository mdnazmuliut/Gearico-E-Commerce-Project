import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductPreview = ({ productInfo }) => {
  return (
    <Wrapper to={`/products/id/${productInfo._id}`}>
      <ImageWrapper>
        <Img src={productInfo.imageSrc} />
        <Text>
          <span>{productInfo.name}</span>
          <span>{productInfo.price}</span>
        </Text>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  width: 250px;
  height: 250px;
  margin: 50px;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
`;

const Img = styled.img``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  justify-content: center;
  text-align: center;
  align-items: center;
  > span {
    margin: 5px;
  }
`;

export default ProductPreview;
