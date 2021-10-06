// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Home.json';
import en from '../../public/locales/en/Home.json';
import ReCAPTCHA from 'react-google-recaptcha';
// import { event } from 'jquery';
// import { tr } from 'date-fns/locale';
import Constant from './constants';
import {
    quickRegisterStep1,
    quickRegisterStep2,
} from '../../services/user/user.service';
import Link from 'next/dist/client/link';

// from '../../services/user/user.service';
const QuickRegister = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    useEffect(() => {
        Modal.setAppElement('#ElementModal');
    }, []);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [phoneNum, setPhone] = useState('');
    const [phoneOk, setphoneOk] = useState(false);
    const [otp, setOtp] = useState('');

    const [reCaptcha, setreCaptcha] = useState('');
    const [reCaptchaOK, setreCaptchaOK] = useState(false);
    const [button, setbutton] = useState(0);
    const [fase1, setfase1] = useState(true);
    const [fase2, setfase2] = useState(false);
    const [fase3, setfase3] = useState(false);
    const [previewMessage, setPreviewMessage] = useState<string>('');
    const [msgCount, setMsgCount] = useState(0);
    const [currentCount, setCurrentCount] = useState(0);
    const [textSms, settextSms] = useState('');
    const [textSmsOK, settextSmsOK] = useState(false);
    const [charMaxLength, setCharMaxLength] = useState(
        Constant.MAX_CHAR_LENGTH_ASC
    );
    const [load, setLoad] = React.useState(true);
    const [existPhoneError, setexistPhoneError] = React.useState(false);
    const [pinError, setpinError] = React.useState(false);
    const [creditUsage, setCreditUsage] = useState<number>(0);
    const [isUnicode, setIsUnicode] = useState<boolean>(false);
    const [maxMsgLengthPerCopy, setMaxMsgLengthPerCopy] = useState<number>(160);
    const unicodeRegex = new RegExp(/[^\x00-\x7F]+/g);

    function addNewChar(v) {
        settextSms(v);
        let count: number = 0;
        let current_C: number = 0;
        if (v !== '') {
            // console.log(calculateCredit(v));
            for (let i = 0; i < v.length; i++) {
                if (
                    Constant.DOUBLE_BYTES_CHAR.includes(v.charCodeAt(i)) &&
                    !isUnicode
                ) {
                    count += 2;
                    current_C++;
                } else {
                    count++;
                    current_C++;
                }
                // if (checkIsMoreThanMax()) {
                //     if (!unicodeRegex.test(previewMessage)) {
                //         setCurrentCount(160);
                //     } else {
                //         setCurrentCount(70);
                //     }
                // }
                setCurrentCount(current_C);
                if (count >= charMaxLength) {
                    setMsgCount(charMaxLength);

                    setPreviewMessage(v.slice(0, i + 1));
                    return;
                } else {
                    setMsgCount(count);
                    setPreviewMessage(v);
                }
            }
        } else {
            setMsgCount(0);
        }
    }

    function alterMaxMsgLenth() {
        let creditUsed: number = msgCount > 0 ? 1 : 0;

        if (!unicodeRegex.test(previewMessage)) {
            // console.log('th');

            setIsUnicode(() => {
                setCharMaxLength(Constant.MAX_CHAR_LENGTH_UNI);
                return false;
            });
            if (checkIsMoreThanMax()) {
                // setMsgCount(textSms.slice(0, 160).length);
                setCurrentCount(textSms.length);
                // setMsgCount(160);
            }
        } else {
            // console.log('eng');

            setIsUnicode(() => {
                setCharMaxLength(Constant.MAX_CHAR_LENGTH_ASC);
                return true;
            });
            if (checkIsMoreThanMax()) {
                const last = textSms.length;
                const firstText = textSms.slice(0, 69);
                const lastText = textSms.slice(last - 1, last);
                const text = firstText + lastText;
                settextSms(text);
                setMsgCount(text.length);
                setCurrentCount(text.length);
            }
        }

        const maxMsgPerCopy: number = isUnicode
            ? Constant.TH_MSG_DEFAULT_CHAR_LENGTH
            : Constant.ENG_MSG_DEFAULT_CHAR_LENGTH;

        const isMoreThanOneCopy: boolean = msgCount > maxMsgPerCopy;

        const nextMsgLengthPerCopy: number = isUnicode
            ? Constant.TH_NEXT_CHAR_LENGTH
            : Constant.ENG_NEXT_CHAR_LENGTH;

        setMaxMsgLengthPerCopy(maxMsgPerCopy);

        if (isMoreThanOneCopy) {
            creditUsed = Math.ceil(msgCount / nextMsgLengthPerCopy);
            let newLength: number = nextMsgLengthPerCopy * creditUsed;

            setCreditUsage(creditUsed);

            setMaxMsgLengthPerCopy(newLength);
            console.log(creditUsage, maxMsgLengthPerCopy);
        }

        setCreditUsage(creditUsed);
    }

    function checkIsMoreThanMax() {
        if (msgCount >= charMaxLength) {
            return true;
        }
        return false;
    }

    const submitStep1 = async () => {
        const resultStep1 = await quickRegisterStep1({
            msisdn: phoneNum,
            recaptcha: reCaptcha,
            message: textSms,
        });
        if ((await resultStep1.error.code) === '') {
            await changeFase(2);
        }
        if (
            (await resultStep1.error.code) ===
            'quickRegisterFirstStep.msisdn.exist'
        ) {
            setexistPhoneError(true);
        }
        // console.log(resultStep1);
    };

    const submitStep2 = async () => {
        const resultStep2 = await quickRegisterStep2({
            msisdn: phoneNum,
            pin: otp,
        });
        if ((await resultStep2.error.code) === '') {
            await changeFase(3);
        } else {
            // console.log('RE2' + resultStep2.error.code);
        }
        if (
            resultStep2.error.code === 'quickRegisterSecondStep.pin.incorrect'
        ) {
            setpinError(true);
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function changeFase(num: number) {
        if (num === 1) {
            setfase2(false);
            setfase3(false);
            setfase1(true);
            setbutton(0);
            closeModal();
        } else if (num === 2) {
            setfase1(false);
            setfase2(true);
            setfase3(false);
            setbutton(0);
        } else if (num === 3) {
            setfase1(false);
            setfase2(false);
            setfase3(true);
            setbutton(0);
        }
    }
    function setreCap(value: any) {
        setreCaptchaOK(true);
        setreCaptcha(value);
        // console.log(value);
    }
    useEffect(() => {
        alterMaxMsgLenth();
    });
    return (
        <div>
            <button
                className="btn v2 sms-btn-text"
                // type="submit"
                style={{ width: '200px' }}
                onClick={() => openModal()}
            >
                ทดลองส่งข้อความ
            </button>

            <div id="ElementModal">
                <Modal
                    isOpen={modalIsOpen}
                    // onRequestClose={closeModal}
                    onRequestClose={() => {}}
                    className="pass-style quick-register"
                    contentLabel=""
                >
                    {/* <a onClick={() => changeFase(1)}>
                        {' '}
                        <h2>close</h2>
                    </a> */}
                    <div
                        className="cross"
                        onClick={() => {
                            changeFase(1);
                        }}
                    ></div>
                    <div className="register-box">
                        {fase1 ? (
                            <div className="fase 1">
                                <div className="title">
                                    ทดลองส่ง SMS ฟรีเข้าเบอร์คุณ
                                </div>
                                <form>
                                    <label>เบอร์มือถือ</label>
                                    <input
                                        maxLength={10}
                                        type="text"
                                        placeholder="เบอร์มือถือของคุณ"
                                        className="phone"
                                        onChange={(event) => {
                                            setPhone(event.target.value);
                                            // console.log(event.target.value);
                                            setexistPhoneError(false);
                                            if (
                                                event.target.value.length === 10
                                            ) {
                                                setphoneOk(true);
                                            } else {
                                                setphoneOk(false);
                                            }
                                        }}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    {!phoneOk ? (
                                        <label className="red">
                                            กรุณากรอกเบอร์มือถือให้ครบ10หลัก
                                        </label>
                                    ) : (
                                        ''
                                    )}
                                    {existPhoneError ? (
                                        <label className="red">
                                            เบอร์นี้ถูกใช้ไปแล้ว
                                        </label>
                                    ) : (
                                        ''
                                    )}

                                    <div className="msg">
                                        <label>ข้อความ</label>
                                        <label className="blue">
                                            {msgCount}/{charMaxLength}
                                        </label>
                                    </div>

                                    <textarea
                                        className="msg"
                                        placeholder="ข้อความที่ต้องการส่ง"
                                        // disabled={checkIsMoreThanMax()}
                                        maxLength={
                                            checkIsMoreThanMax()
                                                ? currentCount
                                                : charMaxLength
                                        }
                                        value={textSms}
                                        onChange={(e) => {
                                            if (e.target.value === '') {
                                                e.target.value = '';
                                                addNewChar('');
                                                settextSmsOK(false);
                                            } else {
                                                addNewChar(e.target.value);
                                                settextSmsOK(true);
                                            }
                                        }}
                                    />
                                    {!textSmsOK ? (
                                        <label className="red">
                                            กรุณากรอกข้อความ
                                        </label>
                                    ) : (
                                        ''
                                    )}
                                </form>
                                <div className="desc">
                                    ในระบบส่งเต็มรูปแบบ
                                    คุณจะสามารถพิมพ์ได้สูงสุด 70 ตัวอักษร
                                    (ข้อความไทย) หรือ 160 (ข้อความอังกฤษ)
                                    สำหรับการส่ง 1 ครั้ง
                                </div>
                                <div className="captcha-content active">
                                    <ReCAPTCHA
                                        sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                                        onChange={setreCap}
                                        onExpired={() => {
                                            setreCaptchaOK(false);
                                        }}
                                    />
                                </div>
                                <button
                                    disabled={
                                        !(
                                            phoneOk &&
                                            reCaptchaOK &&
                                            load &&
                                            textSmsOK
                                        )
                                    }
                                    className={
                                        phoneOk &&
                                        reCaptchaOK &&
                                        load &&
                                        textSmsOK
                                            ? 'active'
                                            : 'disable'
                                    }
                                    onClick={() => {
                                        setLoad(false);
                                        submitStep1().then(() => setLoad(true));
                                    }}
                                >
                                    ส่ง SMS
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                        {fase2 ? (
                            <div className="fase 2">
                                <div className="title">ยืนยันการส่งข้อความ</div>
                                <div className="pr">
                                    กรอกรหัสผ่านที่ได้รับทาง SMS
                                    เพื่อยืนยันการส่ง ข้อความเข้าเบอร์คุณ
                                </div>
                                <form>
                                    <label>รหัสผ่าน</label>
                                    <input
                                        maxLength={6}
                                        type="text"
                                        className="phone"
                                        placeholder="รหัสผ่าน6หลัก"
                                        onChange={(event) => {
                                            setOtp(event.target.value);
                                            setpinError(false);
                                            if (
                                                event.target.value.length === 6
                                            ) {
                                                setbutton(2);
                                            } else {
                                                setbutton(0);
                                            }
                                        }}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    {pinError ? (
                                        <label className="red">
                                            รหัสผ่านไม่ถูกต้อง
                                        </label>
                                    ) : (
                                        ''
                                    )}
                                </form>
                                <button
                                    disabled={button !== 2 && !load}
                                    className={
                                        button === 2 && load ? 'active' : ''
                                    }
                                    onClick={() => {
                                        setLoad(false);
                                        submitStep2().then(() => setLoad(true));
                                    }}
                                >
                                    {t.SmsSection.TestQuickregister['Confirm number']}
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                        {fase3 ? (
                            <div className="fase 3">
                                <div className="title">ส่งข้อความสำเร็จ</div>
                                <div className="pr">
                                    คุณสามารถทดลองใช้งานระบบส่ง SMS
                                    ออนไลน์แบบเต็มรูปแบบได้ทันที
                                    โดยใช้รหัสผ่านเดียวกับที่ใช้ยืนยันการส่งข้อความในการเข้าสู่ระบบ
                                </div>
                                <Link
                                    href={`${process.env.NEXT_PUBLIC_WEB_URL_ACCOUNT}/log-in/`}
                                >
                                    <button
                                        className="active"
                                        onClick={() => changeFase(1)}
                                    >
                                        เข้าสู่ระบบ
                                    </button>
                                </Link>

                                <Link
                                    href={
                                        process.env.NEXT_PUBLIC_DOMAIN_URL +
                                        '/pricing/'
                                    }
                                >
                                    <button
                                        className="white"
                                        onClick={() => changeFase(1)}
                                    >
                                        ดูราคาแพ็กเกจ
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </Modal>
            </div>
        </div>
    );
};

QuickRegister.getInitialProps = async () => ({
    namespacesRequired: ['Home'],
});

// QuickRegister.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default QuickRegister;
