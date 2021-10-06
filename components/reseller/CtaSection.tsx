// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/ResellerPage.json';
import en from '../../public/locales/en/ResellerPage.json';
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
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: t.CtaSection['Rest assured that you will receive prices <br/>and various special benefits that are superior to those of other places.'],
                            }}
                        ></h3>
                        <Link href="/contact/">
                            <a className="btn v7">
                                {t.CtaSection['Additional inquiries']}
                            </a>
                        </Link>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: t.CtaSection['Or, call <a href="tel:02-798-6000">02-798-6000</a>'],
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
CtaSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['ResellerPage'],
});

// CtaSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default CtaSectionV2;
