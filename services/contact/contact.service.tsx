import axios from 'axios';
// import { sendContact } from './contact.model';

export async function sendContact(param: any) {
    const dataSend = {
        contact_type: Number(param.contactType),
        firstname: param.firstname,
        lastname: param.lastname,
        company_name: param.companyName,
        tel: param.phone,
        email: param.email,
        message: param.desc,
        recaptcha: param.recaptcha,
    };
    try {
        let resultAPI = await axios.post(
            process.env.NEXT_PUBLIC_API_URL_ACCOUNT + '/contact',
            dataSend
        );
        console.log(resultAPI);
        if (resultAPI.status !== 200 && resultAPI.status !== 201) {
            return { code: '400', errorMessageText: '' };
        }

        return { code: '', errorMessageText: '' };
    } catch (error:any) {
        console.log('error : ', error.response);
        let errorData:any = error.response
            ? error.response.data.error
            : { code: '400', errorMessageText: '' };
        return errorData;
    }
}

export default sendContact;
