import Link from 'next/link';
import React from 'react';
import ActiveLink from '../commons/activeLink';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'urlCurrent': null };
  }
  render() {
    return (
      <header className="header_area">
        <div className="main_menu">
          <Navbar collapseOnSelect expand="lg">
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="/"><img src="/static/img/logo.png" alt="" /></a>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <ActiveLink href="/">Home</ActiveLink>
                  <ActiveLink href="/about">About</ActiveLink>
                  <ActiveLink href="/contact">Contact</ActiveLink>
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav">
              </ul>
              <ul className="nav navbar-nav navbar-right header_social ml-auto">
                <li className="nav-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                <li className="nav-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="nav-item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li className="nav-item"><a href="#"><i className="fa fa-behance" /></a></li>
              </ul>
            </div>
          </Navbar>
        </div>
        <div className="logo_part">
          <div className="container">
            <Link href="/"><a className="logo" href="/"><img src="/static/img/logo.png" alt="" /></a></Link>
          </div>
        </div>
      </header>
      // <div className="main_menu">
      //   <nav className="navbar navbar-expand-lg navbar-light">
      //     <div className="container box_1620">
      //       
      //       
      //       
      //     </div>
      //   </nav>
      // </div>
      //

    );
  }
}

export default Header;