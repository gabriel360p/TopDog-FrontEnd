import type { FormCartType } from "./FormCartType";
import type { Product } from "./ProductType";

export interface CreateOrderType {
    orderId: string;
    formData: FormCartType;
    cartItems: Product[];
    createdAt: string;
    cartItemsValueTotal: number;
}
