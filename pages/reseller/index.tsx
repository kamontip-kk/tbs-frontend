import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import BacktoTop from '../../components/BacktoTop';
import Layout from '../../components/Layout';
import AdvantagesSection from '../../components/reseller/AdvantagesSection';
import CtaSection from '../../components/reseller/CtaSection';
import DesSection from '../../components/reseller/DesSection';
import HeroSection from '../../components/reseller/HeroSection';
import SmsSection from '../../components/reseller/SmsSection';
import { seo } from '../../components/seo/reseller';
// import { withTranslation } from '../../i18n';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/ResellerPage.json'
import en from '../../public/locales/en/ResellerPage.json'


const Reseller = () => {
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
                <AdvantagesSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    );
}

export default Reseller;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['ResellerPage'],
        },
    };
};
