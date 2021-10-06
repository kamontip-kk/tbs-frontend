import Link from 'next/link';
// import PropTypes from 'prop-types';
import * as React from 'react';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const PricingSection = () => {
    React.useEffect(() => {}, []);
    return (
        <div
            className="pricing-section position-relative pricingB__top lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-pricingB.png`}
        >
            <div className="container pricing">
                <h1 className="headPricing">
                    บริการส่ง SMS ออนไลน์ ราคาถูก
                    <br />
                    <br />
                    เพียง <span>0.21 บาท/ข้อความ</span>
                </h1>
                <p className="subPricingB">
                    ผู้ให้บริการ SMS อันดับ 1 ของไทย ราคาถูก ส่งไว
                    <br />
                    มั่นใจได้ในความเสถียร ครบจบในที่เดียว
                </p>

                <ul className="btnPriceT">
                    <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a
                            className="btn v3"
                            target="_blank"
                        >
                            ทดลองส่งฟรี
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#all-pricing">
                            <a className="btn v5">ดูราคาแพ็กเกจ</a>
                        </Link>
                    </li>
                </ul>

                <div className="brandPrice">
                    <div className="imgBrandPrice">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand09.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="logo-brand09.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                    <div className="imgBrandPrice">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand10.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="logo-brand10.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                    <div className="imgBrandPrice">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand11.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="logo-brand11.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                    <div className="imgBrandPrice">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand08.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="logo-brand08.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                    <div className="imgBrandPrice">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo-brand12.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="logo-brand12.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="textScroll">
                    <p>ทำไม ThaiBulkSMS ถึงเป็นอันดับ 1</p>
                </div>
            </div>

            {/* <img
                className="img-fluid bg__img img__1 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`}
                alt="" 
            />*/}
            <span className="img-fluid bg__img img__1 lazyload">
                <Image loader={myLoader} src="img_25.png" alt="" width={100} height={100}/>
            </span>
            {/* <img
                className="img-fluid bg__img img__2 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`}
                alt=""
            /> */}
            <span className="img-fluid bg__img img__2 lazyload">
                <Image loader={myLoader} src="img__11.png" alt="" width={100} height={100}/>
            </span>
        </div>
    );
};

PricingSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

// PricingSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default PricingSection;
