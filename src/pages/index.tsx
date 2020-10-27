import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

import Layout from "../components/layout";
import Header from "../components/header";

const Home = () => {
  return (
    <Layout>
      <Header />
      <h3 className="text-center">Bookmark your favorite articles!</h3>
    </Layout>
  );
};

export default Home;
