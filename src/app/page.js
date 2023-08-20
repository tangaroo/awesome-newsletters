"use client";
import { GlobalStyle } from "../../styles/styles.js";

import HeadComponent from "../../components/head/head.jsx";
import HeaderComponent from "../../components/header/header.jsx";
import Layout from "../../components/layout/layout.jsx";
import FooterComponent from "../../components/footer/footer.jsx";

const Home = () => {
  return (
    <main>
      <HeadComponent />
      <GlobalStyle />
      <HeaderComponent />
      <Layout />
      <FooterComponent />
    </main>
  );
};

export default Home;
