import baner from "../../assets/baner.jpg";

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: `url(${baner})` }}
        >
            <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                <h1 className="text-3xl font-bold text-white">
                    Social for Dancers: Twój Social Media dla Tancerzy
                </h1>
            </div>
        </div>
    );
};

export default Hero;
