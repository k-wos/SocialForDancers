import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const navItems = [
        { id: 1, name: "Główna", href: "#", current: true },
        { id: 2, name: "Tancerze", href: "#", current: true },
        { id: 3, name: "Zarejestruj", href: "#", current: false },
        { id: 4, name: "Zaloguj", href: "#", current: false },
    ];
    return (
        <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-2xl font-bold">SocialForDancers</h1>

            <ul className="hidden md:flex">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className={`${
                                item.current ? "text-blue-500" : "text-gray-500"
                            } hover:text-blue-500 px-4 py-2`}
                        >
                            {item.name}
                        </a>
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
                        <a
                            href={item.href}
                            className={`${
                                item.current ? "text-blue-500" : "text-gray-500"
                            } hover:text-blue-500 px-4 py-2`}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
