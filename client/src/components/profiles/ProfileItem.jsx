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
        <div className="py-8 px-8 my-2 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                src="https://picsum.photos/id/237/200/300"
                alt="avatar"
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {firstName} {lastName}{" "}
                    </p>
                    <p className="text-slate-500 font-medium">
                        LA: {latinClass}, ST: {standardClass}
                    </p>
                </div>
            </div>
            <Link
                to={`/dancers/${_id}`}
                className="text-blue-500 hover:underline"
            >
                Zobacz profil
            </Link>
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
