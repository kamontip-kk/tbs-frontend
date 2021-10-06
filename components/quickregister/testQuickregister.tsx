// import PropTypes from 'prop-types';
import React from 'react';

import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';

import QuickRegister from '../popup/QuickRegister';

const TestQuickregister = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="sms_form">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="sms_form_text">
                                    <h4>
                                        {t.SmsSection.TestQuickregister['Try SMS sending']}
                                    </h4>
                                    <p>
                                        เพียงกรอกเบอร์มือถือของคุณ
                                        และข้อความที่คุณต้องการ
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="sms_form_field">
                                    <QuickRegister/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

TestQuickregister.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// TestQuickregister.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TestQuickregister;
