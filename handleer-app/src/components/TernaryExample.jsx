import { useState } from "react";

export default function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div style={styles.page}>
            <h2 style={styles.h2}>삼항 연산자 예제</h2>
            <div style={styles.card}>
                {isLogin ? <LoginView onLogout={() => setIsLogin(false)} /> 
                         : <LogoutView onLogin={() => setIsLogin(true)} />}
            </div>
        </div>
    );
}

function LogoutView({ onLogin }) {
    return (
        <div>
            <p style={{ marginTop: 0 }}>현재 로그아웃 상태입니다.</p>
            <button style={styles.btn} onClick={onLogin}>로그인</button>
        </div>
    );
}

function LoginView({ onLogout }) {
    return (
        <div>
            <p style={{ marginTop: 0 }}>현재 로그인 상태입니다.</p>
            <button style={styles.btn} onClick={onLogout}>로그아웃</button>
        </div>
    );
}

const styles = {
    page: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
    },
    h2: {
        color: "#333",
    },
    card: {
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
        width: "300px",
        textAlign: "center",
    },
    btn: {
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#fff",
        cursor: "pointer",
    },
};
