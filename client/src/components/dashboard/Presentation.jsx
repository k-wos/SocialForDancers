/* eslint-disable react/prop-types */
import DashboardActions from "./DashboardActions";
import { Link } from "react-router-dom";

const Presentation = ({ user, profile }) => {
    return (
        <div className="py-8">
            <div className="w-full flex  justify-center">
                <div className="flex flex-col  ">
                    <img
                        src="https://picsum.photos/id/237/200/300"
                        alt="avatar"
                        className="rounded-full aspect-square object-cover"
                    />
                    <h1 className="text-center py-3 font-bold">
                        {user.firstName} {user.lastName}
                    </h1>
                </div>
            </div>
            {profile !== null ? (
                <DashboardActions />
            ) : (
                <>
                    <p>Nie masz utworzonego profilu, dodaj informację:</p>
                    <Link to="/create-profile">Utwórz profil</Link>
                </>
            )}
            ;
        </div>
    );
};

export default Presentation;
