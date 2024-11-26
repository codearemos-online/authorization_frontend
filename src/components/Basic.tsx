
interface User {
    id: number,
    role: string
}

const user: User = { id: 1, role: "admin" };

function Basic() {
    return (
        <>
            Welcome to Basic Authorize
            {
                user.role == "admin" && (
                    <button className="btn btn-danger">Delete</button>
                )
            }
        </>
    );

}

export default Basic;