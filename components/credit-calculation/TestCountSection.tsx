import { withTranslation } from '../../i18n';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Constant from './constants';
const TestCountSection = ({}: any) => {
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
            console.log('th');

            setIsUnicode(() => {
                return false;
            });
        } else {
            console.log('eng');

            setIsUnicode(() => {
                return true;
            });
        }

        const maxMsgPerCopy: number = isUnicode
            ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
            : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;

        // const isMoreThanOneCopy: boolean = msgCount > maxMsgPerCopy;

        const nextMsgLengthPerCopy: number = isUnicode
            ? Constant.TH_NEXT_CHAR_LENGTH
            : Constant.ENG_NEXT_CHAR_LENGTH;

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
                                    <p className="textCount">
                                        {msgCount}/{charMaxLength}
                                    </p>
                                    <div className="countCredit">
                                        คิดเป็น{' '}
                                        <span>{creditUsage} เครดิต</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 spaceRegis">
                                <a href="" className="linkRegis">
                                    สมัครสมาชิก
                                </a>
                                <br />
                                <p className="freeCredit">
                                    เพื่อ รับเครดิตฟรี สำหรับทดลองส่ง
                                </p>
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

TestCountSection.propTypes = {
    t: PropTypes.func.isRequired,
};
export default withTranslation('credit-calculation')(TestCountSection);
