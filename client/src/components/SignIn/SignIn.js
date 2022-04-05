import styled from "styled-components";
import phone from "../../assets/phoneZoomed.png";
import { useState } from "react";
import SignInBox from "./SignInBox";
import SignUpBox from "./SignUpBox";
import ForgotPasswordBox from "./ForgotPasswordBox";
import Message from "./Message";

const SignIn = () => {
  const [pageDisplay, setPageDisplay] = useState("signin");

  return (
    <PageWrapper>
      <ContentWrapper>
        <BgImage src={phone} />
        {(pageDisplay === "signin") && <SignInBox setPageDisplay={setPageDisplay} />}
        {(pageDisplay === "signup") && <SignUpBox setPageDisplay={setPageDisplay} />}
        {(pageDisplay === "password") && <ForgotPasswordBox setPageDisplay={setPageDisplay} />}
        {(pageDisplay.message) && <Message setPageDisplay={setPageDisplay} pageDisplay={pageDisplay} />}
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  margin-top: 100px;
  padding: 50px;
  width: 500px;
  height: 400px;
  background-color: gray;
  border-radius: 8px;
  z-index: 1;
`;

const BgImage = styled.img`
  position: absolute;
  transform: scale(0.6);
  opacity: 0.2;
  top: -400px;
  left: -400px;
  z-index: -1;
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 0;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 16px;
  margin: 6px 0;
  opacity: 0.7;
  /* width: 250px; */
`;

const Line = styled.div`
  height: 0;
  margin: 10px 0;
  /* width: 320px; */
  border-bottom: 1px solid white;
`;

const LoginButton = styled.button`
  display: inline-block;
  background-color: black;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 0.8rem 1.7rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    background: slateblue;
  }
`;

const SignUpLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  z-index: 2;
  > button {
    font-size: 14px;
    font-weight: 700;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default SignIn;
