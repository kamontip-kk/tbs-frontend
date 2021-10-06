// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-marketing.json';
import en from '../../public/locales/en/Sms-marketing.json';
import Link from 'next/link';
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
                        <h3>{t.CtaSection.marctasec1}</h3>
                        <Link href="/pricing/">
                            <a className="btn v7">
                                {t.CtaSection.marctasec2}
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
    namespacesRequired: ['Sms-marketing'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;
