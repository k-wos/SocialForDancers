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
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                placeholder="Avatar URL"
            />
            <label>
                <input
                    type="checkbox"
                    name="isAdmin"
                    checked={formData.isAdmin}
                    onChange={(e) =>
                        setFormData({ ...formData, isAdmin: e.target.checked })
                    }
                />
                Is Admin
            </label>
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;
