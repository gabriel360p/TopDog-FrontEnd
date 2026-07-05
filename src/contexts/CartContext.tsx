import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/ProductType";


interface cartContext {
    cart: Product[],
    add: (product: cartContext) => void,
    remove: (product: cartContext) => void,
    total: () => number,
}

const CartContext = createContext<cartContext | null>(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [timout, setTimout] = useState<boolean>(false);


    //configurar descontos, uma array de objetos - nome do desconto e valor


    function plus(product: Product): void {
        const founded = cart.find(item => item.id === product.id)
        if (founded !== undefined) {
            if (product.storage > 0) {
                const cartUpdate = cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    }
                    return item;
                })
                setCart(cartUpdate)
            }
        } else {
            console.log("Estoque insuficiente")
        }

    }

    function remove(product: Product): void {
        const founded = cart.find(item => item.id === product.id)
        if (founded !== undefined) {
            if (product.quantity === 1) {
                //capturando todos os produtos que possuem o id diferente daquele que eu não quero mais na lista de carrinho
                setCart(prev => prev.filter(item => {
                    if (item.id != product.id) {
                        return item
                    }
                }))
            } else {

                const cartUpdate = cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    }
                    return item;
                })
                setCart(cartUpdate)
            }

        }

    }

    function add(product: Product): void {
        const founded = cart.find(item => item.id === product.id)
        if (founded !== undefined) {
            /*
                verificando se o produto ja esta no carrinho, se sim, ele pega o objeto, acessa a propriedade quantity, adiciona mais 1
                e retorna. Se o objeto não for aquele com id que esta tentando ser adicionado novamente, ele só retorna sem modificar nada.
            */

            if (product.storage > 0) {
                /*
                    Verificando se tem estoque do produto
                */
                const cartUpdate = cart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    }
                    return item;
                })

                setCart(cartUpdate)
                // console.log("te achei", cartUpdate)
            } else {
                //se o produto não existe no carrinho ele adiciona
                const newProduct: Product = {
                    ...product,
                    //tem 1 desse item
                    quantity: 1,
                }
                setCart(prev => [...prev, newProduct])
                // console.log(newProduct)
            }
        }
    }
    function erease(product: Product): void {
        const newArrayCart = cart.filter(item => item.id != product.id)
        //usando o prev para recuperar os dados anteriores do state
        setCart(newArrayCart)
    }
    function update(product: Product[]): void {
        setCart(product)
    }

    function total(): number {
        const total: number = cart.reduce((acc, value, currentIndex) => {
            return acc + (cart[currentIndex].price * cart[currentIndex].quantity);
        }, 0)
        return total > 0 ? total : 0;
    }

    useEffect(() => {
        total()
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, add, erease, remove, plus, update, total }}>
            {children}
        </CartContext.Provider>
    );
};



//Injetando/criando o CartContext no useCart Hook
export const useCart = () => {
    //criando o hook
    const context = useContext(CartContext)

    //verificando se a sua chamada esta sendo feita dentro do seu provedor
    if (!context) throw new Error('useCart foi chamado fora de seus limites')

    //retornando contexto caso a validação falhe
    return context;
}