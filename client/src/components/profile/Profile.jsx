import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getProfileById } from "../../actions/profile";
import { useParams, Link } from "react-router-dom";
import { followUserAction } from "../../actions/auth";
import { addComment } from "../../actions/post";

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
                    <div className="relative block h-96">
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            }}
                        >
                            <span className="w-full h-full absolute opacity-50 bg-black"></span>
                        </div>
                    </div>
                    <div className="pb-16">
                        <div className="p-8 bg-white shadow">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="grid grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
                                    <div>
                                        <p>{profile ? 1 : "Loading..."}</p>
                                        <p>Obserwujący</p>
                                    </div>
                                    <div>
                                        <p>{profile ? 1 : "Loading..."}</p>
                                        <p>Obserwowani: </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
                                        <img
                                            src="https://picsum.photos/id/237/200/300"
                                            alt="avatar"
                                            className="rounded-full aspect-square object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                    <button
                                        className="text-white py-2 px-4 uppercase rounded shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                        onClick={handleFollow}
                                    >
                                        Obserwuj
                                    </button>
                                </div>
                            </div>
                            <div className="mt-20 text-center  pb-12">
                                <h1 className="text-4xl font-medium text-gray-700">
                                    {profile.user.firstName}{" "}
                                    {profile.user.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>
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
