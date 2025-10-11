import React, { useState, useEffect } from "react";

export default function FetchDataWithStatus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // mulai loading

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // kalo mau nampilin error ganti postsss
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //Tampilan berdasarkan kondisi
  if (loading) {
    return <p style={{ color: "orange" }}> Sedang memuat data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}> Terjadi kesalahan: {error.message}</p>;
  }

  return (
    <div>
      <h1>Soal 3</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
