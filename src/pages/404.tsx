import React, { Fragment } from "react";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <Fragment>
      <h3 className="text-center">Page Not Found</h3>

      <Link to="/">Back to Home</Link>
    </Fragment>
  );
};

export default NotFound;
