import { data } from "../data/data";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Layout from "../components/Layout";
// import { useState } from "react";
// import { db } from "../firebase/Firebase";
/*
  File name: Contact.jsx
  Student Name: Festus Asiyanbi
  Student ID: 301270589
*/
const Contact = () => {

  return (
    <Layout>
      <section id="contact" className="contact center-content w-full">
        <div className="flex items-start justify-start space-x-20">
          <form className="center-content flex-col space-y-7" method="post">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                required
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button>Send Message</button>
            </div>
          </form>
          <div className="center-content flex-col space-y-10">
            {data.contact.map((contact, index) => (
              <div
                key={index}
                className="center-content w-full flex-col space-y-2 bg-[#002D62] px-2 py-4 rounded-[5px]"
              >
                <span>
                  {contact.type === "Email" ? (
                    <FaEnvelope />
                  ) : contact.type === "LinkedIn" ? (
                    <FaLinkedin />
                  ) : (
                    <FaTwitter />
                  )}
                </span>
                <span>{contact.type}</span>
                <span>{contact.username}</span>
                <a
                  href={
                    contact.link === "festusasiyanbi80@gmail.com"
                      ? `mailto:${contact.link}`
                      : `${contact.link}`
                  }
                  className="text-regular_brown"
                >
                  Send Message
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
