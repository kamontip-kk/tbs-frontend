import { useRouter } from 'next/router'
import th from '../../public/locales/th/Pricing.json';
import en from '../../public/locales/en/Pricing.json';
// import PropTypes from 'prop-types';
import * as React from 'react';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const PricingSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {}, []);
    return (
        <div
            className="pricing-section position-relative pricing__top lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
        >
            <div className="container pricing">
                <h1 className="headPricing">ราคาแพ็กเกจส่ง SMS ออนไลน์<br />ราคาเพียง 0.21 บาท/ข้อความ</h1>
                <div className="row justify-content-center mt-80">
                    <div className="col-lg-6 col-xl-4 col-md-6 pricing_right">
                        <div
                            className="pricing_box m-0 pricing_box1"
                            style={{
                                borderTop: '8px solid #31b1e7',
                                backgroundColor: '#fff',
                            }}
                        >
                            <h2
                                className="nameTypePackage"
                                style={{ fontSize: '40px' }}
                            >
                                STANDARD SMS
                            </h2>
                            <p style={{ fontSize: '22px', color: '#5b6e80' }}>
                                {t.PricingSection['Cheap SMS sending']}
                            </p>
                            <ul className="pricing_feature">
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PricingSection['Cheaper prices for SMS sending']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PricingSection['Sending reports are available.']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PricingSection['All basic features are available.']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PricingSection['Tools for measuring campaign results are provided.']}
                                    </p>
                                </li>
                            </ul>
                            <div className="price_plan">
                                <span>
                                    {t.PricingSection['Best SMS pricing, only']}
                                </span>
                                <h2
                                    className="text_edit_en"
                                    style={{ fontWeight: 500 }}
                                >
                                    0.21
                                    <span style={{ marginLeft: '10px' }}>
                                        {t.PricingSection['baht / message']}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 col-md-6">
                        <div
                            className="pricing_box m-0"
                            style={{
                                borderTop: '8px solid #31b1e7',
                                backgroundColor: '#fff',
                            }}
                        >
                            <h2
                                className="nameTypePackage"
                                style={{ fontSize: '40px' }}
                            >
                                CORPORATE SMS
                            </h2>
                            <p style={{ fontSize: '22px', color: '#5b6e80' }}>
                                {t.PricingSection['Credits are refunded if the messages fail to reach the recipients.']}
                            </p>
                            <ul className="pricing_feature">
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PricingSection['Every feature of Standard SMS']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PricingSection['A ready-to-use OTP sending system']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PricingSection['Credit refunds if the messages fail to reach the recipients']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PricingSection['More detailed information on sending status']}
                                    </p>
                                </li>
                            </ul>
                            <div className="price_plan">
                                <span>
                                    {t.PricingSection['Best SMS pricing, only']}
                                </span>
                                <h2
                                    className="text_edit_en"
                                    style={{ fontWeight: 500 }}
                                >
                                    0.24
                                    <span style={{ marginLeft: '10px' }}>
                                        {t.PricingSection['baht / message']}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <img
                className="img-fluid bg__img img__1 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`}
                alt=""
            /> */}
            <span className="img-fluid bg__img img__1 lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`} alt="Image" width={100} height={100}/>
            </span>
            {/* <img
                className="img-fluid bg__img img__2 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`}
                alt=""
            /> */}
            <span className="img-fluid bg__img img__2 lazyload">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`} alt="Image" width={100} height={100}/>
            </span>
        </div>
    );
};

PricingSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

// PricingSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default PricingSection;
