// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/SMSAPIPage.json';
import en from '../../public/locales/en/SMSAPIPage.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
import Link from 'next/link';
const SmsSectionV3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="sms_section v2 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter_text">
                        <h2>{t.smsSection['SMS API for Developers']}</h2>
                        <p>
                            {t.smsSection['Connect using the language you selected with the ThaiBulkSMS API system.']}
                        </p>
                        <ul
                            className="api-des"
                            dangerouslySetInnerHTML={{
                                __html: t.smsSection['<li><div>Confident and reputable regarding matters of stability.</div></li><li><div>API connection security guaranteed.</div></li><li><div>Easily connect on your own within 5 minutes. </div></li><li><div>Operates in over 10 languages.</div></li>'],
                            }}
                        ></ul>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-aw-api01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-aw-api01.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form v2">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="sms_form_text">
                                    <h4>
                                        {t.smsSection['If you are stuck with any problems or have inquiries concerning API connection']}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href="/contact/">
                                        <a className="btn v8">
                                            {t.smsSection['Inquire with our specialists']}
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

SmsSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['SMSAPIPage'],
});

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;
