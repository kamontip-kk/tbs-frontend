// import PropTypes from 'prop-types';
// import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Otp.json';
// import en from '../../public/locales/en/Otp.json';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const SimpleIconSection = ({  }: any) => {
  // const router = useRouter();
  //   const { locale } = router;
  //   const t = locale === 'th' ? th : en;

  return(
    <div className="simple_icon_section bg-speed">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xl-8">
          <div className="simple_icon_title">
            <h3 className="headSLA">ThaiBulkSMS ผู้ให้บริการ SMS<br /><span>เจ้าเดียวในไทยที่มี SLA</span></h3>
            <p className="subHeadSLA">เพื่อให้คุณใช้งาน ThaiBulkSMS ได้อย่างไร้กังวล ทั้งในด้านความเสถียรของระบบตลอดจนการซัพพอร์ตลูกค้าในด้านเทคนิคและปัญหาทั่วไปซึ่งถ้าหากไม่เป็นไปตามข้อตกลง เรารับประกันการชดเชยเครดิตให้คุณ</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center m-80">
          <div className="col-lg-7">
              <div className="newsletter_img">
                {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-SLA02.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image loader={myLoader} src="img-SLA02.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
          </div>
          <div className="col-lg-5">
              <div className="newsletter_text">
                  <h3>การันตีความเสถียร Uptime <span>99.95%</span></h3>
                  <p>การันตีระบบขัดข้องน้อยกว่า 4 ชั่วโมง 23 นาทีต่อปี ซึ่งหากไม่เป็นไปตามที่กำหนด เราจะทำการชดเชยเครดิตให้คุณตามที่ระบุไว้ในข้อตกลง</p>
              </div>
          </div> 
      </div>
      <div className="row justify-content-md-center">
        <div className="col-xl-8">
          <div className="simple_icon_title">
            <h3 className="headSLA">พร้อมรับเรื่องและแก้ปัญหาให้คุณ<br />แม้นอกเวลาทำการ</h3>
            <p className="subHeadSLA"><span>รับประกันการซัพพอร์ต 18/7</span> สำหรับปัญหาที่มีความรุนแรงระดับ High เพื่อให้มั่นใจว่าการใช้งาน SMS ของธุรกิจคุณจะดำเนินไปอย่างไม่สะดุด ให้บริการลูกค้าของคุณได้อย่างมั่นใจ ให้ ThaiBulkSMS ดูแลคุณ</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-xl-12">
          <div className="tableSLA">
            <table>
              <tr>
                <th rowSpan={2} className="row01">ระดับปัญหา</th>
                <th rowSpan={2}>ตัวอย่างปัญหาและบริการ</th>
                <th colSpan={2}>ช่วงเวลาที่ให้บริการ</th>
              </tr>
              <tr>
                <th className="row02">รับเรื่อง (Response)</th>
                <th className="row03">แก้ไขปัญหา (Restoration)</th>
              </tr>
              <tr>
                <td className="high">High</td>
                <td>
                  <ul>
                    <li>ไม่สามารถเข้าสู่ระบบ หรือไม่สามารถส่งข้อความได้</li>
                    <li>ระบบขัดข้อง หรือผิดปกติจากที่ควรจะเป็น</li>
                  </ul>
                </td>
                <td colSpan={2} className="boldText">ทุกวัน : 06.00 – 00.00 น.</td>
              </tr>
              <tr>
                <td className="medium">Medium</td>
                <td>
                  <ul>
                    <li>บริการที่แม้จะเกิดปัญหา แต่มีแนวทางแก้ไขชั่วคราวที่ทำให้ใช้งานปกติได้ </li>
                    <li>บริการส่วนอื่น ๆ ที่ไม่เกี่ยวข้องกับการเข้าสู่ระบบ และการส่งข้อความในหน้าเว็บไซต์ และ API</li>
                  </ul>
                </td>
                <td className="boldText">ทุกวัน : 06.00 – 00.00 น.</td>
                <td className="boldText">จันทร์ – ศุกร์ : 08.30 – 21.00 น.<br />เสาร์ – อาทิตย์ : 10.00 – 21.00 น.</td>
              </tr>
              <tr>
                <td rowSpan={2} className="low">Low</td>
                <td>
                  <ul>
                    <li>ติดต่อฝ่ายขาย</li>
                    <li>ขอใบเสนอราคา</li>
                  </ul>
                </td>
                <td className="boldText">ทุกวัน : 06.00 – 00.00 น.</td>
                <td className="boldText">จันทร์ – ศุกร์ : 08.30 – 21.00 น.<br />เสาร์ – อาทิตย์ : 10.00 – 21.00 น.</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>บริการเกี่ยวกับเอกสาร เช่น ใบเสร็จ, ใบกำกับภาษี</li>
                    <li>การตั้งค่า และขอเปลี่ยนแปลงข้อมูลบัญชีผู้ใช้ต่าง ๆ</li>
                    <li>บริการเกี่ยวกับการขอชื่อผู้ส่ง</li>
                    <li>บริการขอปลดบล็อกบัญชีผู้ใช้</li>
                  </ul>
                </td>
                <td className="boldText">ทุกวัน : 06.00 – 00.00 น.</td>
                <td className="boldText">จันทร์ – ศุกร์ : 08.30 – 21.00 น.<br />เสาร์ – อาทิตย์ : 10.00 – 21.00 น.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-xl-8">
          <div className="simple_icon_title">
            <Link href="">
              <a className="detailSLA">อ่านรายละเอียดข้อตกลงรับประกันคุณภาพ (Service Level Agreement)</a>
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
