import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

export default function APIFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch((err) => console.error("API Fetch Error:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md m-4">
      <h2 className="text-xl font-semibold mb-2">API Data</h2>
      <pre className="text-sm whitespace-pre-wrap">
        {data ? JSON.stringify(data, null, 2) : "Loading..."}
      </pre>
    </div>
  );
}
