import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../Hooks/useContext";

const CartItem = ({item, index, removeItem, updateQuantity}) => {
    const { cart, calcItemTotal } = useContext(DataContext);
    
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
            Quantity:
            <select
              key={"key" + item.productInfo._id}
              defaultValue={item.qnt}
              onChange={(ev) => updateQuantity(ev, item.productInfo.price, index)}
            >
              {numArray(item.productInfo.numInStock).map((number) => (
                <option key={number*item.productInfo._id} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </QuantityBox>
          <ItemTotal>
            ${calcItemTotal(item.productInfo.price, cart[index].qnt).toFixed(2)}
          </ItemTotal>
          <RemoveButton onClick={(ev) => removeItem(ev, index)}>
            x
          </RemoveButton>
        </ItemDiv>
      );
};

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
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
    width: 40px;
    margin: 0 5px;
  }
`;

const ItemTotal = styled.p`
  width: 50px;
  display: flex;
  justify-content: flex-end;
`;

const RemoveButton = styled.button`
  font-size: 18px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

export default CartItem;