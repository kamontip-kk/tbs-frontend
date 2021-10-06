// import PropTypes from 'prop-types';
import * as React from 'react';
// import { useRouter } from 'next/router';
// import th from '../../public/locales/th/CalCredit.json';
// import en from '../../public/locales/th/CalCredit.json';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const CalCreditSection = ({ }: any) => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;
    React.useEffect(() => {}, []);
    return (

        <div
            className="pricing-section position-relative bgCalCredit-top lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg-CalCredit.png`}
        >
            <div className="container pricing">
                <h3 className="headPricing">การคำนวณเครดิต</h3>
                <p className="subPricingB calCredit">ThaiBulkSMS คำนวณเครดิตจาก จำนวนตัวอักษร ในข้อความที่ส่งไปหาแต่ละเบอร์ผู้รับ<br />โดยข้อความภาษาไทยและภาษาอังกฤษ จะมีข้อกำหนดที่แตกต่างกัน</p>
                <div className="secCaltext">
                    <div className="caltextTH">
                        <p>ข้อความภาษาไทย</p>
                        <p className="textCount">70 ตัวอักษร</p>
                        <p>คิดเป็น 1 เครดิต</p>
                    </div>
                    <div className="caltextEN">
                        <p>ข้อความภาษาอังกฤษ</p>
                        <p className="textCount">160 ตัวอักษร</p>
                        <p>คิดเป็น 1 เครดิต</p>
                    </div>
                </div>
                
                <div className="textNote">
                    <p>หมายเหตุและข้อควรระวัง</p>
                    <ul>
                        <li>ในกรณีที่พิมพ์ภาษาไทยปนภาษาอังกฤษ ระบบจะใช้การนับแบบภาษาไทย</li>
                        <li>หากใช้อักขระพิเศษที่อยู่ในแป้นภาษาไทย เครดิตจะถูกนับแบบภาษาไทย</li>
                    </ul>
                </div>
            </div>

            {/* <img
                className="img-fluid bg__img img__1 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_25.png`}
                alt=""
            /> */}
            <span className="img-fluid bg__img img__1 lazyload">
                <Image loader={myLoader} src="img_25.png" alt="img_25" width={100} height={100}/>
            </span>
            {/* <img
                className="img-fluid bg__img img__2 lazyload"
                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__11.png`}
                alt=""
            /> */}
            <span className="img-fluid bg__img img__2 lazyload">
                <Image loader={myLoader} src="img_11.png" alt="img_11" width={100} height={100}/>
            </span>
        </div>
    );
};

CalCreditSection.getInitialProps = async () => ({
    namespacesRequired: ['CalCredit'],
});

// CalCreditSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CalCreditSection;