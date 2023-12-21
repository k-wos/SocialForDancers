import dance from "../../assets/dance.jpg";

const YourProfile = () => {
    const info = [
        {
            title: "Wyeksponuj się",
            description:
                "Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby podzielić się swoimi wspaniałymi momentami na scenie lub w trakcie treningu.",
            img: dance,
        },
        {
            title: "Dziel się umiejętnościami",
            description:
                "Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby podzielić się swoimi wspaniałymi momentami na scenie lub w trakcie treningu.",
            img: dance,
        },
        {
            title: "Nawiązuj kontakty",
            description:
                "Wstaw swoje najlepsze zdjęcia taneczne i filmy, aby podzielić się swoimi wspaniałymi momentami na scenie lub w trakcie treningu.",
            img: dance,
        },
    ];
    return (
        <div className="max-w-[1240px] m-auto">
            <h1 className="font-bolt text-2xl p-4">Twój Profil</h1>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4"
                    >
                        <img src={item.img}></img>
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

export default YourProfile;
