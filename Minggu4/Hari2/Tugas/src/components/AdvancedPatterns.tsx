import React, { useEffect } from "react";

// Generic hook untuk async fetch
function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result: T) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  return { data, loading };
}

// Type guard
function isUser(obj: any): obj is { id: number; name: string } {
  return obj && typeof obj.id === "number" && typeof obj.name === "string";
}

const AdvancedPatterns: React.FC = () => {
  const { data, loading } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Data dari API:</h3>
      <ul>
        {data?.map((item, i) =>
          isUser(item) ? (
            <li key={i}>
              {item.id}. {item.name}
            </li>
          ) : (
            <li key={i}>Invalid data</li>
          )
        )}
      </ul>
    </div>
  );
};

export default AdvancedPatterns;
