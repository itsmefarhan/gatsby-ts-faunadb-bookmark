import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BOOKMARK, GET_BOOKMARKS } from "./gql";

const Header = () => {
  const siteQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const [addBookmark] = useMutation(ADD_BOOKMARK);
  const { refetch } = useQuery(GET_BOOKMARKS);


  const handleSubmit = async () => {
    await addBookmark({ variables: { title, url, description } });
    await refetch();
    setTitle("");
    setUrl("");
    setDescription("");
    fetch("https://api.netlify.com/build_hooks/5fabd520c8f8399f7e6b0a22", {
      method: "POST",
    })
      .then(() => console.log("hook ran"))
      .catch(() => "hook err");
  };

  return (
    <nav className="navbar navbar-expand-md sticky navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          {siteQuery.site.siteMetadata.title}
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Bookmark
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New Bookmark
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="url">URL</label>
                      <input
                        type="url"
                        className="form-control"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={handleSubmit}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
