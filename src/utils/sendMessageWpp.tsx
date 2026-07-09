//aqui vai está a função que deve encaminhar a mensagem do pedido para a loja
import type { CreateOrderType } from "../types/OrderType";

export function sendMessage(order?: CreateOrderType) {

    // - 2x Hot Dog Tradicional

    const mensagem = `
*TOP DOG*

Olá! Seu pedido foi recebido com sucesso e já está sendo processado.

*Pedido:* ${order?.orderId}

*Itens:*
${order?.cartItems?.map(item => `- ${item.quantity}x ${item.title}`).join('\n')}

*Observações:*
${order?.formData.observation || "Nenhuma"}

*Tipo de atendimento:*
${order?.formData.delivery === "true" ? "Entrega" : "Retirada"}

*Forma de pagamento:*
${order?.formData.payment_method}

*Total:* R$ ${order?.cartItemsValueTotal}

---

Guarde o número do seu pedido: *${order?.orderId}*.

Se desejar acompanhar o pedido, alterar alguma informação, solicitar cancelamento ou tirar dúvidas, basta responder esta conversa informando o número do pedido.

Obrigado pela preferência!
*Top Dog*


    `;

    const telefone = "5584996333501"
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.assign(url);
}