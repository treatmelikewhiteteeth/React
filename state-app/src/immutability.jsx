import { useFormState } from "react-dom";

export default function immutability() {
    const [user, setUser] = userState({name:"", age : 0});
return (
    <>
        <p>이름 : {user.name}</p>
        <button onClick={() => {
            user.name = "Kim"
        }}>
            이름 변경
        </button>
    </>
)
}