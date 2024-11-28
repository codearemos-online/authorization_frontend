import { useState } from "react";
import { Navigate } from "react-router-dom";

const Unauthorized = () => {
    const [redirect, setRedirect] = useState(false);

    const returnHome = () => {
        setRedirect(true); 
    }

    if (redirect) {
        return <Navigate to='/' />; 
    }

    return(
       <>
         <h1>No tiene permiso</h1>
         <button onClick={returnHome}>Volver a home</button>
       </>
    );
}

export default Unauthorized;
