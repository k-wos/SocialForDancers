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
        <div className="max-w-[1240px] m-auto py-10">
            <h1 className="font-bolt text-5xl px-8 py-4 font-merriweather bg-gradient-to-r from-purpleText to-orangeText inline-block text-transparent bg-clip-text">
                Twój Profil
            </h1>
            <div className="grid md:grid-cols-3 gap-4 p-4 ">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <img src={item.img} className="rounded-t-lg"></img>
                        <div className="p-5">
                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                            </h1>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-dmSans">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourProfile;
