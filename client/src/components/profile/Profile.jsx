import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getProfileById } from "../../actions/profile";

const Profile = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileById(match.params.id));
    }, [dispatch, match.params.id]);

    return <div>Profile</div>;
};

Profile.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Profile;
