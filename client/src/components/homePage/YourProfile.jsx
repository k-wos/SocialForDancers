import dancePhoto from "../../assets/dance.jpg";
const YourProfile = () => {
    return (
        <div className="md:left-[10%] max-w-[1100px] m-auto p-8">
            <h2 className="text-4xl py-6 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                Twój profil użytkownika
            </h2>
            <div className="flex gap-5">
                <div>
                    <img
                        src={dancePhoto}
                        alt="zdjęcie profilowe"
                        className="rounded-lg"
                    />
                    <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                        Wyeksponuj się
                    </h3>
                    <p>
                        Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby
                        podzielić się swoimi wspaniałymi momentami na scenie lub
                        w trakcie treningu.
                    </p>
                </div>
                <div>
                    <img
                        src={dancePhoto}
                        alt="zdjęcie profilowe"
                        className="rounded-lg"
                    />
                    <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                        Dziel się umiejętnościami
                    </h3>
                    <p>
                        Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby
                        podzielić się swoimi wspaniałymi momentami na scenie lub
                        w trakcie treningu.
                    </p>
                </div>
                <div>
                    <img
                        src={dancePhoto}
                        alt="zdjęcie profilowe"
                        className="rounded-lg"
                    />
                    <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                        Nawiązuj kontakty
                    </h3>
                    <p>
                        Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby
                        podzielić się swoimi wspaniałymi momentami na scenie lub
                        w trakcie treningu.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default YourProfile;
