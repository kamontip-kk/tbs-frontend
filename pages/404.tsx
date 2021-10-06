import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Components404 from '../components/404/404';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import th from '../public/locales/th/Home.json';
// import en from '../public/locales/th/Home.json';
import { link } from '../components/404/redirectLink';
const Custom404 = () => {
    const router = useRouter();
    let paths = router.asPath.split('?');
    paths = paths[0].split('/');
    let firstCheck = paths[1];
    let secCheck = paths[2];
    useEffect(() => {
        if (firstCheck === 'blog') {
            if (secCheck) {
                window.location.replace(
                    `https://www.thaibulksms.com/blog/${secCheck}`
                );
                return;
            }
            window.location.replace(`https://www.thaibulksms.com/blog/`);
            return;
        }
        if (link['tbs'][firstCheck] !== undefined) {
            if (typeof link['tbs'][firstCheck] === 'object') {
                if (link['tbs'][firstCheck][secCheck] !== undefined) {
                    router.push('/' + link['tbs'][firstCheck][secCheck]);
                    return;
                }
            } else {
                router.push('/' + link['tbs'][firstCheck]);
                return;
            }
        }
        if (link['dev'][firstCheck] !== undefined) {
            if (typeof link['dev'][firstCheck] === 'object') {
                if (link['dev'][firstCheck][secCheck] !== undefined) {
                    window.location.replace(
                        `${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`
                    );
                    return;
                }
            }
        }
    }, []);
    return (
        <Layout>
            <Head>
                <title>404</title>
                <meta name="title" content="404" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="https://thaibulksms.com"
                />
                <meta name="twitter:site" content="" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:image:secure_url" content="" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:domain" content="" />
            </Head>
            <Components404 />
        </Layout>
    );
};
// Custom404.getInitialProps = async () => ({
//   namespacesRequired: [''],
// });
export default Custom404;

// export default function Custom404() {
//   return <h1>404 - Page Not Found</h1>
// }
