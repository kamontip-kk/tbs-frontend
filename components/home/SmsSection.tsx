// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TestQuickregister from '../quickregister/testQuickregister';
import CountUp from 'react-countup';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';

const SmsSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const [isLogin] = useState(Cookie.get('PASSCODE') ? true : false);
    const [numStart, setnumStart] = useState(4662190879);
    const [numEnd, setnumEnd] = useState(0);
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        let startDate = 1597104000;
        let dayAt = 300000;
        // let end = 1597363200;
        // 1 day = 86400

        let curTime = Math.floor(Date.now() / 1000);
        // console.log('WTF : ', (curTime - startDate) / 86400);
        let remain =
            (Math.ceil((curTime - startDate) / 86400) -
                (curTime - startDate) / 86400) *
            86400 *
            7;
        // console.log('remain : ', remain);
        // console.log(
        //   'start  >>>>>>>>>> : ',
        //   numStart + Math.ceil(dayAt * ((curTime - startDate) / 86400))
        // );
        setnumStart(
            numStart + Math.ceil(dayAt * ((curTime - startDate) / 86400))
        );
        // console.log(
        //   'end : ',
        //   numStart + dayAt * Math.ceil((curTime - startDate) / 86400)
        // );
        setnumEnd(numStart + dayAt * Math.ceil((curTime - startDate) / 86400));
        setDuration(remain);
    }, []);
    
    return (
        <div
            className="sms_section lazyload secHome"
            // data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mobile/promo_bg.jpg [(max-width:767px)] | ${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 ">
                        <div className="sms_text">
                            <h2>มั่นใจในความเร็วและความเสถียรในทุก ๆ การส่ง SMS</h2>
                            <p>ThaiBulkSMS มุ่งมั่นพัฒนาระบบให้คงความเสถียรสูงสุดในทุกเวลา รองรับการส่งปริมาณมากได้อย่างไม่ติดขัด เพื่อให้ทุกการสื่อสารผ่าน SMS ของคุณเป็นไปอย่างราบรื่นและมีประสิทธิภาพ</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="sms_feature">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="sms_feature_item">
                                        <p>จำนวนการส่ง SMS สูงสุดที่รองรับ / นาที</p>
                                        <div>24,000</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sms_feature_item">
                                        <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                                        <div>1,500,000+</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sms_feature_item">
                                        <p>Uptime</p>
                                        <div>99.95%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="sms_feature_item">
                                        <p>
                                            {t.SmsSection['The number of SMS sent by us up to now']}
                                        </p>
                                        {duration !== 0 && (
                                            <div>
                                                <CountUp
                                                    className="account-balance"
                                                    start={numStart}
                                                    end={numEnd}
                                                    duration={duration}
                                                    formattingFn={(number) => {
                                                        return `${String(
                                                            number
                                                        ).replace(
                                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                                            '$1,'
                                                        )}`;
                                                    }}
                                                />
                                            </div>
                                        )}
                                        {/* <h2>4,662,190,879</h2> */}
                                    </div>
                                    <a href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/speed-and-reliable/`} className="linkCountSMS">ทำไมระบบของ ThaiBulkSMS ถึงส่งเร็วและมีความเสถียรสูง? </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isLogin && <TestQuickregister />}
            </div>
        </div>
    );
};

SmsSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// SmsSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default React.memo(SmsSectionV2);
