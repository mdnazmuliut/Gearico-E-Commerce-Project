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
      <h2>An unknown error has occurred</h2>
      <p>
        Please go to <LinkHome to="/"> Home</LinkHome> page
      </p>
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

const LinkHome = styled(Link)`
  color: white;
`;

export default ErrorPage;
