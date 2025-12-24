// App.js
import React from "react";
import styled from "styled-components";

// BaseCard 정의
const BaseCard = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
`;

// BaseCard를 확장하여 ElevatedCard 정의
const ElevatedCard = styled(BaseCard)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "50px" }}>
      <BaseCard>기본 카드</BaseCard>
      <ElevatedCard>그림자 카드</ElevatedCard>
      <ElevatedCard as="section">section 태그 카드</ElevatedCard>
    </div>
  );
}

export default App;