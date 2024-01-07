import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

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
                    <p>Nie masz utworzonego profilu, dodaj informację:</p>
                    <Link to="/create-profile">Utwórz profil</Link>
                </>
            )}
        </>
    );
};

export default Dashboard;
