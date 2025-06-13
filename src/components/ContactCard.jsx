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
        <div>
            <h1>hello {name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p> 
            <Link to={`/edit-contact/${id}`}>
                <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
        
    )
}