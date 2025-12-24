import { useState } from "react";

export default function BadCounter() {
/* 일반 자바스크립트 코드가 들어갈 수 있음 */
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +1
            </button>
        </div>
    );
}
