import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
// import PropTypes from 'prop-types';
import TestQuickregister from '../quickregister/testQuickregister';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const SmsSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const [isOpen, setIsOpen] = useState(false);
    const [isLogin] = useState(Cookie.get('PASSCODE') ? true : false);
    return (
        <div
            className="sms_section productsms lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>
                                {t.SmsSection['Sending OTP without delays. Running your campaigns without interruptions.']}
                            </h3>
                            <p>
                                {t.SmsSection['ThaiBulkSMS uses an Intelligent Routing system to automatically select the fastest sending channel, so you  can be confident in the speed and stability of every instance of SMS sending.']}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="sms_feature">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>จำนวนการส่ง SMS โดยเฉลี่ย / วัน</p>
                                        <p>1,500,000+</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sms_feature_item">
                                        <p>ระยะเวลาส่ง SMS ออกจากระบบโดยเฉลี่ย</p>
                                        <p>
                                            0.75{' '}
                                            <span>
                                                {t.SmsSection.Seconds}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="sms_feature_item">
                                        <ModalVideo
                                            channel="youtube"
                                            isOpen={isOpen}
                                            videoId="v2ILWufxX8Y"
                                            onClose={() => setIsOpen(false)}
                                        />
                                        <Link href="">
                                        <a onClick={() => setIsOpen(true)}>
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/play_icon.png`}
                                                alt="Image"
                                            /> */}
                                            <span className="lazyload">
                                                <Image loader={myLoader} src="play_icon.png" alt="Image" width={100} height={100}/>
                                            </span>
                                            {t.SmsSection['Why can we send SMS so quickly?']}
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isLogin && <TestQuickregister />}
            </div>
            <style jsx>{`
                #overlay {
                    position: fixed;
                    display: none;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 2;
                    cursor: pointer;
                }

                #text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: 50px;
                    color: white;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                }
            `}</style>
        </div>
    );
};
SmsSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// SmsSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSection;
