import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../actions/profile";

const Profiles = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profiles);
    const profile = useSelector((state) => state.profile);
    console.log(profiles);

    useEffect(() => {
        dispatch(getAllProfiles());
    }, [dispatch]);

    return <div>Profiles</div>;
};

export default Profiles;
