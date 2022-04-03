import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Hooks/useContext";

const DemoProduct = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <p></p>;
  }

  return (
    <Section>
      <Wrapper>
        <FeaturedProductsWrap>
          <ProductImg src={data[0].imageSrc} />
          <ProductInfo>BARSKA</ProductInfo>
        </FeaturedProductsWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  background: #1f1a25;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 100vh;
`;

const Wrapper = styled.div``;

const FeaturedProductsWrap = styled.div``;

const ProductImg = styled.img``;

const ProductInfo = styled.h1``;

export default DemoProduct;
