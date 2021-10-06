import axios from 'axios';

import AppConfig from '../../appConfig';

const LandingPage = `${AppConfig.API_URL_BLOG}/landing-page`;

export async function GetLandingPage(): Promise<any> {
    const res = await axios.get(LandingPage);
    return res.data;
}
