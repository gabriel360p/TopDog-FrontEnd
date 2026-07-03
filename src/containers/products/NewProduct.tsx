import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/input"
import { TypeInput } from "../../components/Input/types";

export const NewProduct = () => {
    const [isChecked, setIsChecked] = useState<boolean>();

    useEffect(() => {
        setIsChecked(true)
    }, [])
    return (
        <div className="flex items-center justify-center">
            <div className="bg-background-header px-6 py-6 rounded-xl transition-all
            md:min-w-lg
            lg:min-w-xl
            ">
                <h1 className="text-center text-2xl">Cadastrar novo <span className="text-secundary"> Produto </span></h1>
                <form action="" className="flex flex-col gap-1 justify-center items-center">

                    <Input placeholder="Nome do produto" label="Nome do produto" fullWidth type={TypeInput.TEXT} required />
                    <Input placeholder="Preço produto" label="Preço do produto" fullWidth type={TypeInput.NUMBER} required min={+0.01} />
                    <Input placeholder="Descrição" label="Descrição do produto" fullWidth type={TypeInput.TEXT} required />

                    <div className="w-full w-max-[768px] flex flex-col gap-2">
                        <label htmlFor="category">Categoria</label>
                        <select name="" id="category" className="border border-secundary rounded-2xl py-2 ps-5">
                            <option value="">teste</option>
                            <option value="">teste</option>
                            <option value="">teste</option>
                            <option value="">teste</option>
                            <option value="">teste</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full max-w-[768px] mt-4">
                        <div className="flex flex-col gap-4">
                            <div >
                                <input type="radio" id="inoffer" name='offer' onChange={() => { setIsChecked(!isChecked) }} />
                                <label htmlFor="inoffer" >Está em oferta</label>
                                <div />

                                <div >
                                    <input checked={isChecked} id="nooffer" name='offer' type="radio" onChange={() => { setIsChecked(!isChecked) }} />
                                    <label htmlFor="nooffer">Não está em oferta</label>
                                </div>

                            </div>
                        </div>

                        {!isChecked && (
                            <div className={`
                                `}>
                                <Input placeholder="Deconto será calculado em %" label="Desconto" type={TypeInput.NUMBER} />
                            </div>
                        )}
                    </div>

                    <Input required type={TypeInput.FILE} fullWidth label="Carregar foto" className="border border-secundary rounded-2xl py-2 ps-5" />

                    <Button title="Salvar" stylesClass="normal-button w-50 bg-secundary" />
                </form >
            </div>
        </div>
    )

}
