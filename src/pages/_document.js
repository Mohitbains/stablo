import Document, { Html, Head, Main, NextScript } from 'next/document';

// import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
            integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/images/logo_black.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }
}