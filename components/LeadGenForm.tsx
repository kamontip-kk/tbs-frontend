import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import th from '../public/locales/th/LeadGenForm.json';
import en from '../public/locales/en/LeadGenForm.json';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import appConfig from '../appConfig';
import Cookie from 'js-cookie';

const myLoader = ({src}:any) => {
    return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
}

interface FormValue {
    email: string;
    phoneNumber: string;
}

interface FormErrors {
    email?: boolean;
    phoneNumber?: boolean;
}

interface ErrorResponse {
    response: any;
}

enum CookieStatus {
    DONE = 'done',
    CLOSE = 'close',
}

const LeadGenForm = (): React.Component | any => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const [formVal, setFormVal] = useState<FormValue>({
        email: '',
        phoneNumber: '',
    });
    const [isShowingForm, setIsShowingForm] = useState<boolean>(true);
    const [errors, setErrors] = useState<FormErrors>({
        email: false,
        phoneNumber: false,
    });
    const [errorsMsg, setErrorsMsg] = useState<FormValue>({
        email: '',
        phoneNumber: '',
    });
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    async function handleSubmitForm(e: any) {
        e.preventDefault();

        const findErrors = validate(formVal.email, formVal.phoneNumber);

        const allPassed = !Object.keys(findErrors).some((x) => findErrors[x]);

        if (allPassed) {
            let res;

            try {
                res = await axios.post(
                    `${appConfig.API_URL_ACCOUNT}/user/download-free-content-form`,
                    formVal
                );
                let domain = 'localhost';
                if (appConfig.APP_ENV === appConfig.production)
                    domain = '.thaibulksms.com';
                else if (appConfig.APP_ENV === appConfig.internalTest)
                    domain = '.1mobyline.com';

                Cookie.set('ebook', CookieStatus.DONE, {
                    domain,
                    expires: 30,
                });
                setIsSuccess(true);

                setTimeout(() => {
                    setIsShowingForm(false);
                }, 3000);
                
            } catch (e) {
                let err: ErrorResponse = (e as any) as ErrorResponse;
                res = err?.response?.data?.error;
                let foundEmailErrors =
                    res?.code?.includes('email') && res?.code;
                let foundPhoneErrors =
                    res?.code?.includes('phoneNumber') && res?.code;

                setErrorsMsg({
                    phoneNumber: foundPhoneErrors,
                    email: foundEmailErrors,
                });
                setErrors({
                    phoneNumber: foundPhoneErrors?.length ? true : false,
                    email: foundEmailErrors?.length ? true : false,
                });
            }

            return res;
        } else {
            setErrors(findErrors);
        }
    }

    function validate(email: string, phoneNumber: string): FormErrors {
        return {
            email: email.length === 0,
            phoneNumber: phoneNumber.length === 0,
        };
    }

    function handleEmail(e: any): void {
        setFormVal({ ...formVal, email: e.target.value });
    }

    function handlePhoneNumber(e: any): void {
        setFormVal({ ...formVal, phoneNumber: e.target.value });
    }

    function getEbookCookie() {
        return Cookie.get('ebook');
    }

    function handleClose() {
        let domain = 'localhost';
        if (appConfig.APP_ENV === appConfig.production)
            domain = '.thaibulksms.com';
        else if (appConfig.APP_ENV === appConfig.internalTest)
            domain = '.1mobyline.com';

        if (getEbookCookie() !== CookieStatus.DONE) {
            Cookie.set('ebook', CookieStatus.CLOSE, {
                domain,
                expires: 30,
            });
        }

        setIsShowingForm(false);
    }

    useEffect(() => {
        const ebookStatus = getEbookCookie();
        if (ebookStatus === CookieStatus.DONE) {
            return setIsShowingForm(false);
        } else if (ebookStatus === CookieStatus.CLOSE) {
            return setIsShowingForm(false);
        }
        return setIsShowingForm(true);
    }, []);

    return (
        isShowingForm && (
            <div className="leadGen">
                {isSuccess ? (
                    <div className={`secLeadGen ${isSuccess ? 'success' : ''}`}>
                        <div
                            className={`successContent ${
                                isSuccess ? 'success' : ''
                            }`}
                        >
                            {t.CompletedText}

                        </div>
                        <Link href="">
                        <a className="btnClose" onClick={handleClose}>
                            {/* <img
                                className=""
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/btnCloseLead.svg`}
                                alt="button close"
                            /> */}
                            <span>
                                <Image loader={myLoader} src="btnCloseLead.svg" alt="button close" width={100} height={100}/>
                            </span>
                        </a>
                        </Link>
                    </div>
                ) : (
                    <div className="secLeadGen">
                        <h3>{t.HeadingText}</h3>
                        <p>{t.LeadText}</p>
                        <form>
                            <div className="leadform-instance">
                                <input
                                    onChange={handleEmail}
                                    name="email"
                                    type="email"
                                    placeholder={t.Email}
                                    className={`inputLead ${
                                        errors.email ? 'error' : ''
                                    }`}
                                ></input>
                                {errors.email && (
                                    <div className="invalid-leadform">
                                        {/* {t(`${errorsMsg?.email}`) ||
                                            t('Error::InvalidEmail')} */}
                                        {t[`${errorsMsg?.email}`] || t.Error.InvalidEmail}
                                    </div>
                                )}
                            </div>
                            <div className="leadform-instance">
                                <input
                                    onChange={handlePhoneNumber}
                                    name="phoneNumber"
                                    type="text"
                                    placeholder={t.Phone}
                                    className={`inputLead ${
                                        errors.phoneNumber ? 'error' : ''
                                    }`}
                                ></input>
                                {errors.phoneNumber && (
                                    <div className="invalid-leadform">
                                        {/* {t(`${errorsMsg?.phoneNumber}`) ||
                                            t('Error::InvalidPhoneNumber')} */}
                                        {t[`${errorsMsg?.phoneNumber}`] || t.Error.InvalidPhoneNumber}
                                    </div>
                                )}
                            </div>
                            <button onClick={handleSubmitForm} type="submit">
                                {t.Download}
                            </button>
                        </form>
                        <Link href="">
                        <a className="btnClose" onClick={handleClose}>
                            {/* <img
                                className=""
                                src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/btnCloseLead.svg`}
                                alt="button close"
                            /> */}
                            <span>
                                <Image loader={myLoader} src="btnCloseLead.svg" alt="button close" width={100} height={100}/>
                            </span>
                        </a>
                        </Link>
                        
                    </div>
                )}
            </div>
        )
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            namespacesRequired: ['LeadGenForm'],
        },
    };
};

export default LeadGenForm;
