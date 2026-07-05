import { toast } from "react-toastify";
import type { CreateOrderType } from "../types/OrderType";
import api from "./axios";

export async function newOrder(data: CreateOrderType) {
    try {
        const response = await api.post('/pedido', data)
        // console.log(response)

    } catch (error) {
        toast.error("Ocorreu um erro, tente novamente mais tarde")
        console.error(error)
    }
}
