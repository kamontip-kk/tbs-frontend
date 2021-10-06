import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/FAQ.json';
import en from '../../public/locales/en/FAQ.json';
// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const FaqSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="faq_section lazyload"
        // style={{ backgroundImage: 'url(/img/bg_3.png)' }}
        // data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
    >
        <div className="container">
            <div className="row align-items-center mt-5">
                <div className="col-xl-5 col-lg-12">
                    <div className="faq_bottom_text">
                        <h3>
                            {t.HeroSection['Do you still have questions?']}
                        </h3>
                        <p>
                            {t.HeroSection['Select your most convenient contact channel']}
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
                                    <Image loader={myLoader} src="img_1.png" alt="Image" width={100} height={100}/>
                                </span>
                                <Link href="tel:027986000">
                                <a  className="btn v4">
                                    {t.HeroSection['Contact an officer']}
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
                                    <Image loader={myLoader} src="img_2.png" alt="Image" width={100} height={100}/>
                                </span>
                                <Link href="/contact/">
                                    <a className="btn v4">
                                        {t.HeroSection['The officer will contact you back']}
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
                                    <Image loader={myLoader} src="img_3.png" alt="Image" width={100} height={100}/>
                                </span>
                                <span className="btn v4">
                                    {t.HeroSection.Email}
                                </span>
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
    namespacesRequired: ['FAQ'],
});

// FaqSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default FaqSection;
