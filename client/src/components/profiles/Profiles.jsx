import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../actions/profile";

const Profiles = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profile.profiles);
    const profile = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(getAllProfiles());
    }, [dispatch]);
    console.log(profiles);

    return <div>Profiles</div>;
};

export default Profiles;
