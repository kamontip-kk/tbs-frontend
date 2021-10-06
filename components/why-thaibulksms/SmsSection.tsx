import { useRouter } from 'next/router'
import th from '../../public/locales/th/WhyThaibulksms.json';
import en from '../../public/locales/en/WhyThaibulksms.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}
const SmsSectionV3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v3 ">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6 col-md-push-6">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-WhyNum1.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-WhyNum1.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="newsletter_text">
                        <h3>
                            {t.SmsSection['As Thailand’s Number 1 SMS Communication Platform, which can be personally confirmed,']}
                        </h3>
                        <p>
                            {t.SmsSection['ThaiBulkSMS provides the SMS Communication Platform that is certified by the National Broadcasting and Telecommunications Commission. We have been operating for over 10 years, so you can certainly rest assured in the quality of our service.']}
                        </p>
                    </div>
                </div>    
            </div>
            <div className="row m-80">
                <div className="col-md-6">
                    <div className="track_img mt-5">
                        {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysupport.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img-whysupport.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="track_text mt-5">
                        <h3>ซัพพอร์ตโดยทีมคนไทย ที่ให้บริการระดับโลก</h3>
                        <p>เรามีทีมซัพพอร์ตคนไทยคอยให้ความช่วยเหลือแม้นอกเวลาทำการ ติดต่อง่ายกว่า ไม่มีอุปสรรคด้านการสื่อสาร จึงแก้ปัญหาได้เร็วกว่า ทั้งนี้การให้บริการของเรายังได้มาตรฐานระดับโลก จากการที่เรามี 
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/product/global-sms/`}><a>บริการส่ง SMS ไปต่างประเทศ</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;
