import React from 'react';
import Layout from '../../components/Layout';
import UsertypeCompany from '../../components/register/usertypeindividual';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
const Usertypeindividual = ({ t }: any) => (
  <Layout>
    <Head>
      <title>{t('title')}</title>
      <meta name="title" content={t('title')} />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="regusertypeindividualister" />
      <meta property="og:description" content="regusertypeindividualister" />
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
    <UsertypeCompany />
  </Layout>
);
Usertypeindividual.getInitialProps = async () => ({
  namespacesRequired: ['UsertypeIndividualMeta'],
});
export default withTranslation('UsertypeIndividualMeta')(Usertypeindividual);
