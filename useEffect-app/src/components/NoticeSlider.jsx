import { useEffect, useState } from "react";

export default function NoticeSlider() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

  // 1️⃣ 처음 마운트 시 posts 5개 가져오기
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  // 2️⃣ 3초마다 인덱스 변경
  useEffect(() => {
    if (posts.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % posts.length);
    }, 3000);

    // 5️⃣ 컴포넌트 언마운트 시 타이머 제거
    return () => clearInterval(timer);
  }, [posts]);

  if (posts.length === 0) {
    return <div>공지 불러오는 중...</div>;
  }

  return (
    <div
      style={{
        width: 400,
        padding: 20,
        backgroundColor: "#f3f4f6",
        borderRadius: 10,
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h4 style={{ margin: "0 0 10px" }}>공지사항</h4>

      <p style={{ fontSize: 18, fontWeight: 600 }}>
        {posts[index].title}
      </p>

      <p style={{ fontSize: 14, color: "#6b7280" }}>
        {index + 1} / {posts.length}
      </p>
    </div>
  );
}
