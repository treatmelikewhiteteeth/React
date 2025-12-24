import Card from './components/Card/Card'

function App() {
  return (
    <>
      {/* 기본 카드 */}
      <Card
        title="기본 카드"
        content="이것은 기본 카드입니다."
      />

      {/* danger 카드 */}
      <Card
        title="위험 카드"
        content="이 카드는 danger 스타일입니다."
        variant="danger"
      />

      {/* highlight + fullWidth 카드 */}
      <Card
        title="강조 카드"
        content="이 카드는 강조되며 전체 너비를 차지합니다."
        highlight={true}
        fullWidth={true}
      />
    </>
  )
}

export default App
