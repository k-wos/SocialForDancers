import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../actions/admin";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        avatar: "",
        isAdmin: false,
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData));
        navigate("/admin-users");
    };

    return (
        <div className="h-screen flex items-center">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                />
                <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                />
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                />

                <label className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                isAdmin: e.target.checked,
                            })
                        }
                        className="mr-2"
                    />
                    Is Admin
                </label>
                <div className="flex">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Dodaj użytkownika
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            navigate("/admin-users");
                        }}
                    >
                        Wróć
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
