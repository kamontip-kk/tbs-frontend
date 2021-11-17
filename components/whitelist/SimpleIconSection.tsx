// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
import Link from 'next/dist/client/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const SimpleIconSection = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'th' ? th : en;

  return(
    <div className="simple_icon_section bg-speed">
    <div className="container">

      <div className="row align-items-center">
          <div className="col-lg-7">
              <div className="newsletter_img">
                {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whitelist02.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whitelist02.png`} alt="Image" width={100} height={100}/>
                </span>
              </div>
          </div>
          <div className="col-lg-5">
              <div className="newsletter_text">
                  <h3>การขอ Whitelist Sender Name จะเข้ามาช่วยลดปัญหา Anti-Spam</h3>
                  <p>การขอ Whitelist Sender Name เป็นการขออนุมัติจากเครือข่ายให้ SMS ที่ส่งจาก Sender Name ดังกล่าวสามารถเข้าถึงผู้รับที่เคยแจ้งว่าไม่ต้องการรับข้อความได้ จึงช่วยลดปัญหา Anti-Spam และเพิ่มโอกาสในการส่งถึงผู้รับได้มากขึ้น</p>
                  <p><span>*ไม่ครอบคลุมการส่งข้อความประเภทโฆษณาและการตลาด</span></p>
              </div>
          </div> 
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="iconWhitelist">
            <div className="Whitelist">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist01.svg`}
              ></object>
              <p>ผ่านการรับรองเบื้องต้น จากเครือข่าย</p>
            </div>
            <div className="Whitelist">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist02.svg`}
              ></object>
              <p>{t['ลดปัญหา Anti-Spam']}</p>
            </div>
            <div className="Whitelist">
              <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-whitelist03.svg`}
              ></object>
              <p>เพิ่มโอกาสในการส่งถึงผู้รับ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-xl-10">
          <div className="simple_icon_title">
            <h3>ขอ Whitelist ง่าย ๆ ใน 3 ขั้นตอน</h3>
            <div className="row m-60">
              <div className="col-lg-4 col-sm-12">
                <div className="stepWhitelist">
                    <object
                      type="image/svg+xml"
                      data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW01.svg`}
                  ></object>
                  <p>1. สั่งซื้อแพ็กเกจ</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="stepWhitelist">
                    <object
                      type="image/svg+xml"
                      data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW02.svg`}
                  ></object>
                  <p>2. แจ้งขอชื่อผู้ส่งที่ต้องการใช้ Whitelist</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="stepWhitelist">
                    <object
                      type="image/svg+xml"
                      data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-stepW03.svg`}
                  ></object>
                  <p>3. พร้อมใช้งานทันที หลังได้รับอนุมัติ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
          <div className="col-sm-8 col-md-6">
              <div className="sms_form_text text-center">
                  <h4 className="smWhitelist">แพ็กเกจเล็ก ก็ขอ Whitelist ได้เริ่มต้นที่ <span>3,500 บาท</span></h4>
              </div>
          </div>
          </div>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
              <div className="sms_form_field">
                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/pricing/`}>
                  <a
                      className="btn v8"
                  >
                      สั่งซื้อแพ็กเกจ
                  </a>
                </Link>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}
  
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

// SimpleIconSection.propTypes = {
//   t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
