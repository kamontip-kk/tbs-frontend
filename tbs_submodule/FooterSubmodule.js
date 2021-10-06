import React from 'react';
import { useRouter } from 'next/router'
import th from '../public/locales/th/Footer.json';
import en from '../public/locales/en/Footer.json';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const myLoader = ({src}) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const FooterSubmodule = ({ ...props }) => {
    const { appConfig, hello } = props;
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const makeHomePageLink = (path) => {
        const url =
            appConfig?.['HOME_PAGE_URL'] || appConfig?.['URL_FRONTEND_WEB'] || '';
        return url + '/' + path + (path ? '/' : '');
    };

    return (
        <div className="footer_section">
            <div className="container" id="footer">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="footer_widget">
                            <Link href={makeHomePageLink('product')}>
                            <a>
                                <h4>{t.footer.Services}</h4>
                            </a>
                            </Link>
                            <ul>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'product/smart-sms-console'
                                        )}>
                                    <a
                                    >
                                        Smart SMS Console
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'product/sms-api'
                                        )}>
                                    <a
                                    >
                                        SMS API
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('product/otp')}>
                                    <a>
                                        OTP Service
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'product/sms-tracking'
                                        )}>
                                    <a
                                    >
                                        SMS Tracking
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'product/global-sms'
                                        )}>
                                    <a
                                    >
                                        Global SMS
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'product/location-based-sms'
                                        )}>
                                    <a
                                    >
                                        Location Based SMS
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-6">
          <div className="footer_widget">
            <h4>{t('footer.database')}</h4>
            <ul>
              <li>
                <Link href="/KnowledgeListing">
                  <a>{t('footer.knowledge')}</a>
                </Link>
              </li>
              <li>
                <Link href="/UseCasesListing">
                  <a>{t('footer.example')}</a>
                </Link>
              </li>
              <li>
                <Link href="/SuccessStoriesListing">
                  <a>{t('footer.successstories')}</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>{t('footer.smsbasic')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
                    <div className="col-md-3 col-6">
                        <div className="footer_widget">
                            <h4>{t.footer.Support}</h4>
                            <ul>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'support/how-to-order'
                                        )}>
                                    <a
                                    >
                                        {t.footer['Ordering Methods']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('support/faq')}>
                                    <a>
                                        {t.footer['Frequently Asked Questions']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('developer')}>
                                    <a>
                                        {t.footer['For Developers']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://developer.thaibulksms.com">
                                    <a
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        API References
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="footer_widget">
                            <h4>{t.footer['Use Cases']}</h4>
                            <ul>
                                <li>
                                    <Link href={makeHomePageLink('sms-marketing')}>
                                    <a>
                                        {t.footer['SMS Marketing']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('sms-alert')}>
                                    <a>
                                        {t.footer['SMS Alert']}
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="footer_widget">
                            <h4>{t.footer['About Us']}</h4>
                            <ul>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'why-thaibulksms'
                                        )}>
                                    <a
                                    >
                                        {t.footer['Why use ThaiBulkSMS?']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink(
                                            'speed-and-reliable'
                                        )}>
                                    <a
                                    >
                                        {t.footer['Speed and Reliable']}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('lowprice')}>
                                    <a>
                                        {t.footer.Cheap}
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('reseller')}>
                                    <a>
                                        SMS Reseller
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={makeHomePageLink('contact')}>
                                    <a>
                                        {t.footer['Contact us']}
                                    </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 md-none">
                        <div className="footer_contact">
                            <Link href="tel:027986000">
                            <a>
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                    alt="Image"
                                    width="30"
                                    height="30"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="phone.png" alt="Image" width={30} height={30}/>
                                </span>
                                02-798-6000
                            </a>
                            </Link>
                            <Link href="mailto:contact@thaibulksms.com">
                            <a>
                                {/* <img
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                    alt="Image"
                                    width="30"
                                    height="30"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="mail.png" alt="Image" width={30} height={30}/>
                                </span>
                                {' '}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            '<!--email_off-->contact@thaibulksms.com<!--/email_off-->',
                                    }}
                                ></span>
                            </a>
                            </Link>
                            <Link href="https://www.facebook.com/ThaiBulkSMS">
                            <a
                                target="_blank"
                                rel="noopener"
                            >
                                {/* <img
                                    className="lazyload"
                                    src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                    alt=""
                                    width="30"
                                    height="30"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="fb.png" alt="Image" width={30} height={30}/>
                                </span>
                                Follow Us
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer_bottom">
                            <div className="row align-items-end">
                                <div className="col-xl-6 col-lg-5 col-md-5">
                                    <div className="footer_logo">
                                        {/* <img
                                            className="lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_2.png`}
                                            alt="Image"
                                            width="253"
                                            height="34"
                                        /> */}
                                        <span className="lazyload">
                                            <Image loader={myLoader} src="logo_2.png" alt="Image" width={253} height={34}/>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-7 xs-none">
                                    <div className="footer_contact">
                                        <Link href="tel:027986000">
                                        <a>
                                            {/* <img
                                                className="lazyload"
                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                                alt="Image"
                                                width="30"
                                                height="30"
                                            /> */}
                                            <span className="lazyload">
                                                <Image loader={myLoader} src="phone.png" alt="Image" width={30} height={30}/>
                                            </span>
                                            02-798-6000
                                        </a>
                                        </Link>
                                        <Link href="mailto:contact@thaibulksms.com">
                                        <a>
                                            {/* <img
                                                className="lazyload"
                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                                alt=""
                                                width="30"
                                                height="30"
                                            /> */}
                                            <span className="lazyload">
                                                <Image loader={myLoader} src="mail.png" alt="Image" width={30} height={30}/>
                                            </span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        '<!--email_off-->contact@thaibulksms.com<!--/email_off-->',
                                                }}
                                            ></span>
                                        </a>
                                        </Link>
                                        <Link href="https://www.facebook.com/ThaiBulkSMS">
                                        <a
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {/* <img
                                                className="lazyload"
                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                                alt=""
                                                width="30"
                                                height="30"
                                            /> */}
                                            <span className="lazyload">
                                                <Image loader={myLoader} src="fb.png" alt="Image" width={30} height={30}/>
                                            </span>
                                            Follow Us
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer_copyright">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <ul className="footer_menu">
                                        <li>
                                            <Link href={makeHomePageLink(
                                                    'condition'
                                                )}>
                                            <a
                                            >
                                                Terms and Conditions
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={makeHomePageLink(
                                                    'policy'
                                                )}>
                                            <a
                                                
                                            >
                                                Privacy Policy
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <p className="copyright">
                                        Copyright © 2020 ThaiBulkSMS.com All
                                        rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSubmodule;
