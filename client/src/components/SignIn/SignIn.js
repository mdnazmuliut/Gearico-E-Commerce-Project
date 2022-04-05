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
      <Background>
        <ShapeOne />
        <ShapeTwo />
      </Background>
      <ContentWrapper>
        {/* <BgImage src={phone} /> */}
        {pageDisplay === "signin" && (
          <SignInBox setPageDisplay={setPageDisplay} />
        )}
        {pageDisplay === "signup" && (
          <SignUpBox setPageDisplay={setPageDisplay} />
        )}
        {pageDisplay === "password" && (
          <ForgotPasswordBox setPageDisplay={setPageDisplay} />
        )}
        {pageDisplay.message && (
          <Message setPageDisplay={setPageDisplay} pageDisplay={pageDisplay} />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080710;
  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const ShapeOne = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
`;

const ShapeTwo = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
`;

const ContentWrapper = styled.div`
  height: 420px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
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
