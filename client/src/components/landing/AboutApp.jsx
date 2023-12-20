const AboutApp = () => {
    const info = [
        {
            title: "Twórz Profil",
            description:
                "Stwórz swoje unikalne konto i zbuduj swoją tożsamość jako tancerz. Wypełnij swój profil informacjami o swoich umiejętnościach, stylach, celach tanecznych i więcej.",
        },
        {
            title: "Poznawaj Innych Tanncery",
            description:
                "Przeglądaj profile innych użytkowników, nawiązuj kontakty, komentuj i lajkuj posty, dziel się swoimi postępami tanecznymi i inspirowaj innych swoją pasją.",
        },
        {
            title: "Współpracuj i Wspieraj",
            description:
                "Znajdź partnera do tańca, dołącz do grup tanecznych, bierz udział w wydarzeniach, kursach i warsztatach, zdobywaj nowe doświadczenia i rozwijaj się razem z innymi tancerzami.",
        },
    ];
    return (
        <div className="max-w-[1240px] m-auto">
            <h1 className="font-bolt text-2xl p-4">O aplikacji</h1>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <h1 className="font-bold text-2xl text-center">
                            {item.title}
                        </h1>
                        <p className="text-center py-4">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutApp;
