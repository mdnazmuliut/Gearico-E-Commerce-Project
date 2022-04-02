import { useContext } from "react";
import { DataContext } from "../Hooks/useContext";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  console.log("cart length", cart.length);
  return (
    <>
      {cart.length > 0 &&
        cart.map((item) => {
          console.log(item.productInfo.name);
          return (
            <div>
              <h4>{item.productInfo.name}</h4>
              <h6>{item.qnt}</h6>
            </div>
          );
        })}
    </>
  );
};

export default Cart;
