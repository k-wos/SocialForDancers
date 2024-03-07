import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Presentation from "./Presentation";
import YourInfo from "./YourInfo";
import axios from "axios";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector((state) => state.profile);
    const user = useSelector((state) => state.auth.user);
    const [file, setFile] = useState(null);

    const submitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("coverPhoto", file);

        try {
            const response = await axios.post(
                "/api/profile/coverPhoto",
                formData
            );

            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    if (profile && loading === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ToastContainer />
            <div className="relative block h-96">
                <div className="absolute top-0 w-full h-full bg-center bg-cover">
                    <span className="w-full h-full absolute opacity-10 bg-black"></span>
                </div>
            </div>

            <Presentation user={user} profile={profile} />
            <YourInfo user={user} profile={profile} />
        </>
    );
};

export default Dashboard;
