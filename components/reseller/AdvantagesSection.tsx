// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/ResellerPage.json';
import en from '../../public/locales/en/ResellerPage.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }
const TrackSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
    <div
        className="track_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
    >
        <div className="container">
            <div className="row track_top m-40">
                <div className="col-md-6 col-md-push-6">
                    <div className="track_text">
                        <h3>
                            {t.AdvantagesSection['The most special offers are granted on an Unlimited basis']}
                        </h3>
                        <p>
                            {t.AdvantagesSection['No limit to the number of Sender Names and reserve accounts. These special offers are made only for resellers like you.']}
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="track_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-reseller02.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['ResellerPage'],
});

// TrackSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSection;
