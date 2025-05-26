import React from "react";

const Category = () => {
  return (
    <div className="mt-4" style={{ backgroundColor: "#245FAB" }}>
      <div className="container bg-light">
        <h3 className="text-center py-3">Product Design Categories</h3> <hr />
        <div className="row mb-3 mt-3">
          <div className="col-md-4">
            <img
              src="cat1.png"
              alt=""
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="col-md-8">
            <h2>Features</h2>
            <ul>
              <li>
                5 Pages – Home, About, Services, Contact, and Whatever You Want: 5 pages tailored to your business needs.
              </li>
              <li>Responsive on All Devices: Your site will look perfect and function smoothly on phones, tablets, and desktops.</li>
              <li>Social Media Integration: Seamlessly link your website to your social media profiles to grow your online presence.</li>
              <li>Contact Form: Let visitors easily reach out to you through a built-in contact form.</li>
              <li>Email Integration: Automatically receive messages and inquiries directly in your email inbox.</li>
            </ul>
            <h2>About It</h2>
            <p>
              Launch Your Online Presence with Our Basic Website Package Get a
              clean, professional website with 5 customizable pages – including
              Home, About, Services, Contact, and a page of your choice. Your
              site will be responsive on all devices, connected to your social
              media, and include a contact form with email integration –
              everything you need to look legit online and connect with clients.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h2>Features</h2>
            <ul>
              <li>All Basic Site features</li>
              <li>
                An Appointment Booking System to manage your schedule
                efficiently
              </li>
              <li>A FAQs Section to answer frequently asked questions</li>
              <li>WhatsApp Chatting to connect with clients in real-time</li>
              <li>A Photo Gallery to showcase your work and services</li>
            </ul>
            <h2>About It</h2>
            <p>
              Build a Modern, Functional Website – Tailored for Your Needs We
              create stunning websites packed with essential features like
              appointment booking, WhatsApp chat integration, FAQs, and photo
              galleries – everything you need to connect, convert, and grow. 🚀
              Ready to Launch? Get started today with a feature-rich website
              that works for you.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.swarmdigital.io/wp-content/uploads/2023/06/1-4.png"
              alt=""
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/811/388/non_2x/illustration-of-online-payment-concept-with-people-making-payment-transactions-modern-flat-web-landing-page-template-design-for-website-and-mobile-website-flat-cartoon-style-vector.jpg"
              alt=""
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="col-md-8">
            <h2>Features</h2>
            <ul>
              <li>All Standard Features</li>
              <li>Payment Gateway Integration: Securely accept online payments from customers using trusted payment platforms.</li>
              <li>Admin Management: Easily manage website content, users, and activities from a centralized dashboard.</li>
              <li>Registration Page: Allow new users to create accounts and securely join your platform.</li>
              <li>Login Page: Provide returning users with a quick and secure way to access their accounts.</li>
            </ul>
            <h2>About It</h2>
            <p>
              Take Your Website to the Next Level with Pro Features Go beyond
              the basics! Our Pro Package includes powerful tools like a secure
              Payment Gateway, a full Admin Management Panel, User Registration,
              and Login Functionality — ideal for growing schools, hospitals,
              and businesses ready to scale online. 🚀 Ready to Launch? Get
              started today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
