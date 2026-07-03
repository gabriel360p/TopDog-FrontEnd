import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItens/cartItems";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

export const Cart = () => {
    const navigate = useNavigate();
    const { cart, total } = useCart();
    const [totalValor, setTotalValue] = useState<number>();
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
                items-center
                mx-auto
            ">

                <div className="
                    order-1
                    rounded
                    p-2
                    md:order-1
                    flex flex-col 
                    bg-background-header
                    h-full max-w-4xl
                    
                ">
                    <div className="flex flex-col gap-4 ">
                        {cart?.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="
                    order-2
                    md:order-2
                    rounded
                    p-2
                    flex flex-col 
                    bg-background-header
                    h-full
                ">
                    <div className="w-full h-fit flex p-4">

                        {cart ? (
                            <div className="flex flex-col justify-start items-center">
                                {cart?.map(itens => (
                                    <p key={itens.id}> {itens.title} {itens.price}</p>
                                ))}
                                <div>
                                    {
                                        totalValor ? (
                                            <p> Valor Total:  {totalValor} </p>
                                        ) : ''
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-start items-center">
                                <p className="font-bold text-2xl">O Carrinho está vazio!</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>

    )

}
