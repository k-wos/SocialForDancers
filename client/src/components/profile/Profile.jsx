import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getProfileById } from "../../actions/profile";
import { useParams, Link } from "react-router-dom";
import { followUserAction } from "../../actions/auth";

const Profile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const profile = useSelector((state) => state.profile.profile);

    useEffect(() => {
        dispatch(getProfileById(id));
    }, [dispatch, id]);
    const handleFollow = () => {
        dispatch(followUserAction(id));
    };

    return (
        <>
            {profile === null ? (
                <>
                    <h1>Brak profilu</h1>
                    <Link
                        to="/dancers"
                        className="text-blue-500 hover:underline"
                    >
                        Wróć do listy tancerzy
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to="/dancers"
                        className="text-blue-500 hover:underline"
                    >
                        Wróć do listy tancerzy
                    </Link>
                    <h1 className="text-2xl font-bold">
                        {profile.user.firstName} {profile.user.lastName}
                    </h1>
                    <p className="text-gray-600">
                        LA: {profile.latinClass}, ST: {profile.standardClass}
                    </p>
                    <p className="text-gray-600">
                        Ulubiony taniec: {profile.favouriteDance}
                    </p>
                    <button onClick={handleFollow}>Follow User</button>
                </>
            )}
        </>
    );
};

Profile.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Profile;
