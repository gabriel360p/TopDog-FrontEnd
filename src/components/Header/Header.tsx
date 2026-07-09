import { Phone, ShoppingBag, ShoppingCart, User } from "lucide-react"
import Logo from '../../assets/top-dog.png'
import { useNavigate } from "react-router-dom"
import { sendMessage } from "../../utils/sendMessageWpp"
export const Header = () => {
    const navigate = useNavigate()
    return (
        <header className="bg-background-header fixed z-[5] min-w-full py-2">
            <nav className="
             grid grid-cols-2 items-center transition-all content- justify-between 
             px-6
             lg:px-16
            ">
                <div className="
                min-w-[280px] 
                ">
                    <img src={Logo}
                        onClick={() => { navigate('/') }}
                        className="
                            cursor-pointer
                            h-18
                            "
                        alt="logo-hotdog" />
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <a href={`https://wa.me/5584996333501?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`}>
                        <Phone className="text-secundary cursor-pointer active:-translate-y-2" />
                    </a>
                    <ShoppingBag className="text-secundary cursor-pointer active:-translate-y-2" onClick={() => { navigate('/carrinho') }} />
                    <User className="text-secundary cursor-pointer opacity-0" onClick={() => { navigate('/login') }} />
                </div>
            </nav>
        </header>
    )
}