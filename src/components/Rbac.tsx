import hasPermission, { User } from "../utils/auth";

interface RbackProps {
    user:User
}

function Rback({user}:RbackProps) {
    return (
        <>
            Welcome to Role Based Access Control Authorize
            {
                hasPermission(user,"delete:comments") && (
                    <button className="btn btn-danger">Delete</button>
                )
            }
        </>
    );
}

export default Rback;