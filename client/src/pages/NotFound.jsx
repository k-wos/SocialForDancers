import NotPageImage from "../assets/404.jpg";
const NotFound = () => {
    return (
        <div
            className="bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url(${NotPageImage})` }}
        >
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8 rounded-lg px-10">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold bg-gradient-to-r from-purpleText to-orangeText inline-block text-transparent bg-clip-text">
                            404
                        </h1>
                        <h2 className="text-4xl font-medium py-8">
                            Nie znaleziono strony
                        </h2>
                        <p className="text-2xl pb-8 px-12 font-medium">
                            Strona, której szukasz nie istnieje lub została
                            usunięta
                        </p>
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                            GŁÓWNA
                        </button>
                        <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                            KONTAKT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
