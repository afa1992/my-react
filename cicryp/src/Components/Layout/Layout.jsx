import React from 'react';
import Footer from "../Layout/Navbar/Navbar";
import Navbar from "../Layout/Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
 <main>{children}</main>
    <Footer />
  </>
  )
}

export default Layout