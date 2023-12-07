const Navbar = () => {
    return (
        <div className="absolute w-full flex justify-between items-center p-4">
            <div className="text-white text-2xl font-bold">
                Social for Dancers
            </div>
            <div className="flex items-center">
                <button className="mr-4">Zaloguj się</button>
                <button className="bg-white text-black">Zarejestruj się</button>
            </div>
        </div>
    );
};

export default Navbar;
