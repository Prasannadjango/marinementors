import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import `useLocation` from react-router-dom
import logo from "../assests/Images/mariner mentors logo 1.png";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State to handle sidebar visibility
  const location = useLocation(); // Get the current location (route)
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (e, targetId) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage
      e.preventDefault(); // Prevent the default behavior (like refreshing the page)
      navigate("/#"+targetId); // Navigate to the home page
      window.scrollTo(0, 0); // Scroll to the top of the page
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
                <a className="menu-option" href="#testimonial" onClick={(e) => handleNavigation(e, "testimonial")}>
                  Testimonial
                </a>
              </li>
              <li>
                <a className="menu-option" href="#faq-section" onClick={(e) => handleNavigation(e, "faq-section")}>
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

          {/* Mobile Sidebar Button */}
          <div className="responsive-menu-container">
            <Button onClick={() => setShowSidebar(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </Button>
          </div>

          {/* Sidebar */}
          <div
            className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}
            style={{
              position: "fixed",
              top: 0,
              left: showSidebar ? "0" : "-250px", // Sidebar visible when true
              width: "250px",
              height: "100%",
              backgroundColor: "#f8f9fa",
              transition: "left 0.3s ease-in-out", // Smooth transition for sliding effect
              zIndex: "999",
              padding: "20px",
              boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            }}
          >
            <button
              className="close-btn"
              onClick={() => setShowSidebar(false)} // Close sidebar
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                color: "#000",
              }}
            >
              &times; {/* Close icon */}
            </button>
            <ul className="sidebar-links" style={{ listStyle: "none", padding: 0 }}>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"
      href="#aboutus"
      onClick={(e) => {
        setShowSidebar(false); // Close sidebar after clicking
        handleNavigation(e, "aboutus");
      }}
    >
      About Us
    </a>
  </li>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"
      href="#services"
      onClick={(e) => {
        setShowSidebar(false);
        handleNavigation(e, "services");
      }}
    >
      Services
    </a>
  </li>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"          
      href="https://marinersmentor.onlinetestpanel.com/#home-slider"
      onClick={() => setShowSidebar(false)}
    >
      Exams
    </a>
  </li>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"
      href="#testimonial"
      onClick={(e) => {
        setShowSidebar(false);
        handleNavigation(e, "testimonial");
      }}
    >
      Testimonial
    </a>
  </li>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"
      href="#faq-section"
      onClick={(e) => {
        setShowSidebar(false);
        handleNavigation(e, "faq-section");
      }}
    >
      News Letter
    </a>
  </li>
  <li style={{ marginBottom: "25px" }}>
    <a
      className="menu-option1"
      href="#"
      onClick={() => setShowSidebar(false)}
    >
      Courses
    </a>
  </li>
</ul>

          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
