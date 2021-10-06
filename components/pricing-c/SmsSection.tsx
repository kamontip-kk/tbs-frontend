// import PropTypes from 'prop-types';
import TestQuickregister from '../quickregister/testQuickregister';
import 'react-modal-video/scss/modal-video.scss';
import { useState } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/dist/client/link';
const SmsSection = () => {
    const [isLogin] = useState(Cookie.get('PASSCODE') ? true : false);
    return (
        <div
            className="sms_section productsms priceT lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>
                                ส่งไว ภายใน 1 วินาที
                                รองรับการส่งได้หลักล้านต่อวัน
                            </h3>
                            <p>
                                ส่ง OTP แล้วถึงทันที Server มีความเสถียรสูง
                                พร้อมมีทีมเทคนิคคอยดูแลระบบตลอดเวลาให้คุณสื่อสารกับลูกค้าผ่าน
                                SMS ได้แบบไม่ติดขัด
                                ต่างจากผู้ให้บริการที่ไม่มีประสิทธิภาพที่จะสร้างความเสียหายให้ธุรกิจ
                                จึงไม่ควรเลือกที่ราคาถูกอย่างเดียว
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="sms_feature">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>
                                            จำนวนการส่ง SMS สูงสุดที่รองรับ /
                                            นาที
                                        </p>
                                        <p>24,000</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                                        <p>1,500,000+</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>Uptime</p>
                                        <p>99.95%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 textCenter">
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/speed-and-reliable/`}>
                        <a
                            className="linkSMSfast"
                            target="_blank"
                        >
                            ทำไมระบบของ ThaiBulkSMS
                            ถึงส่งเร็วและมีความเสถียรสูง?
                        </a>
                        </Link>
                    </div>
                </div>
                {!isLogin && <TestQuickregister />}
            </div>
        </div>
    );
};
SmsSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

// SmsSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSection;
