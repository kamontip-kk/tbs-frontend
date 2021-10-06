// import PropTypes from 'prop-types';
const HeroSectionV3 = () => (
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
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-hero-speed.svg`}
                        ></object>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero_text_one v2">
                        <h1>ส่งเร็ว เสถียร <span>สื่อสารกับลูกค้าผ่าน</span> SMS ได้แบบไม่สะดุด</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
HeroSectionV3.getInitialProps = async () => ({
    namespacesRequired: ['Otp'],
});

// HeroSectionV3.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSectionV3;
