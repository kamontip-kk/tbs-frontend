// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
// import th from '../../public/locales/th/Otp.json';
// import en from '../../public/locales/th/Otp.json';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const SmsSectionV3 = () => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3>กรณีพิมพ์หลายข้อความต่อกัน ในการส่งครั้งเดียว</h3>
                        <p>การพิมพ์หลายข้อความต่อกันในการส่งครั้งเดียว <span className="GreyB">ในทางเทคนิคจะมีส่วนของ Header มาทำหน้าที่เชื่อมแต่ละข้อความเข้าด้วยกัน เพื่อให้ผู้รับสามารถอ่านได้ในข้อความเดียว</span> ซึ่งจะมีการคำนวณตัวอักษรสำหรับ Header ด้วย</p>
                        <div className="calTextDetail">
                            <p className="detail01">Header ใน<br />ข้อความภาษาไทย</p>
                            <p className="detail02">3 ตัวอักษร / 1 เครดิต</p>
                        </div>
                        <div className="calTextDetail">
                            <p className="detail01">Header ใน<br />ข้อความภาษาอังกฤษ</p>
                            <p className="detail02">7 ตัวอักษร / 1 เครดิต</p>
                        </div>
                        <p>โดยคุณสามารถพิมพ์ได้สูงสุด 10 เครดิต (10 ข้อความต่อกัน) สำหรับการส่ง 1 ครั้ง</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img img-CalMessage">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-message.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-message.png" alt="img-message" width={100} height={100}/>
                        </span>
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
