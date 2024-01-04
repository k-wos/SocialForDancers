import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }

    return children;
};

export default PrivateRoute;
