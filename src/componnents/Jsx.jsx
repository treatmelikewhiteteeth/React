const Jsx = () => {
    
    /* HTML 태그를 변수에 직접 담을 수 있다. */
    const element = <h1>Hello, World!</h1>

    // JavaScript 값은 중괄호로 넣을 수 있다.
    const name = "Kim";
    const age = 20;

    const boxStyle = {
        background : 'lightgray',
        padding : "12px",
        borderRadius : "8px",
    }

    /* JSX에서 자주 사용하는 패턴
       1. 조건부 렌더링(삼항연산자)
       JSX 안에서 if문을 직접 쓸 수는 없고, 보통 삼항연산자를 사용한다. */
       const isLogin = true;    

    /* 2. 조건부 렌더링(AND연산자 &&)
       조건이 true이면 뒤 렌더링을 한다. */
       const hasMassage = true;

    /* 3. 리스트 렌더링(map() 메서드)
       배열을 ul 목록으로 바꿀 떄 map() 메서드를 사용한다. */
       const fruits = ["사과", "바나나", "포도"];

    return (
        /* JSX 쓸 때는 반드시 하나의 부모 요소로 감싸야 한다.
           만약 불필요한 div를 쓰고 싶지 않다면 Fragment를 사용한다.
           <> </> */
        <>
            {element}
            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
            <h2>내년 나이 : {age + 1}</h2>
            {/* class는 예약어라서 JSX에선 className을 쓴다 */}
            <div classname = "container">박스</div>
            {/* CSS 문자열이 아니라 JavaScript 객체형태로 써야한다.
                속성들은 fontSize, backgroundColor 처럼 카멜표현식으로 써야한다. */}
            <div style = {{color : 'red', 'fontSize' : '20px'}}>스타일 박스</div>
            <div style = {boxStyle}>스타일 박스2</div>
            {/* 태그는 반드시 닫는다. */}
            <input />
            <img src = "logo.png" alt = "logo"/>
            {isLogin ? <h1>환영합니다</h1> : <h1>로그인해주세요</h1>}
            <div>{hasMassage && <p>새 메시지가 있습니다.</p>}</div>
            <ul>
                {fruits.map((item, index) => (
                    // 이때 li의 속성으로 key를 쓰는 것이 좋다.
                    // 리액트가 각 li를 구분하는 용도로 쓴다.
                    <li key = {index} > {item}</li>
                ))}
            </ul>
        </>
    );
}

export default Jsx;