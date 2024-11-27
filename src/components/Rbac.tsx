
import { useContext } from "react";
import hasPermission, { User } from "../utils/auth";
import { CounterContext } from "../contexts/counterContext";




interface RbackProps {
    user:User
}

function Rback({user}:RbackProps) {


  const {counter,setCounter} = useContext(CounterContext);

    return (
        <>
            Welcome to Role Based Access Control Authorize
            {
                hasPermission(user,"delete:comments") && (
                    <button className="btn btn-danger">Delete</button>
                )
            }

            {counter}

            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
         
        </>
    );
}

export default Rback;