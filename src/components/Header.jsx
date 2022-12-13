import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const header = () => {
  return (
    <MainHeader>
      <NavLink className="logo-box" to="/">
        <h3 className="logo">MAURYATECH</h3>
      </NavLink>

      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-box {
    text-decoration: none;
  }
  .logo {
    font-size: 2rem;
    font-family: "Work Sans", sans-serif;
  }
`;

export default header;
