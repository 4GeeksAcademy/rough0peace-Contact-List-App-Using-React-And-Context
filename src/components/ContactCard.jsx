// delete will def be here
// make an EditContactPage.jsx routed, link tag in HERE, with ID parameter specifically in url 
// example is found in base template in Routes.jsx
import { GetContacts, DeleteContact } from "../hooks/Actions"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const ContactCard = ({name, email, phone, address, id}) => {
    const {store, dispatch} = useGlobalReducer();
    const handleDelete = async () => {
        try {
            await DeleteContact(store, id);
            // Optionally, you can refresh the contacts list after deletion
            GetContacts(store, dispatch);
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    }
    return (
        <div className="contact-container d-flex justify-content-between" style={{border: "1px solid #74C0FC", borderRadius: "10px", padding: "20px", marginBottom: "10px"}}>
            
            <div className="image-container">
                <i className="fa-solid fa-user" style={{ fontSize: "100px", color: "#74C0FC", backgroundColor: "", borderRadius: "50%"}}></i>
            </div>

            <div className="contact-details">
                <h1>{name}</h1>
                    <div className="email d-flex align-items-center">
                        <i className="fa-solid fa-envelope p" style={{color: "#74C0FC"}}></i><p>{email}</p>
                    </div>
                <div className="phone">
                    <i className="fa-solid fa-phone" style={{color: "#74C0FC"}}></i><p>{phone}</p>
                </div>
                <div className="address">
                    <i className="fa-solid fa-location-dot" style={{color: "#74C0FC"}}></i><p>{address}</p> 
                </div>
            </div>

            <div className="contact-actions">
                <Link to={`/edit-contact/${id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>

        </div>
        
    )
}