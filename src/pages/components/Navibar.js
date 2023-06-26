import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';
import './Navibar.css'


function Navibar() {
  return (
    <div className='container' style={{paddingBottom: '30px'}}>
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor : '#dceff0'}}>
            <Container>
                <Navbar.Brand>
                <Link className='nav-link' to={"/"} > 
                    <span style={{ color: '#541db9', fontFamily: 'Times New Roman', fontSize: '30px'}}>Meeting Organizer</span>
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{ color: '#ccc'}}>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> 
                    <Link className='nav_link' to={"/"} > Home </Link>
                    <Link className='nav_link' to={"/components/ViewMeeting"}> View Meetings </Link>
                    <Link className='nav_link' to={"/components/Manage"}> Manage Meetings </Link>
                    {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navibar