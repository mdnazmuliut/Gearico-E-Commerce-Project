import styled from "styled-components";

import truck from "../../assets/truck.gif";
import modalbg from "../../assets/ModalBg.jpg";
import { useContext } from "react";
import { DataContext } from "../Hooks/useContext";
import { useHistory } from "react-router-dom";

const Confirmation = ({ subStatus, setSubStatus }) => {
  const { total, setCart } = useContext(DataContext);
  const history = useHistory();

  let message = "";

  if (subStatus === "pending") message = "Please wait...";
  if (subStatus === "confirmed")
    message = "Order placed! Thank you for shopping with us.";
  if (subStatus === "error")
    message =
      "There was an error with your order, please go back and try again.";

  if (subStatus !== "idle")
    return (
      <PageWrapper
        onClick={() => {
          history.push("/")          
          setCart([]);
        }}
      >
        <ContentWrapper onClick={(ev) => ev.stopPropagation()}>
          <Title>Gearico</Title>
          <Message>{message}</Message>
          <TruckGif>
            <Img src={truck} />
          </TruckGif>
          <Button disabled>Track Your Order</Button>
          <TrackOrder>Please allow 24 hours to track your order.</TrackOrder>

          <OrderWrapper>
            <OrderSummary>
              <Header>Order Summary</Header>
              <SmallTxt>
                <strong> Subtotal:</strong> ${total.toFixed(2)}
              </SmallTxt>
              <SmallTxt>
                <strong> Taxes:</strong> ${(total * 0.15).toFixed(2)}
              </SmallTxt>
              <Divider />
              <SmallTxt>
                <strong> Total:</strong> ${(total * 1.15).toFixed(2)}
              </SmallTxt>
            </OrderSummary>
          </OrderWrapper>
        </ContentWrapper>
      </PageWrapper>
    );

  return null;
};

const PageWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 800px;
  height: 600px;
  background-color: lightgray;
  /* background-image: url(${modalbg}); */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  color: black;
  margin: 30px 0;
`;

const TruckGif = styled.div`
  margin: 30px 0;
`;

const Img = styled.img`
  width: 250px;
  border-radius: 5px;
`;

const Message = styled.h3`
  color: #424242;
`;

const Button = styled.button`
  background-color: #0e86f8;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const TrackOrder = styled.p`
  content: "Please allow 24 hours to track your order.";
  color: black;
  font-size: large;
  margin-bottom: 10px;
`;

const OrderWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const OrderSummary = styled.div`
  border: 1px solid black;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  width: 200px;
  /* margin: auto; */
  margin-left: auto;
`;

const Header = styled.div`
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
`;
const SmallTxt = styled.div`
  padding-top: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 90%;
  height: 1px;
  margin: 7px auto;
  background-color: black;
`;

export default Confirmation;