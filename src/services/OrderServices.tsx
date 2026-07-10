import { toast } from "react-toastify";
import type { CreateOrderType } from "../types/OrderType";
import api from "./axios";
import { sendMessage } from "../utils/sendMessageWpp";

export async function newOrder(data: CreateOrderType) {
    try {
        const response = await api.post('/pedido', data)
        // console.log(response)
        toast.success("Seu pedido está sendo processado!")
        alert("Estamos redirecionando para o nosso Whatsapp!")
        setTimeout(() => {
            sendMessage(data)
        }, 2000)
    } catch (error) {
        toast.error("Ocorreu um erro, tente novamente mais tarde")
        console.error(error)
    }
}
