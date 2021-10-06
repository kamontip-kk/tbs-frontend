// import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Developer.json';
import en from '../../public/locales/en/Developer.json';

const CtaSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="cta_section v2 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_10.png`}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className=" col-lg-12">
                    <div className="cta-text">
                        <h3>
                            {t.CtaSection['Immediately test the SMS API and OTP API']}
                        </h3>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a className="btn v7">
                            {t.CtaSection['Try for free']}
                        </a>
                        </Link>
                        <Link href="/contact/">
                            <a className="btn otp2">
                                {t.CtaSection['Additional inquiries']}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Developer'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };

export default CtaSectionV2;
