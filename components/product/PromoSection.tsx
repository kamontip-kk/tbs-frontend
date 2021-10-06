import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

// import PropTypes from 'prop-types';
const PromoSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="promo_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_5.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="promo_text">
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['A complete set of features meeting the needs of both marketers and developers'],
                            }}
                        ></h2>
                        <p>
                            {t.PromoSection['The user experience is designed to meet your requirements.']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="promo_item">
                        <div className="promo_title">
                            <p className="featureText">Smart SMS Console</p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t.PromoSection['Easy sending​ ​ and fast measurement of results​ ​ thanks to smart reports'],
                                }}
                            ></p>
                        </div>
                        <div className="promo_img">
                            <object
                                type="image/svg+xml"
                                data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-sms.svg`}
                                className="lazyload"
                            ></object>
                            <div className="btnFeatureP">
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a
                                    className="btn v8 promoImg"
                                >
                                   ทดลองใช้ฟรี
                                </a>
                                </Link>
                                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/smart-sms-console/`}>
                                <a
                                    className="btn v5 promoImg"
                                >
                                    ดูข้อมูลเพิ่มเติม
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="promo_item">
                        <div className="promo_title">
                            <p className="featureText">SMS API</p>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t.PromoSection['Easily connect to APIS, using over 10 languages'],
                                }}
                            ></p>
                        </div>
                        <div className="promo_img">
                            <object
                                type="image/svg+xml"
                                data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-api.svg`}
                                className="lazyload"
                            ></object>
                            <div className="btnFeatureP">
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                <a
                                    className="btn v8 promoImg"
                                >
                                    ทดลองใช้ฟรี
                                </a>
                                </Link>
                                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api/`}>
                                <a
                                    className="btn v5 promoImg"
                                >
                                    ดูข้อมูลเพิ่มเติม
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="promo_bottom_text">
                        {/* <p
              dangerouslySetInnerHTML={{
                __html: t('PromoSection::section.1.footer'),
              }}
            ></p> */}
                    </div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-airplane.svg`}
                            className="lazyload"
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>
                            {t.PromoSection['Instant credit refunds if messages fail to reach the recipients']}
                        </h3>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['Confirmation at the recipient’s mobile phone is available for checking whether or not the SMS have arrived at the recipient’s end. If the SMS fail to reach the recipients due to being blocked by anti-spam systems, the phone being switched off, the phone having run out of memory or other causes, we will refund the credits to you.'],
                            }}
                        ></p>
                        {/* <a className="link" >
              {t('PromoSection::section.2.link')}
            </a> */}
                        <h6
                            className="promo_link"
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['These features are available only for <span>the Corporate SMS package</span>'],
                            }}
                        ></h6>
                    </div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="service_feature_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['Measuring the results of your campaign accurately <br>with SMS Tracking'],
                            }}
                        ></h3>
                        <p>
                            {t.PromoSection['Instantly follow through on customers or target groups after pressing send. Also possible to check whether or not the recipient has read your messages.']}
                        </p>
                        <Link href="/product/sms-tracking">
                            <a className="link">
                                {t.PromoSection['How does SMS tracking work?']}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_4.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="img_4.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>
                                    {t.PromoSection['Know who has or has not opened your messages.']}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_5.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="img_5.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>
                                    {t.PromoSection['Know your campaign’s conversion rate.']}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_6.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="img_6.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>
                                    {t.PromoSection['Use the data to conduct lead scoring.']}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-credit.svg`}
                            className="lazyload"
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['An OTP system that is ready to use <br>and requires no extra programming'],
                            }}
                        ></h3>
                        <p>
                            {t.PromoSection['Helping developers to work more easily and conveniently. The initial set-up requires just a few clicks, then the codes for using with API will instantly be ready.']}
                        </p>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a
                            className="btn v2"
                        >
                            {t.PromoSection['Try for free']}
                        </a>
                        </Link>
                        <Link href="/product/otp">
                            <a className="link">
                                {t.PromoSection['Read more about OTP Ready-to-Use>']}
                            </a>
                        </Link>
                        <h6
                            className="promo_link"
                            dangerouslySetInnerHTML={{
                                __html: t.PromoSection['These features are available only for <span>the Corporate SMS package</span>'],
                            }}
                        ></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    

PromoSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// PromoSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default PromoSection;
