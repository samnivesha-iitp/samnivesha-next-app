import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

function Layout({ children, stylesheet, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title}` : "Samnivesha IIT Patna"}</title>
        {stylesheet ? <link rel="stylesheet" href={stylesheet}></link> : null}
        {/* <script defer src="font-awesome.js"></script> */}
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
