import { CircleAlert, Pencil, Trash } from "lucide-react"
import type { TableProps } from "./TableTypes"

export const Table = ({ headers, rows }: TableProps) => {

    return (

        <div className="flex flex-col w-full items-center justify-center overflow-scroll  bg-[#141515] text-left shadow-md rounded-lg bg-clip-border">
            {headers && rows ? (
                <table className="min-w-full text-white max-w-5xl">
                    <thead >
                        <tr className="border-b">
                            {headers?.map(header => (
                                <th className="p-4" key={header}>
                                    <p className="text-sm leading-none font-normal">
                                        {header}
                                    </p>
                                </th>
                            ))}

                            {/* <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                                Descrição
                            </p>
                        </th>
                        <th className="p-4">
                            <p className="text-sm leading-none font-normal">
                                Categoria
                            </p>
                        </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {rows?.map(row => (

                            <tr className="0" key={row?.id}>
                                <td className="p-4">
                                    <p className="text-sm font-bold">
                                        Nome
                                    </p>
                                </td>
                                <td className="p-4 flex gap-3 flex-col md:flex-row">
                                    <Pencil className="w-4.5 h-4.5" />
                                    <Trash className="w-4.5 h-4.5" />
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            ) :
                <div className="flex p-3 gap-3 flex-col items-center justify-center">
                    <CircleAlert className="text-red-600" size={36} />
                    <p>Nenhum dado foi informado!</p>
                </div>
            }
        </div>
    )
}