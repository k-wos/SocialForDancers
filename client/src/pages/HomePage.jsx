import AboutApp from "../components/homePage/AboutApp";
import Hero from "../components/homePage/Hero";
import JoinTheCommunity from "../components/homePage/JoinTheCommunity";
import Navbar from "../components/homePage/Navbar";
import YourProfile from "../components/homePage/YourProfile";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutApp />
            <JoinTheCommunity />
            <YourProfile />
        </div>
    );
};

export default HomePage;
