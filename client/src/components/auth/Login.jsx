import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formdata;

    const onChange = (e) =>
        setFormdata({ ...formdata, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("success");
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl   lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
                    Zaloguj się
                </h1>
                <form className="mt-6" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Hasło
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => onChange(e)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Zaloguj
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Nie posiadasz konta?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Zarejestruj się
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
