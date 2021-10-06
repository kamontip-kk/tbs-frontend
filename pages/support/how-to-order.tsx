import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/how-to-order/HeroSection';
import TabContent from '../../components/how-to-order/TabContent';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
// import { withTranslation } from '../../i18n';
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/support_how-to-order';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/How-to-order.json'
import en from '../../public/locales/en/How-to-order.json'

const Order = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const [defaultTab, setDefaultTab] = React.useState('pills-home');
    React.useEffect(() => {}, [defaultTab]);

    return (
        <Layout>
            <Head>
                <meta name="description" content={t.meta.description} />
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
            <div className="page_wrapper">
                <HeroSection
                    defaultTab={defaultTab}
                    setDefaultTab={setDefaultTab}
                />
                <TabContent
                    defaultTab={defaultTab}
                    setDefaultTab={setDefaultTab}
                />
            </div>
            <BacktoTop />
        </Layout>
    );
};
// Order.getInitialProps = async () => ({
//   namespacesRequired: ['How-to-orderMeta'],
// });
export default Order;
export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['How-to-order'],
        },
    };
};
