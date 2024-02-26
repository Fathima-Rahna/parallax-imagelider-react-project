import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <BootstrapNavbar className="bg-body-tertiary">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://static.vecteezy.com/system/resources/previews/000/660/302/original/astronaut-space-illustration-logo-symbol-vector.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Above THE EaRtH
                </BootstrapNavbar.Brand>
            </Container>
        </BootstrapNavbar>
    );
}

export default MyNavbar;
