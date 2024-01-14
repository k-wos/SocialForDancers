/* eslint-disable react/prop-types */
import DashboardActions from "./DashboardActions";
import { Link } from "react-router-dom";

const Presentation = ({ user, profile }) => {
    return (
        <div className="pb-16">
            <div className="p-8 bg-white shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p>{user ? user.followers.length : "Loading..."}</p>
                            <p>Obserwujący</p>
                        </div>
                        <div>
                            <p>{user ? user.following.length : "Loading..."}</p>
                            <p>Obserwowani: </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
                            <img
                                src="https://picsum.photos/id/237/200/300"
                                alt="avatar"
                                className="rounded-full aspect-square object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        {profile !== null ? (
                            <DashboardActions />
                        ) : (
                            <>
                                <p>
                                    Nie masz utworzonego profilu, dodaj
                                    informację:
                                </p>
                                <Link to="/create-profile">Utwórz profil</Link>
                            </>
                        )}
                        <button className="text-white py-2 px-4 uppercase rounded shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Usuń konto
                        </button>
                    </div>
                </div>
                <div className="mt-20 text-center  pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                        {user
                            ? `${user.firstName} ${user.lastName}`
                            : "Loading..."}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
