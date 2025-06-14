import { useState } from "react";
import { PostContact, GetContacts } from "../hooks/Actions.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const {store, dispatch} = useGlobalReducer();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const HandlePost = async () => {
    const contact = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    try {
      await PostContact(contact);
      // Optionally, you can reset the form fields after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      // Optionally, you can refresh the contacts list
      GetContacts(store, dispatch);
      navigate("/"); // Redirect to contacts page after adding
    } catch (error) {
      console.error("Error posting contact:", error);
    }
  }
  
  return (
    //onChange with useState
    <div className="form">
      <div className="form-title d-flex justify-content-center mt-3">
        <h1>Add New Contact</h1>
      </div>
      <div className="form-body ms-5 me-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="address"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="form-footer d-flex justify-content-center">
        <button onClick={() => HandlePost()} className="btn btn-primary">
          save contact
        </button>
      </div>
    </div>
  );
};
