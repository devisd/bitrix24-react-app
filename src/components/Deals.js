import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BITRIX_API_URL}crm.deal.list`, {
          params: {
            auth: localStorage.getItem('bitrix_token')
          }
        });
        setDeals(response.data.result);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div>
      <h2>Deals</h2>
      <ul>
        {deals.map(deal => (
          <li key={deal.ID}>{deal.TITLE}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deals;
