import { useState } from "react";

export default function LoginForm() {
    // 상태 만들기
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
}
