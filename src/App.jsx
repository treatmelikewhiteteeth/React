import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './componnents/Hello'
/* default 내보내기를 하고, import 할 때 이름을 마음대로 바꿔도 되기는 하나
   권장하지는 않는다. */
  import Welcome from ``

  function App() {
    return (
    <div>
      <h1> React 함수형 컴포넌트 실습</h1>

      {/* <Welcome /> // 컴포넌트의 장점 : 재사용성이 좋다.
      <Welcome /> // 컴포넌트를 내가 원하는 만큼 재호출해서 쓸 수 있다. */}
      <Jsx />
    </div>
  )
}

export default App 
