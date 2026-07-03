import { CircleAlert } from "lucide-react"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { TypesButton } from "../../components/Button/types"
import { useNavigate } from "react-router-dom"


export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="flex p-3  w-full h-screen gap-3 flex-col items-center justify-center">
                <CircleAlert className="text-red-600" size={64} />
                <p className="text-xl">Página não encontrada</p>
                <Button title={'Inicio'} type={TypesButton.BUTTON} stylesClass="normal-button bg-primary" onClick={() => navigate('/')} />
            </div>
        </>
    )

}
