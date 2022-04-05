import styled from "styled-components";
import { useContext, useState } from "react";
import { DataContext } from "../Hooks/useContext";
import { AiFillCloseCircle } from "react-icons/ai";

const CartItem = ({ item, index, removeItem, updateQuantity }) => {
  const { cart, calcItemTotal } = useContext(DataContext);

  const [isShown, setIsShown] = useState(false);

  // creating an array out of a number (for the Quantity dropdowns)
  const numArray = (number) => {
    let numArray = [];
    for (let i = 1; i <= number; i++) {
      numArray.push(i);
    }
    return numArray;
  };
  return (
    <ItemDiv>
      <Image src={item.productInfo.imageSrc} />
      <ProdName>{item.productInfo.name}</ProdName>
      <Line />
      <QuantityBox>
        Quantity :
        <select
          key={"key" + item.productInfo._id}
          defaultValue={item.qnt}
          onChange={(ev) => updateQuantity(ev, item.productInfo.price, index)}
        >
          {numArray(item.productInfo.numInStock).map((number) => (
            <option key={number * item.productInfo._id} value={number}>
              {number}
            </option>
          ))}
        </select>
      </QuantityBox>
      <ItemTotal>
        ${calcItemTotal(item.productInfo.price, cart[index].qnt).toFixed(2)}
      </ItemTotal>
      <RemoveButton
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={(ev) => removeItem(ev, index)}
      >
        {!isShown && <p>Remove</p>}
        {isShown && <AiFillCloseCircle className="icon" />}
      </RemoveButton>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  );

  > * {
    margin: 0 10px;
  }
`;

const Image = styled.img`
  width: 100px;
  border-radius: 5px;
`;

const ProdName = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 400px;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 200px;
  height: 0;
`;

const QuantityBox = styled.div`
  width: 150px;
  > select {
    width: 60px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    margin: 0 5px;
    outline: none;
    margin-left: 10px;
  }

  > select:active {
    transform: scale(0.97);
  }
`;

const ItemTotal = styled.p`
  width: 50px;
  display: flex;
  justify-content: flex-end;
`;

const RemoveButton = styled.button`
  display: flex;
  margin: auto;
  font-size: 25px;
  background: none;
  outline: none;
  border: none;
  color: red;
  cursor: pointer;
  transition: 0.2s;

  > p {
    font-size: 20px;
    padding: 0;
  }

  &:active {
    color: green;
  }
`;

export default CartItem;
