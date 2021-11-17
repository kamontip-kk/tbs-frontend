import { useRouter } from 'next/router'
import th from '../../public/locales/th/WhyThaibulksms.json';
import en from '../../public/locales/en/WhyThaibulksms.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const TrackSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="track_section bgWhy lazyload">
        <div className="container">
            <div className="row track_top">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title space_why_thaibulksms">
                        <h3 className="space_why_thaibulksms">
                            {t.TrackSection['Easily operated, no matter what category of User you are.']}
                        </h3>
                    </div>
                </div>
                <div className="col-lg-12 m-40">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="track_box whyBox">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['<span>For new users</span> who have yet to send SMS messages through the web.'],
                                    }}
                                >
                                    {/* <span>มือใหม่</span> ไม่เคยส่ง SMS ผ่านเว็บมาก่อน */}
                                </h4>
                                <p>
                                    {t.TrackSection['Sending SMS messages through ThaiBulkSMS is free from complications and does not require technical knowledge. If you are stuck with problems, there are many channels that are ready to assist.']}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="track_box whyBox v2">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['<span>For Marketers</span> who wish to analyze the effects of their SMS campaigns'],
                                    }}
                                >
                                    {/* <span>Marketer</span> ที่อยากวัดผลแคมเปญ SMS */}
                                </h4>
                                <p>
                                    {t.TrackSection['Results analysis tools and easily understandable reports are available, leading to future analyses on whether the campaign was successful.']}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="track_box whyBox v2">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['<span>For Developers</span> who write programs that link with APIs'],
                                    }}
                                >
                                    {/* <span>Developer</span> ที่ต้องเขียนโปรแกรมเชื่อมต่อ API */}
                                </h4>
                                <p>
                                    {t.TrackSection['Easy to code programs that link with APIs; a variety of languages are supported, and a system that supports OTP sending is included.']}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                    <a
                        className="btn v3"
                    >
                        {t.TrackSection['Try Sending Messages for Free']}
                    </a>
                    </Link>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-md-6 col-md-push-6">
                    <div className="track_img mt-5">
                        {/* <object type="image/svg+xml" data="/img/img-sms-track-page.svg"></object> */}
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysecure.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-whysecure.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="track_text mt-5">
                        <h3>
                            {t.TrackSection['Safely preserve your data with Internet Banking standards.']}
                        </h3>
                        <p>
                            {t.TrackSection['With an SSL security system that has the highest standards used in various Internet Banking platforms, you can rest assured that your use of ThaiBulkSMS will receive the same level of safety as that of Internet Banking.']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

// TrackSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSection;
