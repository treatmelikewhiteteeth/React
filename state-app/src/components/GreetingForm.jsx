import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>

            {submitted && (
                <p>안녕하세요, {name}님. {age}살이시군요.</p>
            )}
        </div>
    );
}
