import styled from "styled-components";

const SectionFive = () => {
  return (
    <Footer>
      <Wrapper>
        <Credits> © 2022 NAN Media. All Rights Reserved.</Credits>
      </Wrapper>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: lightgray;
  height: 70px;
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const Credits = styled.p`
  text-align: center;
  margin: auto;
`;

export default SectionFive;
