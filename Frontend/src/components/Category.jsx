import React from "react";

const Category = () => {
  return (
    <div className="mt-4" style={{ backgroundColor: "#245FAB" }}>
      <div className="container mt-3 text-center justify-content-center align-item-center">
        <h3 className="text-center py-3">About Products</h3> <hr />
        <div className="row ">
          <div className="col-12 col-sm-4 mb-4 ps-2">
            <div className="card" style={{ width: "20rem" }}>
              <h5 className="card-title bg-primary text-light py-3">BASIC</h5>

              <div className="card-body">
                <p className="card-text text-center">
                  Launch Your Online Presence with Our Basic Website Package Get
                  a clean, professional website with a Home, About, Services,
                  Contact, and a page of your choice. Your site will be
                  responsive on all devices, connected to your social media, and
                  include a contact form with email integration – everything you
                  need to connect with clients.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <div className="card" style={{ width: "20rem" }}>
              <h5 className="card-title bg-warning py-3">STANDARD</h5>

              <div className="card-body">
                <p className="card-text text-center">
                  Build a Modern, Functional Website – Tailored for Your Needs
                  We create stunning websites packed with essential features
                  like appointment booking, WhatsApp chat integration, FAQs, and
                  photo galleries – everything you need to connect, convert, and
                  grow. 🚀 Ready to Launch? Get started today with a
                  feature-rich website that works for you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <div className="card" style={{ width: "20rem" }}>
              <h5 className="card-title bg-success text-light py-3">PRO</h5>

              <div className="card-body">
                <p className="card-text text-center">
                  {" "}
                  Take Your Website to the Next Level with Pro Features Go
                  beyond the basics! Our Pro Package includes powerful tools
                  like a secure Payment Gateway, a full Admin Management Panel,
                  User Registration, and Login Functionality — ideal for growing
                  schools, hospitals, and businesses ready to scale online. 🚀
                  Ready to Launch? Get started today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
