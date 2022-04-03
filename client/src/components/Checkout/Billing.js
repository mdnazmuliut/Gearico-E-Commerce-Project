import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Billing = ({
  formData,
  handleChange,
  handleClick,
  disabled,
  subStatus,
}) => {
  return (
    <>
      <Main>
        <Header>Payment Details</Header>
        <Wrapper>
          <FormContent>
            {/* <h1>Order Form</h1>
            <h2>Provide your information</h2> */}
            <Input
              name="fullName"
              type="text"
              placeholder="Full name"
              defaultValue={formData.fullName}
              handleChange={handleChange}
              required
            />
            <Input
              name="cardNo"
              type="text"
              placeholder="Card no"
              defaultValue={formData.cardNo}
              handleChange={handleChange}
              required
            />
            <FormGroup>
              <Input
                name="expMonth"
                type="text"
                placeholder="mm"
                defaultValue={formData.expMonth}
                handleChange={handleChange}
                required
              />
              <Input
                name="expYear"
                type="text"
                placeholder="yy"
                defaultValue={formData.expYear}
                handleChange={handleChange}
                required
              />
            </FormGroup>
            <Input
              name="cvv"
              type="text"
              placeholder="cvv"
              defaultValue={formData.cvv}
              handleChange={handleChange}
              required
            />
          </FormContent>
        </Wrapper>
      </Main>
    </>
  );
};

const Main = styled.div`
  margin: 20px;
  /* padding: 10px; */
  width: 500px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Header = styled.div`
  margin: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const Wrapper = styled.form`
  margin: 20px;
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

export default Billing;
