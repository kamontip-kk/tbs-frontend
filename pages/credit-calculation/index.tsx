import React from 'react';
import Layout from '../../components/Layout';
// import Proloader from '../../components/Proloader';
import HeroSection from '../../components/credit-calculation/HeroSection';
import MultismsSection from '../../components/credit-calculation/MultismsSection';
import TestCountSection from '../../components/credit-calculation/TestCountSection';
import TableTextSection from '../../components/credit-calculation/TableTextSection';
import CtaSection from '../../components/credit-calculation/CtaSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/credit-calculation';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/credit-calculation.json'
import en from '../../public/locales/en/credit-calculation.json'

const credit = () => {
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
                <MultismsSection />
                <TestCountSection />
                <TableTextSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    );
}
// credit.getInitialProps = async () => ({
//   namespacesRequired: ['creditMeta'],
// });
export default credit;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['credit-calculation'],
        },
    };
};
