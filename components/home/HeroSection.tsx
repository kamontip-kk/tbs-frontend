import React from 'react';
import Link from 'next/link';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';

const HeroSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    
    // <div
    //     className="hero_section v2 lazyload"
    //     data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mobile/hero_img_2.webp [(max-width:767px)] | ${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_img_2.png`}
    // >

    return(
        <div className="hero_section v2">
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div className="hero_text_one">
                        <h1 dangerouslySetInnerHTML={{
                                __html:
                                t.HeroSection['Meeting every one of your SMS sending needs.']
                            }}>
                        </h1>
                        <p>ผู้ให้บริการอันดับ 1 ของไทย ราคาถูกเพียง 0.21 บาท/ข้อความ ส่งไว มั่นใจได้ในความเสถียร ครบจบในที่เดียว</p>
                        <ul className="cta-btn">
                            <li>
                                <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register`}> 
                                    <a className="btn v3">
                                        {t.HeroSection['Try SMS sending for free']}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing/">
                                    <a className="btn v5">
                                        {t.HeroSection['View package prices']}
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

HeroSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// HeroSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(HeroSectionV2);
