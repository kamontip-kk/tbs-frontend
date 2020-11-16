import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../../components/BacktoTop';
import Layout from '../../../components/Layout';
import AdvantagesSection from '../../../components/location-based-sms/AdvantagesSection';
import CtaSection from '../../../components/location-based-sms/CtaSection';
import DesSection from '../../../components/location-based-sms/DesSection';
import HeroSection from '../../../components/location-based-sms/HeroSection';
import SmsSection from '../../../components/location-based-sms/SmsSection';
import { seo } from '../../../components/seo/location-based-sms';
import { withTranslation } from '../../../i18n';

const LocationBasedSMS = ({ t }: any) => (
  <Layout>
    <Head>
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NextSeo
      openGraph={seo.openGraph}
      title={t('LocationBasedSMSPage:meta.title')}
      description={t('LocationBasedSMSPage:meta.description')}
    />
    {/* <Proloader /> */}
    <div className="page_wrapper">
      <HeroSection />
      <SmsSection />
      <DesSection />
      <AdvantagesSection />
      <CtaSection />
    </div>
    <BacktoTop />
  </Layout>
);

export default withTranslation('LocationBasedSMSPage')(LocationBasedSMS);
export const getStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['LocationBasedSMSPage'],
    },
  };
};
