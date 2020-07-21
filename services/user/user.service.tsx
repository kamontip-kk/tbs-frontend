import axios from 'axios';
import {
  AuthLogin,
  Register,
  QuickRegisterStep1,
  QuickRegisterStep2,
  QuickRegisterStep3,
} from './user.model';
import Cookie from 'js-cookie';
// ------------------  login --------------------------------------------
export async function login(param: any): Promise<AuthLogin> {
  try {
    console.log('login param : ', param);
    const { username, password } = param;
    let sendData = {};
    if (param.firstname && param.lastname && param.email) {
      sendData = {
        username,
        password,
        firstname: param.firstname,
        lastname: param.lastname,
        email: param.email,
        is_receive_news: String(param.news),
      };
    } else {
      sendData = { username, password };
    }

    // return loginFail();
    let resultAPI = await axios.post(
      process.env.API_URL + '/api/auth',
      sendData
    );
    // let resultAPI = await axios.get(
    //   'https://api.github.com/repos/vercel/next.js'
    // );
    console.log(resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return loginFail();
    }
    const data = resultAPI.data;
    let loginResponse: AuthLogin = {
      token: data.token,
      passcode: data.passcode,
      error: {
        code: '',
        erromessagerText: '',
      },
    };
    localStorage.setItem(
      'TBS_token',
      JSON.stringify({ token: loginResponse.token })
    );
    Cookie.set('PASSCODE', loginResponse.passcode, { expires: 0.15 });
    return loginResponse;
  } catch (error) {
    localStorage.setItem('TBS_token', JSON.stringify({}));
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return loginFail(errorData.code, errorData.errorMessageText);
  }
}
export async function checktoken(): Promise<boolean> {
  try {
    const strlocalStorage = localStorage.getItem('TBS_token');
    const cookiePasscode = Cookie.get('PASSCODE');
    if (strlocalStorage === null || cookiePasscode === undefined) {
      logout();
      return false;
    }
    const objlocalStorage = JSON.parse(strlocalStorage);
    if (
      objlocalStorage.token === '' ||
      Object.keys(objlocalStorage).length === 0
    ) {
      logout();
      return false;
    }
    // let resultChecktoken = await axios.post(process.env.API_URL + '/auth', {});
    const resultChecktoken = true;
    if (resultChecktoken) {
      return resultChecktoken;
    }
    logout();
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export const logout = () => {
  localStorage.setItem('TBS_token', JSON.stringify({}));
  Cookie.remove('PASSCODE');
};
export const loginFail = (code = '400', errorMessageText = '') => {
  let loginResponse: AuthLogin = {
    token: '',
    passcode: '',
    error: {
      code: code ? code : 'auth.user.fail',
      erromessagerText: errorMessageText,
    },
  };
  return loginResponse;
};
// ------------------ end login --------------------------------------------
// ------------------ register --------------------------------------------

export async function registerUser(param: any): Promise<Register> {
  try {
    // localStorage.setItem(
    //   'TBS_resendregister',
    //   JSON.stringify({
    //     accID: '200605',
    //     msisdn: '0847827374',
    //     email: 'pachara.tho@1moby.com',
    //   })
    // );
    // return {
    //   accID: '200605',
    //   data: {
    //     firstname: 'a',
    //     lastname: 'b',
    //     msisdn: '0847827374',
    //     email: 'pachara.tho@1moby.com',
    //     isReceiveNews: 'false',
    //   },
    //   error: { code: '', erromessagerText: '' },
    // };
    let { firstname, lastname, tel, email, news, recaptcha } = param;
    const is_receive_news = String(news);
    const msisdn = tel;
    const cookieGclid = Cookie.get('gclid');
    let sendData = {};
    if (cookieGclid === undefined) {
      sendData = {
        firstname,
        lastname,
        msisdn,
        email,
        is_receive_news,
        recaptcha,
      };
    } else {
      sendData = {
        firstname,
        lastname,
        msisdn,
        email,
        is_receive_news,
        recaptcha,
        gclid: cookieGclid,
      };
    }
    let resultAPI = await axios.post(
      process.env.API_URL + '/api/user',
      sendData
    );

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        accID: '',
        data: {},
        error: { code: 'registerdto.fail', erromessagerText: '' },
      };
    }
    const data = resultAPI.data;
    let dataRegister: Register = {
      accID: data.accID,
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { accID: '', data: {}, error: errorData };
  }
}
export async function resendRegister(): Promise<boolean> {
  const strlocalStorage = localStorage.getItem('TBS_resendregister');
  if (strlocalStorage === null) {
    return false;
  }
  const objlocalStorage = JSON.parse(strlocalStorage);
  console.log('objlocalStorage : ', objlocalStorage);
  return true;
}
export async function quickRegisterStep1(
  param: any
): Promise<QuickRegisterStep1> {
  // let dataRegister = {
  //   data: { msisdn: '0804606546' },
  //   error: { code: '', erromessagerText: '' },
  // };
  // return dataRegister;
  try {
    let { msisdn, recaptcha } = param;
    let resultAPI = await axios.post(
      process.env.API_URL + '/api/user/quick-register/1',
      { msisdn, recaptcha }
    );

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        data: { msisdn: '' },
        error: { code: 'quickregisterfirststepdto.fail', erromessagerText: '' },
      };
    }
    const data = resultAPI.data;
    let dataRegister = {
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { data: { msisdn: '' }, error: errorData };
  }
}
export async function quickRegisterStep2(
  param: any
): Promise<QuickRegisterStep2> {
  // return {
  //   welcome_token: 'f7640778-8539-453c-85ed-e0bc5a1e0057',
  //   data: {},
  //   error: { code: '', erromessagerText: '' },
  // };
  try {
    let { msisdn, pin } = param;
    const cookieGclid = Cookie.get('gclid');
    let sendData = {};
    if (cookieGclid === undefined) {
      sendData = { msisdn, pin };
    } else {
      sendData = {
        msisdn,
        pin,
        gclid: cookieGclid,
      };
    }
    let resultAPI = await axios.post(
      process.env.API_URL + '/api/user/quick-register/2',
      sendData
    );

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        welcome_token: '',
        data: {},
        error: {
          code: 'quickregistersecondstepdto.fail',
          erromessagerText: '',
        },
      };
    }
    const data = resultAPI.data;
    let dataRegister = {
      welcome_token: data.welcome_token,
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { welcome_token: '', data: {}, error: errorData };
  }
}
export async function quickRegisterStep3(
  param: any
): Promise<QuickRegisterStep3> {
  // return {
  //   data: { welcomeToken: 'test_welcome_token' },
  //   error: { code: '', erromessagerText: '' },
  // };
  try {
    let { welcome_token } = param;
    let resultAPI = await axios.post(
      process.env.API_URL + '/api/user/quick-register/3',
      { welcome_token }
    );

    console.log('resultAPI : ', resultAPI);
    if (resultAPI.status !== 200 && resultAPI.status !== 201) {
      return {
        data: {},
        error: {
          code: 'quickregisterthirdstepdto.fail',
          erromessagerText: '',
        },
      };
    }
    const data = resultAPI.data;
    let dataRegister = {
      data: data.data,
      error: { code: '', erromessagerText: '' },
    };
    return dataRegister;
  } catch (error) {
    console.log('error : ', error.response);
    let errorData = error.response
      ? error.response.data.error
      : { code: '400', errorMessageText: '' };
    return { data: {}, error: errorData };
  }
}
// ------------------ end register --------------------------------------------

export default login;
