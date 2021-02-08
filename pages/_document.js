import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
            <title>Aravena Y Asociados</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Aravena Y Asociados. Descubre nuestros servicios contables, recursos humanos, regularizaciones antes municipalidades y Seremi y tramites ante el SII"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument