// App.js
import React from "react";
import styled from "styled-components";

// styled-components로 PrimaryTitle 정의
const PrimaryTitle = styled.h1`
  font-size: 32px;
  color: #3498db;
  text-align: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div>
      <PrimaryTitle>강의 실습 시작</PrimaryTitle>
    </div>
  );
}

export default App;