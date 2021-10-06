// import PropTypes from 'prop-types';
import React from 'react';
import FaqSection from './FaqSection';
import CollapseItem from './CollapseItem';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/FAQ.json';
import en from '../../public/locales/en/FAQ.json';


const TabContent = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;
    // const [, setTab] = React.useState<any>();
    const listItemSMS = [
        {
            // question: 'สามารถทดลองส่ง SMS ได้หรือไม่',
            question: t.HeroSection['Is there a trial for the SMS sending service?'],
            answer: t.HeroSection['You can register for a trial at <a href="https://account.thaibulksms.com/register/">https://account.thaibulksms.com/register/</a> Enter your details completely to receive 20 free SMS credits consisting of 10 Standard credits and 10 Corporate credits.'],
        },
        {
            question: t.HeroSection['What are the maximum character limits per 1 message, and are there any other restrictions?'],
            answer: t.HeroSection['<span>For messages in Thai</span>, 70 characters are allowed per 1 credit (1 message)/number. Messages with 71-134 characters cost 2 credits (2 consecutive messages)/number. Messages with 135-201 characters cost 3 credits (3 consecutive messages)/number.<br /><br /> <span>For messages in English</span>, 160 characters are allowed per 1 credit (1 message)/number. Messages with 161-306 characters cost 2 credits (2 messages)/number. Messages with 307-459 characters cost 3 credits (3 messages)/number. <br /><br />*A message with both Thai and English characters will be counted as a Thai message.<br />*Caution: if an English message contains special characters that exist in the Thai keyboard, the message will be counted as a Thai message for crediting purposes.'],
        },
        {
            question: t.HeroSection['What are the differences between the Standard SMS and Corporate SMS packages?'],
            answer: t.HeroSection['The <span>Standard SMS</span> package provides SMS sending at cheap costs, easy SMS sending with sending reports, and a complete set of basic features. The <span>Corporate SMS</span> package provides SMS sending features that meet business needs, credit refunds in case the messages failed to reach the recipients, tools for measuring campaign results, and more detailed sending reports. This package also provides an OTP Ready-to-use service.'],
        },
        {
            question: t.HeroSection['Can I use both the Standard SMS and Corporate SMS packages at the same time?'],
            answer: t.HeroSection['They can be used at the same time but the credits are separate.<br /><br /><span>When using the web-based interface</span>, you can switch packages in the menu on the right side of <a href="https://member.thaibulksms.com/">https://member.thaibulksms.com/</a>.<br /><br /> <span>When using API</span>, add the parameter &force=standard to force the message to be sent using the Standard package and add the parameter &force=premium to force the message to be sent using the Corporate package.'],
        },
        {
            question: t.HeroSection['How many messages can I send at any one time?'],
            answer: t.HeroSection['On the website, the maximum is 3 messages. When using API, the maximum is 5 messages.'],
        },
        {
            question: t.HeroSection['Can I request a custom sender’s name?'],
            answer: t.HeroSection['If you wish to set a custom sender’s name, a purchase of a package worth 3,500 THB and up is required. The number of sender’s names allowed will depend on the package. More details can be found at <a href="https://www.thaibulksms.com/pricing">https://www.thaibulksms.com/pricing</a>'],
        },
        {
            question: t.HeroSection['How many days does it take to request a custom sender’s name?'],
            answer: t.HeroSection['Requesting a custom sender’s name takes 5-7 working days. While waiting for the process to be completed, the customer can use basic sender names provided by ThaiBulkSMS such as SMS. DEMO WELCOME.'],
        },
        {
            question: t.HeroSection['What are the steps required to request a sender’s name?'],
            answer: t.HeroSection['1. Log in to your account and go to Sender’s Name.<br/>2. Fill in the forms and click confirm.<br/>**Wait 5-7 days. When your sender’s names are approved, our staff will notify you via email.'],
        },
        {
            question: t.HeroSection['What are the conditions when setting a custom sender’s name?'],
            answer: t.HeroSection['<span>The conditions are as follows:</span><br /><br />- Contains Numbers or English letters. 4 characters minimum, 10 characters maximum.<br />- Contains numbers/English letters and special characters. 4 characters minimum, 10 characters maximum.<br /><br />* Special characters permitted are . (dot), - (hyphen) and _ (underscore).<br />* Spacebar is not permitted.<br />* Thai letters are not permitted.'],
        },
        {
            question: t.HeroSection['If I have previously requested a sender’s name with a different service provider, can that name be used with ThaiBulkSMS?'],
            answer: t.HeroSection['You can request that sender’s name with us, but if the network notifies us that the name already exists and cannot be added to the system, we will request verification documents from you in order to ask the network to remove the previously registered name.'],
        },
        {
            question: t.HeroSection['Can I set a custom sender’s name if I use OTP?'],
            answer: t.HeroSection['In case you are using your OTP system, you can set a custom sender’s name via API. However, if you use the OTP ready-to-use service provided by ThaiBulkSMS, you cannot set a custom sender’s name.'],
        },
        {
            question: t.HeroSection['Every time I use OTP ready-to-use, how does it get calculated in terms of the number of SMS?'],
            answer: t.HeroSection['One use of OTP ready-to-use is counted as 1 SMS or 1 credit. But if it has not reached the recipient, the credits will be refunded.'],
        },
        {
            question: t.HeroSection['Can I send SMS to overseas destinations?'],
            answer: t.HeroSection['We provide SMS sending services covering 200 countries. Please contact us for service prices or more information at <a href="mailto:contact@thaibulksms.com">contact@thaibulksms.com</a> or telephone <a href="tel:027986000">0-2798-6000</a>.'],
        },
    ];

    const listItemshopping = [
        {
            question: t.HeroSection['What types of ThaiBulkSMS packages are there?'],
            answer: t.HeroSection['There are 2 packages, which are Standard SMS and Corporate SMS. The customer may choose between these according to their operational needs. Package prices begin at 1,500 baht, and all package details can be viewed at <a href="https://www.thaibulksms.com/pricing">https://www.thaibulksms.com/pricing</a>'],
        },
        {
            question: t.HeroSection['What methods of payment are available?'],
            answer: t.HeroSection['<span>Payments can be easily made. Simply:</span><br />1. Select the package at the storefront <a href="https://www.thaibulksms.com/pricing">https://www.thaibulksms.com/pricing</a><br />2. Select the payment channel: bank account transfer, online payment via a credit card, or QR Code scanning<br /><br />** In the event of a bank account transfer, confirmation of the transfer must be made at the webpage for each payment.'],
        },
        {
            question: t.HeroSection['After completing the transfer to pay for services, what channels of providing evidence of the transfer are available?'],
            answer: t.HeroSection['The customer can immediately provide their evidence on the website: after they log in, a tab on the upper bar will appear, displaying <span>“Credit Top-up.”</span> Clicking on this tab will display the <span>“Payment Confirmation”</span><br /><br /> notification. Click on this notification to provide your evidence, and attach the evidence slip of the bank transfer. After 1 hour, the system will immediately proceed with the credit transfer.'],
        },
        {
            question: t.HeroSection['What must be done to request a tax invoice?'],
            answer: t.HeroSection['This can be done by sending the Username, company details, name, address, and desired taxpayer ID number to this E-mail: <a href="mailto:contact@thaibulksms.com">contact@thaibulksms.com</a>'],
        },
    ];

    const listItemAPI = [
        {
            question: t.HeroSection['How many languages can be used to operate SMS with ThaiBulkSMS?'],
            answer: t.HeroSection['Every language is supported, such as PHP, Javascript, Python, and other languages, as displayed below:<a href="https://developer.thaibulksms.com/reference" target="_blank">https://developer.thaibulksms.com/reference</a>'],
        },
        {
            question: t.HeroSection['What steps are there to operating OTP Ready to use?'],
            answer: t.HeroSection['<a href="https://assets.thaibulksms.com/documents/Thaibulksms-otp.pdf" target="_blank">https://assets.thaibulksms.com/documents/Thaibulksms-otp.pdf</a>'],
        },
        {
            question: t.HeroSection['Is there a Success Rate speed difference between Standard SMS and Corporate SMS?'],
            answer: t.HeroSection['There is no difference, as messages are sent through our best Gateway.'],
        },
        {
            question: t.HeroSection['Can OTPs be sent to every number, including users who have blocked SMS reception?'],
            answer: t.HeroSection['If the customer is using <span>OTP Ready to use</span>, messages can be sent to every number, as we have automatically opened our Whitelist services. However, if the message is sent through the customer’s own OTP program, the customer’s must request for their sender name to be included in an additional <span>Whitelist</span>  in order for their message to be sent to numbers that use active blocking.'],
        },
        {
            question: t.HeroSection['In the event that the end recipient has notified their network provider to block these messages with Anti-Spam measures, how can these issues be resolved?'],
            answer: t.HeroSection['You can contact us for a <span>Whitelist</span> sender request form for us to coordinate with the network provider. Furthermore, the network provider will decide whether the aforementioned name will be allowed to function on the <span>Whitelist</span>.'],
        },
        {
            question: t.HeroSection['In the event that the end recipient has closed their machine, will the message be sent?'],
            answer: t.HeroSection['The system will continue to Resend until the end recipient has opened their machine. If their status has updated, this means that the Resend process has finished, but this cannot be inspected under a Standard SMS package.'],
        },
    ];
    React.useEffect(() => {
        // setTab($('#pills-profile-tab'));
        // }, [tab]);
    }, []);

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
                                className="tab-pane fade show active second__tab"
                                id="pills-sms"
                                role="tabpanel"
                            >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1 className="faqHead textHeadFaq">
                                            {t.HeroSection['General questions']}
                                        </h1>
                                        <div
                                            className="accordion md-accordion"
                                            id="accordionEx1"
                                            role="tablist"
                                            aria-multiselectable="true"
                                        >
                                            {listItemSMS.map((value, key) => {
                                                return (
                                                    <CollapseItem
                                                        item={{
                                                            ...value,
                                                            index: key + 1,
                                                            type: 'typeSms',
                                                            keyId:
                                                                '#accordionEx1',
                                                        }}
                                                        key={key + 1}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade second__tab"
                                id="pills-shopping"
                                role="tabpanel"
                            >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="faqHead">
                                            {t.HeroSection['Purchasing and payment']}
                                        </h3>
                                        <div
                                            className="accordion md-accordion"
                                            id="accordionEx4"
                                            role="tablist"
                                            aria-multiselectable="true"
                                        >
                                            {listItemshopping.map(
                                                (value, key) => {
                                                    return (
                                                        <CollapseItem
                                                            item={{
                                                                ...value,
                                                                index: key + 1,
                                                                type:
                                                                    'shopping',
                                                                keyId:
                                                                    '#accordionEx4',
                                                            }}
                                                            key={key + 1}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade show second__tab"
                                id="pills-api"
                                role="tabpanel"
                            >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="faqHead">
                                            {t.HeroSection['Technical problems']}
                                        </h3>
                                        <div
                                            className="accordion md-accordion"
                                            id="accordionEx5"
                                            role="tablist"
                                            aria-multiselectable="true"
                                        >
                                            {listItemAPI.map((value, key) => {
                                                return (
                                                    <CollapseItem
                                                        item={{
                                                            ...value,
                                                            index: key + 1,
                                                            type: 'APIDev',
                                                            keyId:
                                                                '#accordionEx5',
                                                        }}
                                                        key={key + 1}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FaqSection />

                {/* <div className="row align-items-center link__box">
          <div className="col-xl-5 col-lg-12">
            <div className="faq_bottom_text">
              <h3>{t('howtoordertabcontent.question')}</h3>
              <p>{t('howtoordertabcontent.questiontitle')}</p>
            </div>
          </div>
          <div className="col-xl-7 col-12-7">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_1.png`}
                    alt="Image"
                  />
                  <a href="tel:027986000" className="btn v4">
                    {t('howtoordertabcontent.telBtn')}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_2.png`}
                    alt="Image"
                  />
                  <Link href="/contact/">
                    <a className="btn v4">
                      {t('howtoordertabcontent.contactBtn')}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="service_feature_item">
                  <img
                    className="lazyload"
                    data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/img_3.png`}
                    alt="Image"
                  />
                  <a href="mailto:contact@thaibulksms.com" className="btn v4">
                    {t('howtoordertabcontent.fbBrn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
            </div>
        </div>
    );
};

TabContent.getInitialProps = async () => ({
    namespacesRequired: ['FAQ'],
});

// TabContent.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TabContent;
