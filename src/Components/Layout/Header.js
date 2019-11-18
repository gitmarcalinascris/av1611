import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Collapse from 'reactstrap/lib/Collapse';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import "./Layout.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.menuSelect = this.menuSelect.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            activeIndex: 0,
            isOpen: false
        }

    }
    menuSelect(index) {
        this.setState({
            activeIndex: index
        });
    }

    toggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



    render() {


        return (
            <React.Fragment>

                    <Navbar id="Header" className="border-bottom" expand="md">
                        <div><b> Pasig Bible Believers Baptist Church and Missions (P3BCM)</b></div>
                        <NavbarToggler onClick={i => this.toggleMenu()} className="mt-2" />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/Home">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/SOF">Statement of Faith</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/Event">Events</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
            </React.Fragment>
        )
    };
}

export default Header;