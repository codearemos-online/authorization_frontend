import { createContext, ReactNode, useState } from "react";
import { Permission, User, hasPermission as checkPermission } from "../utils/auth";

//contexto para manejar la autorizacion de los roles 

type AuthContextType = {
    hasPermission: (user: User, permission: Permission) => boolean;
}

export const AuthContext = createContext<AuthContextType>({
    hasPermission: () => false
});

interface AuthContextProps {
    children: ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
    return (
        <AuthContext.Provider value={{  hasPermission:checkPermission }}>
            {children}
        </AuthContext.Provider>
    );
}