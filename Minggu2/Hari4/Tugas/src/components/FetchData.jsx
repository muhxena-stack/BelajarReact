import React, { useState, useEffect } from "react";

export default function FetchData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }   catch (err) {
                setError(err);
            }   finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    
    if (!data) return null;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Soal 1</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    );
}