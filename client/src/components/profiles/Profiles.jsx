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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-center mt-10">
                {profiles.map(
                    (profile) =>
                        profile.user && (
                            <div key={profile._id}>
                                <ProfileItem profile={profile} />
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default Profiles;
