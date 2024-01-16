import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/admin";

const UsersList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (error === "Unauthorized") return <p>Brak dostępu</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Users List</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersList;
