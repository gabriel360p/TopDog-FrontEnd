// import { Pencil, Trash } from "lucide-react"
// import { Table } from "../../components/Table/Table"
import { Button } from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
export const Products = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="block text-end mb-4">
                <Button title="Novo Produto" stylesClass="normal-button bg-secundary" onClick={() => { navigate('/admin/produtos/novo') }} />
            </div>
            {/* <Table /> */}
        </>
    )

}
