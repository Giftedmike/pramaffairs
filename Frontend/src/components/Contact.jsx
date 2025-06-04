import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container text-center">
        <h3 className="text-center py-3">Contact Us</h3>
        <h5>Got any question? Here to help</h5>
        <hr />
        <div className="row">
          <div className="col-12 col-md-6">
            <div class="card">
              <div class="card-header bg-dark text-white">
                <a className="nav-link" href="#">
                  <i className="fas fa-envelope fs-1"></i>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">E-mail</h5>
                <p>
                  Instant Reply:{" "}
                  <a
                    href="mailto:pramaffairs@gmail.com"
                    className="text-decoration-none fw-bold"
                  >
                    pramaffairs@gmail.com
                  </a>{" "}
                </p>
                <p class="card-text">
                  Get in Touch:{" "}
                  <a
                    href="mailto:pramaffairs@gmail.com"
                    className="text-decoration-none fw-bold"
                  >
                    Send us an Email
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="card">
              <div class="card-header bg-dark text-white">
                <a className="nav-link" href="#">
                  <i className="fas fa-phone fs-1"></i>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Mobile Phone</h5>
                <p>
                Instant Reply:{" "}
                <a href="https://wa.me/2348065653265" target="_blank" className="text-decoration-none fw-bold">
                  Chat on WhatsApp
                </a></p>

                <p>Call Us: +234 8065653265</p>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
