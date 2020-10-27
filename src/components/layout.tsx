import React, { ReactNode } from "react";

// import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
     

      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
