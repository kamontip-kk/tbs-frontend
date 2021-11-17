import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-tracking.json';
import en from '../../public/locales/en/Sms-tracking.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const SmsSectionV4 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.SmsSection['Real-time status checking on whether or not the recipient has read the message.'],
                            }}
                        ></h3>
                        <p>
                            {t.SmsSection['Free from issues where results cannot be measured after sending the SMS: sending with the Link feature through SMS Tracking allows you to accurately check the reading status, in addition to immediately following up on results after sending.']}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_21.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_21.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-top">
                            <div className="col-lg-9 col-md-12">
                                <div className="sms_form_text">
                                    <h4
                                        dangerouslySetInnerHTML={{
                                            __html: t.SmsSection['Word of mouth does not equal what the eye sees: test SMS Tracking on your own.'],
                                        }}
                                    ></h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="sms_form_field">
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                    <a
                                        className="btn v8"
                                    >
                                        {t.SmsSection['Free trial']}
                                    </a>
                                    </Link>
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
    
SmsSectionV4.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

// SmsSectionV4.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV4;
