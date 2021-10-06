// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/WhyThaibulksms.json';
import en from '../../public/locales/en/WhyThaibulksms.json';
import Link from 'next/link';

const WhyPriceSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="simple_icon_section v2 bg-whyBottom">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>
                            {t.PriceSection['Focus on cheap prices or on full features can be selected according to your needs']}
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-xl-center col-xl-10 offset-xl-1 m-80">
                    <div className="col-lg-6 col-md-6">
                        <div
                            className="pricing_box m-0 pricing_box1 whyPrice"
                            style={{
                                borderTop: '8px solid #31b1e7',
                                backgroundColor: '#fff',
                            }}
                        >
                            <h3>{t.PriceSection['Standard Package']}</h3>
                            <ul className="pricing_feature">
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PriceSection['Cheaper messaging prices']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PriceSection['Viewable messaging reports']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PriceSection['Complete basic feature operations']}
                                    </p>
                                </li>
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PriceSection['Campaign analysis tools']}
                                    </p>
                                </li>
                            </ul>
                            <div className="price_plan">
                                <span>
                                    {t.PriceSection['The best SMS price is available at only']}
                                </span>
                                <h2>
                                    0.21
                                    <span style={{ marginLeft: '10px' }}>
                                        {t.PriceSection['baht / SMS']}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div
                            className="pricing_box m-0 whyPrice"
                            style={{
                                borderTop: '8px solid #31b1e7',
                                backgroundColor: '#fff',
                            }}
                        >
                            <h3>{t.PriceSection['Corporate Package']}</h3>
                            <ul className="pricing_feature">
                                <li>
                                    <i className="far fa-check-circle"></i>
                                    <p>
                                        {t.PriceSection['All the features of Standard SMS']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PriceSection['OTP messaging with a Ready-to-use system']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PriceSection['Credit refunds if recipients are unable to receive the messages']}
                                    </p>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-plus-circle"
                                        aria-hidden="true"
                                    ></i>
                                    <p>
                                        {t.PriceSection['More detailed messaging status checking']}
                                    </p>
                                </li>
                            </ul>
                            <div className="price_plan">
                                <span>
                                    {t.PriceSection['The best SMS price is available at only']}
                                </span>
                                <h2>
                                    0.24
                                    <span style={{ marginLeft: '10px' }}>
                                        {t.PriceSection['baht / SMS']}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <Link href="/product/">
                        <a className="btn v3 whyPricing">
                            {t.PriceSection['Learn more']}
                        </a>
                    </Link>

                    <Link href="/pricing/">
                        <a className="btn v5 whyPricing">
                            {t.PriceSection['View Package Prices']}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

WhyPriceSection.getInitialProps = async () => ({
    namespacesRequired: ['WhyThaibulksms'],
});

// WhyPriceSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default WhyPriceSection;
