// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const TrackSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="track_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
    >
        <div className="container">
            <div className="row track_top">
                <div className="col-md-6 col-md-push-6">
                    <div className="track_text">
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.TrackSection['Know the full confirmation status of every entry.'],
                            }}
                        ></h3>
                        <p>
                            {t.TrackSection['OTP password self-confirmation statuses are fully viewable for every entry, whether they are successful or have expired.']}
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="track_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_22.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="img_22.png" alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="track_box">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['Operation of the OTP transmission system can only be used on the <span>Corporate SMS package</span>'],
                                    }}
                                ></h4>
                                <Link href={`${process.env.NEXT_PUBLIC_BASE_ASSET}/documents/Thaibulksms-otp.pdf`}>
                                <a
                                    target="_blank"
                                    className="btn v3"
                                    
                                >
                                    {t.TrackSection['Usage Manual']}
                                </a>
                                </Link>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="track_box v2">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['If you have your OTP, you can connect with API as well.'],
                                    }}
                                ></h4>
                                <Link href="https://developer.thaibulksms.com/reference#otp">
                                <a
                                    target="_blank"
                                    className="btn v3"
                                >
                                    {t.TrackSection['Learn more']}
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// TrackSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSection;
