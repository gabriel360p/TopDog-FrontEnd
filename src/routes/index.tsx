import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cardapio } from "../containers/Cardapio";
import Dashboard from "../containers/Admin/Dashboard";
import { LayoutAdmin } from "../containers/layouts/LayoutAdmin";
import { DefaultLayout } from "../containers/layouts/DefaultLayout";
import { Offers } from "../containers/offers/Offers";
import { Products } from "../containers/products/Products";
import { Login } from "../containers/auth/Login";
import { Register } from "../containers/auth/Register";
import { NotFound } from "../containers/errors/NotFound";
import { NewProduct } from "../containers/products/NewProduct";
import { Cart } from "../containers/cart/Cart";
import { CartProvider } from "../contexts/CartContext";
//Esse é component route, mais bonito de se usar react-router-dom

export const Roteamento = () => {
    return (
        <CartProvider>

            <BrowserRouter> {/* A função desse component é de ficar olhando a nossa URL, para detectar mudanças */}
                <Routes>{/* A função desse component é servir como um sumário, para guardar as routes */}

                    {/*Nossas rotas propriamente ditas*/}

                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Cardapio />} />
                        <Route path="/carrinho" element={<Cart />} />
                        <Route path="/login" element={<Login />} />

                    </Route>
                    <Route path="*" element={<NotFound />} />

                    <Route element={<LayoutAdmin />} >
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/pedidos" element={<Offers />} />

                        <Route path="/admin/produtos" element={<Products />} />
                        <Route path="/admin/produtos/editar" element={<Cardapio />} />
                        <Route path="/admin/produtos/novo" element={<NewProduct />} />

                        <Route path="/admin/cadastrar" element={<Register />} />
                    </Route>


                </Routes>
            </BrowserRouter>
        </CartProvider>

    )
}