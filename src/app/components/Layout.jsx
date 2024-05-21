import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col min-w-full">
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: React.ReactNode,
}
export default Layout;
