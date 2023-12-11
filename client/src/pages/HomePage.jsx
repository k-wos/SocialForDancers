import AboutApp from "../components/homePage/AboutApp";
import Hero from "../components/homePage/Hero";
import JoinTheCommunity from "../components/homePage/JoinTheCommunity";
import Navbar from "../components/homePage/Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutApp />
            <JoinTheCommunity />
        </div>
    );
};

export default HomePage;
