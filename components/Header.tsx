import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import React, { useState, useRef, useEffect } from 'react';
import Cookie from 'js-cookie';

const Header = ({ t }: any) => {
  const lang = i18n.language;
  const [isLogin, setIsLogin] = useState(Cookie.get('PASSCODE') ? true : false);
  const headerBar: any = useRef(null);
  function sticky() {
    var scroll = window.pageYOffset;
    if (headerBar.current !== null) {
      if (scroll < 100) {
        headerBar.current.classList.remove('sticky');
      } else {
        headerBar.current.classList.add('sticky');
      }
    }
  }
  function menuClick() {
    var elDivnice = document.getElementsByClassName('divnice')[0];
    if (elDivnice.classList.contains('open'))
      elDivnice.classList.remove('open');
    else elDivnice.classList.add('open');
  }
  useEffect(() => {
    // check Cookie Login
    if (Cookie.get('PASSCODE')) {
      setIsLogin(true);
    }
    window.addEventListener('scroll', sticky);
    return () => {
      window.removeEventListener('scroll', sticky);
    };
  }, []);

  return (
    <div ref={headerBar} className="header-bar-area position-fixed w-100 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 lg-none">
            <div className="header_top">
              <div className="header_contact_no">
                <a href="tel:027986000">02-798-6000</a>
              </div>
              <div className="header_select" style={{ display: 'none' }}>
                <select className="user_select" style={{ display: 'none' }}>
                  <option>Th</option>
                  <option>En</option>
                </select>
                <div
                  onClick={menuClick}
                  className="nice-select user_select divnice"
                >
                  <span className="current">{lang}</span>
                  <ul className="list">
                    <li
                      data-value="Th"
                      // className="option th"
                      className={
                        lang == 'th' ? 'option th selected focus' : 'option th'
                      }
                      onClick={() => {
                        i18n.changeLanguage('th');
                      }}
                    >
                      Th
                    </li>
                    <li
                      data-value="En"
                      // className="option en"
                      className={
                        lang == 'en' ? 'option en selected focus' : 'option en'
                      }
                      onClick={() => {
                        i18n.changeLanguage('en');
                      }}
                    >
                      En
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-9">
            <Link href="/">
              <a className="navbar-brand p-0 m-0">
                <img
                  className=""
                  src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-3 text-right">
            <div className="site-navbar">
              <nav className="site-navigation text-center">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="has-children">
                    <Link href="/product">
                      <a className="active">{t('header.product')}</a>
                    </Link>
                    <ul className="dropdown">
                      <li className="listsub">
                        <Link href="/product/smart-sms-console">
                          <a>
                            <h6>Smart SMS Console</h6>
                            <p className="txtSub">ส่ง SMS ผ่านเว็บไซต์ได้ด้วยตนเอง ส่งง่าย วัดผลการส่งได้รวดเร็ว</p>
                          </a>
                        </Link>
                        <Link href="/product/sms-api">
                          <a>
                            <h6>SMS API</h6>
                            <p className="txtSub">เพียงใช้งาน SMS API คุณก็ส่งข้อความได้บนแพลตฟอร์มของตนเอง</p>
                          </a>
                        </Link>
                        <Link href="/product/otp">
                          <a>
                            <h6>OTP Service</h6>
                            <p className="txtSub">ระบบส่ง OTP พร้อมใช้ เพิ่มความปลอดภัยไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                          </a>
                        </Link>
                      </li>
                      <li className="listsub">
                        <Link href="/product/sms-tracking">
                          <a>
                            <h6>SMS Tracking</h6>
                            <p className="txtSub">วัดผลแคมเปญ SMS แม่นยำ ไม่เสียงบการตลาดไปโดยเปล่าประโยชน์</p>
                          </a>
                        </Link>
                        <Link href="/product/global-sms">
                          <a>
                            <h6>Global SMS</h6>
                            <p className="txtSub">ส่ง SMS และ OTP ได้ทั่วโลก ด้วยราคาที่คุ้มค่า</p>
                          </a>
                        </Link>
                        <Link href="/product/location-based-sms">
                          <a>
                            <h6>Location Based SMS</h6>
                            <p className="txtSub">เข้าถึงกลุ่มเป้าหมายในพื้นที่ ส่งข้อความได้ทันที ไม่ต้องใช้เบอร์</p>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="active">{t('header.pricing')}</a>
                    </Link>
                  </li>

                  <li className="has-children">
                    <a className="active">ซัพพอร์ต</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/support/how-to-order">
                          <a><h6>{t('header.howtoorder')}</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/support/faq">
                          <a ><h6>คำถามที่พบบ่อย</h6></a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">{t('header.documentation')}</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/developer">
                          <a ><h6>ดาวน์โหลดคู่มือ</h6></a>
                        </Link>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                        >
                          <h6>API Reference</h6>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a className="active">เกียวกับบริษัท</a>
                    <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
                      <li>
                        <Link href="/why-thaibulksms">
                          <a><h6>ทำไมต้อง ThaiBulkSMS</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a><h6>{t('header.contact')}</h6></a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="d-lg-none sm-right">
                <a className="mobile-bar js-menu-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close  js-menu-toggle">
                    <span className="ion-ios-close-empty"></span>{' '}
                  </div>
                </div>
                <div className="site-mobile-menu-body">
                  <ul className="site-nav-wrap">
                    <li className="has-children">
                      {/* <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span> */}
                      <Link href="/product">
                        <a className="active closemenu">
                          {t('header.product')}
                        </a>
                      </Link>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/product/smart-sms-console">
                            <a className="closemenu">
                              <h6>Smart SMS Console</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/sms-api">
                            <a className="closemenu">
                              <h6>SMS API</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/otp">
                            <a className="closemenu">
                              <h6>OTP Service</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/sms-tracking">
                            <a className="closemenu">
                              <h6>SMS Tracking</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/global-sms">
                            <a className="closemenu">
                              <h6>Global SMS</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/product/location-based-sms">
                            <a className="closemenu">
                              <h6>Location Based SMS</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/pricing">
                        <a className="closemenu">
                          {t('header.pricing')}
                        </a>
                      </Link>
                    </li>

                    <li className="has-children">
                      <a className="active">ซัพพอร์ต</a>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/support/how-to-order">
                            <a>
                              {t('header.howtoorder')}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/support/faq">
                            <a >คำถามที่พบบ่อย</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-children">
                      <a className="active">{t('header.documentation')}</a>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/developer">
                            <a>ดาวน์โหลดคู่มือ</a>
                          </Link>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                            className="active closemenu"
                          >
                            API Reference
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">เกียวกับบริษัท</a>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href="/why-thaibulksms">
                            <a>ทำไมต้อง ThaiBulkSMS</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>
                              {t('header.contact')}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="menu_btn">
                    <ul>
                      <li>
                        <a
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                          className="loginLink"
                        >
                          {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                        </a>
                      </li>
                      <li>
                        <Link href="/pricing">
                          <a className="btn v1">
                            {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 lg-none">
            <div className="menu_btn">
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                    className="loginLink"
                  >
                    {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
                  </a>
                </li>
                <li>
                  {isLogin === true ? (
                    <Link href="/pricing">
                      <a className="btn v1">{t(`header.buy-` + 'b')}</a>
                    </Link>
                  ) : (
                      <a
                        className="btn v1"
                        href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                      >
                        {t(`header.buy-` + 'a')}
                      </a>
                    )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Header.getInitialProps = async () => {
  namespacesRequired: ['header'];
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Header);
