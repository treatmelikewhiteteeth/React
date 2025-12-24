import { useEffect, useState } from 'react'

function QuoteCard() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchQuote = async () => {
    try {
      setLoading(true)

      const res = await fetch('https://zenquotes.io/api/random')
      const data = await res.json()

      // zenquotes 응답은 배열 형태
      setQuote(data[0].q)
      setAuthor(data[0].a)
    } catch (error) {
      setQuote('명언을 불러오지 못했습니다.')
      setAuthor('')
    } finally {
      setLoading(false)
    }
  }

  // 처음 마운트될 때만 실행
  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          backgroundColor: '#eee',
          padding: '24px',
          width: '400px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        {loading ? (
          <p>명언 불러오는 중...</p>
        ) : (
          <>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px',
              }}
            >
              "{quote}"
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#555',
                marginBottom: '20px',
              }}
            >
              - {author}
            </p>
          </>
        )}

        <button onClick={fetchQuote}>다시 뽑기</button>
      </div>
    </div>
  )
}

export default QuoteCard
