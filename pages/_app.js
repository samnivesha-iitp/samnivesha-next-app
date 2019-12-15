import React from "react";
import App from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.userId) {
      pageProps.user = ctx.req.session.userId;
    }
    return { pageProps };
  }
  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    const props = {
      ...pageProps,
      user: this.user
    };
    return (
      <>
        <Header user={this.state.user} />
        <Component {...props} />
        <Footer />
      </>
    );
  }
}
export default MyApp;
