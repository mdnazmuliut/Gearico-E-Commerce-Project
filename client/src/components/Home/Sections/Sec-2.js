import { useContext } from "react";
import styled from "styled-components";
import Entertainment from "../../../assets/Categories/Entertainment.jpg";
import { DataContext } from "../../Hooks/useContext";

const SectionTwo = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Title>Categories</Title>
      <Wrapper>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Entertainment</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Fitness</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Gaming</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Industrial</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Lifestyle</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Medical</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent>
            <CategTitle>Pets and Animals</CategTitle>
          </CategContent>
        </CategoryWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 7rem 0 2rem;
  height: auto;
  width: 100vw;
  background-color: grey;
  display: grid;
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

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const CategoryWrap = styled.div`
  height: 263px;
  position: relative;
`;

const CategImg = styled.img`
  max-width: 263px;
  width: 150px;
`;

const CategContent = styled.div`
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

const CategTitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 0.25rem;
`;

export default SectionTwo;
