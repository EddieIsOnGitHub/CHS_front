import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fetched Data:</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
