import { useRouter } from 'next/router'
import th from '../../public/locales/th/Otp.json';
import en from '../../public/locales/en/Otp.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';

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
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.SmsSection['Easy checkups: in only a few clicks,<br/> the OTP can be sent.'],
                            }}
                        ></h3>
                        <p>
                            {t.SmsSection['You can send OTP self-verification messages to increase customer security without writing additional programs. Simply set the values for only a few steps, and a code will be ready for use with the API, which quickens Developer workflows.']}
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-credit.svg`}
                        ></object>
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
                                        {t.SmsSection['Immediately test the ready-to-use OTP transmission system']}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="sms_form_field">
                                    <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                                    <a className="btn v8">
                                        {t.SmsSection['Try for free']}
                                    </a>
                                    </Link>

                                    <Link href={`https://otp-manager.thaibulksms.com/login`}>
                                    <a className="btn otp"
                                        target="_blank"
                                    >
                                        {t.SmsSection.Login}
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
    namespacesRequired: ['Otp'],
});

// SmsSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmsSectionV3;
