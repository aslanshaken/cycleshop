import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout.jsx";
import Brands from "../../components/Brands/Brands";

const Home = (props) => {
  return (
    <div>
      <Layout user={props.user} products={props.products} >
        <Brands />
        <div></div>
      </Layout>
    </div>
  );
};

export default Home;
