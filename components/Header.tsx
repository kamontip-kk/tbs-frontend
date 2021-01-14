import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../i18n';
import React, { useState, useRef, useEffect } from 'react';
import Cookie from 'js-cookie';

const HeaderTopMenuMobile = () => (
  <div className="site-mobile-menu-header">
    <div className="row">
      <div className="col-8" style={{ marginTop: '0px', paddingLeft: '35px', paddingTop: '20px' }}>
        <Link href="/">
          <a className="navbar-brand p-0 m-0 img-logo-title-menu-mobile closemenu">
            <img
              className=""
              src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
              alt="Logo"
            />
          </a>
        </Link>
      </div>
      <div className="col-4" style={{ paddingRight: '35px' }}>
        <div className="site-mobile-menu-close  js-menu-toggle">
          <span className="ion-ios-close-empty"></span>{' '}
        </div>
      </div>
    </div>
  </div>
);
const HeaderLoginMenuMobile = ({ t }: any, isLogin: boolean) => {
  return (
    <div className="menu_btn">
      <ul>
        <li>
          <a
            href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
            className="btn v5 btn-sum-menu-mobile loginLink closemenu"
          >
            {t('header.login-' + (isLogin === true ? 'b' : 'a'))}
          </a>
        </li>
        <li>
          <Link href="/pricing">
            <a className="btn v3 btn-sum-menu-mobile closemenu">
              {t(`header.buy-` + (isLogin === true ? 'b' : 'a'))}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
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
                    <span className="active new_title_hover">{t('header.product')}</span>
                    {/* <Link href="/product">
                      <a className="active">{t('header.product')}</a>
                    </Link> */}
                    <ul className="dropdown">
                      <li className="listsub">
                        <Link href="/product">
                          <a className="new_icon_title_menu_pro01 icon_logo_new_menu_width title_menu_margin_top_0">
                            <h6 className="text_title_left">จุดเด่นผลิตภัณฑ์</h6>
                            <p className="txtSub text_sub_left">ตอบโจทย์ทั้งนักการตลาดและนักพัฒนา</p>
                          </a>
                        </Link>
                      </li>
                      <h6 className="title_menu_left">สำหรับนักการตลาด</h6>
                      <li className="listsub li_width_700">
                        <Link href="/product/smart-sms-console">
                          <a className="new_icon_title_menu_pro02 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0">
                            <h6 className="text_title_left">Smart SMS Console</h6>
                            <p className="txtSub text_sub_left">ส่ง SMS ผ่านเว็บไซต์ได้ด้วยตนเอง</p>
                          </a>
                        </Link>
                        <Link href="/product/location-based-sms">
                          <a className="new_icon_title_menu_pro04 icon_logo_new_menu_width title_menu_margin_top_0 title_menu_margin_bottom_0">
                            <h6 className="text_title_left">Location Based SMS</h6>
                            <p className="txtSub text_sub_left">ส่งข้อความหากลุ่มเป้าหมายในพื้นที่ ที่ไม่ต้องใช้เบอร์</p>
                          </a>
                        </Link>
                      </li>
                      <li className="listsub li_width_700">
                        <Link href="/product/sms-tracking">
                          <a className="new_icon_title_menu_pro03 icon_logo_new_menu_width title_menu_margin_top_0">
                            <h6 className="text_title_left">SMS Tracking</h6>
                            <p className="txtSub text_sub_left">วัดผลแคมเปญ SMS แม่นยำ</p>
                          </a>
                        </Link>
                        <Link href="/product/global-sms">
                          <a className="new_icon_title_menu_pro05 icon_logo_new_menu_width title_menu_margin_top_0">
                            <h6 className="text_title_left">Global SMS</h6>
                            <p className="txtSub text_sub_left">ส่ง SMS และ OTP ได้ทั่วโลก ด้วยราคาที่คุ้มค่า</p>
                          </a>
                        </Link>
                      </li>
                      <h6 className="title_menu_left">สำหรับนักพัฒนา</h6>
                      <li className="listsub li_width_700">
                        <Link href="/product/sms-api">
                          <a className="new_icon_title_menu_pro06 icon_logo_new_menu_width title_menu_margin_top_0">
                            <h6 className="text_title_left">SMS API</h6>
                            <p className="txtSub text_sub_left">ส่งข้อความได้บนแพลตฟอร์มของตนเอง</p>
                          </a>
                        </Link>
                        <Link href="/product/otp">
                          <a className="new_icon_title_menu_pro07 icon_logo_new_menu_width title_menu_margin_top_0">
                            <h6 className="text_title_left">OTP Service</h6>
                            <p className="txtSub text_sub_left">ระบบส่ง OTP พร้อมใช้ ไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                          </a>
                        </Link>
                      </li>

                      {/* <li className="listsub">
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
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link href="/pricing">
                      {/* <a className="active new_title_hover">{t('header.pricing')}</a> */}
                      <a className="active new_title_hover">{t('header.pricing')}</a>
                    </Link>
                  </li>
                  <li className="has-children">
                    <span className="active new_title_hover">คลังข้อมูล</span>
                    {/* <Link href="/resource">
                      <a className="active">คลังข้อมูล</a>
                    </Link> */}
                    <div className="dropdown box_menu_developer">
                      <ul>
                        <li className="title_menu_margin_top_20">
                          <Link href="/resource">
                            <span className="new_icon_title_menu_resource01 icon_logo_new_menu_width">
                              <h6 className="text_title_left">คลังข้อมูล</h6>
                              <p className="txtSub text_sub_left">หน้ารวมคลังข้อมูล</p>
                            </span>
                          </Link>
                        </li>
                        <h6 className="title_sub_menu_resource1">บทความ</h6>
                        <li className="li_padding_bottom20">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} >
                            <span className="new_icon_title_menu_resource02 icon_logo_new_menu_width">
                              <h6 className="text_title_left">ความรู้</h6>
                              <p className="txtSub text_sub_left">เทคนิคและความรู้ที่เกี่ยวข้อง SMS และต้านการตลาด</p>
                            </span>
                          </Link>
                        </li>
                        <li className="li_padding_bottom20">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} >
                            <span className="new_icon_title_menu_resource03 icon_logo_new_menu_width">
                              <h6 className="text_title_left">ตัวอย่างการใช้งาน</h6>
                              <p className="txtSub text_sub_left">ตัวอย่างการนำ SMS ไปใช้งานในธุรกิจ</p>
                            </span>
                          </Link>
                        </li>
                        <h6 className="title_sub_menu_resource2">กรณีศึกษา</h6>
                        <li className="li_padding_bottom20">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} >
                            <span className="new_icon_title_menu_resource04 icon_logo_new_menu_width">
                              <h6 className="text_title_left">เรื่องราวความสำเร็จ</h6>
                              <p className="txtSub text_sub_left">ของลูกค้าชั้นนำมากมายที่ใช้บริการ ThaiBulkSMS</p>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* เมนูใหม่ */}

                    {/* <div className="dropdown dropdown_padding_0 box_menu_resource">
                      <div className="row">
                        <div className="col-6 resource_padding_col6">
                          <ul>
                            <li className="">
                              <Link href="/resource">
                                <span className="new_icon_title_menu_resource01 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">คลังข้อมูล</h6>
                                  <p className="txtSub text_sub_left">หน้ารวมคลังข้อมูล</p>
                                </span>
                              </Link>
                            </li>
                            <h6 className="title_sub_menu_resource1">บทความ</h6>
                            <li className="li_padding_bottom20">
                              <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} >
                                <span className="new_icon_title_menu_resource02 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">ความรู้</h6>
                                  <p className="txtSub text_sub_left">เทคนิคและความรู้ที่เกี่ยวข้อง SMS และต้านการตลาด</p>
                                </span>
                              </Link>
                            </li>
                            <li className="li_padding_bottom20">
                              <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} >
                                <span className="new_icon_title_menu_resource03 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">ตัวอย่างการใช้งาน</h6>
                                  <p className="txtSub text_sub_left">ตัวอย่างการนำ SMS ไปใช้งานในธุรกิจ</p>
                                </span>
                              </Link>
                            </li>
                            <h6 className="title_sub_menu_resource2">กรณีศึกษา</h6>
                            <li className="li_padding_bottom20">
                              <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} >
                                <span className="new_icon_title_menu_resource04 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">เรื่องราวความสำเร็จ</h6>
                                  <p className="txtSub text_sub_left">ของลูกค้าชั้นนำมากมายที่ใช้บริการ ThaiBulkSMS</p>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 bg_menu">
                          <ul>
                            <h6 className="title_sub_menu_resource3">แนะนำ</h6>
                            <div className="row row_margin_top_20">
                              <div className="col-4 block_content" >

                              </div>
                              <div className="col-8">
                                <h6>สร้างยอดขายได้ทันที่ ด้วย SMS Location-Based Service</h6>
                              </div>
                            </div>
                            <div className="row row_margin_top_20">
                              <div className="col-4 block_content" >

                              </div>
                              <div className="col-8">
                                <h6>สร้างยอดขายได้ทันที่ ด้วย SMS Location-Based Service</h6>
                              </div>
                            </div>
                            <div className="row row_margin_top_20">
                              <div className="col-4 block_content" >

                              </div>
                              <div className="col-8">
                                <h6>สร้างยอดขายได้ทันที่ ด้วย SMS Location-Based Service</h6>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div> */}

                    {/* สิ้นสุดเมนูใหม่ */}

                    {/* <ul className="dropdown" style={{ minWidth: '260px', left: '-300%' }}>
                      <li className="listsub">
                        <Link href="">
                          <a className="new_icon_title_menu">
                            <h6 className="text_title_left">OTP Service</h6>
                            <p className="txtSub text_sub_left">ระบบส่ง OTP พร้อมใช้ ไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                          </a>
                        </Link>
                        <Link href="">
                          <a className="new_icon_title_menu">
                            <h6 className="text_title_left">OTP Service</h6>
                            <p className="txtSub text_sub_left">ระบบส่ง OTP พร้อมใช้ ไม่ต้องเขียนโปรแกรมเพิ่ม</p>
                          </a>
                        </Link>
                      </li> */}
                    {/* <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} passHref={true}>
                          <a><h6>ความรู้</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} passHref={true}>
                          <a><h6>ตัวอย่างการใช้งาน</h6></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} passHref={true}>
                          <a><h6>เรื่องราวความสำเร็จ</h6></a>
                        </Link>
                      </li> */}
                    {/* </ul> */}
                  </li>
                  <li className="has-children">
                    <span className="active new_title_hover">ซัพพอร์ต</span>
                    {/* <a className="active">ซัพพอร์ต</a> */}
                    <div className="dropdown dropdown_padding_0 box_menu_support">
                      <div className="row">
                        <div className="col-7 menu_support_padding_20">
                          <ul>
                            <li className="title_menu_margin_top_20 title_menu_padding_bottom_30">
                              <Link href="/support/how-to-order">
                                <span className="new_icon_title_menu_support01 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">วิธีการสั่งซื้อ</h6>
                                  <p className="txtSub text_sub_left">ขั้นตอนการสั่งซื้อของแต่ละช่องทางชำระ</p>
                                </span>
                              </Link>
                            </li>
                            <li className="title_menu_padding_bottom_30">
                              <Link href="/support/faq">
                                <span className="new_icon_title_menu_support02 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">คำถามที่พบบ่อย</h6>
                                  <p className="txtSub text_sub_left">เกี่ยวกับการสั่งซื้อ ปัญหาเทคนิค และการใช้งานทั่วไป</p>
                                </span>
                              </Link>
                            </li>
                            <li className="title_menu_padding_bottom_30">
                              <Link href="/contact">
                                <span className="new_icon_title_menu_support03 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">ติดต่อเรา</h6>
                                  <p className="txtSub text_sub_left">ข้อมูลติดต่อ ThaiBulkSMS</p>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 bg_menu">
                          <ul>
                            <h6 className="title_sub_menu_resource2">ช่องทางติดต่อ</h6>
                            <li>
                              <Link href="tel:027986000">
                                <h6 className="new_text_contact_phone">
                                  <span className="new_text_margin_left">02-798-6000</span>
                                </h6>
                              </Link>
                            </li>
                            <li>
                              <Link href="mailto:contact@thaibulksms.com">
                                <h6 className="new_text_contact_mail">
                                  <span className="new_text_margin_left">contact@thaibulksms.com</span>
                                </h6>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.facebook.com/ThaiBulkSMS">
                                <h6 className="new_text_contact_fb">
                                  <span className="new_text_margin_left">ThaiBulkSMS</span>
                                </h6>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <ul className="dropdown" style={{ minWidth: '260px', left: '-30%' }}>
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
                    </ul> */}
                  </li>
                  <li className="has-children">
                    <Link href="">
                      <span className="active new_title_hover">{t('header.documentation')}</span>
                    </Link>
                    {/* <a className="active">{t('header.documentation')}</a> */}
                    <ul className="dropdown box_menu_developer">
                      <li className="menu_dev_padding_bottom_top_20">
                        <Link href="/developer">
                          <span className="new_icon_title_menu_dev01 icon_logo_new_menu_width">
                            <h6 className="text_title_left">ดาวน์โหลดคู่มือ</h6>
                            <p className="txtSub text_sub_left">คู่มือการเชื่อมต่อ SMS API และการใช้งาน OTP Service</p>
                          </span>
                        </Link>
                      </li>
                      <li className="menu_dev_padding_20">
                        <Link href="/developer/#ex_sdk">
                          <span className="new_icon_title_menu_dev02 icon_logo_new_menu_width">
                            <h6 className="text_title_left">ดาวน์โหลดตัวอย่าง SDK</h6>
                            <p className="txtSub text_sub_left">เลือกดาวน์โหลดได้ตามภาษาที่ต้องการ</p>
                          </span>
                        </Link>
                      </li>
                      <li className="menu_dev_padding_20">
                        <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}>
                          <span className="new_icon_title_menu_dev03 icon_logo_new_menu_width">
                            <h6 className="text_title_left">API References</h6>
                            <p className="txtSub text_sub_left">ครอบคลุมทั้ง SMS API และ OTP API</p>
                          </span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/developer">
                          <a ><h6>ดาวน์โหลดคู่มือ</h6></a>
                        </Link>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                        >
                          <h6>API References</h6>
                        </a>
                      </li> */}
                    </ul>
                  </li>
                  <li className="has-children">
                    <span className="active new_title_hover">เกี่ยวกับบริษัท</span>
                    {/* <a className="active">เกี่ยวกับบริษัท</a> */}
                    <div className="dropdown dropdown_padding_0 box_menu_why_thaibulksms">
                      <div className="row">
                        <div className="col-7 menu_support_padding_20">
                          <ul>
                            <li className="menu_dev_padding_bottom_top_20">
                              <Link href="/why-thaibulksms">
                                <span className="new_icon_title_menu_about01 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">ทำไมต้อง ThaiBulkSMS</h6>
                                  <p className="txtSub text_sub_left">ส่ง SMS กับ ThaiBulkSMS ดีกว่าที่อื่นยังไง</p>
                                </span>
                              </Link>
                            </li>
                            <li className="li_padding_bottom20">
                              <Link href="/contact">
                                <span className="new_icon_title_menu_about02 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">ติดต่อเรา</h6>
                                  <p className="txtSub text_sub_left">ข้อมูลติดต่อ ThaiBulkSMS</p>
                                </span>
                              </Link>
                            </li>
                            <li className="li_padding_bottom20">
                              <Link href="/reseller">
                                <span className="new_icon_title_menu_about03 icon_logo_new_menu_width">
                                  <h6 className="text_title_left">Reseller Program</h6>
                                  <p className="txtSub text_sub_left">โปรแกรมพิเศษสำหรับตัวแทนจำหน่ายของ ThaiBulkSMS</p>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-5 bg_menu">
                          <ul>
                            <h6 className="title_sub_menu_resource2">ช่องทางติดต่อ</h6>
                            <li>
                              <Link href="tel:027986000">
                                <h6 className="new_text_contact_phone">
                                  <span className="new_text_margin_left">02-798-6000</span>
                                </h6>
                              </Link>
                            </li>
                            <li>
                              <Link href="mailto:contact@thaibulksms.com">
                                <h6 className="new_text_contact_mail">
                                  <span className="new_text_margin_left">contact@thaibulksms.com</span>
                                </h6>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.facebook.com/ThaiBulkSMS">
                                <h6 className="new_text_contact_fb">
                                  <span className="new_text_margin_left">ThaiBulkSMS</span>
                                </h6>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <ul className="dropdown" style={{ minWidth: '800px', left: '-200%' }}>
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
                    </ul> */}
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
                  <div className="row">
                    <div className="col-8">
                      <Link href="/">
                        <a className="navbar-brand p-0 m-0 img-logo-title-menu-mobile closemenu">
                          <img
                            className=""
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/logo_1.png`}
                            alt="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="col-4">
                      <div className="site-mobile-menu-close  js-menu-toggle">
                        <span className="ion-ios-close-empty"></span>{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-mobile-menu-body">
                  <ul className="title-sub-menu-mobile">
                    <li>
                      <span className="show-site-sub-menu block-link-title-menu-mobile" data-name="product">
                        {t('header.product')}
                        {/* <img
                          className="arrow-go-to-menu-mobile"
                          src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/right-arrow.png`}
                          alt="right-arrow.png"
                        />  */}
                      </span>
                    </li>
                  </ul>
                  <ul className="title-sub-menu-mobile text-left">
                    <li className="">
                      <Link href="/pricing">
                        <a className="closemenu">
                          {t('header.pricing')}
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="title-sub-menu-mobile">
                    <li className="">
                      <a className="show-site-sub-menu block-link-title-menu-mobile" data-name="resource">
                        คลังข้อมูล
                      </a>
                    </li>
                  </ul>
                  <ul className="title-sub-menu-mobile">
                    <li className="">
                      <a className="show-site-sub-menu block-link-title-menu-mobile" data-name="support">
                        ซัพพอร์ต
                      </a>
                    </li>
                  </ul>
                  <ul className="title-sub-menu-mobile">
                    <li className="">
                      <a className="show-site-sub-menu block-link-title-menu-mobile" data-name="documentation">
                        {t('header.documentation')}
                      </a>
                    </li>
                  </ul>
                  <ul className="title-sub-menu-mobile">
                    <li className="">
                      <a className="show-site-sub-menu block-link-title-menu-mobile" data-name="aboutme">
                        เกี่ยวกับบริษัท
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="site-nav-wrap"> */}
                  {/* <li className="has-children"> */}
                  {/* <span
                        className="arrow-collapse collapsed"
                        data-toggle="collapse"
                        data-target="#collapseItem0"
                      ></span> */}
                  {/* <Link href="/product">
                        <a className="active closemenu">
                          {t('header.product')}
                        </a>
                      </Link> */}
                  {/* <ul className="collapse" id="collapseItem0">
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
                      </ul> */}
                  {/* </li> */}

                  {/* <li>
                      <Link href="/pricing">
                        <a className="closemenu">
                          {t('header.pricing')}
                        </a>
                      </Link>
                    </li>

                    <li className="has-children">
                      <Link href="/resource"><a className="closemenu">คลังข้อมูล</a></Link>
                      <ul className="collapse" id="collapseItem0">
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} passHref={true}>
                            <a><h6>ความรู้</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} passHref={true}>
                            <a><h6>ตัวอย่างการใช้งาน</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} passHref={true}>
                            <a><h6>เรื่องราวความสำเร็จ</h6></a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">ซัพพอร์ต</a>
                      <ul className="collapse" id="collapseItem1">
                        <li>
                          <Link href="/support/how-to-order">
                            <a className="closemenu">
                              <h6>{t('header.howtoorder')}</h6>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/support/faq">
                            <a className="closemenu"><h6>คำถามที่พบบ่อย</h6></a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-children">
                      <a className="active">{t('header.documentation')}</a>
                      <ul className="collapse" id="collapseItem2">
                        <li>
                          <Link href="/developer">
                            <a className="closemenu"><h6>ดาวน์โหลดคู่มือ</h6></a>
                          </Link>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href={`${process.env.NEXT_PUBLIC_WEB_URL_DEVELOPER}`}
                            className="active closemenu"
                          >
                            <h6>API References</h6>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a className="active">เกี่ยวกับบริษัท</a>
                      <ul className="collapse" id="collapseItem3">
                        <li>
                          <Link href="/why-thaibulksms">
                            <a className="closemenu"><h6>ทำไมต้อง ThaiBulkSMS</h6></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a className="closemenu">
                              <h6> {t('header.contact')}</h6>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                  <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                </div>
              </div>
              {/* new sub menu mobile */}
              <div id="product">
                <div className="site-sub-menu">
                  <div>
                    <HeaderTopMenuMobile />
                  </div>
                  <div className="block_detail_menu_mobile">
                    <div className="padding_left_right_new_sub_menu_25">
                      <ul className="show-site-sub-menu title-menu-mobile">
                        <li className="title-menu-mobile arrow-back-to-menu-mobile">
                          <img
                            className="arrow-back-to-menu-mobile"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                            alt="left-arrow.png"
                          />
                        </li>
                        <li className="title-menu-mobile">
                          <h5 className="head-site-sub-menu">
                            {t('header.product')}
                          </h5>
                        </li>
                      </ul>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/product">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon01.svg`}
                                alt="menu-icon_Product-icon01.svg"
                              />
                              จุดเด่นผลิตภัณฑ์
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <h5 className="head-site-sub-menu">สำหรับการตลาด</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/product/smart-sms-console">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon02.svg`}
                                alt="menu-icon_Product-icon02.svg"
                              />
                              Smart SMS Console
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/product/sms-tracking">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon03.svg`}
                                alt="menu-icon_Product-icon03.svg"
                              />
                              SMS Tracking
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/product/location-based-sms">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon04.svg`}
                                alt="menu-icon_Product-icon04.svg"
                              />
                              Location Based SMS
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/product/global-sms">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon05.svg`}
                                alt="menu-icon_Product-icon05.svg"
                              />
                              Global SMS
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <h5 className="head-site-sub-menu">สำหรับนักพัฒนา</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/product/sms-api">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon06.svg`}
                                alt="menu-icon_Product-icon06.svg"
                              />
                              SMS API
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/product/otp">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Product-icon07.svg`}
                                alt="menu-icon_Product-icon07.svg"
                              />
                              OTP Service
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu_btn_margin_bottom">
                      <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                    </div>
                  </div>
                </div>
              </div>
              <div id="resource">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <div className="padding_left_right_new_sub_menu_25">
                      <ul className="show-site-sub-menu title-menu-mobile">
                        <li className="title-menu-mobile arrow-back-to-menu-mobile">
                          <img
                            className="arrow-back-to-menu-mobile"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                            alt="left-arrow.png"
                          />
                        </li>
                        <li className="title-menu-mobile">
                          <h5 className="head-site-sub-menu">คลังข้อมูล</h5>
                        </li>
                      </ul>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/resource">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon01.svg`}
                                alt="menu-icon_resource-icon01.svg"
                              />
                              คลังข้อมูล
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <h5 className="head-site-sub-menu">บทความ</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ความรู้/1/`} passHref={true}>
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon02.svg`}
                                alt="menu-icon_resource-icon02.svg"
                              />
                              ความรู้
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/ตัวอย่างการใช้งาน/1/`} passHref={true}>
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon03.svg`}
                                alt="menu-icon_resource-icon03.svg"
                              />
                              ตัวอย่างการใช้งาน
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <h5 className="head-site-sub-menu">กรณีศึกษา</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href={`${process.env.NEXT_PUBLIC_WEB_URL_BLOG}/categories/เรื่องราวความสำเร็จ/1/`} passHref={true}>
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_resource-icon04.svg`}
                                alt="menu-icon_resource-icon04.svg"
                              />
                              เรื่องราวความสำเร็จ
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                  </div>
                </div>
              </div>
              <div id="support">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <div className="padding_left_right_new_sub_menu_25">
                      <ul className="show-site-sub-menu title-menu-mobile">
                        <li className="title-menu-mobile arrow-back-to-menu-mobile">
                          <img
                            className="arrow-back-to-menu-mobile"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                            alt="left-arrow.png"
                          />
                        </li>
                        <li className="title-menu-mobile">
                          <h5 className="head-site-sub-menu">ซัพพอร์ต</h5>
                        </li>
                      </ul>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/support/how-to-order">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon01.svg`}
                                alt="menu-icon_support-icon01.svg"
                              />
                              {t('header.howtoorder')}
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/support/faq">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon02.svg`}
                                alt="menu-icon_support-icon02.svg"
                              />
                              คำถามที่พบบ่อย
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/contact">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_support-icon03.svg`}
                                alt="menu-icon_support-icon03.svg"
                              />
                              {t('header.contact')}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div><div className="margin-top-sub-menu">
                      <h5 className="head-site-sub-menu">ช่องทางติดต่อ</h5>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <a href="tel:027986000">
                            <img
                              className="icon-title-menu-mobile"
                              src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                              alt="phone.png"
                            />
                            02-798-6000
                          </a>
                        </li>
                        <li className="sub-head-menu">
                          <a href="mailto:contact@thaibulksms.com">
                            <img
                              className="icon-title-menu-mobile"
                              src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                              alt="mail.png"
                            />
                            contact@thaibulksms.com
                          </a>
                        </li>
                        <li className="sub-head-menu">
                          <a href="https://www.facebook.com/ThaiBulkSMS">
                            <img
                              className="icon-title-menu-mobile"
                              src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                              alt="fb.png"
                            />
                            ThaiBulkSMS
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                  </div>
                </div>
              </div>
              <div id="documentation">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <div className="padding_left_right_new_sub_menu_25">
                      <ul className="show-site-sub-menu title-menu-mobile">
                        <li className="title-menu-mobile arrow-back-to-menu-mobile">
                          <img
                            className="arrow-back-to-menu-mobile"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                            alt="left-arrow.png"
                          />
                        </li>
                        <li className="title-menu-mobile">
                          <h5 className="head-site-sub-menu">{t('header.documentation')}</h5>
                        </li>
                      </ul>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/developer">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon01.svg`}
                                alt="menu-icon_Dev-icon01.svg"
                              />
                              ดาวน์โหลดคู่มือ
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/developer#ex_sdk">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon02.svg`}
                                alt="menu-icon_Dev-icon02.svg"
                              />
                              ดาวน์โหลดตัวอย่าง SDK
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="https://developer.thaibulksms.com">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_Dev-icon03.svg`}
                                alt="menu-icon_Dev-icon03.svg"
                              />
                              API References
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                  </div>
                </div>
              </div>
              <div id="aboutme">
                <div className="site-sub-menu">
                  <HeaderTopMenuMobile />
                  <div className="block_detail_menu_mobile">
                    <div className="padding_left_right_new_sub_menu_25">
                      <ul className="show-site-sub-menu title-menu-mobile">
                        <li className="title-menu-mobile arrow-back-to-menu-mobile">
                          <img
                            className="arrow-back-to-menu-mobile"
                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/left-arrow.png`}
                            alt="left-arrow.png"
                          />
                        </li>
                        <li className="title-menu-mobile">
                          <h5 className="head-site-sub-menu">เกี่ยวกับบริษัท</h5>
                        </li>
                      </ul>
                      <ul className="title-sub-menu">
                        <li className="sub-head-menu">
                          <Link href="/why-thaibulksms">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon01.svg`}
                                alt="menu-icon_about-icon01.svg"
                              />
                              ทำไมต้อง ThaiBulkSMS
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/contact">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon02.svg`}
                                alt="menu-icon_about-icon02.svg"
                              />
                              ติดต่อเรา
                            </a>
                          </Link>
                        </li>
                        <li className="sub-head-menu">
                          <Link href="/reseller/">
                            <a className="closemenu">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/menu-icon_about-icon03.svg`}
                                alt="menu-icon_about-icon03.svg"
                              />
                              Reseller Program
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                      <div className="margin-top-sub-menu">
                        <h5 className="head-site-sub-menu">ช่องทางติดต่อ</h5>
                        <ul className="title-sub-menu">
                          <li className="sub-head-menu">
                            <a href="tel:027986000">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/phone.png`}
                                alt="phone.png"
                              />
                              02-798-6000
                            </a>
                          </li>
                          <li className="sub-head-menu">
                            <a href="mailto:contact@thaibulksms.com">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail.png`}
                                alt="mail.png"
                              />
                              contact@thaibulksms.com
                            </a>
                          </li>
                          <li className="sub-head-menu">
                            <a href="https://www.facebook.com/ThaiBulkSMS">
                              <img
                                className="icon-title-menu-mobile"
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/fb.png`}
                                alt="fb.png"
                              />
                              ThaiBulkSMS
                            </a>
                          </li>
                        </ul>
                    </div>
                    <HeaderLoginMenuMobile t={t} isLogin={isLogin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end new sub menu mobile */}
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
Header.getInitialProps = async () => ({
  namespacesRequired: ['header']
});

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('header')(Header);
