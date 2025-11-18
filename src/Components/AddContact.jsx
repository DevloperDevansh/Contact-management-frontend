import React, { useState } from 'react';
import {
  Form, Button, FormGroup, Input, Label, Card, CardBody, CardHeader
} from 'reactstrap';
import { FaUserPlus } from "react-icons/fa";
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const AddContact = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // validate input values
  const validate = () => {
    let tempErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    // Name validation
    if (!contact.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!contact.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!contact.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(contact.phone)) {
      tempErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // onChange handler
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  const handleContactForm = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix errors before submitting.");
      return;
    }

    try {
      const response = await axios.post(`${base_url}/addContact`, contact);
      
      toast.success("Contact added successfully!");
      console.log("Add contact",response.data);

      // reset after success
      setContact({
        name: "",
        email: "",
        phone: ""
      });

      setErrors({
        name: "",
        email: "",
        phone: ""
      });

    } catch (error) {
      toast.error("Server error! Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "450px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
        <CardHeader className="text-center bg-primary text-white">
          <FaUserPlus size={25} className="me-2" />
          <strong>Add Contact</strong>
        </CardHeader>

        <CardBody>
          <Form onSubmit={handleContactForm}>

            {/* Name */}
            <FormGroup>
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Enter name"
                value={contact.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </FormGroup>

            {/* Email */}
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter email"
                value={contact.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </FormGroup>

            {/* Phone */}
            <FormGroup>
              <Label>Phone</Label>
              <Input
                name="phone"
                type="text"
                placeholder="Enter phone number"
                value={contact.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </FormGroup>

            <div className="text-center">
              <Button color="primary" className="px-4" disabled={!contact.name || !contact.email || !contact.phone}>
                Submit
              </Button>
            </div>

          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddContact;
