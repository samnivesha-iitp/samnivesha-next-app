import React from "react";
import App from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.userId) {
      pageProps.user = ctx.req.session.userId;
      return { pageProps };
    }
    return { pageProps: null };
  }
  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps == null ? null : props.pageProps.user,
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    const { Component, pageProps } = this.props;
    const props = {
      ...pageProps,
      user: this.state.user
    };
    const loader = this.state.isLoading ? "is-active" : "";

    return (
      <React.Fragment>
        <Head>
          <link
            rel="preload"
            href="/css/index/pageloader.css"
            as="style"
            type="text/css"
          ></link>
          <link rel="stylesheet" href="/css/index/pageloader.css"></link>
        </Head>
        <div className={`pageloader ${loader}`}></div>
        <div className={`infraloader ${loader}`}></div>
        <Header user={this.state.user} />
        <Component {...props} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MyApp;
