import { Loader2, ShoppingBag, X } from "lucide-react";
import type { Product } from "../../types/ProductType";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

interface ModalProps {
    data: Product;
    onClose: () => void;
}

export const Modal = ({ data, onClose }: ModalProps) => {
    const { add } = useCart()
    const [timout, setTimout] = useState<boolean>(false)

    function handleAddCart(product: Product): void {
        //timout pra evitar clique duplo, sim isso acontece ksks
        setTimout(false)
        if (timout) {
            return
        } else {
            setTimout(true)
            setTimeout(() => {
                add(product)
            }, 100)
            setTimout(false)
        }
    }

    return (
        <div className="
            fixed inset-0 z-10
            flex items-center justify-center
            bg-background-header/70
            px-4
        ">
            <div className="
                flex w-full max-w-md flex-col
                rounded bg-background-header
                border border-secundary/10
                py-4
            ">
                <div className="px-4 flex w-full justify-between items-center border-b border-secundary/10 pb-2">
                    <h2 className="text-xl font-bold">{data.title}</h2>

                    <button type="button" onClick={onClose} className="cursor-pointer">
                        <X className="text-secundary active:-scale-120" />
                    </button>
                </div>

                <div className="mt-4 px-4 flex flex-col gap-3">
                    <img
                        src={data.photo}
                        alt={data.title}
                        className="h-56 w-full rounded object-cover"
                    />

                    <div>
                        <p className="text-sm text-gray-400">{data.categorieName}</p>
                    </div>

                    <p className="text-gray-300">{data.description}</p>

                </div>

                <div className="flex justify-between items-center px-4 border-t border-secundary/10 mt-2 pt-2">
                    <p className="font-bold text-lg">{`R$${data.price}`}</p>

                    <div
                        onClick={(event) => {
                            event.stopPropagation();
                            handleAddCart(data);
                        }}
                        className="bg-primary/25 rounded-lg p-1 active:translate-y-2 flex items-center justify-center cursor-pointer"
                    >
                        {/* {timout ? (<Loader2 className="animate-spin" />) : <ShoppingBag size={30} className="text-secundary" />} */}
                        {data.disponible ? timout ? (<Loader2 className="animate-spin" />) : <ShoppingBag size={30} className="text-secundary" /> : (<p>Indisponível</p>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};
