import styled from "styled-components";
import { useContext } from "react";
import { AccountContext } from "../Hooks/AccountContext";
import OrderItem from "./OrderItem";

const AccountPage = () => {
  const { userOrders, userInfo } = useContext(AccountContext);

  return (
    <Wrapper>
      <ContentWrapper>
        <h1>Welcome!</h1>
        <AccountInfo>Email: {userInfo?.email}</AccountInfo>
        <BillingInfo>Billing Info???</BillingInfo>
        <OrderHistory>
          {userOrders?.map((order) => {
            <OrderItem orderInfo={order} key={order._id} />;
          })}
        </OrderHistory>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div``;

const AccountInfo = styled.div`
  border: 1px solid pink;
`;
const BillingInfo = styled.div`
  border: 1px solid pink;
`;
const OrderHistory = styled.div`
  border: 1px solid pink;
`;

export default AccountPage;
