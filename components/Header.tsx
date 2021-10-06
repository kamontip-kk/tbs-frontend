import React, { useState } from 'react';
import Cookie from 'js-cookie';
import appConfig from '../appConfig';
import HeaderSubmodule from '../tbs_submodule/HeaderSubmodule.js';
import MyHeader from '../components/myHeader';
import { useRouter } from 'next/router';
import th from '../public/locales/th/Header.json';
import en from '../public/locales/en/Header.json';

const options = [
    { value: 'TH', text: 'TH' },
    { value: 'EN', text: 'EN' },
];

const MySelect = options.map((list) => {
    return (
        <option key={list.value} value={list.value}>
            {list.text}
        </option>
    );
});

const Header = () => {
    const { pathname } = useRouter();
    const router = useRouter();
    const {locale} = router;
    const [lang, setLang] = useState('TH');
    const t = locale === 'th' ? th : en;
    const [isLogin, setIsLogin] = useState(
        Cookie.get('PASSCODE') ? true : false
    );

    // function menuClick() {
    //   var elDivnice = document.getElementsByClassName('divnice')[0];
    //   if (elDivnice.classList.contains('open'))
    //     elDivnice.classList.remove('open');
    //   else elDivnice.classList.add('open');
    // }

    const onSwitchLanguage = (value: string) => {
        setLang(value);
        let domain = 'localhost';
        if (appConfig.APP_ENV === appConfig.production)
            domain = '.thaibulksms.com';
        else if (appConfig.APP_ENV === appConfig.internalTest)
            domain = '.1mobyline.com';
        Cookie.set('LANG', value, {
            domain,
            expires: 7,
        });
        const locale = value.toLowerCase();
        router.push(router.pathname, router.asPath, { locale });
    };

    const headerConfig = {
        lang,
        setLang,
        isLogin,
        setIsLogin,
        t,
        Cookie,
        onSwitchLanguage,
        MySelect,
    };

    return pathname === '/pricing-c' || pathname === '/pricing-b' ? (
        <MyHeader {...headerConfig} />
    ) : (
        <HeaderSubmodule {...headerConfig} />
    );
};
Header.getInitialProps = async () => ({
    namespacesRequired: ['Header'],
});

export default Header;
