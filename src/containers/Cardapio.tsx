import Card from "../components/Card/card"
// import photoExample from '../assets/hotdog-ex.jpg'
import { Search, ShoppingBag } from "lucide-react"
import { Input } from "../components/Input/input"
import { Header } from "../components/Header/Header"
import { products as produtos } from "../services/ProductService"
import categories from "../services/CategorieService"
import { BadgeCategories } from "../components/Badges/BadgeCategories"
import { useEffect, useState } from "react"
import type { Product } from "../types/ProductType"
import type { Categorie } from "../types/CategoriesType"
import { Modal } from "../components/Modal/Modal"

export const Cardapio = () => {
    const [products, setProducts] = useState<Product[]>(produtos);
    const [filterProducts, setFilterProducts] = useState<Product[]>(produtos);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    function handleFilterSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const filter = products.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilterProducts(filter)
    }

    function filterCategories(categorie: Categorie) {
        const filter = products.filter((product) => {
            if (categorie.id === 0) {
                return products
            } else if (product.categorieId === categorie.id) {
                return product
            }
        })
        setFilterProducts(filter)
    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilterProducts(produtos)
        setProducts(produtos)
    }, [])
    return (
        <>
            <Header />
            <div className="h-[86px]"></div>
            <div className="w-full
            bg-cover bg-center 
            bg-no-repeat h-60 md:h-80 
            bg-[url(../assets/hotdog-bg.jpg)]
            after:content-['']
            relative
            after:absolute after:inset-0
            overflow-hidden
            after:bg-black/50
            ">
                <div className="
                    
                    relative z-[3] w-full h-full border-secundary flex flex-col justify-center px-4 
                    md:px-8
                ">
                    <h1 className="
                    text-3xl font-bold leading-9
                     xl:text-5xl xl:leading-15
                     ">O Melhor <br />hot dog da <br /><span className="text-secundary">sua cidade!</span></h1>
                    <p className="text-medium leading-7 xl:text-lg">ingredientes selecionados, muito mais sabor <br /> e aquele atendimento que faz a diferença.</p>
                </div>
            </div>
            <div className="container-app flex flex-col gap-5 mt-5">
                <div className="w-full flex justify-center gap-3 items-center">
                    <div className="w-10 transition-all
                    h-[2px]
                    md:w-12
                    lg:w-14
                    xl:w-16 
                    bg-secundary" />
                    <h2 className="font-semibold  text-2xl">Nosso Cardápio</h2>
                    <div className="w-10 transition-all
                    h-[2px]
                    md:w-12
                    lg:w-14
                    xl:w-16 
                    bg-secundary" />
                </div>

                <Input placeholder="Coca cola..." onChange={(e) => { handleFilterSearch(e) }} icon={<Search size={20} className="text-secundary" />} />

                <div className="
                overflow-x-scroll
                flex items-center justify-start
                w-full
                py-3
                gap-1
                md:justify-center md:gap-2
                ">
                    {categories?.map(categorie =>
                        <BadgeCategories key={categorie.id} categorie={categorie} onClick={() => { filterCategories(categorie) }} />
                    )}
                </div>

                <div className={`
                
                ${filterProducts.length > 0 ? "grid" : `
                flex justify-center
                `}
                w-full 
                grid-cols-2 gap-x-3 gap-y-4
                md:grid-cols-3
                xl:grid-cols-5 xl:place-items-center
                `}>
                    {filterProducts.length > 0 ? filterProducts.map(product => (
                        <Card
                            key={product.id}
                            offer={product.offer}
                            product={product}
                            title={product.title}
                            price={product.price}
                            photo={product.photo}
                            icon={<ShoppingBag size={30} className="text-secundary " />}
                            description={product.description}
                            onClick={() => { setSelectedProduct(product) }}
                        />
                    )) : (
                        <div className="

                        ">

                            <p className="block">Produtos ou Combos indisponivéis no momento!</p>
                        </div>
                    )}

                </div>
            </div>
            {selectedProduct && (
                <Modal
                    data={selectedProduct}
                    onClose={() => { setSelectedProduct(null) }}
                />
            )}
        </>
    )
}
