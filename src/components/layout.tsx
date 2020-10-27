import React, { ReactNode } from "react";
import Header from "./header";
// import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />

      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
