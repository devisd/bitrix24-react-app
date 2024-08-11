import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BITRIX_API_URL}crm.contact.list`,
          {
            params: {
              auth: localStorage.getItem('bitrix_token')
            }
          }
        );
        setContacts(response.data.result);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.ID}>
            {contact.NAME} {contact.LAST_NAME}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
