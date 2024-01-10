import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "../../actions/post";

/* eslint-disable react/prop-types */
const YourInfo = ({ user, profile }) => {
    const dispatch = useDispatch();
    const userPosts = useSelector((state) => state.post.userPosts);

    useEffect(() => {
        if (user) {
            console.log(userPosts);
            dispatch(getUserPosts(user._id));
        }
    }, [dispatch, user]);
    return (
        <>
            {profile ? (
                <div className="rounded-lg border-solid p-5">
                    <h2 className="text-2xl font-bold">Twoje informacje</h2>
                    <p className="text-gray-600">
                        LA: {profile.latinClass}, ST: {profile.standardClass}
                    </p>
                    <p className="text-gray-600">
                        Ulubiony taniec: {profile.favouriteDance}
                    </p>
                    <h3 className="text-xl font-bold">Twoje posty</h3>
                    {userPosts.map((post) => (
                        <p key={post._id}>{post.content}</p>
                    ))}
                </div>
            ) : (
                "No profile available"
            )}
        </>
    );
};

export default YourInfo;
