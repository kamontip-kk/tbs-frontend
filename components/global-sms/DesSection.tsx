// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/GlobalSMSPage.json';
import en from '../../public/locales/en/GlobalSMSPage.json';
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
                        <h3>
                            {t.DesSection['Select payment methods between Prepaid and Postpaid']}
                        </h3>
                        <p>
                            {t.DesSection['Remove any worries about budget management, as you can choose the method of payment on your own.']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-lg-6">
                    <div className="track_box productBox">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global01.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <h4>
                            <span>
                                {t.DesSection['Support for messages in every language']}
                            </span>
                        </h4>
                        <p>
                            {t.DesSection['No matter what language your message is in, you can be free from worries, because when it is sent through our systems, the recipient will receive a message that is easy to read and shows your intended content.']}
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-global02.png`} alt="Image" width={100} height={100}/>
                        </span>
                        <h4>
                            <span>
                                {t.DesSection['Complete with support from a team of specialists']}
                            </span>
                        </h4>
                        <p>
                            {t.DesSection['If you require help or advice in sending SMS messages internationally, we have specialists who are ready to support you.']}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['GlobalSMSPage'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
