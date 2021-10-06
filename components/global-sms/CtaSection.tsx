// import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/GlobalSMSPage.json';
import en from '../../public/locales/en/GlobalSMSPage.json';
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
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.CtaSection['Send SMS and OTP messages globally,<br /> quickly, and at value prices.'],
                            }}
                        ></h3>
                        <Link href="/contact/">
                            <a className="btn v7">
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
    namespacesRequired: ['GlobalSMSPage'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;
