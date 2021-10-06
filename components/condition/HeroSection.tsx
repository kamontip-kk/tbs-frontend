// import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Condition.json';
import en from '../../public/locales/en/Condition.json';

const HeroSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {}, []);
    return (
        <div className="container condition-wrap">
            <h1 className="condition-header textHeadCondition">
                {t.conditionhero["header"]}
            </h1>
            <p className="condition-text">{t.conditionhero.subheader}</p>
            <div className="col-lg-12">
                <div className="condition-text">
                    <h2 className="textHeadCondition">
                        {t.conditionhero.purpose.header}
                    </h2>
                    {t.conditionhero.purpose.desc}
                    <br /> <br />
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.purpose.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.servicecharge.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.servicecharge.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.reservation.header}
                    </h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.reservation.content,
                        }}
                    ></p>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.transfer.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.transfer.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.calexpire.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.calexpire.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.sender.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.sender.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.whiltelist.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.whiltelist.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.account.header}
                    </h2>
                    <span className="bold-text">
                        {t.conditionhero.account.desc}
                    </span>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.account.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.ban.header}
                    </h2>
                    <span className="bold-text">
                        {t.conditionhero.ban.desc}
                    </span>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.ban.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.policy.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.policy.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.contact.header}
                    </h2>
                    <ul
                        dangerouslySetInnerHTML={{
                            __html: t.conditionhero.contact.content,
                        }}
                    ></ul>
                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.conditionhero.spec.header}
                    </h2>
                    <p>{t.conditionhero.spec.desc}</p>
                </div>
            </div>
            <p style={{ marginTop: '30px' }} className="condition-text">
                {t.conditionhero.effective}
            </p>
        </div>
    );
};

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['Condition'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;
