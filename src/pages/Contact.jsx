import React, { useState } from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("");

  return (
    <div className="contact-container">
      <h1>CONTACT</h1>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <div className="form-group">
          <label>Subject *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="subject"
                value="Date Coaching"
                checked={subject === "Date Coaching"}
                onChange={(e) => setSubject(e.target.value)}
              />
              DATE COACHING
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Matchmaking"
                checked={subject === "Matchmaking"}
                onChange={(e) => setSubject(e.target.value)}
              />
              MATCHMAKING
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="General Question"
                checked={subject === "General Question"}
                onChange={(e) => setSubject(e.target.value)}
              />
              GENERAL QUESTION
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Business Partnership"
                checked={subject === "Business Partnership"}
                onChange={(e) => setSubject(e.target.value)}
              />
              BUSINESS PARTNERSHIP
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Media Inquiry"
                checked={subject === "Media Inquiry"}
                onChange={(e) => setSubject(e.target.value)}
              />
              MEDIA INQUIRY
            </label>
            <label>
              <input
                type="radio"
                name="subject"
                value="Other"
                checked={subject === "Other"}
                onChange={(e) => setSubject(e.target.value)}
              />
              OTHER
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
