// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/LocationBasedSMSPage.json';
import en from '../../public/locales/en/LocationBasedSMSPage.json';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const SimpleIconSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div className="simple_icon_section v2">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <div className="simple_icon_title">
                        <h3>{t.DesSection['Specify your desired area']}</h3>
                        <p>
                            {t.DesSection['Regardless of location, the area can receive messages so long as it has a phone signal. The transmission area can be specified under 2 categories']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-lg-6">
                    <div className="track_box productBox">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-lbs01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="icn-lbs01.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h4>
                            <span>
                                {t.DesSection['Areas in important locations']}
                            </span>
                        </h4>
                        <p>
                            {t.DesSection['Messages can be sent in important areas or locations throughout the country, such as airports, shopping centers, or product exhibition centers.']}
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-lbs02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="icn-lbs03.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h4>
                            <span>
                                {t.DesSection['Self-determined transmission areas.']}
                            </span>
                        </h4>
                        <p>
                            {t.DesSection['The area can be determined by latitude, longitude, and the intended message transmission borders.']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['LocationBasedSMSPage'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
