import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        paddingTop: "15px",
        height: "50px",
        color: "white",
      }}
      className="bg-dark"
    >
      <p className="lead">
        Powered By Farhan Farooq, &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
