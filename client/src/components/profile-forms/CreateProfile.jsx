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
        <form onSubmit={handleSubmit}>
            <label htmlFor="birthday">Birthday</label>
            <input
                type="text"
                name="birthday"
                value={birthday}
                onChange={handleChange}
            />

            <label htmlFor="latinClass">Latin Class</label>
            <input
                type="text"
                name="latinClass"
                value={latinClass}
                onChange={handleChange}
            />

            <label htmlFor="standardClass">Standard Class</label>
            <input
                type="text"
                name="standardClass"
                value={standardClass}
                onChange={handleChange}
            />

            <label htmlFor="prefferedDanceStyle">Preferred Dance Style</label>
            <input
                type="text"
                name="prefferedDanceStyle"
                value={prefferedDanceStyle}
                onChange={handleChange}
            />

            <label htmlFor="favouriteDance">Favourite Dance</label>
            <input
                type="text"
                name="favouriteDance"
                value={favouriteDance}
                onChange={handleChange}
            />

            <label htmlFor="youtube">YouTube</label>
            <input
                type="text"
                name="youtube"
                value={youtube}
                onChange={handleChange}
            />

            <label htmlFor="facebook">Facebook</label>
            <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={handleChange}
            />

            <label htmlFor="instagram">Instagram</label>
            <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={handleChange}
            />

            <label htmlFor="twitter">Twitter</label>
            <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateProfile;
