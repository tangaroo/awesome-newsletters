import "../../styles/styles.js";
import styled from "styled-components";

import TableComponent from "../table/table.jsx";
import Introduction from "../introduction/introduction.jsx";

const Layout = () => {
  return (
    <Container>
      <Introduction />
      <TableComponent />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Layout;
