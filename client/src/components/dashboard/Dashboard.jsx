import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Presentation from "./Presentation";
import YourInfo from "./YourInfo";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector((state) => state.profile);
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    if (profile && loading === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ToastContainer />
            <Presentation user={user} profile={profile} />
            <YourInfo profile={profile} />
        </>
    );
};

export default Dashboard;
