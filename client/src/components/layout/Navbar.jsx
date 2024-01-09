import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedout } from "../../actions/auth";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };
    const handleLogout = () => {
        dispatch(loggedout());
    };

    const navItems = [
        { id: 2, name: "Tancerze", link: "/dancers", current: false },
        ...(!isAuthenticated
            ? [
                  { id: 1, name: "Główna", link: "/", current: true },
                  {
                      id: 3,
                      name: "Zarejestruj",
                      link: "/register",
                      current: false,
                  },
                  { id: 4, name: "Zaloguj", link: "/login", current: false },
              ]
            : [
                  {
                      id: 5,
                      name: "Posty",
                      link: "/posts",
                      current: false,
                  },
                  {
                      id: 6,
                      name: "Tablica",
                      link: "/dashboard",
                      current: false,
                  },
                  {
                      id: 7,
                      name: "Wyloguj",
                      link: "#",
                      current: false,
                      onClick: handleLogout,
                  },
              ]),
    ];
    return (
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-2xl font-bold">SocialForDancers</h1>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.link}
                            onClick={item.onClick}
                            className={`${
                                item.current ? "text-blue-500" : "text-gray-500"
                            } hover:text-blue-500 px-4 py-2`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={handleNavbar} className="md:hidden cursor-pointer">
                {navbarOpen ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    navbarOpen
                        ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                }
            >
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.href}
                            onClick={item.onClick}
                            className={`${
                                item.current ? "text-blue-500" : "text-gray-500"
                            } hover:text-blue-500 px-4 py-2`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
