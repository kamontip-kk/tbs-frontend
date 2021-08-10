import React from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import SmartSmsConsoleContentSection from '../../../components/smart-sms-console/ContentSelect';
import SmsSection from '../../../components/smart-sms-console/SmsSection';
import SimpleIconSection from '../../../components/smart-sms-console/SimpleIconSection';
import OtherFeature from '../../../components/smart-sms-console/OtherFeature';
import CtaSection from '../../../components/smart-sms-console/CtaSection';
import BacktoTop from '../../../components/BacktoTop';
import { NextSeo } from 'next-seo';
import { seo } from '../../../components/seo/smart-sms-console';
import { withTranslation } from '../../../i18n';
const SmartSmsConsole = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="keywords" content={t('meta::keywords')} />
            <meta name="author" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </Head>
        <NextSeo
            openGraph={seo.openGraph}
            title={t('meta::title')}
            description={t('meta::description')}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        {/* <Proloader /> */}
        <div className="page_wrapper">
            <SmartSmsConsoleContentSection />
            <SmsSection />
            <SimpleIconSection />
            <OtherFeature />
            <CtaSection />
        </div>
        <BacktoTop />
    </Layout>
);
// Otp.getInitialProps = async () => ({
//   namespacesRequired: ['OtpMeta'],
// });
export default withTranslation('SmartSmsConsole')(SmartSmsConsole);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['SmartSmsConsole'],
        },
    };
};
