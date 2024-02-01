import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Followings = ({ user, showFollowings, setShowFollowings }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {user.following.map((following) => (
                <div key={following.user._id}>a</div>
            ))}

            <button onClick={() => setShowFollowings(false)}>
                Hide Followings
            </button>
        </div>
    );
};

export default Followings;
