import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/how-to-order/HeroSection';
import TabContent from '../../components/how-to-order/TabContent';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/support_how-to-order';
const Order = ({ t }: any) => (
    <Layout>
        <Head>
            <meta name="description" content={t('meta::description')} />
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
        />
        <div className="page_wrapper">
            <HeroSection />
            <TabContent />
        </div>
        <BacktoTop />
    </Layout>
);
// Order.getInitialProps = async () => ({
//   namespacesRequired: ['How-to-orderMeta'],
// });
export default withTranslation('How-to-order')(Order);
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['How-to-order'],
        },
    };
};
