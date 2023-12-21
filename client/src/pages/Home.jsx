import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import AboutApp from "../components/landing/AboutApp";
import JoinTheCommunity from "../components/landing/JoinTheCommunity";
import YourProfile from "../components/landing/YourProfile";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutApp />
            <JoinTheCommunity />
            <YourProfile />
        </>
    );
};

export default Home;
