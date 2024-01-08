import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
    profile: {
        user: { _id, firstName, lastName },
        latinClass,
        standardClass,
        favouriteDance,
    },
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="py-5">
                <h2 className="text-2xl font-bold">
                    {firstName} {lastName}
                </h2>
                <p className="text-gray-600">
                    LA: {latinClass}, ST: {standardClass}
                </p>
                <p className="text-gray-600">
                    Ulubiony taniec: {favouriteDance}
                </p>
                <Link
                    to={`/dancers/${_id}`}
                    className="text-blue-500 hover:underline"
                >
                    Zobacz profil
                </Link>
            </div>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.shape({
        user: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
        }).isRequired,
        latinClass: PropTypes.string.isRequired,
        standardClass: PropTypes.string.isRequired,
        favouriteDance: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProfileItem;
