// import PropTypes from 'prop-types';
import * as React from 'react';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Policy.json';
import en from '../../public/locales/en/Policy.json';

const HeroSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    React.useEffect(() => {}, []);
    return (
        <div className="container condition-wrap">
            <h1 className="condition-header textHeadCondition">
                {t.policyhero.header}
            </h1>
            <p className="condition-text" style={{ textIndent: '30px' }}>
                {t.policyhero.subheader}
            </p>
            <div className="col-lg-12">
                <div className="condition-text">
                    <h2 className="textHeadCondition">
                        {t.policyhero.section_1.header}
                    </h2>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_1.content_1,
                        }}
                    ></span>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_1.content_2,
                        }}
                    ></span>
                    {/* <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_1.content_3,
                        }}
                    ></span> */}

                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.policyhero.section_2.header}
                    </h2>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                    >
                        {t.policyhero.section_2.desc}
                    </span>
                    <div
                        style={{ marginLeft: '24px' }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_2.content,
                        }}
                    ></div>

                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.policyhero.section_3.header}
                    </h2>

                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_3.content,
                        }}
                    ></span>

                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.policyhero.section_4.header}
                    </h2>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_4.content,
                        }}
                    ></span>

                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.policyhero.section_5.header}
                    </h2>
                    <div
                        style={{ marginLeft: '24px' }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_5.content,
                        }}
                    ></div>

                    <h2
                        className="textHeadCondition"
                        style={{ marginTop: '30px' }}
                    >
                        {t.policyhero.section_6.header}
                    </h2>
                    <span
                        style={{
                            display: 'block',
                            textIndent: '24px',
                            marginBottom: '14px',
                        }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_6.content,
                        }}
                    ></span>
                    <div
                        style={{ marginLeft: '24px' }}
                        dangerouslySetInnerHTML={{
                            __html: t.policyhero.section_6.footer,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['Policy'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;
