import { useState } from "react";

export default function App() {
    const [isdark, setIsdark] = useState(false);

    return (
        <div>
            {isdark ? "Dark Mode" : "Light Mode"}
            <button onClick={() => setIsdark(!isdark)}>
                Toggle Mode
            </button>
        </div>
    );
}