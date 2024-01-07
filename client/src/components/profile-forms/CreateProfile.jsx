import { useState } from "react";

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        birthday: "",
        latinClass: "",
        stadnardClass: "",
        prefferedDanceStyle: "",
        favouriteDance: "",
        youtube: "",
        facebook: "",
        instagram: "",
        twitter: "",
    });

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
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <label htmlFor="birthday" className="block mb-2">
                Data urodzenia
            </label>
            <input
                type="date"
                name="birthday"
                value={birthday}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="latinClass" className="block mb-2">
                Klasa LA
            </label>
            <input
                type="text"
                name="latinClass"
                value={latinClass}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="standardClass" className="block mb-2">
                Klasa ST
            </label>
            <input
                type="text"
                name="standardClass"
                value={standardClass}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="prefferedDanceStyle" className="block mb-2">
                Preferowany styl taneczny
            </label>
            <input
                type="text"
                name="prefferedDanceStyle"
                value={prefferedDanceStyle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="favouriteDance" className="block mb-2">
                Ulubiony taniec
            </label>
            <input
                type="text"
                name="favouriteDance"
                value={favouriteDance}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="youtube" className="block mb-2">
                YouTube
            </label>
            <input
                type="text"
                name="youtube"
                value={youtube}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="facebook" className="block mb-2">
                Facebook
            </label>
            <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="instagram" className="block mb-2">
                Instagram
            </label>
            <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <label htmlFor="twitter" className="block mb-2">
                Twitter
            </label>
            <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            />

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Zapisz
            </button>
        </form>
    );
};

export default CreateProfile;
