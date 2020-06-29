import React from 'react';
import Layout from '../components/Layout';
import Components404 from '../components/404/404';
import Head from 'next/head';
import { withTranslation } from '../i18n';
const Custom404 = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="Register success" />
      <meta property="og:description" content="Register success" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="https://thaibulksms.com" />
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
// Custom404.getInitialProps = async () => ({
//   namespacesRequired: [''],
// });
export default withTranslation('')(Custom404);

// export default function Custom404() {
//   return <h1>404 - Page Not Found</h1>
// }
