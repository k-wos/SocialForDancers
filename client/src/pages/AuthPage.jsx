import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginRegister/LoginForm";

const AuthPage = () => {
    return (
        <div>
            <h2>Zarejestruj</h2>
            <RegisterForm />

            <h2>Login</h2>
            <LoginForm />
        </div>
    );
};

export default AuthPage;
