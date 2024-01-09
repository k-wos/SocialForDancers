import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state) => state.profile.profiles);

    useEffect(() => {
        dispatch(getAllProfiles());
    }, [dispatch]);
    console.log(profiles);

    return (
        <>
            <h1>Tancerze</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                ))}
            </div>
        </>
    );
};

export default Profiles;
