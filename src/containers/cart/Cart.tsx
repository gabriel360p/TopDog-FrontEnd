import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItens/cartItems";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { BanknoteArrowUp, Contact, Locate, Lock, Paperclip } from "lucide-react";
import { Input } from "../../components/Input/input";
import { TypeInput } from "../../components/Input/types";

export const Cart = () => {
    const navigate = useNavigate();
    const { cart, total } = useCart();
    const [totalValor, setTotalValue] = useState<number>();
    const [checked, setChecked] = useState<boolean>(true);

    const [checkedPaymentMethod, setCheckedPaymentMethod] = useState<boolean>(true);
    const [methodMoney, setMethodMoney] = useState<boolean>(false);


    function handlePaymentMethod({ target }: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) {
        if (target.value === "money") { setMethodMoney(true) } else { setMethodMoney(false) }
    }

    useEffect(() => {
        setTotalValue(total())
    }, [cart])
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
                            <label htmlFor="observation" className="text-[12px] text-gray-400">Alguma observação sobre seu pedido?</label>
                            <textarea rows={4} spellCheck maxLength={120} id='observation' placeholder="Ex: Sem cebola..." name="" className="border py-2 px-2 border-secundary rounded-2xl">

                            </textarea>
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
                    <form action="">

                        <div className="w-full h-fit flex flex-col p-4">
                            <div className="flex gap-3 min-w-[290px]">
                                <Paperclip className="text-secundary" />
                                <h2 className="font-bold"> Resumo do Pedido </h2>
                            </div>
                            <div className="flex w-full flex-col gap-2 mt-2">
                                <div className="flex items-center w-full justify-between text-gray-400 text-[13px]">
                                    <p className="text-[18px]">Subtotal:</p>
                                    <p className="text-[16px]">R${totalValor}</p>
                                </div>
                                <div className="flex items-center w-full justify-between text-gray-400 text-[13px]">
                                    <p className="text-[14px]">Taxa de Entrega:</p>
                                    <p className="text-[16px]">R$5</p>
                                </div>
                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />
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
                                            <Input fullWidth label="Rua" placeholder="Rua" required />
                                            <Input fullWidth label="Bairro" placeholder="Bairro" required />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Input fullWidth label="Número" placeholder="Numero" required />
                                            <Input fullWidth label="Complemento" placeholder="Complemento" />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 justify-center items-start mt-4">
                                <p>Forma de entrega</p>
                                <div className="flex gap-2">
                                    <input type="radio" id="to-leave" name="delivery" onClick={() => { setChecked(!checked) }} />
                                    <label htmlFor="to-leave">Entrega - 45 a 60 minutos</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" id="pick-up" checked={checked} onClick={() => { setChecked(!checked) }} name="delivery" />
                                    <label htmlFor="pick-up">Retirada - 15 a 20 minutoa</label>
                                </div>
                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />

                            <div className="flex flex-col justify-start items-start gap-2 mt-4">
                                <div className="flex justify-center items-center gap-2">
                                    <Contact size={28} className="text-secundary" />
                                    <h2 className="font-bold">Contato </h2>
                                </div>
                                <Input fullWidth label="Número para contato" placeholder="9-99999999" required type={TypeInput.TEL} />
                            </div>

                            <hr className="opacity-15 text-secundary mt-2 mb-2" />

                            <div className="flex justify-start flex-col items-start gap-2 mt-4">
                                <div className="flex justify-center items-center gap-2">
                                    <BanknoteArrowUp size={28} className="text-secundary" />
                                    <h2 className="font-bold">Forma de pagamento </h2>
                                </div>
                                <select name="" id="category" onChange={(e) => { handlePaymentMethod(e) }} className="border border-secundary rounded-2xl py-2 ps-5 w-full">
                                    <option value="pix" selected>Pix</option>
                                    <option value="money">Dinheiro em espécie</option>
                                    <option value="debit">Cartão de Débito</option>
                                    <option value="credit">Cartão de Crédito</option>
                                </select>

                                {methodMoney && (

                                    <div className="flex flex-col min-w-full gap-2">
                                        <div className="flex flex-col gap-2 justify-center items-start mt-4">
                                            <p>Preciso de troco?</p>
                                            <div className="flex gap-2">
                                                <input type="radio" id="yes" name="minmony" onClick={() => { setCheckedPaymentMethod(!checkedPaymentMethod) }} />
                                                <label htmlFor="yes">Sim</label>
                                            </div>
                                            <div className="flex gap-2">
                                                <input type="radio" id="no" checked={checkedPaymentMethod} onClick={() => { setCheckedPaymentMethod(!checkedPaymentMethod) }} name="minmony" />
                                                <label htmlFor="no">Não</label>
                                            </div>
                                        </div>
                                        {!checkedPaymentMethod && (
                                            <Input fullWidth label="Troco para quanto?" placeholder="Troco para quanto" type={TypeInput.NUMBER} min={+1} />
                                        )}
                                    </div>
                                )}

                            </div>

                            <div className="flex items-center mt-4">
                                <Button title="Finalizar pedido" fullWidth stylesClass="normal-button bg-secundary" onClick={() => { navigate('/') }} />
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-2">
                        <Lock size={16} className="text-secundary" />
                        <span className="text-gray-400 text-[13px]">
                            Seus dados não são salvos no sistema
                        </span>

                    </div>
                </div>
            </div >
        </>

    )

}
