// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/ResellerPage.json';
import en from '../../public/locales/en/ResellerPage.json';
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
                        <h3>
                            {t.DesSection['Select your payment method, between Prepaid or Postpaid']}
                        </h3>
                        <p>
                            {t.DesSection['Be worry-free about budget management, as you can choose your method of payment.']}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row m-80">
                <div className="col-lg-6">
                    <div className="track_box productBox">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-reseller01.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="icn-reseller01.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: t.DesSection['<span>Add credit</span><br />(Prepaid)'],
                            }}
                        ></h4>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="track_box productBox v2">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icn-reseller02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image loader={myLoader} src="icn-reseller02.png" alt="Image" width={100} height={100}/>
                        </span>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: t.DesSection['<span>Pay monthly</span><br />(Postpaid)'],
                            }}
                        ></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
SimpleIconSection.getInitialProps = async () => ({
    namespacesRequired: ['ResellerPage'],
});

// SimpleIconSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default SimpleIconSection;
