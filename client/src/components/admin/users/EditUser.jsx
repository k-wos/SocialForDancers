import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../actions/admin";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
    // eslint-disable-next-line react/prop-types
    const { id: userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        avatar: "",
        isAdmin: false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/admin/user/${userId}`);
            setUser(res.data);
        };

        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(userId, user));
        navigate("/admin-users");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <label className="block mb-4">
                Imię:
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
            </label>
            <label className="block mb-4">
                Nazwisko:
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
            </label>
            <label className="block mb-4">
                Email:
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
            </label>
            <label className="block mb-4">
                Hasło:
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
            </label>

            <label className="block mb-4">
                Is Admin:
                <input
                    type="checkbox"
                    name="isAdmin"
                    checked={user.isAdmin}
                    onChange={(e) =>
                        setUser({ ...user, isAdmin: e.target.checked })
                    }
                    className="mt-1"
                />
            </label>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Aktualizuj Dane
            </button>
        </form>
    );
};

export default EditUser;
