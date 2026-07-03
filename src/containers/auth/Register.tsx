import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/input"
import { TypeInput } from "../../components/Input/types"

export const Register = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-background-header px-6 py-6 rounded-xl transition-all
            md:min-w-lg
            lg:min-w-xl
            ">
                    <h1 className="text-center text-2xl">Cadastrar novo <span className="text-secundary"> Usuário </span></h1>
                    <form action="" className="flex flex-col gap-1 justify-center items-center">

                        <Input placeholder="Nome usuário" label="Nome usuário" fullWidth type={TypeInput.TEXT} required />

                        <Input placeholder="Email" label="Email" fullWidth type={TypeInput.TEXT} required />
                        <Input placeholder="Senha" label="Senha" fullWidth type={TypeInput.PASSWORD} required />

                        <Button title="Salvar" onClick={() => { navigate('/admin/dashboard') }} stylesClass="normal-button w-50 bg-secundary" />
                    </form >
                </div>
            </div>
        </>
    )
}