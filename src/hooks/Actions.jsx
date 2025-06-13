export const GetContacts = async (store, dispatch) => {
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
};

export const PostContact = async (contact) => {
  const body = {
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
  };
  const url = `https://playground.4geeks.com/contact/agendas/Ian/contacts`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`status:${response.status}, message:${data}`);
  }
  return data;
};

//update the store
export const DeleteContact = async (store, contactId) => {
  const response = await fetch(
    `${store.BASE_URL}/${store.SLUG}/contacts/${contactId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    const body = await response.json();
    throw new Error(`status:${response.status}, message:${body}`);
  }
};

export const PutContact = async (store, contactId, contact) => {
  const body = {
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
  };
  const response = await fetch(
    `${store.BASE_URL}/${store.SLUG}/contacts/${contactId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`status:${response.status}, message:${data}`);
  }
  return data;
}