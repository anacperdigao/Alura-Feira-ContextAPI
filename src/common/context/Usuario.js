import { createContext, useState } from 'react';



export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario'; // Isso aqui só serve pra visualizar o nome do contexto no devtools


export const UsuarioProvider = ({ children }) => {

    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);

    return(
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            {children}
        </UsuarioContext.Provider>
    )
}