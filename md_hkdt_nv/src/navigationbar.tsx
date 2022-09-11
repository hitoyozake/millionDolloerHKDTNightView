import {Navbar, NavbarBrand} from "react-bootstrap"
import {Container} from "react-bootstrap";
import React from "react";
import {Nav} from "react-bootstrap";


export const NavigationBar = ()=>{

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Nav className="$me-auto">
                        <Nav.Link href="#home">
                        Home
                        </Nav.Link>
                        <Nav.Link href="/#about">
                            About Hakodate
                        </Nav.Link>
                        <Nav.Link href="/#Link">
                            Link
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}