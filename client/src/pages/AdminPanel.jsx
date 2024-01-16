import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/admin";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (error === "Unauthorized") return <p>Brak dostępu</p>;

    return (
        <div className="flex items-center justify-center h-screen  bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">
                    Panel administratora
                </h1>
                <div className="flex items-center space-x-4 py-2">
                    <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    <Link to="/admin-users">Użytkownicy</Link>
                </div>
                <div className="flex items-center space-x-4 py-2">
                    <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                    <Link to="/admin-profiles">Profile</Link>
                </div>
                <div className="flex items-center space-x-4 py-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    <Link to="/admin-posts">Użytkownicy</Link>
                </div>
                <div className="flex items-center space-x-4 py-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <Link to="/admin-ads">Ogłoszenia</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
