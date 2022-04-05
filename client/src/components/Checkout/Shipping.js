import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { useContext } from "react";
import { AccountContext } from "../Hooks/AccountContext";

const Shipping = ({
  formData,
  handleChange,
  handleClickNext,
  setStepColor,
  errMsg,
  msg,
}) => {
  const section = "shipping";
  const { userInfo } = useContext(AccountContext)

  return (
    <>
    <ErrorWrapper>
      <Main>
        <Header>Shipping Address</Header>
        <Wrapper>
          <FormContent>
            <FormGroup>
              <Input
                name="firstName"
                type="text"
                placeholder="First name"
                section={section}
                defaultValue={userInfo?.shipping?.firstName || formData.shipping.firstName}
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Last name"
                section={section}
                defaultValue={userInfo?.shipping?.lastName || formData.shipping.lastName}
                handleChange={handleChange}
              />
            </FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              section={section}
              defaultValue={userInfo?.email || formData.shipping.email}
              handleChange={handleChange}
            />
            <Input
              name="address"
              type="address"
              placeholder="Address"
              section={section}
              defaultValue={userInfo?.shipping?.address || formData.shipping.address}
              handleChange={handleChange}
            />
            <FormGroup>
              <Input
                name="city"
                type="text"
                placeholder="City"
                section={section}
                defaultValue={userInfo?.shipping?.city || formData.shipping.city}
                handleChange={handleChange}
              />
              <Input
                name="province"
                type="text"
                placeholder="Province"
                section={section}
                defaultValue={userInfo?.shipping?.province || formData.shipping.province}
                handleChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="postcode"
                type="text"
                placeholder="Postal Code"
                section={section}
                defaultValue={userInfo?.shipping?.postcode || formData.shipping.postcode}
                handleChange={handleChange}
              />
              <Input
                name="country"
                type="text"
                placeholder="Country"
                section={section}
                defaultValue={userInfo?.shipping?.country || formData.shipping.country}
                handleChange={handleChange}
              />
            </FormGroup>
          </FormContent>
          <Logo>Gearico</Logo>
        </Wrapper>
      </Main>
      <ErrorMsg errMsg={errMsg}>{msg}</ErrorMsg>
      </ErrorWrapper>
      <ButtonWrapper>
        <ButtonNextOne
          onClick={(ev) => {
            handleClickNext(ev, section);
          }}
        >
          Next
        </ButtonNextOne>
      </ButtonWrapper>
    </>
  );
};

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMsg = styled.div`
  visibility: ${({errMsg}) => errMsg ? "visible": "hidden"};
`;

const Main = styled.form`
  margin: 20px;
  /* padding: 10px; */
  width: 500px;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 400px;
`;

const Header = styled.div`
  margin: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const Wrapper = styled.div`
  margin: 40px 20px;
  padding: 0 20px;
`;
const FormContent = styled.div`
  /* margin: 0 16px 0; */
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    flex: 1 0 auto;
    width: 48%;

    &:first-child {
      margin-right: 6px;
    }
  }
`;

const Logo = styled.h2`
  margin-top: 10px;
  content: "GEARICO";
  font-size: 5em;
  font-weight: 800;
  font-style: italic;
  color: rgba(0, 0, 0, 0.1);
  cursor: default;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const ButtonNextOne = styled.button`
  border: none;
  border-radius: 8px;
  color: black;
  margin-left: 20px;
  width: 100px;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:active {
    background-color: rgba(169, 169, 169);
    color: white;
    font-weight: bold;
    transform: scale(0.97);
  }
`;

export default Shipping;
