import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
          
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: normal;
                src: url('/fonts/Inter-Regular.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: bold;
                src: url('/fonts/Inter-Bold.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Vera';
                font-style: normal;
                font-weight: normal;
                src: url('/fonts/Vera-Mono.woff2') format('woff2');
              }
          
          `,
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

export default MyDocument;
