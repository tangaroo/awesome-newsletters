import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space20);
`;

const HeaderComponent = () => (
  <>
    <Header>
      <h1>Awesome Newsletters</h1>
    </Header>
  </>
);

export default HeaderComponent;
