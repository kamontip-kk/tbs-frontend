import React from 'react';
import FooterSubmodule from '../tbs_submodule/FooterSubmodule.js';
import appConfig from '../appConfig';
import { useRouter } from 'next/router'
import th from '../public/locales/th/Home.json';
import en from '../public/locales/en/Home.json';

const Footer = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return <FooterSubmodule appConfig={appConfig} t={t}/>;
};

Footer.getInitialProps = async () => ({
    namespacesRequired: ['Footer'],
});

export default Footer;
