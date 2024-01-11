import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAd } from "../../actions/ad";

const CreateAd = () => {
    const dispatch = useDispatch();
    const [adData, setAdData] = useState({
        photo: "",
        city: "",
        gender: "",
        age: "",
        height: "",
        latinClass: "",
        standardClass: "",
        experience: "",
    });
    const handleChange = (e) => {
        setAdData({ ...adData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAd(adData));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                name="photo"
                value={adData.photo}
                onChange={handleChange}
                placeholder="Photo URL"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="city"
                value={adData.city}
                onChange={handleChange}
                placeholder="Miasto"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="gender"
                value={adData.gender}
                onChange={handleChange}
                placeholder="Płeć"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="age"
                value={adData.age}
                onChange={handleChange}
                placeholder="Wiek"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="height"
                value={adData.height}
                onChange={handleChange}
                placeholder="Wzrost"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="latinClass"
                value={adData.latinClass}
                onChange={handleChange}
                placeholder="Klasa LA"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="standardClass"
                value={adData.standardClass}
                onChange={handleChange}
                placeholder="Klasa ST"
                className="border border-gray-300 rounded-md p-2"
            />
            <input
                type="text"
                name="experience"
                value={adData.experience}
                onChange={handleChange}
                placeholder="Doświadczenie"
                className="border border-gray-300 rounded-md p-2"
            />

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Dodaj ogłoszenie
            </button>
        </form>
    );
};

export default CreateAd;
