import { useState } from "react";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                console.log("Zarejestrowano!");
            } else {
                const data = await response.json();
                console.error("Rejestracja nie powiodła się!", data);
            }
        } catch (error) {
            console.error("Rejestracja nie powiodła się!", error);
        }
    };
    return (
        <form>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Hasło:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" onClick={handleRegister}>
                Zarejestruj
            </button>
        </form>
    );
};

export default RegisterForm;
