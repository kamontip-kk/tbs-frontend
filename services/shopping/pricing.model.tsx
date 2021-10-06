export interface ProductPackage {
    productId: number;
    period: number;
    ssRefId: number;
    amount: number;
    credit: number;
    productCode: string;
    name: string;
    description: string;
    sender: number;
}

export interface Product {
    amount: number;
    standard: ProductPackage;
    corporate: ProductPackage;
    period: number;
}
export interface PricingProps {
    t: Function;
    packages: ProductPackage[];
    packagesNormal: ProductPackage[];
    test: string;
}

export interface ProductBuy {
    productId: number;
    productName: string;
    unitSms: number;
    credit: number;
    period: number;
    sendername: number;
    amount: number;
    vat: number;
    total: number;
}

export interface FormBodyPayment {
    product_id: number;
    is_tax_invoice: string;
}

export interface Payment2C2PReponse {
    version: string;
    merchantId: string;
    paymentDescription: string;
    invoiceNo: string;
    orderId: string;
    currency: string;
    amount: string;
    customerEmail: string;
    paymentOption: string;
    hash: string;
    paymentUrl: string;
    resultUrlFrontent: string;
    resultUrlBackend: string;
}

export interface QrData {
    invoice_no: string;
}
