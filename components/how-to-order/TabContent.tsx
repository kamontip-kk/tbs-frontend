// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useClipboard } from 'use-clipboard-copy';
import Link from 'next/link';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/How-to-order.json';
import en from '../../public/locales/en/How-to-order.json';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const classnames = require('classnames');
const TabContent = ({ defaultTab, setDefaultTab }: any) => {
    const [tab, setTab] = React.useState<any>();
    const [showModalbank, setShowModalbank] = useState(false);
    const [showModalqr, setShowModalqr] = useState(false);
    const [showModalcredit, setShowModalcredit] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const clipboard = useClipboard();
    // const [defaultTab, setDefaultTab] = React.useState('pills-home');
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {
        if (!router.query.tab) {
            console.warn('have not tab');
            return;
        }

        setDefaultTab(`${router.query.tab}`);
        setTab($('#pills-profile-tab'));
        Modal.setAppElement('#ElementModal');
        // }, [tab]);
    }, [router, setDefaultTab]);

    const onClipboard = (text: string) => {
        clipboard.copy(text);
        Swal.fire({
            position: 'top',
            icon: 'success',
            // title: 'คุณได้คัดลอกบัญชีธนาคารสำเร็จ',
            title: t.TabContent['You have successfully copied the bank account details.'],
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div
            className="tab__content faq_section lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className={classnames(
                                    'tab-pane fade',
                                    { active: defaultTab === 'pills-home' },
                                    { show: defaultTab === 'pills-home' }
                                )}
                                id="pills-home"
                                role="tabpanel"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    1
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o1.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o1.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Choose your desired package.']}
                                                </h4>
                                                {/* <p
                          dangerouslySetInnerHTML={{
                            __html: t('TabContent::content.1.desc'),
                          }}
                        ></p> */}
                                                <p>
                                                    {t.TabContent['Once you have found your ideal package on the']}
                                                    <Link href="/pricing/">
                                                        <a className="theme__text link mt-0">
                                                            {t.TabContent['package prices page']}
                                                        </a>
                                                    </Link>
                                                    {t.TabContent[', click the "Buy Now" button to begin the ordering process.']}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    2
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o2.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o2.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Enter the details for placing the order']}
                                                </h4>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: t.TabContent['If you have not logged in, the system will prompt you to log in. A first-time buyer will need to enter their details.'],
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    3
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o3.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o3.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Choose the desired payment']}
                                                </h4>
                                                {/* <p
                          dangerouslySetInnerHTML={{
                            __html: t('TabContent::content.3.desc'),
                          }}
                        ></p> */}
                                                <p>
                                                    {t.TabContent['method from these 3 methods: QR Code, credit card, and bank transfer.']}{' '}
                                                    <Link href="">
                                                    <a
                                                        onClick={() => {
                                                            setDefaultTab(
                                                                `pills-profile`
                                                            );
                                                            tab?.tab('show');
                                                        }}
                                                        className="theme__text link mt-0"
                                                    >
                                                        {t.TabContent['Please see the details here.']}
                                                    </a>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    4
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o4.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o4.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Make the payment within the specified time limit.']}
                                                </h4>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: t.TabContent['If you fail to make the payment within the specified time limit, the system will cancel the order immediately.'],
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    5
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o5.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o5.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Wait for the confirmation email.']}
                                                </h4>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: t.TabContent['Once the payment is completed, you will receive a confirmation email as proof of payment.'],
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-start icon__box__wrapper">
                                            <div className="icon__box">
                                                <span className="serial__number">
                                                    6
                                                </span>
                                                {/* <img
                                                    className="img-fluid lazyload"
                                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o6.png`}
                                                    alt=""
                                                /> */}
                                                <span className="img-fluid lazyload">
                                                    <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/o6.png`} alt="" width={100} height={100}/>
                                                </span>
                                            </div>
                                            <div className="serial__content">
                                                <h4>
                                                    {t.TabContent['Begin using the service']}
                                                </h4>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: t.TabContent['instantly in case of QR code or credit card payments. If using bank transfer, a transfer notification needs to be sent to us and our staff will carry out the confirmation process. The credits will be available after the confirmation.'],
                                                    }}
                                                ></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={classnames(
                                    'tab-pane fade second__tab',
                                    { active: defaultTab === 'pills-profile' },
                                    { show: defaultTab === 'pills-profile' }
                                )}
                                // className="tab-pane fade second__tab"
                                id="pills-profile"
                                role="tabpanel"
                            >
                                <div className="row justify-content-center paymentImg">
                                    <div className="col-lg-10">
                                        <div className="box__wrapper">
                                            <div className="box__header">
                                                <h2>
                                                    {t.TabContent['Instantly use the credits upon the completion of payments.']}
                                                </h2>
                                            </div>
                                            <div className="box__body">
                                                <div className="box__content border-0">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="info__box flex-column text-center border-0 new__info__box">
                                                                <div className="info__icon mr-0">
                                                                    {/* <img
                                                                        className="lazyload"
                                                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_13.png`}
                                                                        alt=""
                                                                    /> */}
                                                                    <span className="lazyload">
                                                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_13.png`} alt="" width={100} height={100}/>
                                                                    </span>
                                                                </div>
                                                                <h5
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: t.TabContent['QR code payments <br/>are available for every bank.'],
                                                                    }}
                                                                ></h5>
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: t.TabContent['Compatible with every bank. <br/>No fees are charged.'],
                                                                    }}
                                                                ></p>
                                                                <Link href="">
                                                                <a
                                                                    className="theme__text link"
                                                                    data-toggle="modal"
                                                                    data-target="#popup1"
                                                                    onClick={() => {
                                                                        setIsOpen(
                                                                            true
                                                                        );
                                                                        setShowModalqr(
                                                                            true
                                                                        );
                                                                    }}
                                                                >
                                                                    {t.TabContent['Payment instructions']}
                                                                </a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="info__box flex-column text-center border-0 new__info__box">
                                                                <div className="info__icon mr-0">
                                                                    {/* <img
                                                                        className="lazyload"
                                                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_24_1.png`}
                                                                        alt=""
                                                                    /> */}
                                                                    <span className="lazyload">
                                                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_24_1.png`} alt="" width={100} height={100}/>
                                                                    </span>
                                                                </div>
                                                                <h5>
                                                                    {t.TabContent['Credit card payment']}
                                                                </h5>
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: t.TabContent['Highest level of security.<br/> No fees are charged.'],
                                                                    }}
                                                                ></p>

                                                                <Link href="">
                                                                <a
                                                                    className="theme__text link"
                                                                    data-toggle="modal"
                                                                    data-target="#popup1"
                                                                    onClick={() => {
                                                                        setIsOpen(
                                                                            true
                                                                        );
                                                                        setShowModalcredit(
                                                                            true
                                                                        );
                                                                    }}
                                                                >
                                                                    {t.TabContent['Payment instructions']}
                                                                </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box__wrapper">
                                            <div className="box__header">
                                                <h2>
                                                    {t.TabContent['Pay and wait for confirmation by our staff']}
                                                </h2>
                                            </div>
                                            <div className="box__body">
                                                <div className="box__content border-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="info__box flex-column text-center border-0 new__info__box">
                                                                <div className="info__icon mr-0">
                                                                    {/* <img
                                                                        className="lazyload"
                                                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_25_1.png`}
                                                                        alt=""
                                                                    /> */}
                                                                    <span className="lazyload">
                                                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_25_1.png`} alt="" width={100} height={100}/>
                                                                    </span>
                                                                </div>
                                                                <h5 className="mt-4">
                                                                    {t.TabContent['Bank transfer']}
                                                                </h5>
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: t.TabContent['Notify us of the payment and wait for the confirmation by our staff.<br/>After the confirmation, the credits can be used.'],
                                                                    }}
                                                                ></p>

                                                                <Link href="">
                                                                <a
                                                                    className="theme__text link"
                                                                    data-toggle="modal"
                                                                    data-target="#popup2"
                                                                    onClick={() => {
                                                                        setIsOpen(
                                                                            true
                                                                        );
                                                                        setShowModalbank(
                                                                            true
                                                                        );
                                                                    }}
                                                                >
                                                                    {t.TabContent['Payment instructions']}
                                                                </a>
                                                                </Link>

                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <hr className="bank-howtoOrder"></hr>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="item__box__2 d-flex align-items-start">
                                                                            {/* <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__1.png`}
                                                                                alt=""
                                                                                style={{
                                                                                    marginRight:
                                                                                        '20px',
                                                                                }}
                                                                            /> */}
                                                                            <span 
                                                                                style={{
                                                                                    marginRight:
                                                                                        '20px'
                                                                                }}>
                                                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__1.png`} alt="" width={100} height={100}/>
                                                                            </span>

                                                                            <div className="textBankHow">
                                                                                <p
                                                                                    style={{
                                                                                        marginBottom:
                                                                                            '10px',
                                                                                    }}
                                                                                >
                                                                                    {t.TabContent['Siam Commercial Bank']}
                                                                                </p>

                                                                                <div className="d-flex">
                                                                                    <div
                                                                                        style={{
                                                                                            marginRight:
                                                                                                '20px',
                                                                                        }}
                                                                                    >
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account type']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account number']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account name']}
                                                                                        </p>
                                                                                    </div>

                                                                                    <div>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent.Savings}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                            onClick={() =>
                                                                                                onClipboard(
                                                                                                    '2502207574'
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            250-2-20757-4
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent['One Mobi Company Limited']}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* <div className="col-md-6">
                                    <div className="item__box__2 d-flex align-items-start">
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__2.png`}
                                        alt=""
                                        style={{ marginRight: '20px' }}
                                      />

                                      <div className="textBankHow">
                                        <p style={{ marginBottom: '10px' }}>
                                          {t('TabContent::Kasikorn bank')}
                                        </p>

                                        <div className="d-flex">
                                          <div style={{ marginRight: '20px' }}>
                                            <p
                                              style={{
                                                fontWeight: 400,
                                                color: '#5b6e80',
                                              }}
                                            >
                                              {t('TabContent::Account type')}
                                            </p>
                                            <p
                                              style={{
                                                fontWeight: 400,
                                                color: '#5b6e80',
                                              }}
                                            >
                                              {t('TabContent::Account number')}
                                            </p>
                                            <p
                                              style={{
                                                fontWeight: 400,
                                                color: '#5b6e80',
                                              }}
                                            >
                                              {t('TabContent::Account name')}
                                            </p>
                                          </div>

                                          <div>
                                            <p
                                              style={{ fontWeight: 400 }}
                                              className="theme__text"
                                            >
                                              {t('TabContent::Savings')}
                                            </p>
                                            <p
                                              style={{ fontWeight: 400 }}
                                              className="theme__text"
                                              onClick={() =>
                                                onClipboard('9962074089')
                                              }
                                            >
                                              996-2-07408-9
                                            </p>
                                            <p
                                              style={{ fontWeight: 400 }}
                                              className="theme__text"
                                            >
                                              {t(
                                                'TabContent::One Mobi Company Limited'
                                              )}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}

                                                                    <div className="col-md-6">
                                                                        <div className="item__box__2 d-flex align-items-start">
                                                                            {/* <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__3.png`}
                                                                                alt=""
                                                                                style={{
                                                                                    marginRight:
                                                                                        '20px',
                                                                                }}
                                                                            /> */}
                                                                            <span 
                                                                                style={{
                                                                                    marginRight:
                                                                                        '20px'
                                                                                }}>
                                                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__3.png`} alt="" width={100} height={100}/>
                                                                            </span>


                                                                            <div className="textBankHow">
                                                                                <p
                                                                                    style={{
                                                                                        marginBottom:
                                                                                            '10px',
                                                                                    }}
                                                                                >
                                                                                    {t.TabContent['Bangkok Bank']}
                                                                                </p>

                                                                                <div className="d-flex">
                                                                                    <div
                                                                                        style={{
                                                                                            marginRight:
                                                                                                '20px',
                                                                                        }}
                                                                                    >
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account type']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account number']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account name']}
                                                                                        </p>
                                                                                    </div>

                                                                                    <div>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent.Savings}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                            onClick={() =>
                                                                                                onClipboard(
                                                                                                    '0667054423'
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            066-7-05442-3
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent['One Mobi Company Limited']}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <div className="item__box__2 d-flex align-items-start">
                                                                            {/* <img
                                                                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__4.png`}
                                                                                alt=""
                                                                                style={{
                                                                                    marginRight:
                                                                                        '20px',
                                                                                }}
                                                                            /> */}
                                                                            <span
                                                                                style={{
                                                                                marginRight:
                                                                                    '20px'
                                                                                }}>
                                                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img__4.png`} alt="" width={100} height={100}/>
                                                                            </span>

                                                                            <div className="textBankHow">
                                                                                <p
                                                                                    style={{
                                                                                        marginBottom:
                                                                                            '10px',
                                                                                    }}
                                                                                >
                                                                                    {t.TabContent['Krungsri Bank']}
                                                                                </p>

                                                                                <div className="d-flex">
                                                                                    <div
                                                                                        style={{
                                                                                            marginRight:
                                                                                                '20px',
                                                                                        }}
                                                                                    >
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account type']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account number']}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                                color:
                                                                                                    '#5b6e80',
                                                                                            }}
                                                                                        >
                                                                                            {t.TabContent['Account name']}
                                                                                        </p>
                                                                                    </div>

                                                                                    <div>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent.Savings}
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                            onClick={() =>
                                                                                                onClipboard(
                                                                                                    '6731015765'
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            673-1-01576-5
                                                                                        </p>
                                                                                        <p
                                                                                            style={{
                                                                                                fontWeight: 400,
                                                                                            }}
                                                                                            className="theme__text"
                                                                                        >
                                                                                            {t.TabContent['One Mobi Company Limited']}
                                                                                        </p>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center link__box">
                    <div className="col-xl-5 col-lg-12">
                        <div className="faq_bottom_text">
                            <h3>
                                {t.TabContent['Still have further questions?']}
                            </h3>
                            <p>
                                {t.TabContent['Choose your most convenient way to contact us.']}
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-12-7">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="service_feature_item">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`} alt="" width={100} height={100}/>
                                    </span>
                                    <Link href="tel:027986000">
                                    <a className="btn v4">
                                        {t.TabContent['Contact our staff']}
                                    </a>
                                    </Link>                      
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service_feature_item">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`} alt="" width={100} height={100}/>
                                    </span>
                                    <Link href="/contact/">
                                        <a className="btn v4">
                                            {t.TabContent['Call back service by staff']}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="service_feature_item">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`} alt="" width={100} height={100}/>
                                    </span>
                                    <span className="btn v4">
                                        {t.TabContent['E-mail']}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ElementModal">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => {}}
                    className="modalClass"
                    contentLabel=""
                >
                    <button
                        style={{ float: 'right' }}
                        onClick={() => {
                            setIsOpen(false);
                            setShowModalbank(false);
                            setShowModalqr(false);
                            setShowModalcredit(false);
                        }}
                        className="btn-close-order"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    {showModalbank && (
                        <div className="box__wrapper">
                            <div className="box__header">
                                <h5>
                                    {t.TabContent['Instructions for payment by bank transfer']}
                                </h5>
                            </div>
                            <div className="box__body">
                                <div
                                    className="box__content border-0"
                                    style={{ backgroundColor: ' #f1f8f9' }}
                                >
                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_20.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_20.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['1. Transfer the required amount to the specified bank account.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_21.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_21.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['2. Notify us of the payment via the system.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_22.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_22.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: t.TabContent['3. Wait for confirmation from our staff. The process will take no more than 24 hours.'],
                                            }}
                                        >
                                            {/* 3. {t('paymentbankhero.h9-1')}
              <br />
              {t('paymentbankhero.h9-2')} */}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_23.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_23.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: t.TabContent['4. Once the payment is confirmed, you can use the credits to send SMS.'],
                                            }}
                                        >
                                            {/* 4. {t('paymentbankhero.h10-1')} <br />
              {t('paymentbankhero.h10-2')} */}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {showModalqr && (
                        <div className="box__wrapper">
                            <div className="box__header">
                                <h5>
                                    {t.TabContent['Instructions for QR code payment']}
                                </h5>
                            </div>
                            <div className="box__body type__scroll">
                                <div
                                    className="box__content border-0"
                                    style={{ backgroundColor: '#f1f8f9' }}
                                >
                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_15.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_15.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: t.TabContent['1. Open the bank’s application and go to the “Scan QR Code” menu.'],
                                            }}
                                        >
                                            {/* 1. {t('TabContent::paymentqrhero.h8')}
              <br />
              QR Code */}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_16.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_16.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['2. Use your phone to scan the QR code on the screen.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_17.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_17.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['3. Or you can choose to save the QR code as an image and upload it in the bank’s application to pay.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_18.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_18.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['4. Check that all the details are correct, then confirm the payment.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_19.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_19.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['5. After the payment is completed, the system will update your status automatically. You can now use the newly purchased credits to send SMS.']}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {showModalcredit && (
                        <div className="box__wrapper">
                            <div className="box__header">
                                <h5>
                                    {t.TabContent['Instructions for credit card payment']}
                                </h5>
                            </div>
                            <div className="box__body type__scroll">
                                <div
                                    className="box__content border-0"
                                    style={{ backgroundColor: '#f1f8f9' }}
                                >
                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_26.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_26.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: t.TabContent['1. When you choose to pay by credit card, the system will automatically take you to the 2C2P website.'],
                                            }}
                                        ></h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_27.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_27.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['2. Check the price and enter your credit card details.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_28.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_28.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['3. Enter OTP for identity verification, then click confirm.']}
                                        </h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_29.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_96.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: t.TabContent['4. After the payment is completed, the system will take you back to the ThaiBulkSMS website automatically.'],
                                            }}
                                        ></h4>
                                    </div>

                                    <div className="d-flex align-items-center item__box">
                                        {/* <img
                                            className="img-fluid lazyload"
                                            data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img//img/icon_30.png`}
                                            alt=""
                                        /> */}
                                        <span className="img-fluid lazyload">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/icon_30.png`} alt="" width={100} height={100}/>
                                        </span>
                                        <h4>
                                            {t.TabContent['5. You can use the new credit to send an SMS now.']}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
};

TabContent.getInitialProps = async () => ({
    namespacesRequired: ['How-to-order'],
});

// TabContent.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TabContent;
