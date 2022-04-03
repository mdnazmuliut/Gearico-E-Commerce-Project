import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Entertainment from "../../../assets/Categories/Entertainment.jpg";
import Fitness from "../../../assets/Categories/Fitness.jpg";
import Gaming from "../../../assets/Categories/Gaming.jpg";
import Industrial from "../../../assets/Categories/Industrial.jpg";
import Lifestyle from "../../../assets/Categories/Lifestyle.jpg";
import Medical from "../../../assets/Categories/Medical.jpg";
import PetsAnimals from "../../../assets/Categories/PetsAnimals.jpg";
import { DataContext } from "../../Hooks/useContext";

const SectionTwo = () => {
  const { data } = useContext(DataContext);

  const history = useHistory();

  const categoryHandler = (cat) => {
    history.push(`/api/get-items/cat/${cat}`);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Title>Categories</Title>
      <Wrapper>
        <CategoryWrap>
          <CategImg src={Entertainment} />
          <CategContent onClick={() => categoryHandler(data[5].category)}>
            <CategTitle>Entertainment</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Fitness} />
          <CategContent onClick={() => categoryHandler(data[0].category)}>
            <CategTitle>Fitness</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Gaming} />
          <CategContent onClick={() => categoryHandler(data[341].category)}>
            <CategTitle>Gaming</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Industrial} />
          <CategContent onClick={() => categoryHandler(data[58].category)}>
            <CategTitle>Industrial</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Lifestyle} />
          <CategContent onClick={() => categoryHandler(data[3].category)}>
            <CategTitle>Lifestyle</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={Medical} />
          <CategContent onClick={() => categoryHandler(data[2].category)}>
            <CategTitle>Medical</CategTitle>
          </CategContent>
        </CategoryWrap>
        <CategoryWrap>
          <CategImg src={PetsAnimals} />
          <CategContent onClick={() => categoryHandler(data[142].category)}>
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
  background-color: #050503;
  display: grid;
  font-family: "Raleway", sans-serif;
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
  border-radius: 15px;
`;

const CategImg = styled.img`
  border-radius: 15px;
  max-width: 205px;
  width: 205px;
  object-fit: cover;
  height: 248px;
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
  border-radius: 15px;
  cursor: pointer;
`;

const CategTitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 0.25rem;
  letter-spacing: 3px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 15px;
`;

export default SectionTwo;