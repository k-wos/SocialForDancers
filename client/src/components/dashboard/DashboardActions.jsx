import { Link } from "react-router-dom";

const DashboardActions = () => {
    return (
        <div className="flex justify-center mt-4">
            <Link
                to="/edit-profile"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 uppercase rounded shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
                Edytuj profil
            </Link>
        </div>
    );
};

export default DashboardActions;
