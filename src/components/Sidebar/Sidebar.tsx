// import { use, useEffect, useState } from "react"
import { OptionsSideBar } from "../OptionsSideBar/OptionsSideBar"
import Logo from '../../assets/logo.png'
import { LogOutIcon, SidebarIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface Options {
    name: string;
    pathName: string;
}
interface SidebarProps {
    bool: boolean;
}

export const Sidebar = ({ bool }: SidebarProps) => {
    const navigate = useNavigate()
    const [isOpenOrClose, setIsOpenOrClose] = useState<boolean>()

    useEffect(() => {
        setIsOpenOrClose(bool)

    }, [bool])
    const sideBarOptions: readonly Options[] = [
        {
            name: "Dashboard", pathName: '/admin/dashboard',
        },
        {
            name: "Cardápio", pathName: '/',
        },
        {
            name: "Produtos", pathName: '/admin/produtos',
        },
        {
            name: "Pedidos", pathName: '/admin/pedidos',
        },
        {
            name: "Ajustes", pathName: '/admin/painel_controle',
        },
        {
            name: "Novo usuário", pathName: '/admin/cadastrar',
        },

    ]

    return (
        <aside className={`
            flex flex-col
            fixed 
            z-10
            transition-transform duration-300
            ${isOpenOrClose ? 'translate-x-0' : '-translate-x-full'}
            w-[295px] overflow-hidden bg-background-header min-h-screen 
        `}>
            <div className="flex w-full justify-end">
                <SidebarIcon onClick={() => { setIsOpenOrClose(!isOpenOrClose) }} />

            </div>

            <div className="h-auto flex justify-center">
                <img src={Logo} alt="hotdog-logo" className="h-60" />
            </div>

            <div className="px-5">
                <ol>
                    {sideBarOptions.map(option => (
                        <OptionsSideBar key={option.name} name={option.name} pathName={option.pathName} />
                    ))}
                </ol>
            </div>

            <div className="px-5 cursor-pointer mt-auto mb-4" onClick={() => { navigate('/') }}>
                <div className="flex gap-4
                    p-3 border-none rounded-lg
                    hover:bg-primary/10 
                    hover:translate-x-2 transition-all
                 ">
                    <LogOutIcon />
                    Sair
                </div>

            </div>

        </aside>
    )
}
