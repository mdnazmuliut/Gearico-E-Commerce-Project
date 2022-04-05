import styled from "styled-components";

const Demo = () => {
  return (
    <Card class="card">
      <ImgWrap class="photo">
        <Img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" />
      </ImgWrap>
      <Description class="description">
        <Title>Classic Peace Lily</Title>
        <Company>Popular House Plant</Company>
        <Price>$18</Price>
        <ProdDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aut?
          Quos eaque fugit fuga, aperiam quod mollitia officia reiciendis
          voluptates molestiae architecto doloremque repellat tempora
          exercitationem alias laborum eum. Eaque!
        </ProdDescription>
        <Button>Add to Cart</Button>
        <Button>Wishlist</Button>
      </Description>
    </Card>
  );
};

const Card = styled.div`
  width: 650px;
  position: fixed;
  background: white;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ImgWrap = styled.div`
  padding: 30px;
  width: 45%;
  text-align: center;
  float: left;
`;

const Img = styled.img`
  max-height: 240px;
`;

const Description = styled.div`
  padding: 30px;
  float: left;
  width: 55%;
  border-left: 2px solid #efefef;
`;

const Title = styled.p`
  color: #515151;
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10px;
`;

const Company = styled.p`
  margin: 0;
  color: #727272;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
`;

const Price = styled.p`
  color: #515151;
  font-weight: 300;
  padding-top: 15px;
  margin: 0;
  font-size: 30px;
  font-weight: 300;
`;

const ProdDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #727272;
  padding: 20px 0;
  margin: 0;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background: none;
  border: 1px solid #d9d9d9;
  padding: 8px 0px;
  color: #515151;
  text-transform: uppercase;
  width: 125px;
  font-family: inherit;
  margin-right: 5px;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    // background: darken(white, 2%);
    border: 1px solid #aedaa6;
    color: #aedaa6;
    cursor: pointer;
  }
`;

export default Demo;
