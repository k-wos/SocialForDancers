import { Link } from "react-router-dom";

const DashboardActions = () => {
    return (
        <div className="flex justify-center mt-4">
            <Link
                to="/edit-profile"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Edit Profile
            </Link>
        </div>
    );
};

export default DashboardActions;
