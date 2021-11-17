// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-alert.json';
import en from '../../public/locales/en/Sms-alert.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
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
                        <h3>{t.DesSection.dessec1}</h3>
                    </div>
                </div>
            </div>
            <div className="row m-80 alertDetail">
                <div className="col-lg-4">
                    <div className="track_box productBox">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert01.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec2}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert02.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec3}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert03.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert03.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec4}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert04.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert04.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec5}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert05.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert05.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec6}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload col4"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert06.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-alert06.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <p className="col6">{t.DesSection.dessec7}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['Sms-alert'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
