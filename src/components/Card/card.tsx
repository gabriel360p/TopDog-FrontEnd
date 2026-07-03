import { useState, type ReactNode } from "react";
import type { Product } from "../../types/ProductType";
import { useCart } from "../../contexts/CartContext";
import { Loader2 } from "lucide-react";

interface ProductCard {
    id?: string | number;
    photo?: string;
    title?: string;
    description?: string;
    price?: number;
    offer?: boolean;
    icon?: ReactNode;
    product: Product
}

const Card = ({ product, photo, title, description, offer, icon, price, ...rest }: ProductCard) => {
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
        flex flex-col justify-between
        hover:-translate-y-2.5
        hover:transition-all
        bg-card-background 
        rounded-xl

       
        h-full
        h-max-100
        max-w-md
        border
         border-secundary/10">

            <img
                src={photo}
                className={
                    `
                    rounded-tl-xl
                    rounded-tr-xl
                    object-cover
                    w-full
                    h-50
                    md:w-full
                `
                } />
            <div className="container-app">
                <h3 className="text-center font-bold mb-2">{title}</h3>
                <p className="font-medium text-gray-300/80 truncate md:overflow-visible md:whitespace-break-spaces">{description}</p>
            </div>
            <div className="container-app flex justify-between items-center">
                <p className="font-bold text-lg">{`R$${price}`}</p>

                <div onClick={() => { handleAddCart(product) }} className="bg-primary/25 rounded-lg p-1 flex items-center justify-center cursor-pointer">
                    {timout ? (<Loader2 className="animate-spin" />) : icon}
                </div>

            </div>
        </div>
    )
}

export default Card;