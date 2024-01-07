import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { profile, loading } = useSelector((state) => state.profile);
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    if (profile && loading === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <p>Witaj {user.firstName}</p>
            {profile !== null ? (
                <p>Profile</p>
            ) : (
                <>
                    <p>Uzupełnij swój profil</p>
                    <p>Utwórz profil</p>
                </>
            )}
        </>
    );
};

export default Dashboard;
