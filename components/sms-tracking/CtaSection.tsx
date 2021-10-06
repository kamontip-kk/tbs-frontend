import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-tracking.json';
import en from '../../public/locales/en/Sms-tracking.json';
// import PropTypes from 'prop-types';
import Link from 'next/dist/client/link';
const CtaSectionV3 = () => {
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
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.CtaSection['Avoid ineffective Marketing budget wastage <br/>through SMS Tracking.'],
                            }}
                        ></h3>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a
                            className="btn v7"
                        >
                            {t.CtaSection['Free trial']}
                        </a>
                        </Link>
                        <p>
                            {t.CtaSection.Or}{' '}
                            <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}>
                            <a>
                                {t.CtaSection['log in']}
                            </a>
                            </Link>{' '}
                            {t.CtaSection[', if you already have an account']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    

CtaSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

// CtaSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV3;
