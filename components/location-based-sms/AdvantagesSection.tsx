// import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/LocationBasedSMSPage.json';
import en from '../../public/locales/en/LocationBasedSMSPage.json';
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
                            {t.AdvantagesSection['Target groups can be self-specified']}
                        </h3>
                        <p>
                            {t.AdvantagesSection['Reach your customers with higher levels of effectiveness. Save your budget on messaging costs, as the targeted message demographic can be specified by categories such as sex, age, or high purchasing power individuals.']}
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="track_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs02.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs02.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row track_top m-40">
                <div className="col-md-6">
                    <div className="track_text">
                        <h3>
                            {t.AdvantagesSection['Generate instant sales in your area']}
                        </h3>
                        <p>
                            {t.AdvantagesSection['The messages will be immediately sent when customers enter the specified areas. This increases the chances of closing easy sales, particularly in locations with high competition such as shopping centers and display booths.']}
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="track_img">
                        {/* <img
                            className="lazyload"
                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs03.png`}
                            alt="Image"
                        /> */}
                        <span className="lazyload">
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img-lbs03.png`} alt="Image" width={100} height={100}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}
TrackSection.getInitialProps = async () => ({
    namespacesRequired: ['LocationBasedSMSPage'],
});

// TrackSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSection;
