import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar } from '../components/layout/navbar'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
