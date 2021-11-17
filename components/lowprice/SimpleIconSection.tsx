// import PropTypes from 'prop-types';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const SimpleIconSection = ({  }: any) => (
  <div className="simple_icon_section bg-speed">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="simple_icon_title">
            <h3>การันตีราคา SMS บนหน้าเว็บที่ถูกที่สุด</h3>
          </div>
        </div>
      </div>
      <div className="row m-80">
          <div className="col-lg-10 offset-lg-1">
              <div className="row">
                  <div className="col-md-6">
                      <div className="simple_icon_btn">
                          <p className="headPriceLow">Standard SMS</p>
                          <h4 className="PriceLow">0.21</h4>
                          <p>บาท/ข้อความ</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="simple_icon_btn">
                          <p className="headPriceLow">Corporate SMS</p>
                          <h4 className="PriceLow">0.24</h4>
                          <p>บาท/ข้อความ</p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12 m-center">
                    <a href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`} className="btn v2">ติดต่อฝ่ายขาย</a>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="simple_icon_title">
            <h3>แบรนด์ชั้นนำที่วางใจ ThaiBulkSMS</h3>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 secBrandLowprice">
          <div className="brandLowprice">
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand05.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand03.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand06.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand04.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand01.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand01.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand02.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand02.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
            <div className="imgBrand">
              {/* <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand07.png`}
                    alt="Image"
                /> */}
                <span className="lazyload">
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand07.png`} alt="Image" width={100} height={100}/>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['Otp'],
});

// SimpleIconSection.propTypes = {
//   t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
