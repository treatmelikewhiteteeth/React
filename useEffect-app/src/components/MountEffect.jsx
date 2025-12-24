import { useEffect } from "react";

export default function MountEffect() {

    const [count, setCount] = useState(0);

    /* 비어있는 의존성 배열
       컴포넌트가 화면에 최초로 렌더링 될 때(mount) useEffect의 콜백함수가
       1회 실행이 된다.
       초기 설정을 할 때, 화면이 뜬 후 어떤 서버에서 데이터를 불러와서 띄어와야할 때(API) */
    useEffect(() => {
        console.log("컴포넌트 최초 마운트 시 1회 실행")
    }, []);

    return (
        <div>
            <button onClick = {() => setCount((p) => p + 1)}>+1</button> 
        </div>
    )
}