import axios from 'axios';
// import * as fbq from 'fbq';
import Cookie from 'js-cookie';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import TagManager from 'react-gtm-module';
// import AppConfig from '../appConfig';
import { StoreContextProvider } from '../components/context/store';
import Proloader from '../components/Proloader';
import { seo } from '../components/seo/defaultseo';
// import { checktoken } from '../services/user/user.service';
// import { fb } from '../utils/fb';
// import Cookies from 'js-cookie';

// import '../public/assets/css/style.css'
// import '../public/assets/css/responsive.css'
import '../public/assets/css/globals.css'
import '../public/assets/css/header.css'
import '../public/assets/css/footer.css'
import '../public/assets/css/backtotop.css'
import '../public/assets/css/bannercookie.css'
import '../public/assets/css/condition.css'
import '../public/assets/css/cta.css'
import '../public/assets/css/edu.css'
import '../public/assets/css/faq.css'
import '../public/assets/css/feature.css'
import '../public/assets/css/globe.css'
import '../public/assets/css/hero.css'
import '../public/assets/css/modal.css'
import '../public/assets/css/newsletter.css'
import '../public/assets/css/partner.css'
import '../public/assets/css/pricing.css'
import '../public/assets/css/regisandlogin.css'
import '../public/assets/css/service.css'
import '../public/assets/css/service-feature.css'
import '../public/assets/css/simple.css'
import '../public/assets/css/simpleicon.css'
import '../public/assets/css/simpleslider.css'
import '../public/assets/css/slider.css'
import '../public/assets/css/sms.css'
import '../public/assets/css/testimonial.css'
import '../public/assets/css/test-pipeline.css'
import '../public/assets/css/track.css'
import '../public/assets/css/usertype.css'
import '../public/assets/css/proloader.css'

// import 'react-modal-video/scss/modal-video.scss';

// const tagManagerArgs = {
//     gtmId: AppConfig.GTM_CODE || '',
// };

axios.interceptors.request.use((config) => {
    const jwtToken = Cookie.get('TBS_token');
    if (jwtToken) {
        config.headers['Authorization'] = `Bearer ${jwtToken}`;
    }
    return config;
});

axios.interceptors.response.use(
    (res) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return res;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const { status } = error.response;
        if (status === 401) {
            Router.push('/log-in');
        }
        return Promise.reject(error);
    }
);

function MyApp({ Component, pageProps }: any) {
    let lang = Cookie.get('LANG');

    const router = useRouter();

    // const handleRouteChange = async (url: string) => {
    //     if ((await checktoken()) && url === '/log-in') {
    //         // Router.push('/member');
    //         window.location.replace('https://member.thaibulksms.com/');
    //     }
    // };
    useEffect(() => {
        if (lang === undefined) {
            router.locale = 'th'
            Cookie.set('LANG','TH');
        } else {
            router.locale = `${lang.toLowerCase()}`;
            Cookie.set('LANG',router.locale.toLocaleUpperCase());
        }
    },[lang]);

    // const handleRouteChange = async (url: string) => {
    //     if ((await checktoken()) && url === '/log-in') {
    //         // Router.push('/member');
    //         window.location.replace('https://member.thaibulksms.com/');
    //     }
    // };
    // useEffect(() => {
    //     const queryString = require('query-string');
    //     const parsed = queryString.parse(window.location.search);
    //     const regex = / /g;
    //     const ad_id = parsed.ad_id;
    //     if (ad_id !== undefined && regex.test(ad_id) !== true) {
    //         if (ad_id !== undefined && regex.test(ad_id) !== true) {
    //             let domain = 'localhost';
    //             if (AppConfig.APP_ENV === AppConfig.production)
    //                 domain = '.thaibulksms.com';
    //             else if (AppConfig.APP_ENV === AppConfig.internalTest)
    //                 domain = '.1mobyline.com';
    //             Cookie.set('ad_id', ad_id.trim(), {
    //                 domain,
    //                 expires: 7,
    //             });
    //         }
    //     }

    //     TagManager.initialize(tagManagerArgs);

    //     if (!fbq.init(AppConfig.facebookConversionTracking.PIXEL_ID))
    //         console.warn('fbq init failed.');

    //     handleRouteChange(router.pathname);
    //     Router.events.on('routeChangeStart', handleRouteChange);

    //     let timeout = setTimeout(() => {
    //         fb((FB) => timeout && FB.XFBML.parse());
    //     }, 2000);
    //     return () => {
    //         clearTimeout(timeout);
    //         Router.events.off('routeChangeStart', handleRouteChange);
    //     };
    // }, []);

    // if (!i18n.language) i18n.changeLanguage('th');

    // useEffect(() => {
    //     if (lang === undefined) {
    //         i18n.changeLanguage('th');
    //     } else {
    //         i18n.changeLanguage(lang.toLowerCase());
    //     }
    // },[lang,process.browser]);

    // if (!i18n.language) i18n.changeLanguage('th');

    

    return (
        <>
            <DefaultSeo {...seo} />
            <StoreContextProvider>
                <Proloader />
                <Component {...pageProps} />
            </StoreContextProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext: any) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;
