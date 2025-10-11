import React, { useState, useEffect } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        // Manipulasi data:
        // Filter: hanya ambil post dari userId = 1
        // Slice: ambil hanya 5 post pertama
        const filteredPosts = result
          .filter((post) => post.userId === 1)
          .slice(0, 5);

        setPosts(filteredPosts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p> Memuat data...</p>;
  if (error) return <p> Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <h1>Soal 5 - Manipulasi Data API</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "#2c2c2c",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
