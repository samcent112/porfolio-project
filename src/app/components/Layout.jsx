import Header from "./Header";
import Footer from "./Footer";
import React from "react";
/*
  File name: Layout.jsx
  Student Name: Samuel Osoata
  Student ID: 301407126
*/
// This component provides a layout for the entire web pages. It gives the website a uniform structure and enable the Header and Footer components be available for us in all of the pages
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
