import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExternalData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_EXTERNAL_API_URL}data`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching external data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>External Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalData;
