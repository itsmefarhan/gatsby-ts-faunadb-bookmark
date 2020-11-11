import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const NotFound = () => {
  return (
    <Layout>
      <Header />
      <div className="text-center">
        <h3>Page Not Found</h3>

        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
