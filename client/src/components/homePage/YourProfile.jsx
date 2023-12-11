import dancePhoto from "../../assets/dance.jpg";
const YourProfile = () => {
    return (
        <div>
            <h2>Twój profil użytkownika</h2>
            <div className="flex">
                <div>
                    <img src={dancePhoto} alt="zdjęcie profilowe" />
                    <h3>Wyeksponuj się</h3>
                    <p>
                        Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby
                        podzielić się swoimi wspaniałymi momentami na scenie lub
                        w trakcie treningu.
                    </p>
                </div>
                <div>
                    <img src={dancePhoto} alt="zdjęcie profilowe" />
                    <h3>Dziel się umiejętnościami</h3>
                    <p>
                        Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby
                        podzielić się swoimi wspaniałymi momentami na scenie lub
                        w trakcie treningu.
                    </p>
                </div>
                <div>
                    <img src={dancePhoto} alt="zdjęcie profilowe" />
                    <h3>Nawiązuj kontakty</h3>
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
