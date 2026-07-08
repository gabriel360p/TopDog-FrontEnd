import type { FormCartType } from "./FormCartType";
import type { Product } from "./ProductType";
import type { discountTotal } from "../contexts/CartContext";

export interface CreateOrderType {
    orderId: string;
    formData: FormCartType;
    cartItems: Product[];
    createdAt: Date;
    cartItemsValueTotal: total({
        discount,
        valueDiscount
    }: discountTotal): number;
}