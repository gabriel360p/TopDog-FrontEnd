import * as y from "yup"
import { pt } from 'yup-locales';
y.setLocale(pt);

export const CartFormValidation = y.object({
    street: y.string().required("Rua é um campo obrigatório").max(50),
    number: y.number().typeError("Insira um valor númerico").positive().required("Number é um campo obrigatório"),
    neighborhood: y.string().required("Bairro é um campo obrigatório").max(15),
    address2: y.string().max(100),
    phone: y.string().required("Numero de contato é um campo obrigatório"),
    payment_method: y.string().required("Forma de pagamento é um campo obrigatório"),
    delivery: y.string().required("Este é um campo obrigatório"),

    observation: y.string().optional().max(255),

    needChange: y.string().notRequired(),
    // change: y.number().typeError("Insira um valor númerico").optional().positive().notRequired(),
})