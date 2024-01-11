import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "../../actions/post";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
                <div>
                    <div className="rounded-lg border-solid p-5">
                        <h2 className="text-2xl font-bold">Twoje informacje</h2>
                        <p className="text-gray-600">
                            LA: {profile.latinClass}, ST:{" "}
                            {profile.standardClass}
                        </p>
                        <p className="text-gray-600">
                            Ulubiony taniec: {profile.favouriteDance}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Twoje posty</h3>
                        {userPosts.map((post) => (
                            <p key={post._id}>{post.content}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">
                            Inne media spolecznościowe:
                        </h4>
                        <p className="flex items-center gap-3">
                            <FaFacebook className="text-blue-600" />{" "}
                            {profile?.social?.facebook}
                        </p>
                        <p className="flex items-center gap-3">
                            <FaTwitter className="text-blue-400" />{" "}
                            {profile?.social?.twitter}
                        </p>
                        <p className="flex items-center gap-3">
                            <FaInstagram className="text-pink-500" />{" "}
                            {profile?.social?.instagram}
                        </p>
                        <p className="flex items-center gap-3">
                            <FaYoutube className="text-red-600" />{" "}
                            {profile?.social?.youtube}
                        </p>
                    </div>
                </div>
            ) : (
                "No profile available"
            )}
        </>
    );
};

export default YourInfo;
