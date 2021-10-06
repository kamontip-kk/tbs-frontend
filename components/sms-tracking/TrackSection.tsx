import { useRouter } from 'next/router'
import th from '../../public/locales/th/Sms-tracking.json';
import en from '../../public/locales/en/Sms-tracking.json';
import Link from 'next/dist/client/link';
// import PropTypes from 'prop-types';
const TrackSectionV2 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="track_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_7.png`}
    >
        <div className="container">
            <div className="row track_top">
                <div className="col-md-6 col-md-push-6">
                    <div className="track_text">
                        <h3>
                            {t.TrackSection['Follow up on individual-level statuses to know which recipients are interested in you.']}
                        </h3>
                        <p>
                            {t.TrackSection['SMS Tracking follows the status of message opening at the individual level, allowing you to know who frequently opens their messages and is suitable for Marketing. This reduces your costs by preventing you from wasting funds by sending messages to individuals who never open their messages.']}
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-md-pull-6">
                    <div className="track_img">
                        <object
                            type="image/svg+xml"
                            data={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/otp1_animate.svg`}
                        ></object>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="track_box">
                                <h4
                                    dangerouslySetInnerHTML={{
                                        __html: t.TrackSection['<span>Step-by-Step SMS Tracking</span><br/> Campaign Creation Tutorial'],
                                    }}
                                ></h4>
                                <Link href="https://bit.ly/3cWg40U">
                                <a
                                    target="_blank"
                                    className="btn v3"
                                >
                                    {t.TrackSection['Step of use']}
                                </a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
              <div className="track_box v2">
                <h4
                  dangerouslySetInnerHTML={{
                    __html: t('TrackSection::corporatepackagetitle'),
                  }}
                ></h4>
                <a className="btn v3">
                  {t('TrackSection::corporatepackageBtn')}
                </a>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
TrackSectionV2.getInitialProps = async () => ({
    namespacesRequired: ['Sms-tracking'],
});

// TrackSectionV2.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TrackSectionV2;
