import Link from 'next/link';

// import PropTypes from 'prop-types';
// import 'react-modal-video/scss/modal-video.scss';
const SmsSection = () => {
    return (
        <div className="smsUser_section productsms lazyload">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section_title mt-120">
                            ระบบส่ง SMS ที่ใช้ง่าย ตอบโจทย์หลากหลาย User
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="row  justify-content-md-center">
                            <div className="col-lg-4 col-md-8">
                                <div className="smsUserType">
                                    <object
                                        type="image/svg+xml"
                                        data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icnUserType01.svg`}
                                    ></object>
                                    <p>มือใหม่</p>
                                    <ul>
                                        <li>
                                            แม้ไม่เคยส่ง SMS
                                            ผ่านเว็บมาก่อนก็สามารถใช้งานได้
                                        </li>
                                        <li>เจ้าหน้าที่พร้อมซัพพอร์ต</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="smsUserType">
                                    <object
                                        type="image/svg+xml"
                                        data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icnUserType02.svg`}
                                    ></object>
                                    <p>นักการตลาด</p>
                                    <ul>
                                        <li>
                                            มีเครื่องมือช่วยวัดผลว่าแคมเปญประสบความสำเร็จหรือไม่
                                        </li>
                                        <li>
                                            Report
                                            เชิงการตลาดที่เข้าใจง่ายเห็นภาพชัด
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="smsUserType">
                                    <object
                                        type="image/svg+xml"
                                        data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icnUserType03.svg`}
                                    ></object>
                                    <p>นักพัฒนา</p>
                                    <ul>
                                        <li>
                                            ส่งข้อความจากแพลตฟอร์มของคุณด้วย{' '}
                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api/`}>
                                            <a                                            >
                                                SMS API ที่ได้มาตรฐาน
                                            </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api/`}>
                                            <a>
                                                ระบบส่ง OTP พร้อมใช้
                                            </a>{' '}
                                            ไม่ต้องเขียนโปรแกรมเพิ่ม
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="btnPriceUser">
                                    <li>
                                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                        <a className="btn v3"
                                            target="_blank"
                                        >
                                            ทดลองใช้ระบบฟรี
                                        </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#all-pricing">
                                            <a className="btn v5">
                                                ดูราคาแพ็กเกจ
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
