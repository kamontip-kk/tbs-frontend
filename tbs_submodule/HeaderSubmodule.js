import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import th from '../public/locales/th/Header.json';
import en from '../public/locales/en/Header.json';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const myLoader = ({src}) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const HeaderSubmodule = ({
    isLogin,
    lang,
    setLang,
    Cookie,
    setIsLogin,
    onSwitchLanguage,
    MySelect,
}) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    const headerBar = useRef(null);
    function sticky() {
        var scroll = window.pageYOffset;
        if (headerBar.current !== null) {
            if (scroll < 40) {
                headerBar.current.classList.remove('sticky');
            } else {
                headerBar.current.classList.add('sticky');
            }
        }
    }

    useEffect(() => {
        async function loadCookies() {
            if (Cookie.get('LANG')) {
                const textLang = Cookie.get('LANG');
                setLang(textLang);
            }
        }
        loadCookies();
        // check Cookie Login
        if (Cookie.get('PASSCODE')) {
            setIsLogin(true);
        }
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    }, [setLang]);

    const HeaderLoginMenuMobile = ({ isLogin }) => {
        const router = useRouter();
        const { locale } = router;
        const t = locale === 'th' ? th : en;
        return (
            <div className="menu_btn">
                <ul>
                    <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                        <a
                            className="btn v5 btn-sum-menu-mobile loginLink closemenu"
                        >
                            {/* {t(
                                'header::' +
                                    (isLogin === true
                                        ? 'Enter the system'
                                        : 'Login')
                            )} */}
                            {isLogin === true ? t.header['Enter the system'] : t.header['Login']}
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={
                                    process.env.NEXT_PUBLIC_DOMAIN_URL +
                                    '/pricing/'
                                }>
                            <a
                                className="btn v3 btn-sum-menu-mobile closemenu"
                            >
                                {/* {t(
                                    `header::` +
                                        (isLogin === true
                                            ? 'Buy'
                                            : 'Free trial')
                                )} */}
                                {isLogin === true ? t.header['Buy'] : t.header['Free trial']}
                        </a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const HeaderTopMenuMobile = () => (
        <div className="site-mobile-menu-header">
            <div className="row">
                <div
                    className="col-8"
                    style={{
                        marginTop: '0px',
                        paddingLeft: '35px',
                        paddingTop: '20px',
                    }}
                >
                    <Link href="/">
                        <a className="navbar-brand p-0 m-0 img-logo-title-menu-mobile closemenu">
                            {/* <img
                                className=""
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png/`}
                                alt="Logo"
                                width="216"
                                height="28"
                            /> */}
                            <span>
                                <Image loader={myLoader} src="logo_1.png" alt="Logo" width={216} height={28}/>
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="col-4" style={{ paddingRight: '35px' }}>
                    <div className="site-mobile-menu-close  js-menu-toggle">
                        <span className="ion-ios-close-empty"></span>{' '}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={headerBar} className="header-bar-area position-fixed w-100 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 lg-none">
                        <div className="header_top">
                            <div className="header_contact_no">
                                <Link href="tel:027986000"><a>02-798-6000</a></Link>
                            </div>
                            <div className="header_select">
                                {/* <select className="user_select" onChange={(e) => onSwitchLanguage(e)} defaultValue={lang}>
                  <option value="th">TH</option>
                  <option value="en">EN</option>
                    </select> */}
                                <select
                                    className="user_select"
                                    onChange={(e) =>
                                        onSwitchLanguage(e.currentTarget.value)
                                    }
                                    value={lang}
                                >
                                    {MySelect}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-9">
                        <Link href="/">
                        <a>
                            {/* <Link className="navbar-brand p-0 m-0"> */}
                            <a className="navbar-brand p-0 m-0">
                                {/* <img
                                    className=""
                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
                                    alt="Logo"
                                /> */}
                                <span>
                                    <Image loader={myLoader} src="logo_1.png" alt="Logo" width={216} height={28}/>
                                </span>
                            </a>
                            {/* </Link> */}
                        </a>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-3 text-right">
                        <div className="site-navbar">
                            <nav className="site-navigation text-center">
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="has-children">
                                        <span className="active new_title_hover">
                                            {t.header.Products}
                                        </span>
                                        <ul className="dropdown">
                                            <li className="listsub">
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro01 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header['Our Strength']}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['The best tools for marketer & developer']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <h6 className="title_menu_left">
                                                {t.header['For Marketer']}
                                            </h6>
                                            <li className="listsub li_width_700">
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/smart-sms-console/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro02 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        Smart SMS Console
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Send SMS messages on your own through a website. Easy to send and can be quickly analyzed.']}
                                                    </p>
                                                </a>
                                                </Link>
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/location-based-sms/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro04 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        Location Based SMS
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Enter your target group within specific areas. Send messages immediately without requiring phone numbers.']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <li className="listsub li_width_700">
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/sms-tracking/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro03 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        SMS Tracking
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Accurate SMS Campaign results that do not waste your marketing budget.']}
                                                    </p>
                                                </a>
                                                </Link>
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/global-sms/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro05 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        Global SMS
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Send SMS and OTP messages globally at valuable prices.']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <h6 className="title_menu_left">
                                                {t.header['For Developer']}
                                            </h6>
                                            <li className="listsub li_width_700">
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/sms-api/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro06 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        SMS API
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Simply by using SMS API, you can send messages through your platform.']}
                                                    </p>
                                                </a>
                                                </Link>
                                                <Link href={
                                                        process.env
                                                            .NEXT_PUBLIC_DOMAIN_URL +
                                                        '/product/otp/'
                                                    }>
                                                <a
                                                    className="new_icon_title_menu_pro07 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        OTP Service
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['A secure, ready-to-use OTP Service that does not require additional programming.']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href={
                                                process.env
                                                    .NEXT_PUBLIC_DOMAIN_URL +
                                                '/pricing/'
                                            }>
                                        <a
                                            className="active new_title_hover"
                                        >
                                            {t.header.Pricing}
                                        </a>
                                        </Link>
                                    </li>
                                    <li className="has-children">
                                        <span className="active new_title_hover">
                                            {t.header.Database}
                                        </span>
                                        <ul className="dropdown">
                                            <li className="listsub">
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/`}>
                                                <a
                                                    className="new_icon_title_menu_pro01 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header.Resources}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['List of Resources']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <h6 className="title_menu_left">
                                                {t.header['Tips and Knowledge']}
                                            </h6>
                                            <li className="listsub li_width_700">
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/marketing/`}>
                                                <a
                                                    className="new_icon_title_menu_resource05 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header.Marketing}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Marketing and SMS marketing knowledge']}
                                                    </p>
                                                </a>
                                                </Link>
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/tech/`}>
                                                <a
                                                    className="new_icon_title_menu_resource06 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header.Tech}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Technical knowledge about SMS and related technology']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <li className="listsub li_width_700">
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/features/`}>
                                                <a
                                                    className="new_icon_title_menu_resource07 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header['ThaiBulkSMS Features']}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Features introduction, update, and tutorial']}
                                                    </p>
                                                </a>
                                                </Link>
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/use-cases/`}>
                                                <a
                                                    className="new_icon_title_menu_resource03 icon_logo_new_menu_width title_menu_margin_top_0"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header['Example Operations']}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Example of using SMS in business']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                            <h6 className="title_menu_left">
                                                {t.header['Case Studies']}
                                            </h6>
                                            <li className="listsub li_width_700">
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/success-stories/`}>
                                                <a
                                                    className="new_icon_title_menu_resource04 icon_logo_new_menu_width"
                                                >
                                                    <h6 className="text_title_left">
                                                        {t.header['Success Stories']}
                                                    </h6>
                                                    <p className="txtSub text_sub_left">
                                                        {t.header['Case studies of many top customers who have used ThaiBulkSMS']}
                                                    </p>
                                                </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-children">
                                        <span className="active new_title_hover">
                                            {t.header.Support}
                                        </span>
                                        <div className="dropdown dropdown_padding_0 box_menu_support">
                                            <div className="row">
                                                <div className="col-7 menu_support_padding_20">
                                                    <ul>
                                                        <li className="title_menu_margin_top_20 title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/how-to-order/`}>
                                                            <a
                                                                className="new_icon_title_menu_support01 icon_logo_new_menu_width"
                                                            >
                                                                <span className="new_icon_title_menu_support01 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Ordering Methods']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Ordering process for each payment channel']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/whitelist/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_support04 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Whitelist Request']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Request Whitelist']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/credit-calculation/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_support05 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Calculation Method']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Credit calculation measurement']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/user-manual/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_support06 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['User-manual']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Manual and how to video']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/faq/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_support02 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Frequently Asked Questions']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['About ordering, general & technical problem']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="title_menu_padding_bottom_30">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_support03 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Contact us']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Contact to ThaiBulkSMS']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 bg_menu">
                                                    <ul>
                                                        <h6 className="title_sub_menu_resource2">
                                                            {t.header.Contact}
                                                        </h6>
                                                        <li>
                                                            <Link href="tel:027986000">
                                                            <a>
                                                                <h6 className="new_text_contact_phone">
                                                                    <span className="new_text_margin_left">
                                                                        02-798-6000
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="mailto:contact@thaibulksms.com">
                                                            <a>
                                                                <h6 className="new_text_contact_mail">
                                                                    <span className="new_text_margin_left">
                                                                        contact@thaibulksms.com
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.facebook.com/ThaiBulkSMS">
                                                            <a>
                                                                <h6 className="new_text_contact_fb">
                                                                    <span className="new_text_margin_left">
                                                                        ThaiBulkSMS
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-children">
                                        <Link href="">
                                        <a>
                                            <span className="active new_title_hover">
                                                {t.header['For Developers']}
                                            </span>
                                        </a>
                                        </Link>
                                        <ul className="dropdown box_menu_developer">
                                            <li className="menu_dev_padding_bottom_top_20">
                                                {/* <a href="/developer">*/}
                                                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/developer/`}>
                                                <a>
                                                    <span className="new_icon_title_menu_dev01 icon_logo_new_menu_width">
                                                        <h6 className="text_title_left">
                                                            {t.header['Download Guide']}
                                                        </h6>
                                                        <p className="txtSub text_sub_left">
                                                            {t.header['Manual for SMS API & OTP Service with example']}
                                                        </p>
                                                    </span>
                                                </a>
                                                </Link>
                                            </li>
                                            <li className="menu_dev_padding_20">
                                                {/* <a href="/developer/#ex_sdk"> */}
                                                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/developer/#ex_sdk/`}>
                                                <a>
                                                    <span className="new_icon_title_menu_dev02 icon_logo_new_menu_width">
                                                        <h6 className="text_title_left">
                                                            {t.header['Download Example SDK']}
                                                        </h6>
                                                        <p className="txtSub text_sub_left">
                                                            {t.header['Choose the programing language as you want']}
                                                        </p>
                                                    </span>
                                                </a>
                                                </Link>
                                            </li>
                                            <li className="menu_dev_padding_20">
                                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}/`}>
                                                <a>
                                                    <span className="new_icon_title_menu_dev03 icon_logo_new_menu_width">
                                                        <h6 className="text_title_left">
                                                            API References
                                                        </h6>
                                                        <p className="txtSub text_sub_left">
                                                            {t.header['Include SMS API and OTP API']}
                                                        </p>
                                                    </span>
                                                </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <span className="active new_title_hover">
                                            {t.header['About the Company']}
                                        </span>
                                        <div className="dropdown dropdown_padding_0 box_menu_why_thaibulksms">
                                            <div className="row">
                                                <div className="col-7 menu_support_padding_20">
                                                    <ul>
                                                        <li className="menu_dev_padding_bottom_top_20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/why-thaibulksms/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about01 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Why use ThaiBulkSMS?']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['How is sending SMS with ThaiBulkSMS better than others?']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="li_padding_bottom20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/speed-and-reliable/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about05 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Speed and Reliable']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Why Thaibulk faster']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="li_padding_bottom20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/lowprice/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about06 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Reasonable SMS']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Why ThaiBulkSMS cheaper']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="li_padding_bottom20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about02 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header['Contact us']}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Contact to ThaiBulkSMS']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="li_padding_bottom20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about03 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        Reseller
                                                                        Program
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Special reseller program from ThaiBulkSMS']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li className="li_padding_bottom20">
                                                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                                                            <a>
                                                                <span className="new_icon_title_menu_about04 icon_logo_new_menu_width">
                                                                    <h6 className="text_title_left">
                                                                        {t.header.Member}
                                                                    </h6>
                                                                    <p className="txtSub text_sub_left">
                                                                        {t.header['Member Register Or Login']}
                                                                    </p>
                                                                </span>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 bg_menu">
                                                    <ul>
                                                        <h6 className="title_sub_menu_resource2">
                                                            {t.header.Contact}
                                                        </h6>
                                                        <li>
                                                            <Link href="tel:027986000">
                                                            <a>
                                                                <h6 className="new_text_contact_phone">
                                                                    <span className="new_text_margin_left">
                                                                        02-798-6000
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="mailto:contact@thaibulksms.com">
                                                            <a>
                                                                <h6 className="new_text_contact_mail">
                                                                    <span className="new_text_margin_left">
                                                                        contact@thaibulksms.com
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.facebook.com/ThaiBulkSMS">
                                                            <a>
                                                                <h6 className="new_text_contact_fb">
                                                                    <span className="new_text_margin_left">
                                                                        ThaiBulkSMS
                                                                    </span>
                                                                </h6>
                                                            </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="d-lg-none sm-right">
                                {/* <select className="user_select" onChange={(e) => onSwitchLanguage(e)} defaultValue={lang}>
                                <option value="th">TH</option>
                                <option value="en">EN</option>
                                    </select> */}
                                {/* <select
                    className="user_select"
                    onChange={(e) => onSwitchLanguage(e.currentTarget.value)}
                    value={lang}
                >
                    {MySelect}
                </select> */}
                                <span className="mobile-bar js-menu-toggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div className="site-mobile-menu">
                                <div className="site-mobile-menu-header">
                                    <div className="row">
                                        <div className="col-8">
                                            <Link href="/">
                                            <a
                                                className="navbar-brand p-0 m-0 img-logo-title-menu-mobile closemenu"
                                            >
                                                {/* <img
                                                    className=""
                                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
                                                    alt="Logo"
                                                    width="216"
                                                    height="28"
                                                /> */}
                                                <span>
                                                    <Image loader={myLoader} src="logo_1.png" alt="Logo" width={216} height={28}/>
                                                </span>
                                            </a>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <div className="site-mobile-menu-close  js-menu-toggle">
                                                <span className="ion-ios-close-empty"></span>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="site-mobile-menu-body lazyload"
                                    data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-menu-mobile.jpg [(max-width:767px)]`}
                                >
                                    {/* <div className="site-mobile-menu-body"> */}
                                    <ul className="title-sub-menu-mobile">
                                        <li>
                                            <span
                                                className="show-site-sub-menu block-link-title-menu-mobile"
                                                data-name="product"
                                            >
                                                {t.header.Products}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="title-sub-menu-mobile text-left">
                                        <li className="">
                                            <Link href={
                                                    process.env
                                                        .NEXT_PUBLIC_DOMAIN_URL +
                                                    '/pricing/'
                                                }>
                                            <a
                                                className="closemenu"
                                            >
                                                {t.header.Pricing}
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="title-sub-menu-mobile">
                                        <li className="">
                                            <span
                                                className="show-site-sub-menu block-link-title-menu-mobile"
                                                data-name="resource"
                                            >
                                                {t.header.Database}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="title-sub-menu-mobile">
                                        <li className="">
                                            <span
                                                className="show-site-sub-menu block-link-title-menu-mobile"
                                                data-name="support"
                                            >
                                                {t.header.Support}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="title-sub-menu-mobile">
                                        <li className="">
                                            <span
                                                className="show-site-sub-menu block-link-title-menu-mobile"
                                                data-name="documentation"
                                            >
                                                {t.header['For Developers']}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="title-sub-menu-mobile">
                                        <li className="">
                                            <span
                                                className="show-site-sub-menu block-link-title-menu-mobile"
                                                data-name="aboutme"
                                            >
                                                {t.header['About the Company']}
                                            </span>
                                        </li>
                                    </ul>
                                    <HeaderLoginMenuMobile
                                        isLogin={isLogin}
                                    />
                                </div>
                            </div>
                            {/* new sub menu mobile */}
                            <div id="product">
                                <div className="site-sub-menu">
                                    <div>
                                        <HeaderTopMenuMobile />
                                    </div>
                                    <div className="block_detail_menu_mobile">
                                        <div className="padding_left_right_new_sub_menu_25">
                                            <ul className="show-site-sub-menu title-menu-mobile">
                                                <li className="title-menu-mobile arrow-back-to-menu-mobile">
                                                    {/* <img
                                                        className="arrow-back-to-menu-mobile"
                                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                                                        alt="left-arrow.png"
                                                        width="34"
                                                        height="34"
                                                    /> */}
                                                    <span className="arrow-back-to-menu-mobile">
                                                        <Image loader={myLoader} src="left-arrow.png" alt="left-arrow.png" width={34} height={34}/>
                                                    </span>
                                                </li>
                                                <li className="title-menu-mobile">
                                                    <h5 className="head-site-sub-menu">
                                                        {t.header.Products}
                                                    </h5>
                                                </li>
                                            </ul>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/'
                                                        }>
                                                    <a>
                                                        <a className="closemenu">
                                                            {/* <img
                                                                className="icon-title-menu-mobile"
                                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon01.svg`}
                                                                alt="menu-icon_Product-icon01.svg"
                                                                width="50"
                                                                height="50"
                                                            /> */}
                                                            <span className="icon-title-menu-mobile">
                                                                <Image loader={myLoader} src="menu-icon_Product-icon01.svg" alt="menu-icon_Product-icon01.svg" width={50} height={50}/>
                                                            </span>
                                                            {t.header['Our Strength']}
                                                        </a>
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5 className="head-site-sub-menu">
                                                {t.header['For Marketing']}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/smart-sms-console/'
                                                        }
                                                        >
                                                    <a className="closemenu">
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon02.svg`}
                                                            alt="menu-icon_Product-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon02.svg" alt="menu-icon_Product-icon02.svg" width={50} height={50}/>
                                                        </span>
                                                        Smart SMS Console
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/sms-tracking/'
                                                        }
                                                        >
                                                    <a className="closemenu">
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon03.svg`}
                                                            alt="menu-icon_Product-icon03.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon03.svg" alt="menu-icon_Product-icon03.svg" width={50} height={50}/>
                                                        </span>
                                                        SMS Tracking
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/location-based-sms/'
                                                        }>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon04.svg`}
                                                            alt="menu-icon_Product-icon04.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon04.svg" alt="menu-icon_Product-icon04.svg" width={50} height={50}/>
                                                        </span>
                                                        Location Based SMS
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/global-sms/'
                                                        }>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon05.svg`}
                                                            alt="menu-icon_Product-icon05.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon05.svg" alt="menu-icon_Product-icon05.svg" width={50} height={50}/>
                                                        </span>
                                                        Global SMS
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5 className="head-site-sub-menu">
                                                {t.header['For Developers']}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/sms-api/'
                                                        }>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon06.svg`}
                                                            alt="menu-icon_Product-icon06.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon06.svg" alt="menu-icon_Product-icon06.svg" width={50} height={50}/>
                                                        </span>
                                                        SMS API
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={
                                                            process.env
                                                                .NEXT_PUBLIC_DOMAIN_URL +
                                                            '/product/otp/'
                                                        }>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon07.svg`}
                                                            alt="menu-icon_Product-icon07.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Product-icon07.svg" alt="menu-icon_Product-icon07.svg" width={50} height={50}/>
                                                        </span>
                                                        OTP Service
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu_btn_margin_bottom">
                                            <HeaderLoginMenuMobile
                                                isLogin={isLogin}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="resource">
                                <div className="site-sub-menu">
                                    <HeaderTopMenuMobile />
                                    <div className="block_detail_menu_mobile">
                                        <div className="padding_left_right_new_sub_menu_25">
                                            <ul className="show-site-sub-menu title-menu-mobile">
                                                <li className="title-menu-mobile arrow-back-to-menu-mobile">
                                                    {/* <img
                                                        className="arrow-back-to-menu-mobile"
                                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                                                        alt="left-arrow.png"
                                                        width="34"
                                                        height="34"
                                                    /> */}
                                                    <span className="arrow-back-to-menu-mobile">
                                                        <Image loader={myLoader} src="left-arrow.png" alt="left-arrow.png" width={34} height={34}/>
                                                    </span>
                                                </li>
                                                <li className="title-menu-mobile">
                                                    <h5 className="head-site-sub-menu">
                                                        {t.header.Database}
                                                    </h5>
                                                </li>
                                            </ul>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon01.svg`}
                                                            alt="menu-icon_resource-icon01.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon01.svg" alt="menu-icon_resource-icon01.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header.Database}
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5 className="head-site-sub-menu">
                                                {t.header['Tips and Knowledge']}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/marketing/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon05.svg`}
                                                            alt="menu-icon_resource-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon05.svg" alt="menu-icon_resource-icon05.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header.Marketing}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/tech/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon06.svg`}
                                                            alt="menu-icon_resource-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon06.svg" alt="menu-icon_resource-icon06.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header.Tech}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/features/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon07.svg`}
                                                            alt="menu-icon_resource-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon07.svg" alt="menu-icon_resource-icon07.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['ThaiBulkSMS Features']}
                                                    </a>
                                                    </Link>
                                                </li>

                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/use-cases/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon03.svg`}
                                                            alt="menu-icon_resource-icon03.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon03.svg" alt="menu-icon_resource-icon03.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Example Operations']}
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5 className="head-site-sub-menu">
                                                {t.header['Case Studies']}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/success-stories/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon04.svg`}
                                                            alt="menu-icon_resource-icon04.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_resource-icon04.svg" alt="menu-icon_resource-icon04.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Success Stories']}
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <HeaderLoginMenuMobile
                                            isLogin={isLogin}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="support">
                                <div className="site-sub-menu">
                                    <HeaderTopMenuMobile />
                                    <div className="block_detail_menu_mobile">
                                        <div className="padding_left_right_new_sub_menu_25">
                                            <ul className="show-site-sub-menu title-menu-mobile">
                                                <li className="title-menu-mobile arrow-back-to-menu-mobile">
                                                    {/* <img
                                                        className="arrow-back-to-menu-mobile"
                                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                                                        alt="left-arrow.png"
                                                        width="34"
                                                        height="34"
                                                    /> */}
                                                    <span className="arrow-back-to-menu-mobile">
                                                        <Image loader={myLoader} src="left-arrow.png" alt="left-arrow.png" width={34} height={34}/>
                                                    </span>
                                                </li>
                                                <li className="title-menu-mobile">
                                                    <h5 className="head-site-sub-menu">
                                                        {t.header.Support}
                                                    </h5>
                                                </li>
                                            </ul>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/how-to-order/`}>
                                                    <a
                                                        
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon01.svg`}
                                                            alt="menu-icon_support-icon01.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_support-icon01.svg" alt="menu-icon_support-icon01.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Ordering Methods']}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/support/faq/`}>
                                                    <a
                                                        
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon02.svg`}
                                                            alt="menu-icon_support-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_support-icon02.svg" alt="menu-icon_support-icon02.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Frequently Asked Questions']}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                                                    <a
                                                        
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon03.svg`}
                                                            alt="menu-icon_support-icon03.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_support-icon03.svg" alt="menu-icon_support-icon03.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Contact us']}
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="margin-top-sub-menu">
                                            <h5 className="head-site-sub-menu">
                                                {t.header.Contact}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href="tel:027986000">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                                            alt="phone.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="phone.png" alt="phone.png" width={30} height={30}/>
                                                        </span>
                                                        02-798-6000
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href="mailto:contact@thaibulksms.com">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                                            alt="mail.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="mail.png" alt="mail.png" width={30} height={30}/>
                                                        </span>
                                                        contact@thaibulksms.com
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href="https://www.facebook.com/ThaiBulkSMS">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                                            alt="fb.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="fb.png" alt="fb.png" width={30} height={30}/>
                                                        </span>
                                                        ThaiBulkSMS
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <HeaderLoginMenuMobile
                                            isLogin={isLogin}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="documentation">
                                <div className="site-sub-menu">
                                    <HeaderTopMenuMobile />
                                    <div className="block_detail_menu_mobile">
                                        <div className="padding_left_right_new_sub_menu_25">
                                            <ul className="show-site-sub-menu title-menu-mobile">
                                                <li className="title-menu-mobile arrow-back-to-menu-mobile">
                                                    {/* <img
                                                        className="arrow-back-to-menu-mobile"
                                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                                                        alt="left-arrow.png"
                                                        width="34"
                                                        height="34"
                                                    /> */}
                                                    <span className="arrow-back-to-menu-mobile">
                                                        <Image loader={myLoader} src="left-arrow.png" alt="left-arrow.png" width={34} height={34}/>
                                                    </span>
                                                </li>
                                                <li className="title-menu-mobile">
                                                    <h5 className="head-site-sub-menu">
                                                        {t.header['For Developers']}
                                                    </h5>
                                                </li>
                                            </ul>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    {/* <a href="/developer"> */}
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/developer/`}>
                                                    <a>
                                                        <div className="closemenu">
                                                            {/* <img
                                                                className="icon-title-menu-mobile"
                                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon01.svg`}
                                                                alt="menu-icon_Dev-icon01.svg"
                                                                width="50"
                                                                height="50"
                                                            /> */}
                                                            <span className="icon-title-menu-mobile">
                                                                <Image loader={myLoader} src="menu-icon_Dev-icon01.svg" alt="menu-icon_Dev-icon01.svg" width={50} height={50}/>
                                                            </span>
                                                            {t.header['Download Guide']}
                                                        </div>
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    {/* <a href="/developer#ex_sdk"> */}
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/developer/#ex_sdk`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon02.svg`}
                                                            alt="menu-icon_Dev-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Dev-icon02.svg" alt="menu-icon_Dev-icon02.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Download Example SDK']}
                                                    </a>
                                                    </Link>

                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href="https://developer.thaibulksms.com">
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon03.svg`}
                                                            alt="menu-icon_Dev-icon03.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_Dev-icon03.svg" alt="menu-icon_Dev-icon03.svg" width={50} height={50}/>
                                                        </span>
                                                        API References
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <HeaderLoginMenuMobile
                                            isLogin={isLogin}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="aboutme">
                                <div className="site-sub-menu">
                                    <HeaderTopMenuMobile />
                                    <div className="block_detail_menu_mobile">
                                        <div className="padding_left_right_new_sub_menu_25">
                                            <ul className="show-site-sub-menu title-menu-mobile">
                                                <li className="title-menu-mobile arrow-back-to-menu-mobile">
                                                    {/* <img
                                                        className="arrow-back-to-menu-mobile"
                                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                                                        alt="left-arrow.png"
                                                        width="34"
                                                        height="34"
                                                    /> */}
                                                    <span className="arrow-back-to-menu-mobile">
                                                        <Image loader={myLoader} src="left-arrow.png" alt="left-arrow.png" width={34} height={34}/>
                                                    </span>
                                                </li>
                                                <li className="title-menu-mobile">
                                                    <h5 className="head-site-sub-menu">
                                                        {t.header['About the Company']}
                                                    </h5>
                                                </li>
                                            </ul>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/why-thaibulksms/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon01.svg`}
                                                            alt="menu-icon_about-icon01.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_about-icon01.svg" alt="menu-icon_about-icon01.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Why use ThaiBulkSMS?']}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon02.svg`}
                                                            alt="menu-icon_about-icon02.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_about-icon02.svg" alt="menu-icon_about-icon02.svg" width={50} height={50}/>
                                                        </span>
                                                        {t.header['Contact us']}
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/reseller/`}>
                                                    <a
                                                        className="closemenu"
                                                    >
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon03.svg`}
                                                            alt="menu-icon_about-icon03.svg"
                                                            width="50"
                                                            height="50"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="menu-icon_about-icon03.svg" alt="menu-icon_about-icon03.svg" width={50} height={50}/>
                                                        </span>
                                                        Reseller Program
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="margin-top-sub-menu">
                                            <h5 className="head-site-sub-menu">
                                                {t.header.Contact}
                                            </h5>
                                            <ul className="title-sub-menu">
                                                <li className="sub-head-menu">
                                                    <Link href="tel:027986000">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                                            alt="phone.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="phone.png" alt="phone.png" width={30} height={30}/>
                                                        </span>
                                                        02-798-6000
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href="mailto:contact@thaibulksms.com">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                                            alt="mail.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="mail.png" alt="mail.png" width={30} height={30}/>
                                                        </span>
                                                        contact@thaibulksms.com
                                                    </a>
                                                    </Link>
                                                </li>
                                                <li className="sub-head-menu">
                                                    <Link href="https://www.facebook.com/ThaiBulkSMS">
                                                    <a>
                                                        {/* <img
                                                            className="icon-title-menu-mobile"
                                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                                            alt="fb.png"
                                                            width="30"
                                                            height="30"
                                                        /> */}
                                                        <span className="icon-title-menu-mobile">
                                                            <Image loader={myLoader} src="fb.png" alt="fb.png" width={30} height={30}/>
                                                        </span>
                                                        ThaiBulkSMS
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <HeaderLoginMenuMobile
                                            isLogin={isLogin}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end new sub menu mobile */}
                    <div className="col-lg-3 lg-none">
                        <div className="menu_btn">
                            <ul>
                                <li>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                                    <a
                                        
                                        className="loginLink"
                                    >
                                        {/* {t(
                                            'header::' +
                                                (isLogin === true
                                                    ? 'Enter the system'
                                                    : 'Login')
                                        )} */}
                                        {isLogin === true ? t.header['Enter the system'] : t.header['Login']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    {isLogin === true ? (
                                        <Link href={
                                            process.env
                                                .NEXT_PUBLIC_DOMAIN_URL +
                                            '/pricing/'
                                        }>
                                        <a
                                            className="btn v1"
                                        >
                                            {/* {t(`header::` + 'Buy')} */}
                                            {t.header['Buy']}
                                        </a>
                                        </Link>
                                    ) : (
                                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                        <a
                                            className="btn v1"
                                            
                                        >
                                            {/* {t(`header::` + 'Free trial')} */}
                                            {t.header['Free trial']}
                                        </a>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSubmodule;
