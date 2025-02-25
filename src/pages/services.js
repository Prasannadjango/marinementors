import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";
import { Link } from "react-router-dom";
import { Offcanvas, Button } from "react-bootstrap"; // Import Offcanvas and Button
import Footer from "../components/footer";
function Services() {
  const [searchValue, setSearchValue] = useState("");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for Offcanvas visibility
  const [selectedService, setSelectedService] = useState(null); // State to store the service details

  const serviceType = {
    "one-time": "#d0e8dd",
    renewal: "#cef4fc",
    misc: "#f8d7db",
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://mariners-mentor-production.up.railway.app/api/services/"
        );
        setServices(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredServices = services.filter(
      (service) =>
        searchValue.toLowerCase().includes(service.name.toLowerCase()) &&
        (selectedFilter === "all" || service.type === selectedFilter)
    );

    console.log("Filtered services:", filteredServices);
  }, [searchValue, selectedFilter]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Function to handle opening the offcanvas
  const handleShowOffcanvas = (service) => {
    setSelectedService(service); // Set the selected service
    setShowOffcanvas(true); // Show the offcanvas
  };


  const NextService = () => {
    if (selectedService < services.length) {
      setSelectedService(selectedService + 1);
    }
    else {
      console.log("index went out");
    }
  }

  const PrevServices = () => {
    if (selectedService != 0) {
      setSelectedService(selectedService - 1);
    }
    else {
      console.log("index went out");
    }
  }
  // Function to handle closing the offcanvas
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <section className="service-section-banner">
        <div className="services-section-content">
          <h1>Services offered</h1>
          <div className="breadcrumb-link">
            <Link to="/">Home</Link>
            <span></span>
            <p>Services</p>
          </div>
        </div>
      </section>
      <h3 className="py-5 text-center">
        "Navigating your career - resources for every stage of your maritime
        journey"
      </h3>

      <section className="d-flex justify-content-center">
        <div className="container-width mb-5">
          <div className="d-flex justify-content-between services-filters-section">
            <div class="col-xl-3 col-xxl-3 col-md-3 col-lg-3 col-sm-6 col-12">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control mb-4"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for Services ..."
                />
              </div>
            </div>
            <div>
              <div className="d-flex flex-column flex-sm-row gap-2 mb-4">
                <p className="fw-bold">Show Services:</p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="all"
                    type="radio"
                    name="service-filter"
                    value="all"
                    checked={selectedFilter === "all"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    All
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="one-time"
                    type="radio"
                    name="service-filter"
                    value="one-time"
                    checked={selectedFilter === "one-time"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    One-Time
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="renewal"
                    type="radio"
                    name="service-filter"
                    value="renewal"
                    checked={selectedFilter === "renewal"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Renewal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    id="misc"
                    type="radio"
                    name="service-filter"
                    value="misc"
                    checked={selectedFilter === "misc"}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Miscellaneous
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 services3">
            {filteredServices.map((item, index) => (
              <div
                className={`col ${selectedFilter !== "all" && item.type !== selectedFilter
                  ? "d-none"
                  : ""
                  }`}
                key={item.id}
              >
                <div className="services-card">
                  <div className="service-card-header">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        class="bi bi-person-fill-gear"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                      </svg>
                    </div>
                    <div className="ms-3">
                      <span
                        class="badge me-2"
                        style={{
                          backgroundColor:
                            item.type === serviceType[item.type]
                              ? serviceType[item.type]
                              : serviceType[item.type],
                        }}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <h5>{item.name}</h5>
                  <div className="service-card-action-btn">
                    <Button variant="link" onClick={() => handleShowOffcanvas(index)}>
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
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {/* Offcanvas Component */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        className="services-popup"
    
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{services[selectedService]?.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {services[selectedService] ? (
            <div style={{ height: "100%", position: "relative" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5>Service Details</h5>
                <span className={`badge ${services[selectedService].type}-color`}>
                  {services[selectedService].type}
                </span>
              </div>
              <p className="py-3 fs-6">{services[selectedService].description}</p>


              {/* Add any other details from selectedService */}

            </div>

          ) : (
            <p>Loading service details...</p>
          )}
        </Offcanvas.Body>
        <div className="d-flex gap-3 p-3 services-popup-footer">
          <button type="button" onClick={PrevServices} className={"btn btn-primary primary-btn "} disabled={selectedService === 0}>Prev</button>
          <button onClick={NextService} className="btn btn-primary primary-btn" disabled={selectedService == services.length - 1}>Next</button>
        </div>
      </Offcanvas>
    </>
  );
}

export default Services;
