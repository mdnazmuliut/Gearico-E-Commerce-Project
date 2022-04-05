import styled from "styled-components";
import { useContext } from "react";
import { AccountContext } from "../Hooks/AccountContext";
import { useState } from "react";
import SecShipping from "./Sections/SecShipping";
import SecBilling from "./Sections/SecBilling";
import SecOrderInfo from "./Sections/SecOrderInfo";
import { useHistory } from "react-router-dom";

const AccountPage = () => {
  const [toggleSec, setToggleSec] = useState([false, false, false]);
  const { userOrders, userInfo, setUserInfo } = useContext(AccountContext);
  const history = useHistory();

  const handleExpand = (ev) => {
    let sec = ev.target.value;
    let newArr = [...toggleSec];
    newArr[sec] = !toggleSec[sec];
    setToggleSec(newArr);
  };

  const handleSignOut = () => {
    setUserInfo(null);
    history.push("/signin");
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <Header>
        <h1>My Account</h1>
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
        </Header>
        <Line />
        <Info>
          <Span>Email: {userInfo?.email}</Span>
        </Info>
        <Info>
          <Button value={0} onClick={(ev) => handleExpand(ev)}>
            Shipping Info
          </Button>
          {toggleSec[0] && <SecShipping />}
        </Info>
        <Info>
          <Button value={1} onClick={(ev) => handleExpand(ev)}>
            Billing Info
          </Button>
          {toggleSec[1] && <SecBilling />}
        </Info>
        <OrderInfo>
        <Button value={2} onClick={(ev) => handleExpand(ev)}>
            Order History
          </Button>
        {toggleSec[2] && <SecOrderInfo userOrders={userOrders} />}
        </OrderInfo>
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  width: 550px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255,255,255, 0.6);
`;

const SignOutButton = styled.button`
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 3px 10px;
  background-color: #7B1818;
  color: white;
`;

const Info = styled.div`
  margin: 10px 0;
`;

const Span = styled.span`
  font-size: 16px;
`;

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

const OrderInfo = styled.div`
  /* height: 200px;
  width: 400px; */
`;

export default AccountPage;
