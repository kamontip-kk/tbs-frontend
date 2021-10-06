import React from "react";
import Image from "next/dist/client/image";
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';
// import PropTypes from 'prop-types';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const FeatureSection = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'th' ? th : en;

    return(
    <div className="feature_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title"
                    dangerouslySetInnerHTML={{
                        __html: t.FeatureSection["Why ThaiBulk SMS"],
                    }}>
                    </h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-6 whyTBS">
                    <div className="single_feature_item">
                        <div className="spaceWhyImg">
                            {/* <img
                                className="lazyload size-img"
                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-WhyNum1.png`}
                                alt="Image"
                            /> */}
                            <span className="lazyload size-img">
                                <Image loader={myLoader} src="img-WhyNum1.png" alt="icon1" width={100} height={100}/>
                            </span>
                        </div>
                        <div className="single_feature_text">
                            <h3>{t.FeatureSection["No.1 SMS Platform"]}</h3>
                            <p>อันดับ 1 ของไทย ด้วยผู้ใช้ 200,000 คน และกว่า 3,000 บริษัท</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 whyTBS">
                    <div className="single_feature_item">
                        <div className="spaceWhyImg">
                            {/* <img
                                className="lazyload size-img"
                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-speed02.png`}
                                alt="Image"
                            /> */}
                            <span className="lazyload size-img">
                                <Image loader={myLoader} src="img-speed02.png" alt="icon2" width={100} height={100}/>
                            </span>
                        </div>
                        <div className="single_feature_text">
                            <h3>{t.FeatureSection["Fast & Reliable"]}</h3>
                            <p>ต่อตรงกับ 3 เครือข่ายหลัก จัดคิวส่งด้วย AI ไม่เกิดปัญหาคอขวด</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 whyTBS">
                    <div className="single_feature_item">
                        <div className="spaceWhyImg">
                            {/* <img
                                className="lazyload size-img"
                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lowPrice02.png`}
                                alt="Image"
                            /> */}
                            <span className="lazyload size-img">
                                <Image loader={myLoader} src="img-lowPrice02.png" alt="icon3" width={100} height={100}/>
                            </span>
                        </div>
                        <div className="single_feature_text">
                            <h3>Competitive Price</h3>
                            <p>การันตี ราคาดีที่สุด สำหรับการสั่งซื้อปริมาณมาก</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 whyTBS">
                    <div className="single_feature_item">
                        <div className="spaceWhyImg">
                            {/* <img
                                className="lazyload size-img"
                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysupport.png`}
                                alt="Image"
                            /> */}
                            <span className="lazyload size-img">
                                <Image loader={myLoader} src="img-whysupport.png" alt="icon4" width={100} height={100}/>
                            </span>
                        </div>
                        <div className="single_feature_text">
                            <h3>Localized Service</h3>
                            <p>ซัพพอร์ตระดับ Global โดยคนไทยเข้าใจ ใกล้ชิด ติดต่อง่าย</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

FeatureSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// FeatureSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(FeatureSection);
