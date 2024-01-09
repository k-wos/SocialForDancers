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
            <div className="flex flex-col items-center pb-10">
                <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="avatar"
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                />
                <h5 className="text-lg font-bold">
                    {firstName} {lastName}{" "}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    LA: {latinClass}, ST: {standardClass}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {favouriteDance}
                </span>

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
