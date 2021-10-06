import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/service-level-agreement/HeroSection';
import SmsSection from '../../components/service-level-agreement/SmsSection';
import SimpleIconSection from '../../components/service-level-agreement/SimpleIconSection';
import CtaSection from '../../components/service-level-agreement/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/service-level-agreement';
// import { withTranslation } from '../../i18n';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/service-level-agreement.json'
import en from '../../public/locales/en/service-level-agreement.json'

const seviceLevel = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
            />
            {/* <Proloader /> */}
            <div className="page_wrapper">
                <HeroSection />
                <SmsSection />
                <SimpleIconSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    );
}
// whitelist.getInitialProps = async () => ({
//   namespacesRequired: ['whitelistMeta'],
// });
export default seviceLevel;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['service-level-agreement'],
        },
    };
};
