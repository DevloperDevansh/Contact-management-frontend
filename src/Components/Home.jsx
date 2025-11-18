import React from "react";
import { Container, Button, Card, CardBody } from "reactstrap";
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                className="shadow-lg"
                style={{
                    width: "500px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #6dd5fa, #2980b9)",
                    color: "white",
                    padding: "20px",
                }}
            >
                <CardBody className="text-center">

                    {/* Icon */}
                    <FaAddressBook size={60} className="mb-3" />

                    {/* Title */}
                    <h2 style={{ fontWeight: "bold" }}>
                        Welcome to Contact Manager App
                    </h2>

                    {/* Subtitle */}
                    <p style={{ fontSize: "17px", marginTop: "10px" }}>
                        Manage your contacts efficiently with a simple and modern interface.
                    </p>

                    {/* Button */}
                    <Link to="/add-contact">
                        <Button
                            color="light"
                            className="mt-3 px-4"
                            style={{
                                fontWeight: "bold",
                                borderRadius: "10px",
                            }}
                        >
                            + Add New Contact
                        </Button>

                    </Link>

                </CardBody>
            </Card>
        </div>
    );
};

export default Home;
