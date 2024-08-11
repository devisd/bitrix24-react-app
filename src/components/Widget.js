import React, { useEffect } from 'react';
import Leads from './Leads';
import Deals from './Deals';
import Contacts from './Contacts';
import ExternalData from './ExternalData';

const Widget = () => {
  useEffect(() => {
    window.BX24.init(() => {
      const user = window.BX24.getAuth();
      console.log('User:', user);

      // Авторизация пользователя в Битрикс24 и получение токена
      window.BX24.callMethod('crm.lead.list', {}, result => {
        if (result.error()) {
          console.error(result.error());
        } else {
          console.log(result.data());
        }
      });
    });
  }, []);

  return (
    <div>
      <h1>Bitrix24 Widget</h1>
      <Leads />
      <Deals />
      <Contacts />
      <ExternalData />
    </div>
  );
};

export default Widget;
