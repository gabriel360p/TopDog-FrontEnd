import { createContext, useContext, useState } from "react";


const UserContext = createContext();

export const CartProvider = ({ children }) => {
    const [user, setUser] = useState();


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

//Injetando/criando o CartContext no useCart Hook
export const useUser = () => {
    //criando o hook
    const context = useContext(UserContext)

    //verificando se a sua chamada esta sendo feita dentro do seu provedor
    if (!context) throw new Error('useUser foi chamado fora de seus limites')

    //retornando contexto caso a validação falhe
    return context;
}