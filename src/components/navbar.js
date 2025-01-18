import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assests/Images/mariner mentors logo 1.png";
import { Link } from "react-router-dom";
import { Button, Offcanvas } from 'react-bootstrap';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? "header-scrolled" : "header";
  const menuOptionsClass = isScrolled
    ? "menu-options-scrolled list-unstyled d-flex align-items-center"
    : "menu-options list-unstyled";

  return (
    <div>
      <header className={headerClass}>
        <div className="header-container">
          <Link to="/">
            <div className="logo-container">
              <img src={logo} />
            </div>
          </Link>
          <div className="menu-opitions-container">
            <ul className={menuOptionsClass}>
              <li>
                <a href="#aboutus"> About-us </a>
              </li>
              <li>
                <a href="#services"> Services </a>
              </li>
              <li>
                <a href="#testimonial"> Testimonial </a>
              </li>
              <li>
                <a href="#"> News Letter </a>
              </li>
              <li>
                <a href="#"> Courses </a>
              </li>
            </ul>
          </div>
          <div className="action-container">
            <button className="btn btn-primary primary-btn" id="enquiryButton">
              Enqiure Now
            </button>
          </div>
          <div className="responsive-menu-container">
            <Button onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </header>


    </div>
  );
}
export default Navbar;
