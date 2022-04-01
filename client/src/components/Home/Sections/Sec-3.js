import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../Hooks/useContext";

const SectionThree = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <p>Loading...</p>;
  }
  const tenFeaturedItems = data.slice(0, 10);
  console.log(tenFeaturedItems);

  return (
    <Section>
      <Title>Featured Products</Title>
      <Wrapper>
        <FeaturedProductsWrap>
          {tenFeaturedItems.map((item) => {
            return (
              <>
                <ProductImg src={item.imageSrc} />
                <ProductInfo>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductInfo>
              </>
            );
          })}
        </FeaturedProductsWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 7rem 0 2rem;
  height: 100vh;
  width: 100vw;
  background-color: #18192f;
  display: grid;
  overflow: hidden;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  color: white;
  grid-template-columns: repeat(4, max-content);
  max-width: 1024px;
  gap: 3rem 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
`;

const FeaturedProductsWrap = styled.div`
  height: 263px;
  position: relative;
`;

const ProductImg = styled.img`
  max-width: 263px;
  width: 150px;
`;

const ProductInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.75rem 0.75rem 1rem;
`;

const ProductName = styled.p``;

const ProductPrice = styled.span``;

export default SectionThree;
