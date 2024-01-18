import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import AboutApp from "../components/landing/AboutApp";
import JoinTheCommunity from "../components/landing/JoinTheCommunity";
import YourProfile from "../components/landing/YourProfile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
        document.title = "SocialForDancers - Strona główna";
    }, [isAuthenticated, navigate]);
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
