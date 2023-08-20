import "../../styles/styles.js";
import styled from "styled-components";

import data from "../../public/links.json";

const IntroductionComponent = () => {
  return (
    <Content>
      <p>
        Not all newsletters are bad. Here is a a list with some useful ones that
        are worth subscribing to. Some may tinker some ideas, provide
        inspiration, help with new updates or even just provide some good ol’
        freebies.
      </p>
    </Content>
  );
};

const Content = styled.div`
  max-width: 100%;
  text-align: center;
  margin: 0px 0px var(--space16) 0px;
`;

export default IntroductionComponent;
