import { useState, useEffect } from "react";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile.profile);

    const [formData, setFormData] = useState({
        birthday: profile.birthday || "",
        latinClass: profile.latinClass || "",
        standardClass: profile.standardClass || "",
        prefferedDanceStyle: profile.prefferedDanceStyle || "",
        favouriteDance: profile.favouriteDance || "",
        social: {
            youtube: profile.youtube || "",
            facebook: profile.facebook || "",
            instagram: profile.instagram || "",
            twitter: profile.twitter || "",
        },
    });

    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    useEffect(() => {
        if (profile) {
            setFormData({
                birthday: profile.birthday || "",
                latinClass: profile.latinClass || "",
                standardClass: profile.standardClass || "",
                prefferedDanceStyle: profile.prefferedDanceStyle || "",
                favouriteDance: profile.favouriteDance || "",
                youtube: profile?.social?.youtube || "",
                facebook: profile?.social?.facebook || "",
                instagram: profile?.social?.instagram || "",
                twitter: profile?.social?.twitter || "",
            });
        }
    }, [profile]);

    const {
        birthday,
        latinClass,
        standardClass,
        prefferedDanceStyle,
        favouriteDance,
        youtube,
        twitter,
        facebook,
        instagram,
    } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProfile(formData, navigate, true));
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl   lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase">
                    Edytuj profil
                </h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <label className="block text-sm font-semibold text-gray-800">
                        Data urodzenia
                    </label>
                    <input
                        type="date"
                        name="birthday"
                        value={birthday}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Klasa LA
                    </label>
                    <input
                        type="text"
                        name="latinClass"
                        value={latinClass}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Klasa ST
                    </label>
                    <input
                        type="text"
                        name="standardClass"
                        value={standardClass}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Preferowany styl taneczny
                    </label>
                    <input
                        type="text"
                        name="prefferedDanceStyle"
                        value={prefferedDanceStyle}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Ulubiony taniec
                    </label>
                    <input
                        type="text"
                        name="favouriteDance"
                        value={favouriteDance}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        YouTube
                    </label>
                    <input
                        type="text"
                        name="youtube"
                        value={youtube}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Facebook
                    </label>
                    <input
                        type="text"
                        name="facebook"
                        value={facebook}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Instagram
                    </label>
                    <input
                        type="text"
                        name="instagram"
                        value={instagram}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <label className="block text-sm font-semibold text-gray-800">
                        Twitter
                    </label>
                    <input
                        type="text"
                        name="twitter"
                        value={twitter}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Zapisz
                    </button>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="bg-red-500 text-white py-2 px-4 rounded-md"
                    >
                        Wróć
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
