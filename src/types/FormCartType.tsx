export interface FormCartType {
    street?: string;
    number?: number;
    neighborhood?: string;
    address2?: string;
    phone: string;
    payment_method: string;

    // é entrega sim ou não?
    delivery: string;

    // precisa de troco?
    needChange?: string;
    // valor do troco
    change?: string;
    observation?: string | undefined;
}
