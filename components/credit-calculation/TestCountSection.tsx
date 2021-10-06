import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Constant from './constants';
// import { useRouter } from 'next/router';
// import th from '../../public/locales/th/credit-calculation.json';
// import en from '../../public/locales/th/credit-calculation.json';

const TestCountSection = ({}: any) => {
    // const router = useRouter();
    // const { locale } = router;
    // const t = locale === 'th' ? th : en;

    const [msgCount, setMsgCount] = useState(0);
    // const [textSms, settextSms] = useState('');
    const [isUnicode, setIsUnicode] = useState<boolean>(false);
    const [charMaxLength, setCharMaxLength] = useState(
        Constant.MAX_CHAR_LENGTH_ASC
    );
    const unicodeRegex = new RegExp(/[^\x00-\x7F]+/g);
    const [previewMessage, setPreviewMessage] = useState<string>('');

    const [creditUsage, setCreditUsage] = useState<number>(0);

    function addNewChar(v) {
        // settextSms(v);
        let count: number = 0;
        // let current_C: number = 0;
        if (v !== '') {
            for (let i = 0; i < v.length; i++) {
                if (
                    Constant.DOUBLE_BYTES_CHAR.includes(v.charCodeAt(i)) &&
                    !isUnicode
                ) {
                    count += 2;
                    // current_C++;
                } else {
                    count++;
                    // current_C++;
                }

                setMsgCount(count);
                setPreviewMessage(v);
            }
        } else {
            setMsgCount(0);
        }
    }

    function alterMaxMsgLenth() {
        let creditUsed: number = msgCount > 0 ? 1 : 0;

        if (!unicodeRegex.test(previewMessage)) {
            setIsUnicode(() => {
                return false;
            });
        } else {
            setIsUnicode(() => {
                return true;
            });
        }

        const maxMsgPerCopy: number = isUnicode
            ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
            : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;

        // const isMoreThanOneCopy: boolean = msgCount > maxMsgPerCopy;
        var nextMsgLengthPerCopy: number = 0;
        if (isUnicode) {
            if (msgCount <= 70) {
                nextMsgLengthPerCopy = isUnicode
                    ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
                    : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;
            } else {
                nextMsgLengthPerCopy = isUnicode
                    ? Constant.TH_NEXT_CHAR_LENGTH
                    : Constant.ENG_NEXT_CHAR_LENGTH;
            }
        } else {
            if (msgCount <= 160) {
                nextMsgLengthPerCopy = isUnicode
                    ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
                    : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;
            } else {
                nextMsgLengthPerCopy = isUnicode
                    ? Constant.TH_NEXT_CHAR_LENGTH
                    : Constant.ENG_NEXT_CHAR_LENGTH;
            }
        }

        creditUsed = Math.ceil(msgCount / nextMsgLengthPerCopy);
        let newLength: number = nextMsgLengthPerCopy * creditUsed;
        if (creditUsage <= 1) {
            setCharMaxLength(maxMsgPerCopy);
        } else {
            setCharMaxLength(newLength);
        }

        setCreditUsage(creditUsed);
    }
    useEffect(() => {
        alterMaxMsgLenth();
    });

    return (
        <div
            className="sms_section productsms CalCredit lazyload"
            data-bgset={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/promo_bg.png`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 ">
                        <div className="sms_text">
                            <h3>ทดลองคำนวณเครดิตด้วยข้อความของคุณ</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 spaceCount">
                                <div className="secCountCredits">
                                    <textarea
                                        className="areaCount"
                                        onChange={(e) => {
                                            if (e.target.value === '') {
                                                e.target.value = '';
                                                addNewChar('');
                                            } else {
                                                addNewChar(e.target.value);
                                            }
                                        }}
                                    ></textarea>
                                    <p className="textMessage">ข้อความ</p>
                                    
                                    <div className="countCredit">
                                        {msgCount}/<span>{charMaxLength}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 spaceRegis">
                                <p className="textCount">
                                    คิดเป็น{' '}<br />
                                    <span>{creditUsage} เครดิต</span>
                                </p>
                                <p className="freeCredit">
                                    รับเครดิตฟรี สำหรับทดลองส่ง
                                </p>
                                <a
                                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/register/`}
                                    className="btn v3"
                                >
                                    สมัครสมาชิก
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
TestCountSection.getInitialProps = async () => ({
    namespacesRequired: ['credit-calculation'],
});

// TestCountSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default TestCountSection;
