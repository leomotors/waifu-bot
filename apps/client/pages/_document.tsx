import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
