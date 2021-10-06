import axios from 'axios';

import AppConfig from '../../appConfig';

const packageNormal = `${AppConfig.API_URL_SHOPPING}/product/package`;
const packageFirstPurchase = `${AppConfig.API_URL_SHOPPING}/product/package-first-purchase`;
const packageAll = `${AppConfig.API_URL_SHOPPING}/product/package-all`;
export async function GetPackageNormal(): Promise<any> {
    const res = await axios.get(packageNormal);
    return res.data;
}

export async function GetPackageFirstPurchase(): Promise<any> {
    const res = await axios.get(packageFirstPurchase);
    return res.data;
}

export async function GetPackageAll(): Promise<any> {
    const res = await axios.get(packageAll);
    return res.data;
}
