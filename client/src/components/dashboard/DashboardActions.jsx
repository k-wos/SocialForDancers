import { Link } from "react-router-dom";

const DashboardActions = () => {
    return (
        <button className="bg-blue-500 text-white py-2 px-4 uppercase rounded shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            <Link to="/edit-profile" className="">
                Edytuj profil
            </Link>
        </button>
    );
};

export default DashboardActions;
