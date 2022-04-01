import styled from "styled-components";

import amazon from "../../../assets/Sponsors/sponsors2.png";
import shopify from "../../../assets/Sponsors/sponsors3.png";
import paypal from "../../../assets/Sponsors/sponsors4.png";
import slack from "../../../assets/Sponsors/sponsors5.png";

const SectionFour = () => {
  return (
    <Section>
      {/* <Title>Find Us On</Title> */}
      <Wrapper>
        <SponsorWrap>
          <SponsorImg src={amazon} alt="" class="sponsor__img" />
        </SponsorWrap>
        <SponsorWrap>
          <SponsorImg src={shopify} alt="" class="sponsor__img" />
        </SponsorWrap>
        <SponsorWrap>
          <SponsorImg src={paypal} alt="" class="sponsor__img" />
        </SponsorWrap>
        <SponsorWrap>
          <SponsorImg src={slack} alt="" class="sponsor__img" />
        </SponsorWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  /* padding: 7rem 0 2rem; */
  padding: 50px 0;
  /* height: auto; */
  background-color: black;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  justify-items: center;
  row-gap: 3.5rem;
`;

// const Title = styled.h2``;

const SponsorWrap = styled.div``;

const SponsorImg = styled.img`
  width: 90px;
  filter: invert(0.7);
  transition: 0.3s;
`;

export default SectionFour;
