import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';


export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return(
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">IoT Grower</NavbarBrand>
          <Button color="success">Login</Button>{' '}
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">My Garden</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/SweetmanTech/iot-grower" target="_blank">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
