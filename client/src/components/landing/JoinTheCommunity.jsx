const JoinTheCommunity = () => {
    const info = [
        {
            id: 1,
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
        {
            id: 2,
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
        {
            id: 3,
            title: "Zarejestruj się i załóż profil",
            description:
                "Aby dołączyć do Social for Dancers, wystarczy założyć bezpłatne konto i utworzyć swój unikalny profil taneczny. To proste i zajmie Ci tylko kilka minut.",
        },
    ];
    return (
        <div className="bg-secondBg p-20">
            <div className="bg-white shadow-xl p-2 py-10 max-w-[1240px] m-auto rounded-xl">
                <h1 className="font-bold font-merriweather text-2xl px-8 py-4 text-center bg-gradient-to-r from-purpleText to-orangeText inline-block text-transparent bg-clip-text">
                    Dołącz do społeczności
                </h1>
                <div className="grid md:grid-cols-3 gap-4 p-4">
                    {info.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4"
                        >
                            <div className="flex gap-1">
                                <div className="w-10 h-10 rounded-md bg-[#815FD3] flex  items-center justify-center">
                                    {item.id}
                                </div>
                                <h1 className="font-bold text-xl pl-2">
                                    {item.title}
                                </h1>
                            </div>
                            <p className="pl-9 py-4 font-dmSans">
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
