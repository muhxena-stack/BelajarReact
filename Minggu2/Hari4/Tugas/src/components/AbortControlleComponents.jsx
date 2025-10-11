import React, { useState, useEffect } from "react";

export default function AbortControllerComponents() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;


        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }   catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch dibatalkan oleh pengguna.");
                }   else {
                    setError(err);
                }
            }   finally {
                setLoading(false);
            }
        };
        fetchData();

        return () => {
            abortController.abort();
            console.log("Fetch dibatalkan oleh komponen.");
        };

    }, []);

    if (loading) return <p>Memuat...</p>;
    if (error) return <p>Terjadi Kesalahan: {error.message}</p>;

    return (
        <div>
            <h1>Soal 4</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );

}