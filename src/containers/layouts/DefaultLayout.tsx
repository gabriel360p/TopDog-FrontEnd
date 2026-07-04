
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const DefaultLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <div className="mt-15"></div>
            <Footer />
        </div>
    )

}