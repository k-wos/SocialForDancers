const AboutApp = () => {
    const sections = [
        {
            title: "Twórz Profil",
            content:
                "Stwórz swoje unikalne konto i zbuduj swoją tożsamość jako tancerz. Wypełnij swój profil informacjami o swoich umiejętnościach, stylach, celach tanecznych i więcej.",
        },
        {
            title: "Poznawaj Innych Tancerzy",
            content:
                "Przeglądaj profile innych użytkowników, nawiązuj kontakty, komentuj i lajkuj posty, dziel się swoimi postępami tanecznymi i inspirowaj innych swoją pasją.",
        },
        {
            title: "Współpracuj i Wspieraj",
            content:
                "Znajdź partnera do tańca, dołącz do grup tanecznych, bierz udział w wydarzeniach, kursach i warsztatach, zdobywaj nowe doświadczenia i rozwijaj się razem z innymi tancerzami",
        },
    ];

    return (
        <div className="md:left-[10%] max-w-[1100px] m-auto">
            <h2 className="text-4xl py-6 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                O aplikacji
            </h2>
            <div className="flex">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col">
                        <h3 className="text-lg py-2 bg-gradient-to-r from-purpleText to-orangeText nline-block text-transparent bg-clip-text">
                            {section.title}
                        </h3>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutApp;
