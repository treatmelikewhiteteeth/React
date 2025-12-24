export default function CounterExam() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => {
                setCount(count+1);
            }}>
                +1 증가
            </button>

            <button onClick={() => {
                setCount(count-1);
            }}>
                -1 증가
            </button>
        </div>
    )
}