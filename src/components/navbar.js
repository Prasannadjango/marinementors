import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import `useLocation` from react-router-dom
import logo from "../assests/Images/mariner mentors logo 1.png";
import { Button, Offcanvas } from 'react-bootstrap';
import {useNavigate}  from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation(); // Get the current location (route)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (e, targetId) => {
  
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage
      e.preventDefault(); // Prevent the default behavior (like refreshing the page)
      navigate("/#"+targetId); // Navigate to the home page
      
      window.scrollTo(0, 0); // Scroll to the top of the page

      // Once we're on the homepage, scroll to the target section
      // window.setTimeout(() => {
      //   const targetElement = document.getElementById(targetId);
      //   if (targetElement) {
      //     targetElement.scrollIntoView({ behavior: "smooth" });
      //   }
      // }, 0); // Timeout to ensure navigation happens before scrolling
    } else {
      // If already on the homepage, scroll to the section directly
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
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
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <div className="menu-opitions-container">
            <ul className={menuOptionsClass}>
              <li>
                <a
                  className="menu-option"
                  href="#aboutus"
                  onClick={(e) => handleNavigation(e, "aboutus")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="menu-option"
                  href="#services"
                  onClick={(e) => handleNavigation(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="menu-option"
                  href="https://marinersmentor.onlinetestpanel.com/#home-slider"
                >
                  Exams
                </a>
              </li>
              <li>
                <a className="menu-option" href="#testimonial"    onClick={(e) => handleNavigation(e, "testimonial")} >
                  Testimonial
                </a>
              </li>
              <li>
                <a className="menu-option" href="#faq-section"  onClick={(e) => handleNavigation(e, "faq-section")}>
                  News Letter
                </a>
              </li>
              <li>
                <a className="menu-option" href="#">
                  Courses
                </a>
              </li>
            </ul>
          </div>
          <div className="action-container">
            <a href="#getintouchform" className="btn btn-primary primary-btn" id="enquiryButton">
              Enquire Now
            </a>
          </div>
          <div className="responsive-menu-container">
            <Button onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
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
