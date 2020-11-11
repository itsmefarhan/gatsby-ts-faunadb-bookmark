import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { GET_BOOKMARKS } from "./gql";
import { Props } from "../templates/update";

const Header = ({ pageContext }: Props) => {
  const UPDATE_BOOKMARK = gql`
    mutation update(
      $id: ID!
      $title: String
      $url: String
      $description: String
    ) {
      updateBookmark(
        id: $id
        title: $title
        url: $url
        description: $description
      ) {
        id
      }
    }
  `;

  const [title, setTitle] = useState(pageContext.title);
  const [url, setUrl] = useState(pageContext.url);
  const [description, setDescription] = useState(pageContext.description);

  const [updateBookmark] = useMutation(UPDATE_BOOKMARK);
  const { refetch } = useQuery(GET_BOOKMARKS);

  const handleSubmit = async () => {
    await updateBookmark({
      variables: { id: pageContext.id, title, url, description },
    });
    await refetch();
    setTitle("");
    setUrl("");
    setDescription("");
    window.location.href = "/";
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#updateModal"
      >
        Edit
      </button>

      <div
        className="modal fade"
        id="updateModal"
        tabIndex={-1}
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">
                Edit Bookmark
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
    </>
  );
};

export default Header;
