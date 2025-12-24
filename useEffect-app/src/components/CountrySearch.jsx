import { useEffect, useState } from "react";

export default function CountrySearch() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const q = keyword.trim();

    // 2글자 미만이면 요청하지 않음
    if (q.length < 2) {
      setStatus("idle");
      setCountries([]);
      return;
    }

    // 디바운스 타이머
    const timer = setTimeout(() => {
      const controller = new AbortController();

      async function search() {
        setStatus("loading");

        try {
          const url =
            `https://restcountries.com/v3.1/name/${encodeURIComponent(q)}` +
            `?fields=name,flags,cca2`;

          const res = await fetch(url, { signal: controller.signal });

          // 검색 결과 없으면 404
          if (!res.ok) throw new Error("HTTP_ERROR");

          const data = await res.json();

          setCountries(data.slice(0, 20));
          setStatus("success");
        } catch (e) {
          // 이전 요청 취소는 무시
          if (e.name === "AbortError") return;

          setCountries([]);
          setStatus("error");
        }
      }

      search();
    }, 500);

    // cleanup: 디바운스 타이머 취소
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  /* -------------------- styles -------------------- */
  const wrap = {
    width: 520,
    borderRadius: 14,
    padding: 16,
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    fontFamily: "system-ui, sans-serif",
    background: "#fff",
  };

  const item = {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: "10px",
    borderRadius: 10,
    border: "1px solid #f1f5f9",
    marginBottom: 8,
    background: "#fff",
  };

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div style={wrap}>
        <h3 style={{ marginTop: 0 }}>나라 검색</h3>

        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="나라 이름 입력 (2글자 이상)"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            outline: "none",
            marginBottom: 12,
          }}
        />

        {/* 상태별 UI */}
        {status === "idle" && (
          <p style={{ color: "#6b7280", marginTop: 0 }}>
            2글자 이상 입력하면 검색이 시작된다
          </p>
        )}

        {status === "loading" && <p>검색 중...</p>}

        {status === "error" && (
          <p style={{ color: "#ef4444" }}>
            검색 결과가 없거나 요청에 실패했다
          </p>
        )}

        {status === "success" && countries.length === 0 && (
          <p style={{ color: "#6b7280" }}>검색 결과가 없다</p>
        )}

        {/* 원래 화살표 함수는 const f = () => {} 가 맞음
            const f = () => { return() } -> const f = () => () */}
        {countries.map((c) => (
          <div
            key={(c.cca2 ?? "") + (c.name?.common ?? "")}
            style={item}
          >
            <img
              src={c.flags?.png}
              alt="flag"
              style={{
                width: 26,
                height: 18,
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                objectFit: "cover",
              }}
            />
            <div style={{ fontWeight: 700 }}>
              {c.name?.common}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
