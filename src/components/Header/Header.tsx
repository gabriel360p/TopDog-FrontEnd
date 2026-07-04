import { ShoppingBag, ShoppingCart, User } from "lucide-react"
import Logo from '../../assets/top-dog.png'
import { useNavigate } from "react-router-dom"
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
                    <ShoppingBag className="text-secundary cursor-pointer" onClick={() => { navigate('/carrinho') }} />
                    <User className="text-secundary cursor-pointer" onClick={() => { navigate('/login') }} />
                </div>
            </nav>
        </header>
    )
}