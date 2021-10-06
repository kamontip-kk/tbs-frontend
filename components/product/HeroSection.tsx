import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
// import PropTypes from 'prop-types';
// import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const HeroSection = () =>{
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="hero_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_bg.png`}
    >
        {/* <img
            className="hero_curve lazyload"
            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/curve_1.png`}
            alt="Image"
        /> */}
        <div className="container">
            <div className="row align-item-center hero_top_one">
                <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                    <div
                        className="hero_text_one"
                        dangerouslySetInnerHTML={{
                            __html: t.HeroSection['<span>Improve the results of SMS campaigns</span><p> with Thailand’s No.1 </p><h1>SMS Communication Platform</h1>'],
                        }}
                    ></div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                    <div className="hero_img_one">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/banner-product.svg`}
                        ></object>
                    </div>
                </div>
            </div>
            {/* <div className="row align-items-center hero_bottom_one">
                <div className="col-lg-6">
                    <div className="hero_img_two">
                        <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/hero_2.png`}
                            alt="Image"
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero_text_two">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'HeroSection::A complete SMS sending service with large coverage, easy sending process and trusted by various businesses'
                                ),
                            }}
                        ></span>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: t(
                                    'HeroSection::<span>SMS Communication Platform.</span><br>Thailand’s No.1 SMS sending company'
                                ),
                            }}
                        ></h2>
                        <p>
                            {t(
                                'HeroSection::This is why you can trust the service of ThaiBulkSMS just like how multiple leading businesses trust us.'
                            )}
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    )
}

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;
