import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// IMPORTED FILES
import logo from "../../assests/Shipper-Logo.png";
import userLogo from "../../assests/users.png";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        <img src={logo} className="shipper-logo" alt="shipper-logo" />
      </Link>

      <img src={userLogo} className="user-logo" alt="user-logo" />
      <Navbar collapseOnSelect expand="lg" className="sidebar">
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-collapsed"
          >
            <Nav className="ml-auto sidebar-new">
              <div>
                <NavLink
                  to="/"
                  exact={true}
                  className="navlink"
                  activeClassName="navLinkActive"
                >
                  <i className="fas fa-home"></i>
                  <b>Beranda</b>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/personnel-list"
                  className="navlink"
                  activeClassName="navLinkActive"
                >
                  <i className="fas fa-user"></i>
                  <b>Driver Management</b>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/daily-attendance"
                  className="navlink"
                  activeClassName="navLinkActive"
                >
                  <i className="far fa-calendar-alt"></i>
                  <b>Pick Up</b>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Sidebar;
