import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
