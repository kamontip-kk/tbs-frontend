// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/SmartSmsConsole.json';
import en from '../../public/locales/en/SmartSmsConsole.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const SimpleIconSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    
    return(
        <div className="promo_section lazyload">
        <div className="container">
            <div className="row align-items-center row_pad">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img m-80">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-02.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>
                            {t.SimpleIconSection['Send more complex SMS messages through API calls.']}
                        </h3>
                        <p>
                            {t.SimpleIconSection['Sending SMS messages through API calls is used for sending automatic SMS warnings which must be linked to existing applications, websites, or databases, such as the shipping status notifications, expiry date notifications, or user OTP self-confirmation, etc.']}
                        </p>
                        {/* <a className="link" >
              {t('productpromo.section.2.link')}
            </a> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 promo_item">
                    <h3>
                        {t.SimpleIconSection['Quickly measure results with smart reports.']}
                    </h3>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS01.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.SimpleIconSection['Message opening status reports']}
                            </h4>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: t.SimpleIconSection['Know immediately if the recipient has opened the message for reading or not<br/>(through the use of  <span>SMS Tracking operation</span>)'],
                                }}
                            >
                                {/* รู้ได้ทันทีว่าผู้รับเปิดอ่านข้อความหรือไม่
                <br />
                (ผ่านการใช้งาน <span>SMS Tracking</span>) */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS02.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.SimpleIconSection['Detailed shipping status reports']}
                            </h4>
                            <p>
                                {t.SimpleIconSection['View the shipping status of each code, providing knowledge on which messages have not been collected by the recipients.']}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 whyTBS">
                    <div className="single_feature_item">
                        {/* <img
                            className="lazyload size-img"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS03.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-bulkSMS03.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <div className="single_feature_text">
                            <h4>
                                {t.SimpleIconSection['Retroactive reporting']}
                            </h4>
                            <p>
                                {t.SimpleIconSection['Able to retroactively select and view data reports.']}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="promo_item_three_img m-80">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-03.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-bulksms-03.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="service_feature_text">
                        <h3>
                            {t.SimpleIconSection['Create your own sender name for business credibility']}
                        </h3>
                        <p>
                            {t.SimpleIconSection['You can set your own Sender Name: aside from adding credibility once the message has been opened, this adds Branding to your business.']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['SmartSmsConsole'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
