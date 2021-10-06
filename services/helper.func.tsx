export const calcullateVat = (amount: number, vat: number): number => {
    return amount * (vat / 100);
};
