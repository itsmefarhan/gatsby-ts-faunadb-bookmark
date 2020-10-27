import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import Header from "../components/header";

const GET_BOOKMARKS = gql`
  query {
    bookmarks {
      id
      title
      url
      description
    }
  }
`;

const REMOVE_BOOKMARK = gql`
  mutation RemoveBookmark($id: ID!) {
    removeBookmark(id: $id) {
      title
    }
  }
`;

interface Props {
  id: string;
  title: string;
  url: string;
  description: string;
}

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKMARKS);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);
  return (
    <Layout>
      <Header />
      <h3 className="text-center">Bookmark your favorite articles!</h3>
      <div className="container">
        {loading ? <h3>Loading</h3> : null}
        {error ? <p className="lead">{error.message}</p> : null}

        <div className="row">
          {!loading &&
            !error &&
            data.bookmarks.map((item: Props) => (
              <div className="col-sm-4" key={item.id}>
                <div className="shadow p-3">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a href={item.url} target="_blank">
                      View
                    </a>
                    <button
                      className="btn-danger btn-sm"
                      onClick={async () => {
                        await removeBookmark({ variables: { id: item.id } });
                        await refetch();
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
