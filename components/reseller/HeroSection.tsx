// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/ResellerPage.json';
import en from '../../public/locales/en/ResellerPage.json';
const HeroSectionV3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="hero_section v3 lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_11.png`}
    >
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_img_one">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-reseller.svg`}
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_text_one v2">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: t.HeroSection['<span>SMS Reseller</span><br/> a special program for ThaiBulkSMS resellers'],
                            }}
                        ></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
HeroSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['ResellerPage'],
});

// HeroSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSectionV3;
