import type { Product } from "../../types/ProductType"
import { useCart } from "../../contexts/CartContext"
import { Minus, Plus } from "lucide-react";

interface ItemCart {
    item: Product;
}
export const CartItem = ({ item }: ItemCart) => {
    const { cart, plus, remove, update } = useCart();
    function handlePlus(item: Product) {
        plus(item)
    }
    function handleMinus(item: Product) {
        remove(item)

    }
    return (
        <div className="grid grid-cols-3 py-1 px-1 gap-1 justify-center items-center ">
            <div>
                <img src={item?.photo} className="
                    border-none rounded-2xl h-auto 
                    w-full
                    max-w-[120px]
                    md:max-w-[150px]
                " />
            </div>
            <div className="
                flex flex-col 
                justify-center items-start
                text-sm
                gap-2
                md:gap-3
                lg:gap-4
                xl:gap-5
            ">
                <p className="font-normal 
                md:text-lg
                xl:text-xl
                ">
                    {item?.title}
                </p>

                <p className="text-[11px] text-gray-400
                md:text-lg
                xl:text-xl
                ">
                    {item?.description}
                </p>


            </div>

            <div className="
                    flex
                    justify-center items-end
                    flex-col
                    h-full
                    gap-2
                    xl:gap-4
                ">
                <div className="flex gap-3">
                    <div className="bg-primary/25 rounded-lg p-1 flex items-center justify-center cursor-pointer">
                        <Plus className="cursor-pointer icon-animation
                        lg:w-[1.2rem] lg:h-[1rem]
                        " size={16} onClick={() => { handlePlus(item) }} />
                    </div>

                    <p className="font-normal 
                            md:text-lg
                            xl:text-lg
                            ">
                        {item?.quantity}
                    </p>
                    <div className="bg-primary/25 rounded-lg p-1 flex items-center justify-center cursor-pointer">
                        <Minus className="cursor-pointer icon-animation
                        lg:w-[1.2rem] lg:h-[1rem]
                        " size={16} onClick={() => { handleMinus(item) }} />

                    </div>
                </div>
                <p className="
                        font-bold
                        text-secundary
                        md:text-lg
                        xl:text-md
                        ">
                    R${item?.price}
                </p>
            </div>
        </div>
    )
}