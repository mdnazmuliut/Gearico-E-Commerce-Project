import React from "react";
import { GiUnlitBomb } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <h1>
          <Bomb />
        </h1>
      </div>
      <h2>404</h2>
      <PageError>Page not found!</PageError>
      <GoHome>
        Please go to <LinkHome to="/"> Home</LinkHome> page
      </GoHome>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 300px 0;
  text-align: center;
`;
const Bomb = styled(GiUnlitBomb)`
  width: 80px;
  height: 80px;
`;

const PageError = styled.div`
  margin: 10px;
  font-size: 32px;
  font-weight: bold;
`;

const GoHome = styled.div`
  margin: 10px;
  font-size: 14px;
`;

const LinkHome = styled(Link)`
  color: white;
`;

export default ErrorPage;
