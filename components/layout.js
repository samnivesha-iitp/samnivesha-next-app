import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

function Layout({ children, stylesheet, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title}` : "Samnivesha IIT Patna"}</title>
        <link rel="stylesheet" href="/bulma/css/bulma.css"></link>
        <link rel="stylesheet" href="/css/style.css"></link>
        {stylesheet ? <link rel="stylesheet" href={stylesheet}></link> : null}
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
