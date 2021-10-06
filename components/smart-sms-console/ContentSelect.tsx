import { useRouter } from 'next/router'
import th from '../../public/locales/th/SmartSmsConsole.json';
import en from '../../public/locales/en/SmartSmsConsole.json';
// import PropTypes from 'prop-types';

const SmartSmsConsoleContentSection = () => {
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
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-bulk.svg`}
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_text_one v2">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: t.SmartSmsConsoleContentSection['<span>Send SMS messages on your own through a website.</span> Sending is easy and can be quickly analyzed.'],
                            }}
                        >
                            {/* <span>{t('ส่ง SMS ผ่านเว็บไซต์')}</span> ได้ด้วยตนเอง ส่งง่าย วัดผลการส่งได้รวดเร็ว */}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
SmartSmsConsoleContentSection.getInitialProps = async () => ({
    namespacesRequired: ['SmartSmsConsole'],
});

// SmartSmsConsoleContentSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SmartSmsConsoleContentSection;
