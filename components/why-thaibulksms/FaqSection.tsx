import { useRouter } from 'next/router'
import th from '../../public/locales/th/WhyThaibulksms.json';
import en from '../../public/locales/en/WhyThaibulksms.json';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const FaqSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="faq_section lazyload"
        // style={{ backgroundImage: 'url(/img/bg_3.png)' }}
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
    >
        <div className="container">
            <div className="row align-items-center mt-5">
                <div className="col-xl-5 col-lg-12">
                    <div className="faq_bottom_text">
                        <h3>{t.FaqSection['Do you still have questions?']}</h3>
                        <p>
                            {t.FaqSection['Select your most convenient contact channel']}
                        </p>
                    </div>
                </div>
                <div className="col-xl-7 col-12-7">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`} alt="Image" width={100} height={100}/>
                                </span>
                                <Link href="tel:027986000">
                                <a className="btn v4">
                                    {t.FaqSection['Contact an officer']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`} alt="Image" width={100} height={100}/>
                                </span>
                                <Link href="/contact/">
                                    <a className="btn v4">
                                        {t.FaqSection['The officer will contact you back']}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="service_feature_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`} alt="Image" width={100} height={100}/>
                                </span>
                                <Link href="mailto:contact@thaibulksms.com">
                                <a
                                    className="btn v4"
                                >
                                    {t.FaqSection.Email}
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
FaqSection.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

// FaqSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default FaqSection;
// export default FaqSection;
