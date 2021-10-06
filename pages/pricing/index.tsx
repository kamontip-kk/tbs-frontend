import React from 'react';
import Layout from '../../components/Layout';
import PricingSection from '../../components/pricing/PricingSection';
import AllPricing from '../../components/pricing/AllPricing';
import FaqSection from '../../components/pricing/FaqSection';
import BacktoTop from '../../components/BacktoTop';
import Head from 'next/head';
import * as ProductService from '../../services/shopping/product.service';
import { PricingProps } from '../../services/shopping/pricing.model';

import { NextSeo } from 'next-seo';
import { seo } from '../../components/seo/pricing';
import { useRouter } from 'next/router';
import th from '../../public/locales/th/Pricing.json'
import en from '../../public/locales/en/Pricing.json'

const Pricing: any = ({ packages }: PricingProps) => {
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
                <link
                    rel="canonical"
                    href="https://www.thaibulksms.com/pricing/"
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
                <PricingSection />
                <AllPricing packages={packages} />
                <FaqSection />
            </div>
            <BacktoTop />
        </Layout>
    );
};

// Pricing.getInitialProps = async () => {
//   // const params: PackageAll = {
//   //   filter: AppConfig.PRODUCT_PACKAGE,
//   // };
//   let packageAll;

//   try {
//     packageAll = await ProductService.GetPackageNormal();
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     packages: packageAll ? packageAll.packages : {},
//     namespacesRequired: ['PricingMeta'],
//   };
// };

// Pricing.getServerSideProps = async () => {
//   const params: PackageAll = {
//     filter: '136,137,138,139,140,141,142,143'
//   }
//   const packageAll = await ProductService.getPackageAll(params)
//   console.log('ok',packageAll)
//   return { props: { packageAll} }
// }
export default Pricing;

export const getStaticProps = async () => {
    let packageAll;

    try {
        packageAll = await ProductService.GetPackageNormal();
    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            packages: packageAll ? packageAll.packages : {},
            namespacesRequired: ['Pricing'],
        },
    };
};
