import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-tracking.json';
import en from '../../public/locales/en/Sms-tracking.json';
// import PropTypes from 'prop-types';
const HeroSectionV4 = () => {
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
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-smstracking.svg`}
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_text_one v2">
                        <span>
                            {t.HeroSection['Accurate SMS campaign measurement']}
                        </span>
                        <h1>
                            {t.HeroSection['results that prevent marketing budget wastage.']}
                        </h1>
                        <p>
                            {/* {t('p1')} <span>{t('span2')}</span> {t('p2')} */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
HeroSectionV4.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

// HeroSectionV4.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSectionV4;
