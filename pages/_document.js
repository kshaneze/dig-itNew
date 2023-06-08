import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'
import Script from 'next/script'


export default function Document() {




  return (
    <Html lang="en">
    
      <Head>

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id='G-KNKMB0ZK24'`} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KNKMB0ZK24', {
        page_path: window.location.pathname,
        });
    `}
</Script>
      <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <link rel="icon"  href="/asc.svg"/>

        
 

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
