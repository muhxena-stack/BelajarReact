import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                setData(response.data);
            }   catch (err) {
                setError(err);
            }   finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(!data) return null;
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Soal 2</h1>
            <h3>{data.name}</h3>
            <p>Email: {data.email}</p>
            <p>Telepon: {data.phone}</p>

        </div>
    )
}