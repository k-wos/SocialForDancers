import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import AboutApp from "../components/landing/AboutApp";
import JoinTheCommunity from "../components/landing/JoinTheCommunity";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutApp />
            <JoinTheCommunity />
        </>
    );
};

export default Home;
