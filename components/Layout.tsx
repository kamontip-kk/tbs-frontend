import Header from './Header';
import BannerCookie from '../tbs_submodule/BannerCookie';
import LeadGenForm from './LeadGenForm';
import Footer from './Footer';

// import { i18n } from '../i18n';
// import React, { useEffect } from 'react';
// import Head from 'next/head';
const Layout = (props: any) => {
    // useEffect(() => {
    //   i18n.changeLanguage('th');
    // }, []);
    return (
        <div>
            {/* <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v8.0'
                });
              };
      
              (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`,
          }}
        />
      </Head> */}
            <Header />
            {props.children}
            <Footer />
            <BannerCookie />
            <LeadGenForm />
            {/* <div
                className="fb-customerchat"
                data-attribution="setup_tool"
                data-page_id={process.env.NEXT_PUBLIC_FB_PAGEID}
            ></div> */}
        </div>
    );
};
export default Layout;
