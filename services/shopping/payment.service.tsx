import axios from 'axios';
import AppConfig from '../../appConfig';

import { UserAddress, UpdateUserAddress } from '../user/user.model';
import { FormBodyPayment, QrData } from './pricing.model';
const ApiUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/address`;
const ApiUpdateUserAddress = `${AppConfig.API_URL_ACCOUNT}/user/ship-to-address`;
const ApiBankTransferSubmit = `${AppConfig.API_URL_SHOPPING}/payment/banktransfer`;
const ApiCredit2C2PPaymentSubmit = `${AppConfig.API_URL_SHOPPING}/payment/credit-card`;
const ApiQrPaymentSubmit = `${AppConfig.API_URL_SHOPPING}/payment/qr-confirm`;
const ApiQrShow = `${AppConfig.API_URL_SHOPPING}/payment/qr`;
const ApiQrCheckPay = `${AppConfig.API_URL_SHOPPING}/payment/qr-pay`;
const ApiQrRenew = `${AppConfig.API_URL_SHOPPING}/payment/qr-renew`;
const ApiCheckFirstPurchase = `${AppConfig.API_URL_SHOPPING}/payment/check-first-purchase`;
export async function GetAddress(): Promise<UserAddress> {
    const res = await axios.get(ApiUserAddress);
    const data: UserAddress = res.data;
    return data;
}

export async function UpdateAddress(data: UpdateUserAddress) {
    const res = await axios.put(ApiUpdateUserAddress, data);
    return res;
}

export async function BankTransferSubmit(data: FormBodyPayment) {
    const res = await axios.post(ApiBankTransferSubmit, data);
    return res.data;
}

export async function Credit2C2PPaymentSubmit(data: FormBodyPayment) {
    const res = await axios.post(ApiCredit2C2PPaymentSubmit, data);
    return res.data;
}

export async function QrPaymentSubmit(data: FormBodyPayment) {
    const res = await axios.post(ApiQrPaymentSubmit, data);
    return res.data;
}

export async function QrShow(data: QrData) {
    const res = await axios.post(ApiQrShow, data);
    return res.data;
}

export async function QrCheckPay(data: QrData) {
    const res = await axios.post(ApiQrCheckPay, data);
    return res.data;
}

export async function QrRenew(data: QrData) {
    const res = await axios.post(ApiQrRenew, data);
    return res.data;
}

export async function CheckFirstPurchase(dpd: string) {
    const res = await axios.post(ApiCheckFirstPurchase, {
        tokenFirstPurchase: dpd,
    });
    return res.data;
}
