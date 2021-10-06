import Link from 'next/link';
// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const PromoSection = () => (
    <div
        className="promo_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-pricingC.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="promo_text">&nbsp;</div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/imgPricingC01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="imgPricingC01.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>ส่งข้อความโฆษณาแบบวัดผลได้</h3>
                        <p>
                            มีรายงานการส่งที่เจาะลึก
                            เป็นเจ้าเดียวที่สามารถรู้ว่าผู้รับเปิดข้อความหรือไม่{' '}
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/whitelist/`}>
                            <a
                                target="_blank" 
                            >
                                การันตีส่งถึงทุกเบอร์
                            </a>{' '}
                            </Link>
                            แม้แต่เบอร์ที่แจ้งบล็อก SMS โฆษณาไว้กับเครือข่าย{' '}
                            <span>หากส่งไม่ถึง เราพร้อมคืนเครดิตให้</span>
                        </p>
                        <div>
                            <Link href="#all-pricing">
                                <a className="btn v2"> ดูราคาแพ็กเกจ</a>
                            </Link>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                            <a
                                target="_blank"
                                className="btn v11"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                            </Link>
                        </div>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api/`}>
                        <a
                            target="_blank"
                        >
                            <Link href="">
                            <a className="link">
                                อ่านเพิ่มเติมเกี่ยวกับการวัดผล SMS
                            </a>
                            </Link>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12 order-lg-12">
                    <div className="promo_item_three_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_16.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img_16.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 order-lg-1">
                    <div className="service_feature_text">
                        <h3>ส่ง OTP ถึงทันที ไม่ Delay</h3>
                        <p>
                            ส่ง OTP ถึงลูกค้าแบบไม่ต้องรอ พร้อม{' '}
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/otp/`}>
                            <a
                                target="_blank"
                            >
                                ระบบ OTP พร้อมใช้
                            </a>{' '}
                            </Link>
                            ให้นำไปส่ง OTP ได้ทันที โดยไม่ต้องเขียนโปรแกรมเพิ่ม
                        </p>
                        <div>
                            <Link href="#all-pricing">
                                <a className="btn v2">ดูราคาแพ็กเกจ</a>
                            </Link>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                            <a
                                className="btn v11"
                                target="_blank"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-alert.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-alert.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>ส่งข้อความแจ้งเตือนด้วย API</h3>
                        <p>
                            เชื่อมต่อกับระบบคุณด้วย{' '}
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/sms-api/`}>
                            <a
                                target="_blank"
                            >
                                SMS API
                            </a>
                            </Link>{' '}
                            เพื่อส่งข้อความแจ้งเตือนนัดหมาย แจ้งสถานะขนส่ง ฯลฯ
                            มี SDK รองรับหลายภาษาคู่มือการใช้งานที่ทำตามได้ง่าย
                            พร้อมทีมเทคนิคคอยตอบคำถามและช่วยแก้ปัญหาแม้อยู่นอกเวลาทำการ
                        </p>
                        <div>
                            <Link href="#all-pricing">
                                <a className="btn v2">ดูราคาแพ็กเกจ</a>
                            </Link>
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                            <a
                                className="btn v11"
                                target="_blank"
                            >
                                ทดลองใช้ระบบฟรี
                            </a>
                            </Link>
                        </div>
                        <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/developer/`}>
                        <a
                            target="_blank"
                        >
                            <Link href="">
                            <a className="link">
                                ดูข้อมูลที่จำเป็นสำหรับนักพัฒนา
                            </a>
                            </Link>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
PromoSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// PromoSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default PromoSection;
