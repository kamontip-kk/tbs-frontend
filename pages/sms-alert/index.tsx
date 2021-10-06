import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import CtaSection from '../../components/sms-alert/CtaSection';
import DesSection from '../../components/sms-alert/DesSection';
import HeroSection from '../../components/sms-alert/HeroSection';
import SmsSection from '../../components/sms-alert/SmsSection';
import { seo } from '../../components/seo/sms-alert';
// import { withTranslation } from '../../i18n';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Sms-alert.json'
import en from '../../public/locales/en/Sms-alert.json'

const SmsAlertPage = () => {
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
                <meta name="twitter:title" content={seo.openGraph.title} />
                <meta
                    name="twitter:description"
                    content={seo.openGraph.description}
                />
                <meta
                    name="twitter:image:src"
                    content={seo.openGraph.images[0].url}
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
                twitter={{
                    site: seo.openGraph.site_name,
                    cardType: seo.openGraph.type,
                }}
            />
            {/* <Proloader /> */}
            <div className="page_wrapper">
                <HeroSection />
                <SmsSection />
                <DesSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    );
}

export default SmsAlertPage;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Sms-alert'],
        },
    };
};
