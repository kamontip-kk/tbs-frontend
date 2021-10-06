// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-alert.json';
import en from '../../public/locales/en/Sms-alert.json';
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
                        <h3>{t.CtaSection.ctasec1}</h3>
                        <Link href="/contact/">
                            <a className="btn v7 marginSide">
                                {t.CtaSection.ctasec2}
                            </a>
                        </Link>
                        <Link href="/pricing/">
                            <a className="btn v7 marginSide">
                                {t.CtaSection.ctasec3}
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
    namespacesRequired: ['Sms-alert'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;
