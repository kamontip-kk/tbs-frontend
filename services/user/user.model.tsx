export interface AuthData {
    aud: string;
    exp: number;
    expire: string;
    iat: number;
    isTrial: true;
    iss: string;
    joinDate: string;
    sub: string;
    username: string;
    isSubaccount: boolean;
}

export interface AuthLogin {
    token: string;
    isCompletedProfile: string;
    passcode: string;
    error: ErrorMessage;
}

export interface Register {
    accID: string;
    data: RegisterUser | {};
    error: ErrorMessage;
}
export interface RegisterUser {
    firstname: string;
    lastname: string;
    msisdn: string;
    email: string;
    isReceiveNews: string;
}
export interface QuickRegisterStep1 {
    data: QuickRegisterStep1Data;
    error: ErrorMessage;
}
export interface QuickRegisterStep1Data {
    msisdn: string;
}
export interface QuickRegisterStep2 {
    welcome_token: string;
    data: QuickRegisterStep2Data | {};
    error: ErrorMessage;
}
export interface QuickRegisterStep2Data {
    msisdn: string;
    pin: number;
}
export interface QuickRegisterStep3 {
    data: QuickRegisterStep3Data | {};
    error: ErrorMessage;
}
export interface QuickRegisterStep3Data {
    welcomeToken: string;
}
export interface ErrorMessage {
    code: string;
    erromessagerText: string | '';
}

export interface BillToAddrss {
    company_name: string;
    branch_company: string;
    address_no: string;
    building_info: string;
    street_info: string;
    prvince: string;
    amphur: string;
    district: string;
    postcode: string;
}

export interface ShipToAddress {
    address_no: string;
    building_info: string;
    street_info: string;
    province: string;
    amphur: string;
    district: string;
    postcode: string;
}
export interface UserAddress {
    accID: string;
    accType: string;
    taxID: string;
    billToAddress: BillToAddrss;
    shipToAddress: ShipToAddress;
}

export enum UserType {
    Company = 'company',
    Individual = 'individual',
}

export interface UpdateUserAddress {
    type: string;
    ship_to_contact_point: string;
    ship_to_address: string;
    ship_to_street: string;
    ship_to_sub_district: string;
    ship_to_district: string;
    ship_to_province: string;
    ship_to_postcode: string;
}
