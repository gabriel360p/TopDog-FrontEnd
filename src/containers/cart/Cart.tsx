import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItens/cartItems";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { BanknoteArrowUp, Contact, Loader2, Locate, Lock, Paperclip } from "lucide-react";
import { Input } from "../../components/Input/input";
import { TypeInput } from "../../components/Input/types";
import type { FormCartType } from "../../types/FormCartType";
import { TypesButton } from "../../components/Button/types";
import { CartFormValidation, CartFormValidation2 } from "../../YupSchemas/CartFormValidation";
import { v4 as uuidv4 } from 'uuid';
import { newOrder } from "../../services/OrderServices";
import { delivery_rate } from "../../global/GlobalValues";
import { MapLocation } from "../../components/Map/MapLocation";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";

export const Cart = () => {
    const navigate = useNavigate();
    const { cart, total } = useCart();
    const [totalValor, setTotalValue] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);


    const [checkedPaymentMethod, setCheckedPaymentMethod] = useState<boolean>(true);
    const [methodMoney, setMethodMoney] = useState<boolean>(false);

    function handlePaymentMethod({ target }: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) {
        if (target.value === "dinheiro") { setMethodMoney(true) } else { setMethodMoney(false) }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTotalValue(total())
    }, [cart])

    const { register, handleSubmit, formState: { errors }, } = useForm<FormCartType>({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolver: yupResolver(!checked ? CartFormValidation : CartFormValidation2)
    })

    const onSubmit = handleSubmit(async (data) => {

        if (cart.length <= 0) {
            alert("O carrinho está vazio")
            return;
        }

        const confirmed = window.confirm("Confirmar pedido?");
        if (confirmed) {
            //aqui nesse ponto é quando vamos mandar os dados para o back
            //estamos pegando os items do carrinho, o formulário de informações
            //e pegando o formulário de observações

            let valueFinal: number = 0;
            if (data.delivery == "entrega") {
                valueFinal = total() + delivery_rate
            } else if (data.delivery == "retirada") {
                valueFinal = total();
            }

            const order = {
                orderId: "PEDIDO-" + uuidv4().replace(/-/g, "").slice(0, 8).toUpperCase(),
                formData: data,
                cartItems: cart,
                cartItemsValueTotal: valueFinal,
                createdAt: new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, -1) + '-03:00',
            }

            // console.log(order)
            setLoading(true)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            await newOrder(order)
            // console.log(response)
            setLoading(false)

            //a partir desse ponto, posso começar a tratar a diminuição de produtos do estoque, por exemplo.
            //deve:
            //deve diminuir quantidade de estoque? ainda não temos interface pra isso
            //Mandar mensagem: para o contato da loja hotdog
            //através do back-end deve enviar os pdfs via email para o email da loja


        }
    })

    return (
        <>
            <div className="h-[90px]"></div>

            <div className="
                p-6 gap-4 
                grid grid-cols-1 lg:grid-cols-2 
                justify-center
                mx-auto
            ">

                <div className="
                    order-1
                    rounded
                    p-2 
                    md:order-1
                    flex flex-col 
                    bg-background-header
                    h-fit w-full max-w-4xl
                ">
                    <div className="flex flex-col gap-4 ">
                        {cart.length > 0 ? (cart.map(item => (
                            <>
                                <CartItem key={item.id} item={item} />
                                <hr className="w-full opacity-10 text-secundary" />
                            </>
                        ))) :
                            (
                                <div className="flex justify-center items-center flex-col py-20 gap-3">
                                    <h2>O carrinho está vazio</h2>
                                    <Button title="Cardápio" stylesClass="normal-button bg-secundary" onClick={() => { navigate('/') }} />
                                </div>
                            )
                        }
                    </div>
                    {cart.length > 0 ? (
                        <div className="flex flex-col gap-1 px-4 mb-3 mt-auto pt-3">
                            <label htmlFor="" className="text-[12px] text-gray-400">Alguma observação sobre seu pedido?</label>
                            <textarea {...register('observation')} rows={4} spellCheck maxLength={120} id='observation' placeholder="Ex: Sem cebola..." className="border py-2 px-2 border-secundary rounded-2xl">

                            </textarea>
                            {errors.observation?.message && (
                                <span className="text-red-600 font-bold text-[14px] py-1">{errors.observation?.message}</span>
                            )}
                        </div>
                    ) : (<></>)}
                </div>

                <div className="
                    order-2
                    md:order-2
                    rounded
                    p-2
                    flex flex-col 
                    bg-background-header
                    h-fit
                    max-w-4xl
                ">
                    <form onSubmit={onSubmit}>

                        <div className="w-full h-fit flex flex-col p-4">
                            <div className="flex gap-3 min-w-[290px]">
                                <Paperclip className="text-secundary" />
                                <h2 className="font-bold"> Resumo do Pedido </h2>
                            </div>
                            <div className="flex w-full flex-col gap-2 mt-2">
                                <div className="flex items-center w-full justify-between text-gray-400 text-[13px]">
                                    <p className="text-[14px]">Subtotal:</p>
                                    <p className="text-[16px]">R${totalValor}</p>
                                </div>

                                <div className="flex items-center w-full justify-between text-gray-400 text-[13px]">
                                    <p className="text-[14px]">Taxa de Entrega:</p>
                                    <p className="text-[16px]">R${delivery_rate}</p>
                                </div>
                                <div className="flex items-center w-full justify-between text-gray-400 text-[13px]">
                                    <p className="text-[18px]">Total:</p>
                                    <p className="text-[16px]">R$
                                        {
                                            !checked ? totalValor + delivery_rate : totalValor
                                        }
                                    </p>
                                </div>

                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />
                            {!checked ? (

                                <div>
                                    <div className="flex justify-start items-center gap-2 mt-4">
                                        <Locate size={28} className="text-secundary" />
                                        <h2 className="font-bold"> Entrega </h2>
                                    </div>

                                    <div className="flex flex-col gap-2 mt-4">
                                        <div className="grid grid-cols-1 
                                            md:grid-cols-2 gap-2
                                            ">
                                            <div className="flex flex-col gap-2">
                                                {/* 
                                                Register cria uma ref, que estamos recebendo essa ref la no input
                                            */}
                                                <Input error={errors.street?.message} type={TypeInput.TEXT} {...register("street")} fullWidth label="Rua" placeholder="Rua" />
                                                <Input error={errors.neighborhood?.message} type={TypeInput.TEXT} {...register("neighborhood")} fullWidth label="Bairro" placeholder="Bairro" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Input error={errors.number?.message} type={TypeInput.NUMBER} {...register("number")} fullWidth label="Número" placeholder="Numero" />
                                                <Input error={errors.address2?.message} type={TypeInput.TEXT} {...register("address2")} fullWidth label="Complemento" placeholder="Complemento" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <MapLocation />
                            )}

                            <div className="flex flex-col gap-2 justify-center items-start mt-4">
                                <p>Forma de entrega</p>
                                <div className="flex gap-2">
                                    <input  {...register("delivery")} value="entrega" type="radio" id="to-leave" name="delivery" onClick={() => { setChecked(!checked) }} />
                                    <label htmlFor="to-leave">Entrega - 45 a 60 minutos</label>
                                </div>
                                <div className="flex gap-2">
                                    <input {...register("delivery")} value="retirada" type="radio" id="pick-up" checked={checked} onClick={() => { setChecked(!checked) }} name="delivery" />
                                    <label htmlFor="pick-up">Retirada - 15 a 20 minutoa</label>
                                </div>
                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />

                            <div className="flex flex-col justify-start items-start gap-2 mt-4">
                                <div className="flex justify-center items-center gap-2">
                                    <Contact size={28} className="text-secundary" />
                                    <h2 className="font-bold">Contato </h2>
                                </div>
                                <Input error={errors.phone?.message}  {...register("phone")} fullWidth label="Número para contato" placeholder="9-99999999" type={TypeInput.TEL} />
                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />

                            <div className="flex justify-start flex-col items-start gap-2 mt-4">
                                <div className="flex justify-center items-center gap-2">
                                    <BanknoteArrowUp size={28} className="text-secundary" />
                                    <h2 className="font-bold">Forma de pagamento </h2>
                                </div>
                                <select  {...register("payment_method")} id="category" onChange={(e) => { handlePaymentMethod(e) }} className="border border-secundary rounded-2xl py-2 ps-5 w-full">
                                    <option value="pix" selected>Pix</option>
                                    <option value="dinheiro">Dinheiro em espécie</option>
                                    <option value="debito">Cartão de Débito</option>
                                    <option value="credito">Cartão de Crédito</option>
                                </select>
                                {errors.payment_method?.message && (
                                    <span className="text-red-600 font-bold text-[14px] py-1">{errors.payment_method?.message}</span>
                                )}
                                {methodMoney && (

                                    <div className="flex flex-col min-w-full gap-2">
                                        <div className="flex flex-col gap-2 justify-center items-start mt-4">
                                            <p>Preciso de troco?</p>
                                            <div className="flex gap-2">
                                                <input {...register("needChange")} value="true" type="radio" id="yes" name="minmony" onClick={() => { setCheckedPaymentMethod(!checkedPaymentMethod) }} />
                                                <label htmlFor="yes">Sim</label>
                                            </div>
                                            <div className="flex gap-2">
                                                <input {...register("needChange")} value="false" type="radio" id="no" checked={checkedPaymentMethod} onClick={() => { setCheckedPaymentMethod(!checkedPaymentMethod) }} name="minmony" />
                                                <label htmlFor="no">Não</label>
                                            </div>
                                        </div>
                                        {!checkedPaymentMethod && (
                                            <Input error={errors.change?.message} {...register("change")} fullWidth label="Troco para quanto?" placeholder="Troco para quanto" type={TypeInput.NUMBER} min={+1} required />
                                        )}
                                    </div>
                                )}

                            </div>

                            <div className="flex items-center mt-4">

                                <Button title="Finalizar pedido" type={TypesButton.SUBMIT} fullWidth stylesClass="normal-button bg-secundary" />


                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-2">
                        <Lock size={16} className="text-secundary" />
                        <span className="text-gray-400 text-[13px]">
                            Seus dados não são salvos no nosso sistema
                        </span>

                    </div>
                </div>
            </div >
            {loading && (
                <div className="
            fixed inset-0 z-10
            flex items-center justify-center
            bg-background-header/70
            px-4
        ">
                    <Loader2 className="animate-spin" />
                </div>
            )}


        </>

    )

}
