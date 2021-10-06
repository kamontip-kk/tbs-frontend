import dynamic from 'next/dynamic';
import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';
// import PropTypes from 'prop-types';

const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
});

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const PartnerSection = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="partner_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h6
                        className="partner_title"
                        style={{ textTransform: 'none' }}
                    >
                        {t.PartnerSection['Leading brands that trust ThaiBulkSMS']}
                    </h6>
                </div>
                <div className="col-md-12">
                    <OwlCarousel
                        className="partner_wrap"
                        items={5}
                        nav={false}
                        dots={false}
                        autoplay
                        autoplayTimeout={5500}
                        loop={true}
                        margin={30}
                        center
                        smartSpeed={2000}
                        responsiveClass
                        responsive={{
                            0: {
                                items: 3,
                            },
                            768: {
                                items: 5,
                            },
                            1000: {
                                items: 5,
                            },
                        }}
                    >
                        <div className="item">
                            <div className="partner_item">
                                {/* <img
                                    className="lazyload size-img"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_1.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                                <span className="lazyload size-img">
                                    <Image loader={myLoader} src="partner_logo_1.png" alt="partnerlogo1" width={175} height={155}/>
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_2.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="partner_logo_2.png" alt="partnerlogo2" width={175} height={155}/>
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_3.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="partner_logo_3.png" alt="partnerlogo3" width={175} height={155}/>
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_4.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="partner_logo_4.png" alt="partnerlogo4" width={175} height={155}/>
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/partner_logo_5.png`}
                                    alt="Image"
                                    width="159"
                                    height="120"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="partner_logo_5.png" alt="partnerlogo5" width={175} height={155}/>
                                </span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </div>
    )
}

PartnerSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// PartnerSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(PartnerSection);
