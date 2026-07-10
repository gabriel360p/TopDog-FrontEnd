export interface FormCartType {
    street: string;
    number: number;
    neighborhood: string;
    address2: string | undefined;
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
// import * as y from "yup";
// import type { CartFormValidation } from "../YupSchemas/CartFormValidation";

// export type FormCartType = y.InferType<typeof CartFormValidation>;