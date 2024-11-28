import { ReactNode, useContext } from "react"
import { AuthContext } from "../contexts/authContext";
import { Permission, User } from "../utils/auth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children:ReactNode,
    requiredPermission:Permission
}

export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children,requiredPermission}) => {    
    const { hasPermission } = useContext(AuthContext);
    const user:User = { id: 1, role: "moderator" };

    if(!hasPermission(user,requiredPermission))
    {
        return <Navigate to='/unauthorized'/>
    }
    return children;
}