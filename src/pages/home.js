import React, { useState, useEffect } from "react";
import Bannerimg from "../assests/Images/Bannerimage.png";
import Aboutusimg from "../assests/Images/aboutus.png";
import Testimonialimg from "../assests/Images/testimonial_image.jpg";
import Getintouchimg from "../assests/Images/Getintouch.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Home() {
  const [selectedOption, setSelectedOption] = useState("yes");
  const [showIndosErrorMessage, setShowIndosErrorMessage] = useState(true);

  useEffect(() => {
    const inputField = document.querySelector("#customField");
    if (selectedOption === "yes") {
      inputField.removeAttribute("disabled");
    } else {
      inputField.setAttribute("disabled", "disabled");
    }
  }, [selectedOption]);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    if(selectedOption === "no"){
      setShowIndosErrorMessage(showIndosErrorMessage);
    }
    else{
      setShowIndosErrorMessage(!showIndosErrorMessage);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between hero-section mb-5">
        <div className="hero-section-container">
          <h1 className="hero-text">
            Anchored in Excellence: Supporting Your Voyage in the Marine
            Industry.
          </h1>
          <button className="btn btn-primary primary-btn mt-4">
            Explore more
          </button>
        </div>
        <div className="hero-section-img">
          <img src={Bannerimg} />
        </div>
      </div>
      <div className="sections-container">
        {/* About us section */}
        <section className="aboutus-section container-width mb-5" id="aboutus">
          <div className="col-6">
            <div className="aboutus-img">
              <img src={Aboutusimg} />
            </div>
          </div>
          <div className="col-6">
            <div className="aboutus-section-info">
              <h4>Aboutus</h4>
              <h2 className="pt-2 pb-3 section-title">
                Providing accessible, high-quality Services and Career Guidance
                to seafarers globally
              </h2>
              <p className="about-us-txt">
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
          <h1 className="section-title">Our services</h1>
          <p className="services-header-txt text-start">
            Our commitment extends to supporting career growth, providing expert
            guidance to help seafarers navigate their maritime careers.
          </p>
          <div className="services-card-section mt-4">
            <h2 className="service-section-title">One Time services</h2>
            <div className="row row-cols-3 pb-4 pt-3">
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
          <div className="services-card-section mt-4">
            <h2 className="service-section-title">Repeated Services</h2>
            <div className="row row-cols-3 pb-4 pt-3">
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
          className="testimonial-section mb-5 container-width"
          id="testimonial"
        >
          <h4>What Students Say About us?</h4>
          <h2 className="section-title pt-2 mb-4">
            "Setting sail with peace of mind - our top priority for every
            seafarer"
          </h2>
          <button className="btn btn-primary primary-btn" id="enquiryButton">
            Enquire Now
          </button>
          <div className="row row-cols-2 mt-5 gy-4">
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

        <section className="faq-section container-width mb-5">
          <div className="row row-cols-2">
            <div className="col faq-txt-section">
              <h4>What Students Frequently ask?</h4>
              <h2 className="section-title pt-2 mb-4">
                Let's See What Students Asked about us Recently
              </h2>
              <p>
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
          <div className="row row-cols-2">
            <div className="col">
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
              <Formik
                initialValues={{
                  indosNumber: "",
                  dob: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  indosNumber: selectedOption === "yes"
                    ? Yup.number()
                      .integer()
                      .positive()
                      .max(99999999, "Must be 8 digits")
                      .required("Required")
                    : Yup.number().notRequired(),
                  dob: Yup.number().required("Required"),
                  phoneNumber: Yup.number()
                    .max(8, "Must be 10 numbers")
                    .required("Required"),
                  firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                  lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  message: Yup.string().required("Required"),
                })}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, handleSubmit, values, errors, touched }) => (
                  <Form className="mt-4">
                    <div className="row row-cols-2 g-3">
                      <div className="col">
                        <label className="form-label">
                          Do you have INDOS Number?
                        </label>
                        <div className="d-flex align-items-center gap-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="yesRadio"
                              name="selection"
                              value="yes"
                              checked={selectedOption === "yes"}
                              onChange={handleRadioChange}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="noRadio"
                              name="selection"
                              value="no"
                              checked={selectedOption === "no"}
                              onChange={handleRadioChange}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col position-relative">
                        <label className="form-label">INDOS Number</label>
                        <Field
                          className="form-control"
                          type="number"
                          placeholder="Enter INDOS Number"
                          id="customField"
                          name="indosNumber"
                          disabled={selectedOption !== "yes"}

                        />
                        {showIndosErrorMessage &&  <ErrorMessage name="indosNumber" component="div" className="form-error-message" />} 
                        </div>
                      <div className="col position-relative">
                        <label className="form-label">Date of Birth</label>
                        <Field
                          className="form-control"
                          type="date"
                          name="dob"
                          placeholder="Choose Date"
                        />
                      </div>
                      <div className="col position-relative">
                        <label className="form-label">First Name</label>
                        <Field
                          className="form-control"
                          type="text"
                          name="firstName"
                          placeholder="Enter First Name"
                        />
                        <ErrorMessage name="firstName" component="div" className="form-error-message" />
                      </div>
                      <div className="col position-relative">
                        <label className="form-label">Last Name</label>
                        <Field
                          className="form-control"
                          type="text"
                          name="lastName"
                          placeholder="Enter Last Name"
                        />
                        <ErrorMessage name="lastName" component="div" className="form-error-message" />
                      </div>
                      <div className="col position-relative">
                        <label className="form-label">E-mail Address</label>
                        <Field
                          className="form-control"
                          type="mail"
                          name="email"
                          placeholder="Enter E-mail Address"
                        />
                        <ErrorMessage name="email" component="div" className="form-error-message" />
                      </div>
                      <div className="col position-relative">
                        <label className="form-label">Phone Number</label>
                        <Field
                          className="form-control"
                          type="number"
                          name="phoneNumber"
                          placeholder="Enter Phone Number"
                        />
                        <ErrorMessage name="phoneNumber" component="div" className="form-error-message" />
                      </div>
                      <div className="col">
                        <label className="form-label">
                          Current Designation
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Current Designation"
                        />
                      </div>
                      <div className="col">
                        <label className="form-label">
                          Location (City,Country)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Location"
                        />
                      </div>
                      <div className="col-12 position-relative">
                        <label className="form-label">Message</label>
                        <Field
                          className="form-control"
                          placeholder="Write a message"
                          rows="4"
                          name="message"
                        />
                        {errors.message && touched.message && (
                          <ErrorMessage name="message" component="div" className="form-error-message" />
                        )}
                      </div>
                      <div className="submit-btn">
                        <button
                          className="btn btn-primary primary-btn mt-4"
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => {
                            // Check if all required fields are valid
                            const isValid = Object.keys(values).every(field =>
                              !errors?.[field] && touched?.[field]
                            );

                            if (isValid) {
                              handleSubmit();
                            }
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
