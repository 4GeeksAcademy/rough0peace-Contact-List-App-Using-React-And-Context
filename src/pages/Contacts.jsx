import React, { useEffect } from "react";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { json } from "react-router-dom";

export const Contacts = () => {
  const { store, dispatch } = useGlobalReducer();
  async function fetchContacts() {
    // fetch contacts
    // fetch(url, {});
    const url = `${store.BASE_URL}/${store.SLUG}`;
    const response = await fetch(url);
    const body = await response.json();
    if (!response.ok)
      throw new Error(`status:${response.status}, message:${body}`);
    // update store contacts with response body
    dispatch({
      type: "SET_CONTACTS",
      payload: body.contacts,
    });
  }
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <ul>
      {store.contacts?.map((contact) => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
};
