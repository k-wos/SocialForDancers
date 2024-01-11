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
        <div>
            {profile ? (
                <div className="flex flex-col md:flex-row gap-7">
                    <div className="bg-white overflow-hidden shadow rouded-lg border max-w-sm">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="mt-1 max-w-2xl text-medium text-gray-900">
                                Szczegółowe dane:{" "}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Kilka informacji o tobie:
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Klasa La:
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile.latinClass}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Klasa St:
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile.standardClass}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Preferowany styl:
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile.prefferedDanceStyle}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Ulubiony taniec:
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile.favouriteDance}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        <FaFacebook className="text-blue-600" />{" "}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile?.social?.facebook}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        <FaTwitter className="text-blue-400" />{" "}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile?.social?.facebook}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        <FaInstagram className="text-pink-500" />{" "}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile?.social?.twitter}
                                    </dd>
                                </div>
                                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        <FaYoutube className="text-red-600" />{" "}
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {profile?.social?.youtube}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Twoje posty</h3>
                        {userPosts.map((post) => (
                            <p key={post._id}>{post.content}</p>
                        ))}
                    </div>
                </div>
            ) : (
                "Brak dostępnego profilu"
            )}
        </div>
    );
};

export default YourInfo;
