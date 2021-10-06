import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/whitelist/HeroSection';
import SmsSection from '../../components/whitelist/SmsSection';
import SimpleIconSection from '../../components/whitelist/SimpleIconSection';
import CtaSection from '../../components/whitelist/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/whitelist';
// import { withTranslation } from '../../i18n';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Whitelist.json'
import en from '../../public/locales/en/Whitelist.json'

const Whitelist = () => {
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
export default Whitelist;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Whitelist'],
        },
    };
};
