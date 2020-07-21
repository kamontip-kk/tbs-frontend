import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import React from 'react';
import Router from 'next/router';
import { registerUser } from '../../services/user/user.service';
import ReCAPTCHA from 'react-google-recaptcha';
type Inputs = {
  firstname: string;
  lastname: string;
  tel: string;
  email: string;
  agree: boolean;
  news: boolean;
  res: string;
  recaptcha: string;
};
const RegisterComponents = ({ t }: any) => {
  let {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    errors,
  } = useForm<Inputs>();
  const onSubmit = async (data: any) => {
    console.log(data);
    const user = await registerUser(data);
    console.log('user : ', user);
    if (user.error.code !== '') {
      setError('res', {
        type: user.error.code,
        message: '',
      });
    } else {
      Router.push('/register/success');
    }
  };
  const handleErorr = (error: any) => {
    console.log(error);
    if (error.firstname) {
      return 'register.validate.firstname.' + error.firstname.type;
    }
    if (error.lastname) {
      return 'register.validate.lastname.' + error.lastname.type;
    }
    if (error.tel) {
      return 'register.validate.tel.' + error.tel.type;
    }
    if (error.email) {
      return 'register.validate.email.' + error.email.type;
    }
    if (error.recaptcha) {
      return 'register.validate.recaptcha.' + error.recaptcha.type;
    }
    if (error.agree) {
      return 'register.validate.agree.' + error.agree.type;
    }
    if (error.res) {
      return 'register.' + error.res.type;
    }

    if (error.auth) {
      return 'ErrorMessage:' + error.auth.type;
    }
  };
  const setreCaptcha = (value: any) => {
    setValue('recaptcha', value, { shouldValidate: true });
    clearErrors('recaptcha');
  };
  return (
    <div className="register_section">
      <h2>{t('register.header')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-indiv">
          <div className="input-twocolumn">
            <input
              ref={register({ required: true })}
              id="firstname"
              name="firstname"
              type="text"
              className="input-txt02"
              placeholder={t('register.firstname')}
            />
            <input
              ref={register({ required: true })}
              id="lastname"
              name="lastname"
              type="text"
              className="input-txt02"
              placeholder={t('register.lastname')}
            />
          </div>
          <div className="input-twocolumn">
            <input
              ref={register({
                required: true,
                pattern: /^[0][6||8-9][0-9]{8}$/i,
              })}
              id="tel"
              name="tel"
              type="text"
              className="input-txt02"
              placeholder={t('register.phone')}
            />
            <input
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              id="email"
              name="email"
              type="text"
              className="input-txt02"
              placeholder={t('register.email')}
            />
            <input
              ref={register({
                required: true,
              })}
              id="recaptcha"
              name="recaptcha"
              type="hidden"
            />
          </div>
          <div
            style={{
              color: '#e20000',
              textAlign: 'center',
              margin: '15px',
            }}
          >
            {t(handleErorr(errors))}
          </div>
          <ReCAPTCHA
            sitekey="6LegfrMZAAAAAIgOUDbhgm0GDPrazMrke41ZDD-e"
            onChange={setreCaptcha}
          />
          <br />
          <div className="sec-checkbox">
            <div>
              <label className="container">
                {t('register.rule')}
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
                {t('register.news')}
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
            {/* <Link href="/register-success">
              <a className="btn v2" href="#">
                {t('register.createBtn')}
              </a>
            </Link> */}
            <input
              className="btn v2"
              style={{ minWidth: '180px' }}
              type="submit"
              value={t('register.createBtn')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
RegisterComponents.getInitialProps = async () => ({
  namespacesRequired: ['Register', 'ErrorMessage'],
});

RegisterComponents.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation('Register')(RegisterComponents);
