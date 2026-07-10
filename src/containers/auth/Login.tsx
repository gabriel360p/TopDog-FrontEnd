import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/input"
import { TypeInput } from "../../components/Input/types"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center px-6 h-screen">
            <div className="bg-background-header flex flex-col px-6 py-6 rounded-xl transition-all
            md:min-w-lg
            lg:min-w-xl
            ">
                <h1 className="text-center text-2xl">Login</h1>

                <form action="" className="flex flex-col gap-1 justify-center items-center">

                    <Input placeholder="Email" label="Email" fullWidth type={TypeInput.TEXT} required />
                    <Input placeholder="Senha" label="Senha" fullWidth type={TypeInput.PASSWORD} required />

                    <Button title="Entrar" onClick={() => {
                        setTimeout(() => {
                            navigate('/admin/dashboard')
                        }, 2000)
                        toast.success("Bem vindo de volta!")
                    }} stylesClass="normal-button w-50 bg-secundary" />
                </form >
            </div>
        </div>
    )
}