import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
// import PropTypes from 'prop-types';
// import Link from 'next/dist/client/link';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
});
const SliderSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="slider_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_2.png`}
    >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section_title">
                        {t.SliderSection['SMS can be used for multiple purposes.']}{' '}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <OwlCarousel
                        items={4}
                        nav
                        dots={false}
                        autoplay
                        autoplayTimeout={8500}
                        loop
                        navText={[
                            '<i class="ion-ios-arrow-back"></i>',
                            '<i class="ion-ios-arrow-forward"></i>',
                        ]}
                        margin={30}
                        center
                        smartSpeed={2000}
                        responsiveClass
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 3,
                            },
                            1000: {
                                items: 4,
                            },
                        }}
                    >
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Notification of special privileges for members']}
                                </h3>
                                <p>
                                    {t.SliderSection['It is possible to send a notification of special privileges to a specific customer by name. Plus, it is possible to check whether the customer has opened the special privileges link or not.']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Notification of expiry date']}
                                </h3>
                                <p>
                                    {t.SliderSection['It is possible to send an SMS notifying the expiry date to customers automatically once the API is connected to the existing database.']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Sending identity verification OTP']}
                                </h3>
                                <p>
                                    {t.SliderSection['Sending a one-time-use password to increase the customers’ security when conducting online transactions']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Notification of delivery status']}
                                </h3>
                                <p>
                                    {t.SliderSection['Sending an SMS notifying the delivery status to customers in real-time automatically once the API is connected to the existing database.']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Notification of special privileges for members']}
                                </h3>
                                <p>
                                    {t.SliderSection['It is possible to send a notification of special privileges to a specific customer by name. Plus, it is possible to check whether the customer has opened the special privileges link or not.']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_item">
                                <h3>
                                    {t.SliderSection['Promotion of marketing activities']}
                                </h3>
                                <p>
                                    {t.SliderSection['Easy group messaging for promotional purposes. It is also simple to follow up on each customer’s clicks on the promotional links.']}
                                </p>
                                {/* <a >{t('a1')}</a> */}
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        {/* <p style={{ textAlign: 'center', marginTop: '50px', color: '#31b1e7' }}>
      {t('SliderSection::exampleBtn')}
    </p> */}
    </div>
    )
}
    
SliderSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// SliderSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SliderSection;
