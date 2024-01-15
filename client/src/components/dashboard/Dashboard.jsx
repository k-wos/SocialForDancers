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
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <span className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
            </div>
            <form onSubmit={submitForm}>
                <label htmlFor="coverPhoto">Cover Photo:</label>
                <input
                    type="file"
                    id="coverPhoto"
                    name="coverPhoto"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload</button>
            </form>

            <Presentation user={user} profile={profile} />
            <YourInfo user={user} profile={profile} />
        </>
    );
};

export default Dashboard;
