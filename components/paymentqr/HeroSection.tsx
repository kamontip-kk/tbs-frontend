import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import * as React from 'react';
const HeroSection = ({ t }: any) => {
  React.useEffect(() => {
    var wind = $(window);
    var sticky__box = $('.side__box');
    wind.on('scroll', function () {
      var scroll = window.pageYOffset;
      if (scroll < 300) {
        sticky__box.removeClass('sticky__box');
      } else {
        sticky__box.addClass('sticky__box');
      }
    });
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center hero_top_one">
        <div className="col-12 text-center">
          <h3 className="section__title">{t('h1')}</h3>
        </div>

        <div className="col-xl-8 order-3 order-xl-2">
          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h2')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content">
                <div className="row">
                  <div className="col-12 text-center">
                    <h6
                      style={{ fontSize: ' 36px' }}
                      className="title__box__top"
                    >
                      {t('h3')}
                    </h6>
                    <h6
                      style={{
                        fontWeight: 400,
                        color: '#5b6e80',
                        marginTop: '15px',
                      }}
                    >
                      {t('h4')}
                    </h6>

                    <img
                      src="/img/qr_code.png"
                      className="img-fluid border border-dark"
                      alt=""
                      style={{ margin: '50px 0' }}
                    />

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                    {t('h5')}
                      <span className="theme__text font-weight-bold">
                        0022589
                      </span>
                    </h6>

                    <a
                      href="#"
                      className="btn v8 new__btn"
                      style={{ margin: '30px 0', padding: '20px 80px' }}
                    >
                      {t('a1')}
                    </a>

                    <h6 style={{ fontWeight: 400, color: '#5b6e80' }}>
                    {t('h6-1')}
                      <span
                        className="font-weight-bold"
                        style={{ color: '#ff1414' }}
                      >
                        14:59
                      </span>{' '}
                      {t('h6-2')}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box__wrapper">
            <div className="box__header">
              <h5>{t('h7')}</h5>
            </div>
            <div className="box__body">
              <div
                className="box__content border-0"
                style={{ backgroundColor: '#f1f8f9' }}
              >
                <div className="d-flex align-items-center item__box">
                  <img src="/img/icon_15.png" className="img-fluid" alt="" />
                  <h4>
                    1. {t('h8')}
                    <br />
                    QR Code
                  </h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img src="/img/icon_16.png" className="img-fluid" alt="" />
                  <h4>2. {t('h9')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img src="/img/icon_17.png" className="img-fluid" alt="" />
                  <h4>
                    3. {t('h10')}
                  </h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img src="/img/icon_18.png" className="img-fluid" alt="" />
                  <h4>4. {t('h11')}</h4>
                </div>

                <div className="d-flex align-items-center item__box">
                  <img src="/img/icon_19.png" className="img-fluid" alt="" />
                  <h4>
                    5. {t('h12')}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 order-2 order-xl-3">
          <div className="box__wrapper side__box">
            <div className="box__header">
              <h5>{t('h13')}</h5>
            </div>
            <div className="box__body">
              <div className="box__content border-0">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h14')}
                      </h6>
                      <div>
                        <h6 className="theme__text">
                          30,000{' '}
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h15')}
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          100
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        VAT (7%)
                      </h6>

                      <div>
                        <h6 className="theme__text">
                          2,100
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="box__content border-0"
                style={{ backgroundColor: '#f1f8f9' }}
              >
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6
                        style={{
                          color: '#5b6e80',
                          lineHeight: '48px',
                          fontWeight: 500,
                        }}
                      >
                        {t('h16')}
                      </h6>
                      <div>
                        <h6
                          className="theme__text"
                          style={{ fontSize: ' 36px' }}
                        >
                          32,000
                          <span
                            style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: '#5b6e80',
                              marginLeft: '20px',
                            }}
                          >
                            {t('bath')}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroSection.getInitialProps = async () => ({
  namespacesRequired: ['PaymentqrHeroSection'],
});

HeroSection.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('PaymentqrHeroSection')(HeroSection);
