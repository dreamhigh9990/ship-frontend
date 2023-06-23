import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import logolight from "../../assets/images/logo-light.png";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="custom-footer bg-dark py-3 position-relative">
                <Container>
                    <div className="footer-wrapper d-flex justify-content-center">
                        <span className="px-4">Manange Part Phone number +19231233</span>
                        <span className="px-4">Address UnitedState NewYork</span>
                    </div>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;