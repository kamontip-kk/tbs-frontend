import dynamic from 'next/dynamic';
// import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Link from "next/dist/client/link";
import Image from 'next/image';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
});

const SimpleSliderSection = () => {
    const mainImage: any = useRef(null);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    function onInitialized(e: any) {
        let count = 0;
        e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
            (val: any) => {
                if (val.className === 'owl-item active') {
                    val.style.opacity = 0.5;
                    if (count === 0) {
                        val.style.opacity = 1;
                    }
                    count++;
                } else {
                    val.style.opacity = 0.5;
                }
            }
        );
    }
    function handlefade() {
        mainImage.current.classList.add('fade-exit-active');
    }
    function handleSelect(e: any) {
        mainImage.current.classList.remove('fade-exit-active');
        mainImage.current.classList.add('fade-enter-active');
        let count = 0;
        e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
            (val: any) => {
                val.style.opacity = 0.5;
            }
        );
        e.currentTarget.childNodes[0].childNodes[0].childNodes.forEach(
            (val: any) => {
                if (val.className === 'owl-item active') {
                    if (count === 0) {
                        val.style.opacity = 1;
                        val.children[0].children[0].childNodes.forEach(
                            (childval: any) => {
                                if (childval.className === 'linking') {
                                    if (mainImage.current !== null) {
                                        mainImage.current.data =
                                            childval.innerText;
                                    }
                                }
                            }
                        );
                        count++;
                    }
                }
            }
        );
    }
    return (
        <div className="simple_slider_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="simple_slider_heading_wrap">
                            <div className="simple_slider_heading">
                                <h2 dangerouslySetInnerHTML={{
                                        __html: t.SimpleSliderSection["Covering every purpose of SMS sending"],
                                    }}>
                                </h2>
                            </div>
                            <div className="simple_slider_heading_img">
                                <object
                                    ref={mainImage}
                                    type="image/svg+xml"
                                    data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/TBS-home-feature01.svg`}
                                ></object>
                                <style jsx>{`
                                    .fade-enter {
                                        opacity: 0;
                                    }
                                    .fade-exit {
                                        opacity: 1;
                                    }
                                    .fade-enter-active {
                                        opacity: 1;
                                    }
                                    .fade-exit-active {
                                        opacity: 0;
                                    }
                                    .fade-enter-active {
                                        transition: opacity 500ms;
                                    }
                                    .fade-exit-active {
                                        transition: opacity 1000ms;
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <OwlCarousel
                            className="simple_slider_wrapper"
                            items={2}
                            nav
                            dots={false}
                            loop
                            onTranslated={(e) => handleSelect(e)}
                            onTranslate={() => handlefade()}
                            onInitialized={(e) => onInitialized(e)}
                            navText={[
                                '<i class="ion-ios-arrow-back"></i>',
                                '<i class="ion-ios-arrow-forward"></i>',
                            ]}
                            // margin={30}
                            // center
                            smartSpeed={1000}
                            responsiveClass
                            mouseDrag={false}
                            responsive={{
                                0: {
                                    items: 1,
                                    margin: 20,
                                },
                                768: {
                                    items: 1,
                                },
                                992: {
                                    items: 1,
                                    center: true,
                                },
                                1200: {
                                    items: 2,
                                },
                            }}
                        >
                            <div className="item">
                                <div className="simple_slider_item">
                                    <h4 dangerouslySetInnerHTML={{
                                            __html: t.SimpleSliderSection["Promoting marketing activities"],
                                        }}>
                                    </h4>
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User01.png`}
                                        alt="Image"
                                        width="88"
                                        height="88"
                                    /> */}
                                    <div className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User01.png`} alt="user01" width={120} height={120}/>
                                    </div>
                                    <p>
                                        {t.SimpleSliderSection["On 20 June, extra discounts of up to 30% for organic products in the promotion. Click here to instantly receive the code."]}
                                        {/* <Link href="/">
                      <a >
                        <span>{t('SimpleSliderSection.item.1.link')}</span>
                      </a>
                    </Link> */}
                                    </p>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                    <a className="btn v9">
                                        {t.SimpleSliderSection["Try SMS sending for free"]}
                                    </a>
                                    </Link>
                                    <span
                                        className="linking"
                                        style={{ display: 'none' }}
                                    >
                                        {process.env.NEXT_PUBLIC_BASE_ASSET +
                                            '/img/TBS-home-feature01.svg'}
                                    </span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="simple_slider_item">
                                    <h4>
                                        {t.SimpleSliderSection["Notification of expiry date"]}
                                    </h4>
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User02.png`}
                                        alt="Image"
                                        width="88"
                                        height="88"
                                    /> */}
                                    <div className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User02.png`} alt="user02" width={120} height={120}/>
                                    </div>
                                    <p>
                                        {t.SimpleSliderSection["Your car insurance is expiring in July 2020. Click here to extend your insurance."]}
                                        {/* <Link href="/">
                      <a >
                        <span>{t('SimpleSliderSection.item.2.link')}</span>
                      </a>
                    </Link> */}
                                    </p>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>                        
                                        <a className="btn v9">
                                            {t.SimpleSliderSection["Try SMS sending for free"]}
                                        </a>
                                    </Link>
                                    <span
                                        className="linking"
                                        style={{ display: 'none' }}
                                    >
                                        {process.env.NEXT_PUBLIC_BASE_ASSET +
                                            '/img/TBS-home-feature02.svg'}
                                    </span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="simple_slider_item">
                                    <h4>
                                        {t.SimpleSliderSection["OTP for identity verification"]}
                                    </h4>
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User03.png`}
                                        alt="Image"
                                        width="88"
                                        height="88"
                                    /> */}
                                    <div className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User03.png`} alt="user03" width={120} height={120}/>
                                    </div>
                                    <p>
                                        {t.SimpleSliderSection["Your OTP password is 345034 (Reference code YXCSF). Please use it for identity verification within 5 minutes"]}
                                    </p>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                        <a className="btn v9">
                                            {t.SimpleSliderSection["Try SMS sending for free"]}
                                        </a>
                                    </Link>
                                    <span
                                        className="linking"
                                        style={{ display: 'none' }}
                                    >
                                        {process.env.NEXT_PUBLIC_BASE_ASSET +
                                            '/img/TBS-home-feature03.svg'}
                                    </span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="simple_slider_item">
                                    <h4>
                                        {t.SimpleSliderSection["Notification of delivery status"]}
                                    </h4>
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User04.png`}
                                        alt="Image"
                                        width="88"
                                        height="88"
                                    /> */}
                                    <div className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User04.png`} alt="user04" width={120} height={120}/>
                                    </div>
                                    <p>
                                        {t.SimpleSliderSection["Parcel no. ADJ0349234 is out for delivery. The parcel will be delivered in 1-3 working days. Click here to instantly receive the code."]}
                                        {/* <Link href="/">
                      <a >
                        <span>{t('SimpleSliderSection.item.4.link')}</span>
                      </a>
                    </Link> */}
                                    </p>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                    <a className="btn v9">
                                        {t.SimpleSliderSection["Try SMS sending for free"]}
                                    </a>
                                    </Link>
                                    <span
                                        className="linking"
                                        style={{ display: 'none' }}
                                    >
                                        {process.env.NEXT_PUBLIC_BASE_ASSET +
                                            '/img/TBS-home-feature04.svg'}
                                    </span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="simple_slider_item a">
                                    <h4>
                                        {t.SimpleSliderSection["Notification of special privilege for members"]}
                                    </h4>
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User05.png`}
                                        alt="Image"
                                        width="88"
                                        height="88"
                                    /> */}
                                    <div className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/User05.png`} alt="user05" width={120} height={120}/>
                                    </div>
                                    <p>
                                        {t.SimpleSliderSection["Today only, a 700.- coupon for Mr Natdanai. Click here to instantly receive the code."]}

                                        {/* <Link href="/">
                      <a >
                        <span>{t('SimpleSliderSection.item.5.link')}</span>
                      </a>
                    </Link> */}
                                    </p>
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>  
                                    <a className="btn v9">
                                        {t.SimpleSliderSection["Try SMS sending for free"]}
                                    </a>
                                    </Link>
                                    <span
                                        className="linking"
                                        style={{ display: 'none' }}
                                    >
                                        {process.env.NEXT_PUBLIC_BASE_ASSET +
                                            '/img/TBS-home-feature05.svg'}
                                    </span>
                                </div>
                            </div>
                        </OwlCarousel>
                        {/* <a  className="lang_link text-right pr-4">
              {t('SimpleSliderSection::Try SMS sending for free')}
              <img
                className="lazyload"
                data-src="/img/arrow_3.png"
                alt="Image"
              />
            </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

SimpleSliderSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// SimpleSliderSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(SimpleSliderSection);
