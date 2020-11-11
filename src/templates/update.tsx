import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import UpdateForm from "../components/updateForm";

export interface Props {
  pageContext: {
    title: string;
    url: string;
    description: string;
    id: string;
  };
}

const Update = ({ pageContext }: Props) => {
  return (
    <Layout>
      <Header />
      {pageContext && (
        <div
          className="shadow-lg p-3 mt-5"
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <h5>{pageContext.title}</h5>
          <p>{pageContext.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UpdateForm pageContext={pageContext} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Update;
