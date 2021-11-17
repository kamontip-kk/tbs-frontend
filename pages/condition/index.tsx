import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/condition/HeroSection';
import Help from '../../components/Help';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import Image from 'next/image'
import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/condition';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Condition.json'
import en from '../../public/locales/en/Condition.json'

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const Condition = () => {
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
            <meta name="twitter:title" content={seo.openGraph.title} />
            <meta name="twitter:description" content={seo.openGraph.description} />
            <meta name="twitter:image:src" content={seo.openGraph.images[0].url} />
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
                <div
                    className="hero_section v3 payment_home lazyload"
                    data-bgset="/img/bg_12.png"
                    style={{
                        // backgroundImage: 'url(/img/bg_12.png)',
                        backgroundSize: 'contain',
                    }}
                >
                    <HeroSection />
                    {/* <Image loader={myLoader} src="bg_13.png" className="img-fluid shape__bottom lazyload" width={1000} height={500} /> */}
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_13.png`} className="img-fluid shape__bottom lazyload" width={1000} height={500} />
                    <Help />
                </div>
            </div>
            <BacktoTop />
        </Layout>
    );
}

// Condition.getInitialProps = async () => ({
//   namespacesRequired: ['ConditionMeta'],
// });
// export default withTranslation('Condition')(Condition);
export default Condition;

export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['Condition'],
        },
    };
};
