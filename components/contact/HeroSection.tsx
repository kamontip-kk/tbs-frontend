// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'
import th from '../../public/locales/th/Contact.json';
import en from '../../public/locales/en/Contact.json';
import { sendContact } from '../../services/contact/contact.service';
import Link from 'next/link';
import Image from 'next/image';

// const myLoader = ({src}:any) => {
//     return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

const menuClick = () => {
    var elDivnice = document.getElementsByClassName('devnice-select')[0];
    if (elDivnice.classList.contains('open'))
        elDivnice.classList.remove('open');
    else elDivnice.classList.add('open');
};
type Inputs = {
    contactType: string;
    firstname: string;
    lastname: string;
    companyName: string;
    email: string;
    phone: string;
    desc: string;
    recaptcha: string;
    confirm: boolean;
};
const HeroSection = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const [wordhead, setWordhead] = useState(
        HeroSection["Contact the sales department"]
    );
    const [successbtn, setSuccessbtn] = useState(false);
    let captcha: any;
    const setCaptchaRef = (ref: any) => {
        if (ref) {
            return (captcha = ref);
        }
    };
    let {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        errors,
        reset,
    } = useForm<Inputs>({
        defaultValues: {
            confirm: true,
            contactType: '1',
        },
    });
    const onSubmit = async (data: any) => {
        captcha.reset();

        const result = await sendContact(data);
        if (result.code !== '') {
            Swal.fire({
                icon: 'warning',
                html: t.HeroSection[result.code],
            });
            return;
        }

        reset({
            contactType: '1',
            firstname: '',
            lastname: '',
            companyName: '',
            email: '',
            phone: '',
            desc: '',
            confirm: true,
        });
        setWordhead('HeroSection::Contact the sales department');

        setSuccessbtn(false);
        Swal.fire({
            icon: 'success',
            text: t.HeroSection.Swal.titlesuccess,
        });
    };
    const handleErorr = (error: any) => {
        if (error.firstname) {
            return 'HeroSection::validate::firstname::' + error.firstname.type;
        }
        if (error.lastname) {
            return 'HeroSection::validate::lastname::' + error.lastname.type;
        }
        if (error.phone) {
            return 'HeroSection::validate::phone::' + error.phone.type;
        }
        if (error.email) {
            return 'HeroSection::validate::email::' + error.email.type;
        }
        if (error.recaptcha) {
            return 'HeroSection::validate::recaptcha::' + error.recaptcha.type;
        }
        if (error.confirm) {
            return 'HeroSection::validate::confirm::' + error.confirm.type;
        }
        if (error.desc) {
            return 'HeroSection::validate::desc::' + error.desc.type;
        }
        if (error.res) {
            if (error.res.type !== '400')
                return 'HeroSection::' + error.res.type;
            return 'ErrorMessage:::' + error.res.type;
        }

        if (error.auth) {
            return 'ErrorMessage:::' + error.auth.type;
        }
    };
    const setreCaptcha = (value: any) => {
        setValue('recaptcha', value, { shouldValidate: true });
        clearErrors('recaptcha');
    };
    React.useEffect(() => {}, []);
    return (
        <div className="container">
            <style jsx>{`
                .nice-select.open .list {
                    width: 100%;
                    opacity: 1;
                    pointer-events: auto;
                    -webkit-transform: scale(1) translateY(0);
                    -ms-transform: scale(1) translateY(0);
                    transform: scale(1) translateY(0);
                }
                .nice-select .option:hover,
                .nice-select .option.focus,
                .nice-select .option.selected.focus {
                    background-color: #10b7e4;
                    color: #000;
                }
            `}</style>
            <div className="row justify-content-center hero_top_one">
                <div className="col-12 text-center">
                    <h1 className="section__title">
                        {t.HeroSection['Contact us']}
                    </h1>
                </div>

                <div className="col-12">
                    <div className="contact__box">
                        <div className="row no-gutters">
                            <div className="col-lg-5">
                                <div className="contact__left">
                                    <Link href="https://goo.gl/maps/LrntacVbBFvyB5Uv6">                                    
                                    <a target="_blank" rel="noopener">
                                        {/* <img
                                            src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/contact.png`}
                                            className="img-fluid left__img"
                                            alt=""
                                        /> */}
                                        <span className="img-fluid left__img">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/contact.png`} alt="contact" width={100} height={100}/>
                                        </span>
                                    </a>
                                    </Link>

                                    <h3>
                                        {t.HeroSection['1MOBY Company Limited']}
                                    </h3>
                                    <ul>
                                        <li style={{ marginTop: '10px' }}>
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/location.png`}
                                                alt=""
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/location.png`} alt="location" width={100} height={100}/>
                                            </span>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: t.HeroSection['2521/10 Ladprao Road, Klong Chao Khun Singh Subdistrict, Wangthonglang District, Bangkok 10310'],
                                                }}
                                            ></p>
                                        </li>
                                        <li>
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/call.png`}
                                                alt=""
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/call.png`} alt="call" width={100} height={100}/>
                                            </span>
                                            <p>
                                                <Link href="tel:027986000">
                                                <a>
                                                    {t.HeroSection['0-2798-6000 extension 0']}
                                                </a>
                                                </Link>                                              
                                            </p>
                                        </li>
                                        <li>
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/calendar.png`}
                                                alt=""
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/calendar.png`} alt="calendar" width={100} height={100}/>
                                            </span>
                                            <p>
                                                {t.HeroSection['0-2798-6099']}
                                            </p>
                                        </li>
                                        <li>
                                            {/* <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail_2.png`}
                                                alt=""
                                            /> */}
                                            <span className="lazyload">
                                                <Image src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/mail_2.png`} alt="mail_2" width={100} height={100}/>
                                            </span>
                                            <p>
                                                <span>
                                                    <label
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                '<!--email_off-->contact@thaibulksms.com<!--/email_off-->',
                                                        }}
                                                    ></label>
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <img
                                                className="lazyload"
                                                data-src={`${process.env.NEXT_PUBLIC_BASE_ASSET}/img/clock.png`}
                                                alt=""
                                            />
                                            <p>
                                                {t.HeroSection['8.30 – 17.30 hrs. (Monday – Friday)']}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form_part">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* <select name="se1" id="" className="input__box v2">
                      <option value="">ติดต่อฝ่ายขาย</option>
                      <option value="">พบปัญหาการใช้งาน</option>
                      <option value="">สอบถามข้อมูลบริการ</option>
                      <option value="">แนะนำติชม</option>
                    </select> */}
                                        <div
                                            className="nice-select input__box v2 devnice-select"
                                            onClick={menuClick}
                                        >
                                            <span className="">
                                                {t[`${wordhead}`]}
                                            </span>
                                            <ul className="list">
                                                <li
                                                    // className="option selected"
                                                    className="option"
                                                    data-value=""
                                                    onClick={() => {
                                                        setValue(
                                                            'contactType',
                                                            '1',
                                                            {
                                                                shouldValidate: true,
                                                            }
                                                        );
                                                        setWordhead(
                                                            'HeroSection::Contact the sales department'
                                                        );
                                                    }}
                                                >
                                                    {t.HeroSection['Contact the sales department']}
                                                </li>
                                                <li
                                                    className="option "
                                                    data-value=""
                                                    onClick={() => {
                                                        setValue(
                                                            'contactType',
                                                            '2',
                                                            {
                                                                shouldValidate: true,
                                                            }
                                                        );
                                                        setWordhead(
                                                            'HeroSection::Contact support'
                                                        );
                                                    }}
                                                >
                                                    {t.HeroSection['Contact support']}
                                                </li>
                                            </ul>
                                        </div>
                                        <input
                                            ref={register({
                                                required: true,
                                            })}
                                            id="contactType"
                                            name="contactType"
                                            type="hidden"
                                        />
                                        <input
                                            ref={register({ required: true })}
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            className="input__box v2"
                                            placeholder={t.HeroSection['Real first name']}
                                        />

                                        <input
                                            ref={register({ required: true })}
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            className="input__box v2"
                                            placeholder={t.HeroSection.Surname}
                                        />
                                        <input
                                            ref={register()}
                                            id="companyName"
                                            name="companyName"
                                            type="text"
                                            className="input__box v2"
                                            placeholder={t.HeroSection.Company}
                                        />
                                        <input
                                            ref={register({
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            })}
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="input__box v2"
                                            placeholder={t.HeroSection.Email}
                                        />
                                        <input
                                            ref={register({
                                                required: true,
                                                validate: {
                                                    pattern: (value) =>
                                                        /^[0][6||8-9][0-9]{8}$/i.test(
                                                            value
                                                        ) ||
                                                        /^[0][2][0-9]{7}$/i.test(
                                                            value
                                                        ),
                                                },
                                            })}
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className="input__box v2"
                                            placeholder={t.HeroSection['Phone number']}
                                        />

                                        <textarea
                                            ref={register({ required: true })}
                                            id="desc"
                                            name="desc"
                                            className="input__box v2"
                                            placeholder={t.HeroSection['Initial details']}
                                        ></textarea>
                                        <input
                                            ref={register({
                                                required: true,
                                            })}
                                            id="recaptcha"
                                            name="recaptcha"
                                            type="hidden"
                                        />
                                        <ReCAPTCHA
                                            ref={(r) => setCaptchaRef(r)}
                                            sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                                            onChange={setreCaptcha}
                                        />
                                        <label className="checkbox-wrapper">
                                            {t.HeroSection['Confirm your contact from ThaiBulkSMS']}
                                            <input
                                                type="checkbox"
                                                id="confirm"
                                                name="confirm"
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        <div
                                            style={{
                                                color: '#e20000',
                                                textAlign: 'center',
                                                margin: '15px',
                                            }}
                                        >
                                            {t[`${handleErorr(errors)}`]}
                                        </div>
                                        <div
                                            className="button__wrapper text-center"
                                            style={{ marginTop: '50px' }}
                                        >
                                            <button
                                                type="submit"
                                                className="btn v8"
                                                disabled={successbtn}
                                            >
                                                Contact Me
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSection.getInitialProps = async () => ({
    namespacesRequired: ['Contact'],
});

// HeroSection.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default HeroSection;
