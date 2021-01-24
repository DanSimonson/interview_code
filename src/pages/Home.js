import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonLink = styled.button`
  text-align: center;
  background-color: grey;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
function Home() {
  return (
    <ContainerDiv>
      <h1>Home</h1>
      <NavLink to="/sort">
        <ButtonLink>Go to Sort Page</ButtonLink>
      </NavLink>
    </ContainerDiv>
  );
}

export default Home;
