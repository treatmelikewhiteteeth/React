// App.js
import React from "react";
import styled from "styled-components";

// DynamicButton 정의
const DynamicButton = styled.button`
  background-color: ${props => (props.primary ? "royalblue" : "white")};
  color: ${props => (props.primary ? "white" : "gray")};
  border: ${props => (props.primary ? "none" : "1px solid gray")};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "50px" }}>
      <DynamicButton>기본</DynamicButton>
      <DynamicButton primary>메인</DynamicButton>
    </div>
  );
}

export default App;
