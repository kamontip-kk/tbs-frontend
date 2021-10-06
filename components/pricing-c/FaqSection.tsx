import { useRouter } from 'next/router'
import th from '../../public/locales/th/Pricing.json';
import en from '../../public/locales/en/Pricing.json';
import Link from 'next/dist/client/link';

// import PropTypes from 'prop-types';
import * as React from 'react';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

const FaqSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {}, []);
    return (
        <div
            className="faq_section lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section_title">
                            ให้คุณใช้งาน ThaiBulkSMS ได้อย่างไร้กังวล
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-md-center secFaqTBS">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 faqTBS">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/imgFAQ01.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="imgFAQ01.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>
                                    ด้วยยอดผู้ใช้ 200,000 คน และให้บริการมากกว่า
                                    3,000 บริษัท
                                </p>
                            </div>
                            <div className="col-md-4 faqTBS">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/imgFAQ02.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="imgFAQ02.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>ความปลอดภัยมาตรฐาน Internet Banking</p>
                            </div>
                            <div className="col-md-4 faqTBS">
                                {/* <img
                                    className="lazyload"
                                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/imgFAQ03.png`}
                                    alt="Image"
                                /> */}
                                <span className="lazyload">
                                    <Image loader={myLoader} src="imgFAQ03.png" alt="Image" width={100} height={100}/>
                                </span>
                                <p>ซัพพอร์ตโดยทีมงานผู้เชี่ยวชาญ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section_title">
                            {t.FaqSection['Frequently Asked Questions']}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12">
                        <div
                            className="accordion md-accordion"
                            id="accordionEx"
                            role="tablist"
                            aria-multiselectable="true"
                        >
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="headingOne1"
                                >
                                    <Link href="#collapseOne1">
                                    <a
                                        data-toggle="collapse"
                                        data-parent="#accordionEx"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapseOne1"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['What are the differences between Standard SMS and Corporate SMS packages?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapseOne1"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingOne1"
                                    data-parent="#accordionEx"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['<b>The Standard SMS</b><br/> package includes benefits such as cheaper costs of SMS sending, easy SMS sending, reports on SMS sending, a complete set of basic features, and tools for measuring campaign results.<br/><b>The Corporate SMS</b><br/>package includes every feature of the Standard SMS package while also providing additional features which are: access to a ready-to-use OTP sending system, credit refunds if the messages fail to reach the recipients, and the ability to check the sending status in a more detailed manner.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="headingTwo2"
                                >
                                    <Link href="#collapseTwo2">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapseTwo2"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['What payment methods are available?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapseTwo2"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingTwo2"
                                    data-parent="#accordionEx"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['We accept 3 payment methods:<br/>1. Scanning the QR code<br/>2. Online credit card payment<br/>3. Bank transfer<br/>*In case of a bank transfer, the customer needs to notify us of the transfer on the website every time.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="headingThree3"
                                >
                                    <Link href="#collapseThree3">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapseThree3"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['Which payment methods allow instant usage of credits?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapseThree3"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingThree3"
                                    data-parent="#accordionEx"
                                >
                                    <div className="card-body">
                                        <p>
                                            {t.FaqSection['Scanning the QR code and online credit card payment.']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="headingFour"
                                >
                                    <Link href="#collapseFour">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['After making the bank transfer, how can I notify you of the transfer?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapseFour"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingFour"
                                    data-parent="#accordionEx"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['You can notify us via the website instantly by following these steps:<br/>1. After logging in, hover your mouse over the “add credit” menu. An option named “notification of payment” will be available.<br/>2. Tell us the details of the transfer and attach the payment slip or other kinds of evidence of the transfer. Once our staff members have confirmed the details, the credits will be added to your account.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div
                            className="accordion md-accordion"
                            id="accordionEx2"
                            role="tablist"
                            aria-multiselectable="true"
                        >
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="headingFive"
                                >
                                    <Link href="#collapseFive">
                                    <a
                                        data-toggle="collapse"
                                        data-parent="#accordionEx2"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['How can I request a tax invoice?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapseFive"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="headingFive"
                                    data-parent="#accordionEx2"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['Please send your user name, details of your company, name/address, and the taxpayer’s identification number to <a href = "mailto: contact@thaibulksms.com">contact@thaibulksms.com</a>'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="heading6"
                                >
                                    <Link href="#collapse6">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx2"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapse6"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['What if I wish to purchase more SMS sending credits than specified in the packages?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapse6"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading6"
                                    data-parent="#accordionEx2"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['Please contact our sales team at <a href = "https://www.thaibulksms.com/contact">https://www.thaibulksms.com/contact</a> and provide us with your desired number of SMS and the type of usage.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="heading7"
                                >
                                    <Link href="#collapse7">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx2"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapse7"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['Can I use both the Standard SMS and Corporate SMS packages at the same time?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapse7"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading7"
                                    data-parent="#accordionEx2"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['They can be used at the same time but the credits are separate.<br/> <b>When using the web-based interface</b>, you can switch packages in the menu on the right side of <a href = "https://member.thaibulksms.com">https://member.thaibulksms.com</a>.<br/> <b>When using API</b>, add the parameter &force=standard to force the message to be sent using the Standard package and add the parameter &force=premium to force the message to be sent using the Corporate package.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div
                                    className="card-header"
                                    role="tab"
                                    id="heading8"
                                >
                                    <Link href="#collapse8">
                                    <a
                                        className="collapsed"
                                        data-toggle="collapse"
                                        data-parent="#accordionEx2"
                                        
                                        aria-expanded="false"
                                        aria-controls="collapse8"
                                    >
                                        <span className="close ion-ios-arrow-down"></span>
                                        <span className="open ion-ios-arrow-up"></span>
                                        <h5 className="mb-0 faq_header">
                                            {t.FaqSection['What is the maximum number of characters allowed per 1 message, and are there any other restrictions?']}
                                        </h5>
                                    </a>
                                    </Link>
                                </div>
                                <div
                                    id="collapse8"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="heading8"
                                    data-parent="#accordionEx2"
                                >
                                    <div className="card-body">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: t.FaqSection['For messages in <b>Thai</b>, 70 characters are allowed per 1 credit (1 message)/number. Messages with 71-134 characters cost 2 credits (2 consecutive messages)/number. Messages with 135-201 characters cost 3 credits (3 consecutive messages)/number.        <br>For messages in <b>English</b>, 160 characters are allowed per 1 credit (1 message)/number. Messages with 161-306 characters cost 2 credits (2 messages)/number. Messages with 307-459 characters cost 3 credits (3 messages)/number.<br>*A message with both Thai and English characters will be counted as a Thai message.<br>*Caution: if an English message contains special characters that exist in the Thai keyboard, the message will be counted as a Thai message for crediting purposes.'],
                                            }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-80">
                    <div className="col-xl-5 col-lg-12">
                        <div className="faq_bottom_text">
                            <h3>
                                {t.FaqSection['Still have further questions?']}
                            </h3>
                            <p>
                                {t.FaqSection['Choose your most convenient way to contact us.']}
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-7 col-12-7">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4 col-12">
                                <div className="service_feature_item">
                                    {/* <img
                                        className="lazyload"
                                        data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                                        alt="Image"
                                    /> */}
                                    <span className="lazyload">
                                        <Image loader={myLoader} src="img_1.png" alt="Image" width={100} height={100}/>
                                    </span>
                                    <Link href="tel:027986000">
                                    <a className="btn v4">
                                        02-798-6000
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
                                        <Image loader={myLoader} src="img_2.png" alt="Image" width={100} height={100}/>
                                    </span>
                                    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/contact/`}>
                                    <a
                                        target="_blank"
                                    >
                                        <Link href="">
                                        <a className="btn v4">
                                            {t.FaqSection['Call back service by staff']}
                                        </a>
                                        </Link>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FaqSection.getInitialProps = async () => ({
    namespacesRequired: ['Pricing'],
});

// FaqSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default FaqSection;
