import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-woodland antialiased selection:bg-woodland selection:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
