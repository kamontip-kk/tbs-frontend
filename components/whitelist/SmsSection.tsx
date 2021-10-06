import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const SmsSectionV3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-push-6">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whitelist01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-whitelist01.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>

                </div>
                <div className="col-lg-5 col-md-pull-6">
                    <div className="newsletter_text">
                        <h3>70% ของการส่ง SMS ไม่ถึงผู้รับ มาจากปัญหา Anti-Spam</h3>
                        <p>สถานะ “Anti-Spam” ที่พบในรายงานการส่งข้อความ เกิดจากการที่ผู้รับปลายทางเคยแจ้งเครือข่ายไว้ว่า ไม่ต้องการรับ SMS โฆษณารบกวน (Spam) ทำให้ SMS ถูกส่งไปไม่ถึง</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_text">
                                    <h4>{t[`SMS แบบไหนบ้างที่เข้าข่ายเป็น Spam`]}</h4>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_field">
                                    <p className="textLeft">มักจะเป็น SMS ที่มีเนื้อหารบกวนผู้รับ เช่น การส่ง SMS ประเภทโฆษณา การตลาด และ การที่ผู้ส่งไม่ได้ขอ <span>Whitelist Sender Name</span> ก็จะทำให้เครือข่ายปลายทางถือว่าเป็นข้อความรบกวน (Spam) เช่นเดียวกัน</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;
