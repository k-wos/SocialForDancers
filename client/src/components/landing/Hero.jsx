import baner from "../../assets/baner.jpg";

const Hero = () => {
    const HeroData = {
        title: "Social for Dancers: Twój Social Media dla Tancerzy",
        description:
            "Witaj w Social for Dancers - aplikacji, którą stworzyliśmy specjalnie dla tancerzy. Poznaj naszą społeczność, korzystając z unikalnych funkcji, które pomogą Ci rozwijać swoje umiejętności taneczne i znaleźć partnera do tańca.",
        button: "Zarejestruj się",
        image: baner,
    };
    return (
        <div
            className="w-full h-screen flex flex-col justify-between bg-[url('assets/baner.jpg')] 
        bg-no-repeat bg-cover bg-center"
        >
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="md:left-[10%] max-w-[1100px] m-auto p-4">
                    <h1 className="font-bold text-3xl md:text-5xl text-white">
                        {HeroData.title}
                    </h1>
                    <p className="text-white py-2">{HeroData.description}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        {HeroData.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
