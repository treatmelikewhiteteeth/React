import {useState} from "react";

export default function GreetingForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    cosnt [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <input
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                placeholder = "이름"
            />

            <input
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                placeholder = "이름"
            />

            <br />

            <button onClick = {() => setSubmitted((prev) => !prev)}>
                인사출력
            </button>
        
            {submitted && <p>안녕하세요, {name}님. {age}살 이시군요</p>}
        </div>
    )
}