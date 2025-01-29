import React from 'react';

const Footer = () => {
  return (
    
    <div className="">
        
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: "#ECEFF1" }}
      >
        {/* Social Media Section */}
       

        {/* Footer Links */}
        <section style={{padding:"20px 10px"}} className="pb-5">
          <div className="container text-start mt-5">
            <div className="row ">
              {/* Company Info Section */}
              <div className="col-12 col-md-12 col-lg-4 col-xl-6 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Mariners Mentor</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                Our mission is to empower the next generation of mariners with cutting-edge knowledge, practical skills, and industry insights. With years of experience in the maritime sector, we've established ourselves as trusted partners for seafarer training and professional development.

                </p>
              </div>

              {/* Quick Links Section */}
              <div className="col-6 col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold ">Quick Links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                {/* Replace with your website's quick links */}
                <p className='quick-links'>
                  <a href="#" >Home</a>
                </p>
                <p  className='quick-links'>
                  <a href="#aboutus">About Us</a>
                </p>
                <p className='quick-links'>
                  <a href="https://marinersmentor.onlinetestpanel.com/#home-slider" >Exams</a>
                </p>
                <p className='quick-links'>
                  <a href="#services" >Services</a>
                </p>
                <p className='quick-links'>
                  <a href="#testimonial" >Testimonial</a>
                </p>
              </div>

              {/* Social Media Section (replacing Contact Info) */}
              <div className="col-6 col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Follow Us</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                {/* Social Media Icons with Bootstrap Icons */}
                <div className="d-flex flex-wrap justify-content-flex-start gap-2 mb-4">
                <a href="https://facebook.com" className="me-4" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
  <i className="bi bi-facebook" style={{ fontSize: "1.5rem", color: "#343a40" }} onMouseEnter={(e) => e.target.style.color = "#198754"} onMouseLeave={(e) => e.target.style.color = "#343a40"}></i>
</a>
<a href="https://twitter.com" className="me-4" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
  <i className="bi bi-twitter" style={{ fontSize: "1.5rem", color: "#343a40" }} onMouseEnter={(e) => e.target.style.color = "#198754"} onMouseLeave={(e) => e.target.style.color = "#343a40"}></i>
</a>
<a href="https://instagram.com" className="me-4" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
  <i className="bi bi-instagram" style={{ fontSize: "1.5rem", color: "#343a40" }} onMouseEnter={(e) => e.target.style.color = "#198754"} onMouseLeave={(e) => e.target.style.color = "#343a40"}></i>
</a>
<a href="https://linkedin.com" className="me-4" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
  <i className="bi bi-linkedin" style={{ fontSize: "1.5rem", color: "#343a40" }} onMouseEnter={(e) => e.target.style.color = "#198754"} onMouseLeave={(e) => e.target.style.color = "#343a40"}></i>
</a>
<a href="https://wa.me/yourphonenumber" className="me-4" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.3s ease' }}>
  <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem", color: "#343a40" }} onMouseEnter={(e) => e.target.style.color = "#198754"} onMouseLeave={(e) => e.target.style.color = "#343a40"}></i>
</a>


                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Copyright Section */}
        <div
          className="text-center  p-3"
          style={{ backgroundColor: "#198754",color:"white",fontSize:"13px" }}
        >
        © 2025 Copyright : {'  '}
          <a className="text-white" href="https://mdbootstrap.com/">
          Mariners Mentor
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
