import baner from "../../assets/baner.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    if (isAuthenticated) {
        navigate("/dashboard");
    }
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
                    <h1 className="font-bold font-merriweather text-3xl md:text-5xl text-white py-2">
                        {HeroData.title}
                    </h1>
                    <p className="text-white py-2 font-dmSans">
                        {HeroData.description}
                    </p>
                    <button
                        className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md"
                    >
                        {HeroData.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
