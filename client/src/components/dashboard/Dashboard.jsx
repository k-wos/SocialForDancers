import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile); // replace 'profile' with the actual key in your Redux store

    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return <div>Dashboard</div>;
};

export default Dashboard;
