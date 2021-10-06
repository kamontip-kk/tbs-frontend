// import { withTranslation, Router } from '../../i18n';
import { useRouter } from 'next/router'
// import th from '../../public/locales/th/Help.json';
// import en from '../../public/locales/en/Help.json';
import th from '../../public/locales/th/QuickRegister.json';
import en from '../../public/locales/en/QuickRegister.json';
// import th from '../../public/locales/th/ErrorMessage.json';
// import en from '../../public/locales/en/ErrorMessage.json';
// import PropTypes from 'prop-types';
import { StoreContext } from '../context/store';
import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/user/user.service';
import TagManager from 'react-gtm-module';

type Inputs = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    agree: boolean;
    news: boolean;
    registerdto: string;
    auth: string;
};
const QuickRegisterComponents = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    const dataStore: any = useContext(StoreContext);
    let {
        register,
        handleSubmit,
        setError,
        clearErrors,
        setValue,
        errors,
    } = useForm<Inputs>({
        defaultValues: {
            agree: true,
            news: true,
        },
    });
    const onSubmit = async (data: any) => {
        if (dataStore.msisdnStore[0] === undefined) {
            console.log('errror msisdnStore');
            return;
        }
        const user = await login({
            ...data,
            username: dataStore.msisdnStore[0],
        });
        console.log('user : ', user);
        if (user.error.code !== '') {
            setError('auth', {
                type: user.error.code,
                message: '',
            });
        } else {
            TagManager.dataLayer({
                dataLayer: {
                    event: 'register',
                    register_method: 'quick',
                    action: 'complete_fulfil_info',
                },
            });
            window.location.replace('https://member.thaibulksms.com/');
            // Router.push('/');
        }
    };
    const handleErorr = (error: any) => {
        console.log(error);
        if (error.firstname) {
            return 'quickregister.validate.firstname.' + error.firstname.type;
        }
        if (error.lastname) {
            return 'quickregister.validate.lastname.' + error.lastname.type;
        }
        if (error.password) {
            return 'quickregister.validate.password.' + error.password.type;
        }
        if (error.email) {
            return 'quickregister.validate.email.' + error.email.type;
        }
        if (error.agree) {
            return 'quickregister.validate.agree.' + error.agree.type;
        }
        if (error.registerdto) {
            return 'quickregister.' + error.registerdto.type;
        }

        if (error.auth) {
            return 'ErrorMessage:' + error.auth.type;
        }
    };
    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
                event: 'register',
                register_method: 'quick',
                action: 'view_fulfil_info',
            },
        });
        console.log('dataStore : ', dataStore);
        if (dataStore.passStore[0] !== undefined) {
            setValue('password', dataStore.passStore[0]);
        }
        if (dataStore.msisdnStore[0] === undefined) {
            router.push('/log-in');
        }
    }, []);
    return (
        <div className="register_section">
            <h2>{t.quickregister.header}</h2>

            {/* ทดสอบ Help.json */}
            {/* {t.help.lable} */}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-indiv">
                    <div className="input-twocolumn">
                        <input
                            ref={register({ required: true })}
                            id="firstname"
                            name="firstname"
                            type="text"
                            className="input-txt02"
                            placeholder={t.quickregister.firstname}
                        />
                        <input
                            ref={register({ required: true })}
                            id="lastname"
                            name="lastname"
                            type="text"
                            className="input-txt02"
                            placeholder={t.quickregister.lastname}
                        />
                    </div>
                    <div className="input-twocolumn">
                        <input
                            ref={register({
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            id="email"
                            name="email"
                            type="text"
                            className="input-txt02"
                            placeholder={t.quickregister.email}
                        />
                        <input
                            ref={register({ required: true })}
                            onChange={() => clearErrors('auth')}
                            id="password"
                            name="password"
                            type="password"
                            className="input-txt02"
                            placeholder={t.quickregister.password}
                        />
                    </div>
                    <div
                        style={{
                            color: '#e20000',
                            textAlign: 'center',
                            margin: '15px',
                        }}
                    >
                        {t[`${handleErorr(errors)}`]}
                    </div>

                    <div className="sec-checkbox">
                        <div>
                            <label className="container">
                                {t.quickregister.rule}
                                <input
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    ref={register({ required: true })}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label className="container">
                                {t.quickregister.news}
                                <input
                                    type="checkbox"
                                    id="news"
                                    name="news"
                                    ref={register({})}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="btn-regis">
                        <input
                            className="btn v2"
                            style={{ minWidth: '180px' }}
                            type="submit"
                            value={t.quickregister.createBtn}
                            onClick={() => clearErrors()}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
QuickRegisterComponents.getInitialProps = async () => ({
    // namespacesRequired: ['QuickRegister', 'ErrorMessage'],
    namespacesRequired: ['QuickRegister'],
});

// QuickRegisterComponents.propTypes = {
//     t: PropTypes.func.isRequired,
// };
export default QuickRegisterComponents;
