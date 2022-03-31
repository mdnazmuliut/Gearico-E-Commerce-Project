import { useEffect, useState } from "react";
import styled from "styled-components";
import watches from "../../../assets/watches.png";

const SectionOne = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0]);
        setData(data.data);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <Top />
      <Bottom />
      <ImageWrap>
        <Image src={watches} />
        {/* <Image src={data[0].imageSrc} /> */}
      </ImageWrap>
      <ProductWrap>
        <ProductName>Product Name</ProductName>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          iusto quae soluta debitis atque minima ex, quod reprehenderit
          voluptatum praesentium placeat necessitatibus autem molestias pariatur
          facere delectus, veniam suscipit. Rem.
        </ProductDescription>
        <Button>Buy Now</Button>
      </ProductWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-direction: column;
  overflow: hidden;
`;

const Top = styled.div`
  height: 65vh;
  width: 100vw;
  /* background: radial-gradient(circle, rgb(255, 210, 10), rgb(30, 30, 30)); */
  background: radial-gradient(
    circle closest-corner at center 125px,
    #222,
    black 60%
  );
`;

const Bottom = styled.div`
  max-height: 40vh;
  max-width: 100vw;
  height: 40vh;
  width: 100vw;
  /* background: radial-gradient(circle, rgb(255, 214, 10), rgb(50, 15, 15)); */
  background: radial-gradient(
    circle closest-corner at center 125px,
    #222,
    black 45%
  );
`;

const ImageWrap = styled.div`
  position: absolute;
  top: 25%;
`;

const Image = styled.img`
  -webkit-box-reflect: below 45px
    linear-gradient(transparent, rgba(255, 255, 255, 0.8));
`;

const ProductWrap = styled.div`
  position: absolute;
  left: 100px;
  word-wrap: normal;
  color: white;
  max-width: 500px;
  width: 500px;
  text-align: justify;
`;

const ProductName = styled.h2`
  margin: 10px 0;
  text-align: start;
`;

const ProductDescription = styled.p`
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    #e4e5e6,
    #00416a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 5px 15px;
  color: black;
  cursor: pointer;
`;

export default SectionOne;
