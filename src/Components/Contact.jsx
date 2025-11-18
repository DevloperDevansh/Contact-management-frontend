import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Contact = ({ contact ,ondelete}) => {
  
  //create function to delete contact 
  const deleteContact = async (id)=>{
    try {
      const response = await axios.delete(`${base_url}/deleteContact/${id}`);
      toast.success("Deleted Contact Successfully");
      ondelete(id);
      console.log("Deleted Contact Successfully",response.data);
    } catch (error) {
      toast.error("server error!!");
      console.log("Something went wrong!!",error);
    }
  }

  //I want to remove contact from Ui when it deleted from the db 



  return (
    <div>
      <Card
        className="text-center my-3 shadow-lg"
        style={{ borderRadius: "15px", width: "100%" }}
      >
        <CardBody>
          {/* Name with icon */}
          <CardTitle
            tag="h4"
            className="fw-bold text-primary d-flex justify-content-center align-items-center gap-2"
          >
            <FaUser size={24} />
            {contact.name}
          </CardTitle>

          {/* Email & Phone with icons */}
          <CardText className="mt-3">
            <p className="d-flex justify-content-center gap-2">
              <FaEnvelope className="text-danger" />
              <strong>{contact.email}</strong>
            </p>

            <p className="d-flex justify-content-center gap-2">
              <FaPhone className="text-success" />
              <strong>{contact.phone}</strong>
            </p>
          </CardText>

          {/* Buttons */}
          <Container className="text-center mt-3">
            <Button color="warning" className="mx-2 px-4">
              Update
            </Button>

            <Button onClick={() => deleteContact(contact.contactId)} color="danger" className="mx-2 px-4">
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;
