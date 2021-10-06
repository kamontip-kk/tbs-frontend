import { useRouter } from 'next/router'
import th from '../../public/locales/th/WhyThaibulksms.json';
import en from '../../public/locales/en/WhyThaibulksms.json';
import Link from 'next/dist/client/link';
// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const WhyBrandSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="simple_icon_section v2 bg-whyTop">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t.BrandSection['A leading, trustworthy brand: ThaiBulkSMS']}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row single_lang_wrap WhyBrand m-80">
                <div className="col-xl-10 offset-xl-1">
                    <div className="row ">
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand01.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand01.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand02.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand02.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand03.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand04.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand05.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand06.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang why-brand">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand07.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand07.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4">
                            <div className="single_lang">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="logo-brand08.png" alt="Image" width={100} height={100}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12 text-center">
          <a className="btn v3">ขั้นตอนการใช้งาน</a>
        </div> */}
            </div>
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t.BrandSection['Quick sending, rapid receipt, and confidently stable transmissions using Intelligent Routing']}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img-why"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload size-img-why">
                            <Image loader={myLoader} src="icon-why01.png" alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.BrandSection['3 direct networks can be used for sending']}
                            </h4>
                            <p>
                                {t.BrandSection['Messaging therefore proceeds quickly and with high stability. No bottlenecks occur because we have many channels available for transmission.']}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img-why"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload size-img-why">
                            <Image loader={myLoader} src="icon-why02.png" alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.BrandSection['Selecting a transmission channel that corresponds with the network of the recipient number']}
                            </h4>
                            <p>
                                {t.BrandSection['We have a network inspection system for the number of the recipient, which filters SMS messages to be sent directly through that network, allowing quicker messaging.']}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img-why"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon-why03.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload size-img-why">
                            <Image loader={myLoader} src="icon-why03.png" alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.BrandSection['Automatic selection of the best channel']}
                            </h4>
                            <p>
                                {t.BrandSection['If any channel experiences problems, the system is able to immediately shift messaging to other channels, in addition to having backup transmission systems.']}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center mt-80">
                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                    <a
                        className="btn v3"
                    >
                        {t.BrandSection['Free messaging trial']}
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

WhyBrandSection.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

// WhyBrandSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default WhyBrandSection;
