import { useRouter } from 'next/router'
import th from '../../public/locales/th/Product.json';
import en from '../../public/locales/en/Product.json';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

// import PropTypes from 'prop-types';
const FaqSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return(
        <div
        className="faq_section lazyload"
        data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/bg_3.png`}
    >
        <div className="container">
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
                                        {t.FaqSection['Are sending speeds and success rates of the Standard SMS and Corporate SMS packages different?']}
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
                                    <p>{t.FaqSection['No.']}</p>
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
                                        {t.FaqSection['Can the sender’s name be set to a custom name?']}
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
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: t.FaqSection['It is possible. If you wish to set a custom name as the sender’s name, you are required to purchase a package with a minimum price of 3,000 THB and up. The number of custom names allowed depending on the package chosen. The details can be found here: <a href=\"https://www.thaibulksms.com/pricing\" >https://www.thaibulksms.com/pricing</a>":"It is possible. If you wish to set a custom name as the sender’s name, you are required to purchase a package with a minimum price of 3,000 THB and up. The number of custom names allowed depending on the package chosen. The details can be found here: <a href=\"https://www.thaibulksms.com/pricing\" >https://www.thaibulksms.com/pricing</a>'],
                                        }}
                                    ></p>
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
                                        {t.FaqSection['Which API languages does ThaiBulkSMS support?']}
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
                                            __html: t.FaqSection['More than 10 languages are supported including PHP, Java, Python, and others as listed here:<a href="https://frontend.thaibulksms.com/api" >https://frontend.thaibulksms.com/api</a>'],
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
                                        {t.FaqSection['Can OTP be delivered to every recipient, even those who have set their systems to block SMS?']}
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
                                            __html: t.FaqSection['If the customer is using our OTP Ready-to-Use system, the SMS can be delivered to such recipients. But if the customer is using the customer’s system with custom sender names, a whitelist request must be submitted to allow those custom sender names to be able to reach the numbers which turned on the blocking function.'],
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
                                        {t.FaqSection['When encountering an anti-spam system (the recipient requested to block SMS from this channel), what can be done about it?']}
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
                                    <p>
                                        {t.FaqSection['You can contact us to request a whitelist form for senders. We will then get in touch with the networks. The networks will decide whether a sender can be allowed on the whitelist.']}
                                    </p>
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
                                        {t.FaqSection['What is the maximum number of characters allowed per 1 message, and are there any other restrictions?']}
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
                                            __html: t.FaqSection['For messages in <b>Thai</b>, 70 characters are allowed per 1 credit (1 message)/number. Messages with 71-134 characters cost 2 credits (2 consecutive messages)/number. Messages with 135-201 characters cost 3 credits (3 consecutive messages)/number.        <br>For messages in <b>English</b>, 160 characters are allowed per 1 credit (1 message)/number. Messages with 161-306 characters cost 2 credits (2 messages)/number. Messages with 307-459 characters cost 3 credits (3 messages)/number.<br>*A message with both Thai and English characters will be counted as a Thai message.<br>*Caution: if an English message contains special characters that exist in the Thai keyboard, the message will be counted as a Thai message for crediting purposes.'],
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
                                        {t.FaqSection['In the event that the end recipient has closed their machine, will the message be sent?']}
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
                                    <p>
                                        {t.FaqSection['The system will continue to Resend until the end recipient has opened their machine. If their status has updated, this means that the Resend process has finished, but this cannot be inspected under a Standard SMS package.']}
                                    </p>
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
                    <div className="row">
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
                                    {t.FaqSection['Contact our staff']}
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
                                <Link href="/contact/">
                                    <a className="btn v4">
                                        {t.FaqSection['Call back service by staff']}
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
                                    <Image loader={myLoader} src="img_3.png" alt="Image" width={100} height={100}/>
                                </span>
                                <span className="btn v4">
                                    {t.FaqSection['E-mail']}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
FaqSection.getInitialProps = async () => ({
    namespacesRequired: ['Product'],
});

// FaqSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default FaqSection;
// export default FaqSection;
