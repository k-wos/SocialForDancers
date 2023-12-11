const JoinTheCommunity = () => {
    return (
        <div>
            <div className="bg-secondBg h-96 flex justify-center items-center">
                <div className="flex flex-col bg-white rounded-lg md:left-[10%] max-w-[1100px] md: maxm-auto p-8">
                    <h2 className="text-4xl py-6 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                        Jak dołączyć do społeczności?
                    </h2>
                    <div className="flex gap-5">
                        <div>
                            <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                                1. Stwórz Profil
                            </h3>
                            <p>
                                Stwórz swoje unikalne konto i zbuduj swoją
                                tożsamość jako tancerz. Wypełnij swój profil
                                informacjami o swoich umiejętnościach, stylach,
                                celach tanecznych i więcej.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                                2. Poznawaj Innych Tancerzy
                            </h3>
                            <p>
                                Przeglądaj profile innych użytkowników, nawiązuj
                                kontakty, komentuj i lajkuj posty, dziel się
                                swoimi postępami tanecznymi i inspirowaj innych
                                swoją pasją.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                                3. Współpracuj i Wspieraj
                            </h3>
                            <p>
                                Znajdź partnera do tańca, dołącz do grup
                                tanecznych, bierz udział w wydarzeniach, kursach
                                i warsztatach, zdobywaj nowe doświadczenia i
                                rozwijaj się razem z innymi tancerzami
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinTheCommunity;
