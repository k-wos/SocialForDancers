import React from "react";
import baner from "../../assets/baner.jpg";

const Hero = () => {
    return (
        <div className="w-full h-screen">
            <img
                className="top-0 left-0 h-screen object-cover w-full"
                src={baner}
                alt="dancing couple"
            ></img>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div>
                    <h1>Social for Dancers: Social Media dla tancerzy</h1>
                    <p>
                        Witaj w Social for Dancers - aplikacji, którą
                        stworzyliśmy specjalnie dla tancerzy. Poznaj naszą
                        społeczność, korzystając z unikalnych funkcji, które
                        pomogą Ci rozwijać swoje umiejętności taneczne i znaleźć
                        partnera do tańca.
                    </p>
                    <button>Dołącz do nas</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
