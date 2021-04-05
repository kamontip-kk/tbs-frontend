import PropTypes from 'prop-types'
import { withTranslation, Link } from '../../i18n'
const EduSection = ({ t }: any) => (
    <div className="edu_section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-push-6">
                    <div className="edu_text">
                        <h2>
                            {t(
                                'EduSection::Interesting tips and knowledge regarding SMS and marketing'
                            )}
                        </h2>
                        {/* <a href="http://www.thaibulksms.com/blog/">{t('EduSection::View all contents')}</a> */}
                        <Link href="/resource">
                            {t('EduSection::View all contents')}
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-md-pull-6">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                            <div className="edu_box">
                                <a
                                    href="https://bit.ly/3hEL9ac"
                                    target="_blank"
                                >
                                    <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_7.png`}
                                        alt="Image"
                                    />
                                    <div className="edu_box_text">
                                        <p>
                                            {t(
                                                'EduSection::Don’t miss!! Marketing trends in 2020.'
                                            )}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                        <a
                                            href="https://bit.ly/2RDqTuQ"
                                            target="_blank"
                                        >
                                            <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_8.png`}
                                                alt="Image"
                                            />
                                            <div className="edu_box_text">
                                                <p>
                                                    {t(
                                                        'EduSection::4 ways to communicate with customers most effectively Conclude your sale with testimonials.'
                                                    )}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0 col-sm-10 offset-sm-1">
                                    <div className="edu_box">
                                        <a
                                            href="https://bit.ly/32L9VRT"
                                            target="_blank"
                                        >
                                            <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_9.png`}
                                                alt="Image"
                                            />
                                            <div className="edu_box_text">
                                                <p>
                                                    {t(
                                                        'EduSection::Simple to do but the results will exceed expectations.'
                                                    )}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
EduSection.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
})

EduSection.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('Home')(EduSection)
