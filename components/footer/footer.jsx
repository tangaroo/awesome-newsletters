import "../../styles/styles.js";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        &copy; 2023 / Say hey @{" "}
        <a href="https://cassandratang.me">cassandratang.me</a>
      </p>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space12) 0px;
`;

export default FooterComponent;
