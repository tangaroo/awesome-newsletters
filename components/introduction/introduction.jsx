import "../../styles/styles.js";
import styled from "styled-components";

import data from "../../public/links.json";

const IntroductionComponent = () => {
  const total = data.reduce((accumulator, table) => {
    return accumulator + table.rows.length;
  }, 0);

  return (
    <Content>
      <p>
        Not all newsletters are bad. Here is a a list with {total} useful ones
        that are worth subscribing to. Some may tinker some ideas, provide
        inspiration, help with new updates or even just provide some good ol’
        freebies.
      </p>
    </Content>
  );
};

const Content = styled.div`
  max-width: 100%;
  text-align: center;
  margin: 0px var(--space16) var(--space32) var(--space16);

  @media (min-width: 600px) {
    margin: 0px 0px var(--space32) 0px;
  }
`;

export default IntroductionComponent;
