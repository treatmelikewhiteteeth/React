import { useEffect, useState } from "react";

export default function NoticeSilder() {
    /* api에 요청을 하고 난 후 받은 결과물을 저장할 state */
    const [posts, setPosts] = useState([]);
    /* 게시글의 index값을 저장할 state */
    const [index, setIndex] = useState(0);
    // 통신 상태를 보여주는 state
    const [status, setStatus] = useState("");
    /* 컴포넌트가 화면에 띄워지면 데이터를 자동으로 받아왔으면 좋겠어 */ 
    useEffect(() => {
        let ignore = false;

        /* 비동기 함수를 만든다. */
        async function load() {
            try {
                setStatus("loading");
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                /* res.ok : HTTP 응답 상태 코드가 "성공 범위인지"를 나타내는 Boolean값이다.
                   성공범위 : 200 ~ 299 사이 (200번대) -> true
                   이외의 것들은 -> false */
                if (!res.ok) {
                    throw new Error("HTTP_ERROR");
                }

                /* 정상적으로 통신이 완료 됐다면 */
                const data = await res.json(); // 데이터 파싱

                if (!ignore) {
                    setPosts(data); // 비어있는 게시글 형태의 객체가 순차적으로 들어감
                    setStatus("success");
                    setIndex(0);
                }
            } catch (error) {
                if (!ignore)
                    setStatus("error");
            }
        }
        
        load(); // 비동기 함수 호출

        return () => {
            ignore = true;
        }
    }, []);

    /* posts가 준비되면 3초마다 index를 자동 증가시키는 useEffect */
    useEffect(() => {
        if (posts.length === 0) {
            return;
        }

        /* setInterval() : 일정 시간마다 콜백함수를 작동시키는 함수 */
        const id = setInterval(() => {
            /* 인덱스의 값 증가 */
            setIndex((prev) => {
                if (prev >= posts.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(id);
    }, [posts]);

    const box = {
        with : 560,
        borderRadius : 14,
        padding : 16,
        border : "1px solid #e5e7eb",
        background : "#f9fafb",
        fontSize : 12,
        fontWeight : 800,
    }

    return null;
}
