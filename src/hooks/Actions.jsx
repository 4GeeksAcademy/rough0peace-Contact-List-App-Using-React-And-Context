export const GetContacts = async(store, dispatch) => {
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

export const AddContact = async() => {
  const { store, dispatch } = useGlobalReducer();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const PostContact = async (store, dispatch) => {
    const body = {
      name: name,
      phone: phone,
      email: email,
      address: address
    };
    const url = `https://playground.4geeks.com/contact/agendas/Ian/contacts`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })};
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`status:${response.status}, message:${data}`);
    }}

    
export const DeleteContact = async() => {
  //update the store 
  const DeleteContact = async (store, dispatch, contactId) => {
    const response = await fetch(`${store.BASE_URL}/${store.SLUG}/contacts/${contactId}`, {
      method: "DELETE"
    })};
    if (!response.ok) {
      const body = await response.json();
      throw new Error(`status:${response.status}, message:${body}`);
    }
  }