// delete will def be here
// make an EditContactPage.jsx routed, link tag in HERE, with ID parameter specifically in url
// example is found in base template in Routes.jsx
import { GetContacts, DeleteContact } from "../hooks/Actions";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactCard = ({ name, email, phone, address, id }) => {
  const { store, dispatch } = useGlobalReducer();
  const handleDelete = async () => {
    try {
      await DeleteContact(store, id);
      // Optionally, you can refresh the contacts list after deletion
      GetContacts(store, dispatch);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  return (
    <div
      className="contact-container d-flex"
      style={{
        border: "1px solid #74C0FC",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <div className="image-container pe-5">
        <i
          className="fa-solid fa-user"
          style={{
            fontSize: "150px",
            color: "#74C0FC",
            backgroundColor: "",
            borderRadius: "50%",
          }}
        ></i>
      </div>

      <div className="contact-details" style={{ width: "500px" }}>
        <h2>{name}</h2>
        <div className="email d-flex align-items-center">
          <i
            className="fa-solid fa-envelope pe-2"
            style={{ color: "#74C0FC" }}
          ></i>
          <p className="mb-0">{email}</p>
        </div>
        <div className="phone d-flex align-items-center">
          <i
            className="fa-solid fa-phone pe-2"
            style={{ color: "#74C0FC" }}
          ></i>
          <p className="mb-0">{phone}</p>
        </div>
        <div className="address d-flex align-items-center">
          <i
            className="fa-solid fa-location-dot pe-2"
            style={{ color: "#74C0FC" }}
          ></i>
          <p className="mb-0">{address}</p>
        </div>
      </div>

      <div className="contact-actions d-flex ms-auto p-2">
        <Link to={`/edit-contact/${id}`}>
          <i className="fa-solid fa-pencil d-flex pe-4" style={{ color: "#74C0FC" }}></i>
        </Link>
        <i
          className="fa-solid fa-trash-can pe-3"
          style={{ color: "#74C0FC" }}
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
};
