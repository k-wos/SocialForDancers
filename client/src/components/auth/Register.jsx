import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [formdata, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
    });
    const { firstName, lastName, email, password, password2 } = formdata;

    const onChange = (e) =>
        setFormdata({ ...formdata, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Passwords do not match");
        } else {
            // const newUser = {
            //     firstName,
            //     lastName,
            //     email,
            //     password,
            // };
            // try {
            //     const config = {
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //     };
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post("/api/users", body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
            dispatch(register({ firstName, lastName, email, password }));
        }
    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <Link
                to="/"
                className="absolute top-0 left-0 m-4 flex gap-4 items-center"
            >
                <FaArrowLeft /> Wroć na stronę główną
            </Link>
            <ToastContainer />
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl   lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase">
                    Zarejestruj się
                </h1>
                <form className="mt-6" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Imię
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => onChange(e)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Nazwisko
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => onChange(e)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
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
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Potwierdź hasło
                        </label>
                        <input
                            type="password"
                            name="password2"
                            value={password2}
                            onChange={(e) => onChange(e)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Zarejestruj
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Posiadasz już konto?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Zaloguj się
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
