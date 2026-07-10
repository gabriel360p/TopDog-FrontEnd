/* eslint-disable @typescript-eslint/no-unused-vars */

import { Navigate, Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { SidebarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const LayoutAdmin = () => {
    const path = useLocation().pathname.split('/')[2].toUpperCase();
    const [isOpenOrCloseSide, setIsOpenOrCloseSide] = useState<boolean>(false)
    const [userAuth] = useState<boolean>(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpenOrCloseSide(false)
    }, [path])

    if (!userAuth) {
        //Navigate é um component, e é mais fácil assim, pq assim a gente oq vai ser renderizado
        return <Navigate to={'/'} replace />
    } else {

        return (
            <>

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
            </>

        )
    }
}
