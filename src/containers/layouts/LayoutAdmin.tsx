
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SidebarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const LayoutAdmin = () => {
    const path = useLocation().pathname.split('/')[2].toUpperCase();
    const [isOpenOrCloseSide, setIsOpenOrCloseSide] = useState<boolean>(false)
    useEffect(() => {
        setIsOpenOrCloseSide(false)
    }, [path])
    return (
        <div className="flex min-h-screen">
            <Sidebar bool={isOpenOrCloseSide} />

            <div className="flex min-w-0 flex-1 flex-col">
                <nav className="p-6 w-full flex gap-4 items-center bg-background-header">
                    <SidebarIcon onClick={() => { setIsOpenOrCloseSide(!isOpenOrCloseSide) }} />
                    <h1 className="text-2xl font-semibold">{path}</h1>

                </nav>
                <div className="p-6">
                    <Outlet />

                </div>
            </div>
        </div>
    )

}
