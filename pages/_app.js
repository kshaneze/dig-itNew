import '../styles/globals.css'
import Layout from '../components/Layout'
import { Quicksand } from 'next/font/google'

import * as fbq from '../lib/fpixel'
// import * as ga from '../lib/index'


import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from 'react'

import Script  from 'next/script'


const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['variable'],
})






export default function App({ Component, pageProps }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
      // ga.pageview(pathname)

    }
    
    handleRouteChange()

  }, [pathname, searchParams])

  return <>


        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${fbq.FB_PIXEL_ID});
            `,
          }}
        ></Script>

      {/* <Script strategy='lazyOnLoad' src="https://www.googletagmanager.com/gtag/js?id=G-KNKMB0ZK24"/>
        <Script strategy='lazyOnLoad' id='ga-script'>
      {`
      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-KNKMB0ZK24');

      `}
        </Script> */}




        <main className={quicksand.className}>

        <Layout  >
        <Component {...pageProps} />
  </Layout>

  </main>
  </>
  
}
