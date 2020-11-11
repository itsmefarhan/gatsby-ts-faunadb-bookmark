import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
// import UpdateForm from "../components/updateForm";
// import { graphql } from "gatsby";

// export const query = graphql`
//   query($id: ID!) {
//     GetBookmarks {
//       bookmark(id: $id) {
//         title
//         url
//         description
//       }
//     }
//   }
// `;

// interface Props {
//   data: {
//     GetBookmarks: {
//       bookmark: {
//         title: string;
//         url: string;
//         description: string;
//       };
//     };
//   };
//   location: {
//     pathname: string;
//   };
// }

const Update = (props: any) => {
  console.log(props)
  // const pathLoc = location.pathname.slice(8);

  return (
    <Layout>
      <Header />
      {/* {data && data.GetBookmarks.bookmark && (
        <div
          className="shadow-lg p-3 mt-5"
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <h5>{data.GetBookmarks.bookmark.title}</h5>
          <p>{data.GetBookmarks.bookmark.description}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UpdateForm item={data.GetBookmarks.bookmark} id={pathLoc} />
          </div>
        </div>
      )} */}
    </Layout>
  );
};

export default Update;
