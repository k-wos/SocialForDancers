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
        <div>
            <div className="py-5">
                <h2>
                    {firstName} {lastName}
                </h2>
                <p>
                    LA: {latinClass}, ST: {standardClass}
                </p>
                <p>Ulubiony taniec: {favouriteDance}</p>
                <Link to={`/profile/${_id}`}>Zobacz profil</Link>
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
