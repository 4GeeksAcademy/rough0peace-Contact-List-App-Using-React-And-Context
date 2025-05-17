import React from "react";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Contacts = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<ul>
            {store.contacts.map((contacts) => {
                return <li key={contact.id}>{contact.name}</li>
            })}
        </ul>
	);
}; 