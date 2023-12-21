const JoinTheCommunity = () => {
    const info = [
        {
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
        {
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
        {
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
    ];
    return (
        <div className="bg-secondBg p-20">
            <div className="bg-white p-2 py-10 max-w-[1240px] m-auto rounded-xl">
                <h1 className="font-bold font-merriweather text-2xl p-4 text-center bg-gradient-to-r from-purpleText to-orangeText inline-block text-transparent bg-clip-text">
                    Dołącz do społeczności
                </h1>
                <div className="grid md:grid-cols-3 gap-4 p-4">
                    {info.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4"
                        >
                            <h1 className="font-bold text-2xl text-center">
                                {item.title}
                            </h1>
                            <p className="text-center py-4 font-dmSans">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JoinTheCommunity;
