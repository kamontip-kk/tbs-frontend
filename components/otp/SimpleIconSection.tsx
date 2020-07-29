import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
const SimpleIconSection = ({ t }: any) => (
  <div className="simple_icon_section v2">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('otpsimpleicon.otpheader')}</h3>
          </div>
        </div>
      </div>
      <div className="row feature_checklist_wrap">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src="/img/check_icon.png"
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>{t('otpsimpleicon.setting1')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src="/img/check_icon.png"
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>{t('otpsimpleicon.setting2')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src="/img/check_icon.png"
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>{t('otpsimpleicon.setting3')}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="feature_checklist">
            <div className="check_img">
              <img
                className="lazyload"
                data-src="/img/check_icon.png"
                alt="Image"
              />
            </div>
            <div className="check_text">
              <p>{t('otpsimpleicon.setting4')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
          <div className="simple_icon_title">
            <h3>{t('otpsimpleicon.apiheader')}</h3>
          </div>
        </div>
      </div>
      <div className="row single_lang_wrap">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api01.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api02.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api03.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api04.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api05.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api06.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api07.svg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-3">
              <div className="single_lang">
                <img
                  className="lazyload"
                  data-src="/img/icn-api08.svg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <a className="lang_link">
            {t('otpsimpleicon.apilink')}
            <img className="lazyload" data-src="/img/arrow_5.png" alt="Image" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
SimpleIconSection.getInitialProps = async () => ({
  namespacesRequired: ['OtpSimpleIconSection'],
});

SimpleIconSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('OtpSimpleIconSection')(SimpleIconSection);
