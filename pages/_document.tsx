import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Milan Thapa Images Gallery"
          />
          <meta property="og:site_name" content="milangallery.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Milan Thapa"
          />
          <meta property="og:title" content="Pictures of Milan Thapa" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pictures of Milan Thapa" />
          <meta
            name="twitter:description"
            content="See pictures from Milan Thapa"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
