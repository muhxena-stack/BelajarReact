import React from "react";
import useFetch from "../hooks/useFetch";

export default function PostDisplay() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
