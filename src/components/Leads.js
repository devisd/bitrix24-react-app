import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BITRIX_API_URL}crm.lead.list`, {
          params: {
            auth: localStorage.getItem('bitrix_token')
          }
        });
        setLeads(response.data.result);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Leads</h2>
      <ul>
        {leads.map(lead => (
          <li key={lead.ID}>{lead.TITLE}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leads;
