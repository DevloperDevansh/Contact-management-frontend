import React, { useEffect, useState } from 'react'
import Contact from './Contact';
import axios from 'axios'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify'

const AllContact = () => {

    //create state to store contact data 
    //create array of contact
    const [contacts, setContacts] = useState([]);

    const getAllContactFromServer = async () => {
        try {
            const response = await axios.get(`${base_url}/getAllContact`);
            setContacts(response.data)
            toast.success("Contacts loaded successfully");
        } catch (error) {
            toast.error("Something went wrong !!");
            console.log("Server Error:", error);
        }
    }


    useEffect(() => {
        getAllContactFromServer();
    }, []);

    //delete task from list from UI
    const deleteTaskFromList = (id)=>{
        setContacts(contacts.filter((c)=> c.contactId!==id));
    }



    return (
        <div className="container mt-3">
            <h1 className='text-center text-primary'>All Contacts</h1>
            <p className='text-center text-muted'>List of contacts as follows:</p>

            <div className="row">
                {contacts.length > 0 ? (
                    contacts.map((item) => (
                        <div className="col-md-4 col-sm-6 col-12 mb-4" key={item.contactId}>
                            <Contact contact={item} ondelete={deleteTaskFromList} />
                        </div>
                    ))
                ) : (
                    <p className='text-center'>No contacts found</p>
                )}
            </div>
        </div>
    )
}

export default AllContact
