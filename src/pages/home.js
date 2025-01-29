import React, { useState, useEffect } from "react";
import Bannerimg from "../assests/Images/Bannerimage.png";
import Aboutusimg from "../assests/Images/slide1.jpg";
import Testimonialimg from "../assests/Images/testimonial_image.jpg";
import Getintouchimg from "../assests/Images/Getintouch.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import * as Yup from "yup";
import Footer from "../components/footer";

function Home() {
  const [selectedOption, setSelectedOption] = useState("yes");
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  useEffect(() => {
    let timer;
    if (successAlert) {
      timer = setTimeout(() => {
        setSuccessAlert(false);
      }, 5000); // Hide success alert after 5 seconds
    }
    if (errorAlert) {
      timer = setTimeout(() => {
        setErrorAlert(false);
      }, 5000); // Hide error alert after 5 seconds
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [successAlert, errorAlert]);



  const [formData, setFormData] = useState({
    indos_no: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    designation: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
  };

  useEffect(() => {
    const handleAnchorClick = (event) => {
      // Check if the clicked link is an anchor link
      if (event.target.hash) {
        event.preventDefault();
  
        const targetId = event.target.hash;
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          // Scroll to the element with a -50px offset
          window.scrollTo({
            top: targetElement.offsetTop - 130, // Adjust offset here
            behavior: "smooth", // Optional: for smooth scrolling
          });
        }
      }
    };
  
    // Add event listener to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });
  
    // Cleanup event listener on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [window.pathname]);
  

  const validateForm = () => {
    const { name, email, indos_no, phone, dob, message } = formData;
    const errors = {};
    if (dob === "") {
      errors.dob = "Date of birth is required.";
    }
    if (phone === "") {
      errors.phone = "Phone number is required.";
    }
    else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (indos_no === "") {
      errors.indos_no = "Indos Number is required.";
    }
    else if (indos_no.length < 8) {
      errors.indos_no = "Indos Number must be in  8 digit.";
    }
    if (name === "") {
      errors.name = "Name is required.";
    }
    if (email === "") {
      errors.email = "Email is required.";
    }
    if (message === "") {
      errors.message = "Message is required";
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      axios.post("https://mariners-mentor-production.up.railway.app/api/misc/contact-us/", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => { 
          console.log("Data submitted successfully:", response.data); 
          setSuccessAlert(true);
        })
        .catch(
          error => { console.error("Error submitting data:", error); 
            setErrorAlert(true);
          });
    }
    else {
      setErrors(formErrors);
    }
  };

  return (
    <div >
      <div className="d-flex justify-content-between hero-section w-100 mb-5  min-vh-30 min-vh-sm-3">
        <div className="hero-section-container  mt-5 pt-5 pt-sm-4 pt-md-5 pt-lg-5 pt-xl-5">
          <h1 className="hero-text fs-1 fw-normal fs-sm-3 " >
            Anchored in Excellence: Supporting Your Voyage in the Marine
            Industry.
          </h1>
          <a href="#aboutus" className="btn btn-primary primary-btn mt-4">
            Explore more
          </a>
        </div>
        <div className="hero-section-img">
          <img src={Bannerimg} />
        </div>
      </div>
      <div className="container" >
        {/* About us section */}
        <section className="aboutus-section container-width mb-5" id="aboutus">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 about-us-img-main-container">
            <div className="aboutus-img">
              <img src={Aboutusimg} />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="aboutus-section-info">
              <h4 className="fs-1" >About us</h4>
              <h2 className="pt-2 pb-3 section-title fs-4">
                Providing accessible, high-quality Services and Career Guidance
                to seafarers globally
              </h2>
              <p className="about-us-txt lh-sm-base lh-lg-1.5 lh-xl-2">
                Our mission is to empower the next generation of mariners with
                cutting-edge knowledge, practical skills, and industry insights.
                With years of experience in the maritime sector, we've
                established ourselves as trusted partners for seafarer training
                and professional development.
              </p>
            </div>
          </div>
        </section>
        {/* Services section */}
        <section
          className="services-section mb-5 container-width"
          id="services"
        >
          <h1 className="section-title text-success fs-2">Our services</h1>
          <p className="services-header-txt text-start">
            Our commitment extends to supporting career growth, providing expert
            guidance to help seafarers navigate their maritime careers.
          </p>
          <div className="services-card-section mt-5">
            <h2 className="service-section-title">One Time services</h2>
            <div className="row row-cols-xl-3 row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 pb-4 pt-3 services3">
              <div className="col">
                <div className="services-card">
                  <div className="service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>STCW Course booking & Refresh</h5>
                  <div className="service-card-action-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-card">
                  <div className="service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>
                    GP Rating / TME / ETO / B.Sc Nautical Science - Booking
                  </h5>
                  <div className="service-card-action-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-card">
                  <div className="service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>ILO Marine Medical Services</h5>
                  <div className="service-card-action-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/services" className="explore-services-link mt-3">
              Explore all One time services
            </Link>
          </div>
          <div className="services-card-section mt-5">
            <h2 className="service-section-title">Repeated Services</h2>
            <div className="row row-cols-xl-3 row-cols-xxl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 pb-4 pt-3 services3">
              <div className="col">
                <div className="services-card">
                  <div className="repeated-service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>STCW Course booking & Refresh</h5>
                  <div className="service-card-action-repeated-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-card">
                  <div className="repeated-service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>
                    GP Rating / TME / ETO / B.Sc Nautical Science - Booking
                  </h5>
                  <div className="service-card-action-repeated-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="services-card">
                  <div className="repeated-service-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-book-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p>Services</p>
                  </div>
                  <h5>ILO Marine Medical Services</h5>
                  <div className="service-card-action-repeated-btn">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link className="explore-services-link mt-3" to="/services">
              {" "}
              Explore all Repeated services
            </Link>
          </div>
        </section>
        {/* Testimonial section */}
        <section
          className="testimonial-section pt-5 mb-5 container-width"
          id="testimonial"
        >
          <h4 className="fs-2 " >What Students Say About us?</h4>
          <h2 className="section-title w-auto mt-2 mb-2 fs-5">
            "Setting sail with peace of mind - our top priority for every seafarer"
          </h2>
          <button className="btn btn-primary primary-btn" id="enquiryButton">
            Enquire Now
          </button>
          <div className="row row-cols-1 row-cols-md-2 mt-5 gy-4 services3">
          <div className="col">
              <div className="testimonial-card">
                <div className="ratings-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className="py-4">
                  Duis scelerisque at lectus nec egestas. Maecenas quis placerat
                  dolor, vitae consequat mi. Etiam eleifend velit ut cursus
                  porta.
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-img">
                    <img src={Testimonialimg} />
                  </div>
                  <div className="testimonial-info">
                    <h6>John Evans</h6>
                    <p>Engineer L2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-card">
                <div className="ratings-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className="py-4">
                  Duis scelerisque at lectus nec egestas. Maecenas quis placerat
                  dolor, vitae consequat mi. Etiam eleifend velit ut cursus
                  porta.
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-img">
                    <img src={Testimonialimg} />
                  </div>
                  <div className="testimonial-info">
                    <h6>John Evans</h6>
                    <p>Engineer L2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-card">
                <div className="ratings-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className="py-4">
                  Duis scelerisque at lectus nec egestas. Maecenas quis placerat
                  dolor, vitae consequat mi. Etiam eleifend velit ut cursus
                  porta.
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-img">
                    <img src={Testimonialimg} />
                  </div>
                  <div className="testimonial-info">
                    <h6>John Evans</h6>
                    <p>Engineer L2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="testimonial-card">
                <div className="ratings-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className="py-4">
                  Duis scelerisque at lectus nec egestas. Maecenas quis placerat
                  dolor, vitae consequat mi. Etiam eleifend velit ut cursus
                  porta.
                </p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-img">
                    <img src={Testimonialimg} />
                  </div>
                  <div className="testimonial-info">
                    <h6>John Evans</h6>
                    <p>Engineer L2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq-section" className="faq-section container-width pt-5 mb-5">
          <div className="row row-cols-1 row-cols-md-2 ">
            <div className="col faq-txt-section">
              <h4 className="fs-2">What Students Frequently ask?</h4>
              <h2 className="section-title pt-2 mb-3 fs-5">
                Let's See What Students Asked about us Recently
              </h2>
              <p className="text-start mb-4">
                Duis scelerisque at lectus nec egestas. Maecenas quis placerat
                dolor, vitae consequat mi. Etiam eleifend velit ut cursus porta.
                Maecenas ut ipsum varius, placerat ex eget, vehicula quam. Nam
                mollis molestie blandit. Donec odio eros, accumsan sed rhoncus
                porttitor,
              </p>
            </div>
            <div className="col">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What kind of coaching is available to help advance my
                      career?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Duis scelerisque at lectus nec egestas. Maecenas quis
                        placerat dolor, vitae consequat mi. Etiam eleifend velit
                        ut cursus porta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is the typical career path for someone starting as a
                      seafarer?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Duis scelerisque at lectus nec egestas. Maecenas quis
                        placerat dolor, vitae consequat mi. Etiam eleifend velit
                        ut cursus porta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What training courses does the company offer for career
                      development?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Duis scelerisque at lectus nec egestas. Maecenas quis
                        placerat dolor, vitae consequat mi. Etiam eleifend velit
                        ut cursus porta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How can I keep updated about my Coursers Expiration?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Duis scelerisque at lectus nec egestas. Maecenas quis
                        placerat dolor, vitae consequat mi. Etiam eleifend velit
                        ut cursus porta.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can You Provide Remote Support for Consulation ?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Duis scelerisque at lectus nec egestas. Maecenas quis
                        placerat dolor, vitae consequat mi. Etiam eleifend velit
                        ut cursus porta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="getintouch-section container-width mb-5"
          id="getintouchform"
        >
        {successAlert && (
         <Alert  variant="success" className="form-error-alert">
         Successfully Submitted the Form , We will reach you soon
        </Alert>
        )}
        {errorAlert && (
         <Alert  variant="danger">
         Error in Submitting form , Please try again
        </Alert>
        )}
          <div className="row row-cols-xxl-2 row-cols-xl-1 row-cols-lg-1 row-cols-md-1  row-cols-sm-1">
            <div className="col getintouch-img-main-container">
              <div className="getintouch-img">
                <img src={Getintouchimg} />
              </div>
            </div>
            <div className="col">
              <div className="form-content">
                <h1 className="section-title mb-4">Let's Get in Touch</h1>
                <p>
                  We are glad to stay connected with you so that you would
                  receive Frequent updates about us and our services
                </p>
              </div>

              <form className="mt-4" onSubmit={handleSubmit}>
  <div className="row g-3">
    <div className="col-12 col-md-6">
      <label className="form-label">Do you have INDOS Number?</label>
      <div className="d-flex align-items-center gap-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="yesRadio"
            name="selection"
            value="yes"
            checked={selectedOption === "yes"}
          />
          <label className="form-check-label" htmlFor="yesRadio">Yes</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="noRadio"
            name="selection"
            value="no"
            checked={selectedOption === "no"}
          />
          <label className="form-check-label" htmlFor="noRadio">No</label>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">
        INDOS Number<span className="error ms-1">*</span>
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter INDOS Number"
        id="customField"
        name="indos_no"
        value={formData.indos_no}
        onChange={handleChange}
        disabled={selectedOption !== "yes"}
        maxLength={8}
      />
      {errors.indos_no && <p className="error">{errors.indos_no}</p>}
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">
        Date of Birth<span className="error ms-1">*</span>
      </label>
      <input
        className="form-control"
        type="date"
        name="date_of_birth"
        onChange={handleChange}
        value={formData.date_of_birth}
        placeholder="Choose Date of Birth"
      />
      {errors.dob && <p className="error">{errors.dob}</p>}
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">
        First Name<span className="error ms-1">*</span>
      </label>
      <input
        className="form-control"
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Enter First Name"
      />
      {errors.name && <p className="error">{errors.name}</p>}
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">Last Name</label>
      <input
        className="form-control"
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Enter Last Name"
      />
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">
        E-mail Address<span className="error ms-1">*</span>
      </label>
      <input
        className="form-control"
        type="email"
        name="email"
        placeholder="Enter E-mail Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">
        Phone Number<span className="error ms-1">*</span>
      </label>
      <input
        className="form-control"
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">Current Designation</label>
      <input
        className="form-control"
        type="text"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        placeholder="Enter Current Designation"
      />
    </div>

    <div className="col-12 col-md-6">
      <label className="form-label">Location (City, Country)</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
    </div>

    <div className="col-12">
      <label className="form-label">Message<span className="error ms-1">*</span></label>
      <textarea
        className="form-control"
        placeholder="Write a message"
        rows="4"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="error">{errors.message}</p>}
    </div>

    <div className="col-12 text-center">
      <button className="btn btn-primary primary-btn mt-4" type="submit">
        Submit
      </button>
    </div>
  </div>
</form>


            </div>
          </div>
        </section>
      </div>

      <Footer/>
    </div>
  );
}
export default Home;
