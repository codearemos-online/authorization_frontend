
import { useContext } from "react";
import hasPermission, { User } from "../utils/auth";
import { YearContext } from "../contexts/dataContext";


interface RbackProps {
    user:User
}

function Rback({user}:RbackProps) {

    const year = useContext(YearContext)


    return (
        <>
            Welcome to Role Based Access Control Authorize
            {
                hasPermission(user,"delete:comments") && (
                    <button className="btn btn-danger">Delete</button>
                )
            }
           
            {year}
        </>
    );
}

export default Rback;