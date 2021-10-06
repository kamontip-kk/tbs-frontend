// import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const SimpleIconSection = () => {
  const [numStart, setnumStart] = useState(4662190879);
  const [numEnd, setnumEnd] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let startDate = 1597104000;
    let dayAt = 300000;
    let curTime = Math.floor(Date.now() / 1000);
    let remain =
      (Math.ceil((curTime - startDate) / 86400) -
        (curTime - startDate) / 86400) *
      86400 *
      7;
    setnumStart(
      numStart + Math.ceil(dayAt * ((curTime - startDate) / 86400))
    );
 
    setnumEnd(numStart + dayAt * Math.ceil((curTime - startDate) / 86400));
    setDuration(remain);
  }, []);
  return (
    <div className="simple_icon_section  bg-speed">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="newsletter_text">
              <h3>ทำไมเราถึงส่งได้เร็วและเสถียรกว่า</h3>
              <p>ThaiBulkSMS ใช้ระบบ Intelligent Routing ในการเลือกช่องทางส่งที่เร็วที่สุดให้โดยอัตโนมัติ คุณจึงมั่นใจได้ในความเร็วและความเสถียรของทุกการส่ง SMS</p>
              <p className="textNum">Transaction สูงสุดที่รองรับ / วินาที</p>
              <h3><span>400 TPS</span></h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="newsletter_img">
              {/* <img
                className="lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_15.png`}
                alt="Image"
              /> */}
              <span className="lazyload">
                <Image loader={myLoader} src="img_15.png" alt="Image" width={100} height={100}/>
              </span>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="sendOperator">
              <div className="sendOper">
                <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper01.svg`}
                ></object>
                <p>ส่งผ่าน 3 เครือข่ายโดยตรง</p>
              </div>
              <div className="sendOper">
                <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper02.svg`}
                ></object>
                <p>เลือกช่องทางส่ง ที่ตรงกับเครือข่ายเบอร์ผู้รับ</p>
              </div>
              <div className="sendOper">
                <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper03.svg`}
                ></object>
                <p>เลือกช่องทางส่งที่ดีที่สุดอัตโนมัติ</p>
              </div>
              <div className="sendOper">
                <object
                  type="image/svg+xml"
                  data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-oper04.svg`}
                ></object>
                <p>มีระบบจัดการคิวด้วย AI ไม่เกิดปัญหาคอขวด</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 secBrandSpeed">
            <p>จำนวน SMS ที่เราส่งไปจนถึงเวลานี้</p>
            <h2><CountUp
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
            /></h2>
            <p>แบรนด์ชั้นนำ ที่ส่ง SMS กับเรา</p>
            <div className="brandSpeed">
              <div className="imgBrand">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image loader={myLoader} src="logo-brand05.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
              <div className="imgBrand">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image loader={myLoader} src="logo-brand03.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
              <div className="imgBrand">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image loader={myLoader} src="logo-brand06.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
              <div className="imgBrand">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image loader={myLoader} src="logo-brand08.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
              <div className="imgBrand">
                {/* <img
                  className="lazyload"
                  data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                  alt="Image"
                /> */}
                <span className="lazyload">
                  <Image loader={myLoader} src="logo-brand04.png" alt="Image" width={100} height={100}/>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

// SimpleIconSection.propTypes = {
//   t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
