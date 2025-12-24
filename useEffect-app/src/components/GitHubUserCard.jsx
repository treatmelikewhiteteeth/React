import { useEffect, useState } from 'react'

function GitHubUserCard() {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    if (!username) return

    const fetchUser = async () => {
      try {
        setStatus('loading')

        const res = await fetch(
          `https://api.github.com/users/${username}`
        )

        if (!res.ok) {
          throw new Error('User not found')
        }

        const data = await res.json()
        setUser(data)
        setStatus('success')
      } catch (error) {
        setUser(null)
        setStatus('error')
      }
    }

    fetchUser()
  }, [username])

  const handleSearch = () => {
    setUsername(input.trim())
  }

  return (
    <div>
      <input
        type="text"
        placeholder="GitHub 아이디 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>

      {status === 'loading' && <p>로딩 중...</p>}

      {status === 'error' && (
        <p style={{ color: 'red' }}>
          사용자를 찾을 수 없습니다
        </p>
      )}

      {status === 'success' && user && (
        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ccc',
            padding: '16px',
            width: '250px',
            textAlign: 'center',
          }}
        >
          <img
            src={user.avatar_url}
            alt="profile"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <h3>{user.name ?? user.login}</h3>
          <p>Followers: {user.followers}</p>
        </div>
      )}
    </div>
  )
}

export default GitHubUserCard
