import React, { useEffect } from "react";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { json } from "react-router-dom";
import { GetContacts } from "../hooks/Actions.jsx";
import { ContactCard } from "../components/ContactCard.jsx"; // Import the ContactCard component

// my "home page"

export const Contacts = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    GetContacts(store, dispatch);
  }, []);

  return (
    <ul>
      {store.contacts?.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactCard
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              address={contact.address}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
