import Document, { Head, Html, Main, NextScript } from "next/document";
require("isomorphic-fetch");
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { html, head, errorHtml, chunks } = ctx.renderPage();
    const styles = flush();
    let data ='';
    if (ctx.req.session) {
      const { userId } = ctx.req.session;
      const response = await fetch(`http://localhost:3000/users/${userId}`);
       data = await response.json();
    } else{
      data = '';
    }
    return { html, head, errorHtml, chunks, styles, data };
    // try {
    //   ctx.renderPage = () =>
    //     originalRenderPage({
    //       enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    //     });

    //   const initialProps = await Document.getInitialProps(ctx);
    //   return {
    //     ...initialProps,
    //     styles: (
    //       <>
    //         {initialProps.styles}
    //         {sheet.getStyleElement()}
    //       </>
    //     )
    //   };
    // } finally {
    //   sheet.seal();
    // }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/bulma/css/bulma.min.css"></link>
          <script id="session"
            dangerouslySetInnerHTML={{
              __html: `window.__APP_USER_PROFILE__ = ${JSON.stringify(this.props.data)}`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
