import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
import Link from 'next/link';

// import PropTypes from 'prop-types';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const PricingSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="pricing-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title pringHeadSpace">
                        {t.PricingSection['Packages and pricing']}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="pricing_box productPage">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/price_1.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="price_1.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h3>{t.PricingSection['STANDARD SMS']}</h3>
                        <p>{t.PricingSection['for cheap SMS sending']}</p>
                        <ul className="pricing_feature">
                            <li>
                                <i className="far fa-check-circle"></i>
                                <p>
                                    {t.PricingSection['Cheaper prices for SMS sending']}
                                </p>
                            </li>
                            <li>
                                <i className="far fa-check-circle"></i>
                                <p>
                                    {t.PricingSection['Sending reports are available.']}
                                </p>
                            </li>
                            <li>
                                <i className="far fa-check-circle"></i>
                                <p>
                                    {t.PricingSection['All basic features are available.']}
                                </p>
                            </li>
                            <li>
                                <i className="far fa-check-circle"></i>
                                <p>
                                    {t.PricingSection['Tools for measuring campaign results are provided.']}
                                </p>
                            </li>
                        </ul>
                        <div className="price_plan">
                            <span>
                                {t.PricingSection['Best SMS pricing, only']}
                            </span>
                            <h2>
                                {t.PricingSection['0.21']}{' '}
                                <span>{t.PricingSection['baht/message']}</span>
                            </h2>
                            <Link href="/pricing/">
                                <a className="btn v3">
                                    {t.PricingSection['View package prices']}
                                </a>
                            </Link>
                        </div>
                        <div className="price_bottom_text">
                            <p>{t.PricingSection['Who is this for?']}</p>
                            <ul>
                                <li>
                                    {t.PricingSection['Those who focus on high amounts of SMS sending']}
                                </li>
                                <li>
                                    {t.PricingSection['Those who prioritize the price']}
                                </li>
                                <li>
                                    {t.PricingSection['Those at the early stages of usage']}
                                </li>
                                <li>
                                    {t.PricingSection['Those who constantly update the database of recipients’ phone numbers']}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="pricing_box productPage coperateRate">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/price_2.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="price_2.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h3>{t.PricingSection['CORPORATE SMS']}</h3>
                        <p>
                            {t.PricingSection['Credits are refunded if the messages fail to reach the recipients.']}
                        </p>
                        <ul className="pricing_feature">
                            <li>
                                <i className="far fa-check-circle"></i>
                                <p>
                                    {t.PricingSection['Every feature of Standard SMS']}
                                </p>
                            </li>
                            <li>
                                <i
                                    className="fa fa-plus-circle"
                                    aria-hidden="true"
                                ></i>
                                <p>
                                    {t.PricingSection['A ready-to-use OTP sending system']}
                                </p>
                            </li>
                            <li>
                                <i
                                    className="fa fa-plus-circle"
                                    aria-hidden="true"
                                ></i>
                                <p>
                                    {t.PricingSection['Credit refunds if the messages fail to reach the recipients']}
                                </p>
                            </li>
                            <li>
                                <i
                                    className="fa fa-plus-circle"
                                    aria-hidden="true"
                                ></i>
                                <p>
                                    {t.PricingSection['More detailed information on sending status']}
                                </p>
                            </li>
                        </ul>
                        <div className="price_plan">
                            <span>
                                {t.PricingSection['Best SMS pricing, only']}
                            </span>
                            <h2>
                                {t.PricingSection['0.24']}{' '}
                                <span>{t.PricingSection['baht/message']}</span>
                            </h2>
                            <Link href="/pricing/">
                                <a className="btn v3">
                                    {t.PricingSection['View package prices']}
                                </a>
                            </Link>
                        </div>
                        <div className="price_bottom_text">
                            <p>{t.PricingSection['Who is this for?']}</p>
                            <ul>
                                <li>
                                    {t.PricingSection['Those looking to send OTP or transactional SMS']}
                                </li>
                                <li>
                                    {t.PricingSection['Those looking to send OTP without having to set up their own system']}
                                </li>
                                <li>
                                    {t.PricingSection['Those wishing to know whether or not the messages have reached the recipients']}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="pricing_bottom_text">
                        {/* <span>{t('span5')}</span> */}
                        <h3>
                            {t.PricingSection['Not sure yet which package to choose? We can offer you a free SMS sending trial.']}
                        </h3>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}>
                        <a
                            className="btn v3"
                        >
                            {t.PricingSection['Try SMS sending for free']}
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
PricingSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// PricingSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default PricingSection;
