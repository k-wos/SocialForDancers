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
            <div className="flex flex-col md:flex-row md:flex-wrap py-5  items-center">
                {profiles.map(
                    (profile) =>
                        profile.user && (
                            <div className="w-1/2" key={profile._id}>
                                <ProfileItem profile={profile} />
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default Profiles;
