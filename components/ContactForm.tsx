"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Thanks for your message! Connect this form to Formspree or your email service to receive submissions."
    );
    e.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Send a message</h3>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" placeholder="Company name" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder="you@company.com" />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="Optional" />
        </label>
      </div>
      <label>
        <span>Service needed</span>
        <select name="service" defaultValue="">
          <option value="">Select a service</option>
          <option value="detailing">Steel Detailing</option>
          <option value="bim">3D BIM Modeling</option>
          <option value="estimating">Model Estimating</option>
          <option value="leasing">Resource Leasing</option>
          <option value="other">Other / Multiple</option>
        </select>
      </label>
      <label>
        <span>Project details</span>
        <textarea name="message" rows={5} required placeholder="Brief description of your project..." />
      </label>
      <button type="submit" className="btn">
        Send Message
      </button>
      <p className="form-note">
        Form is for demo only. Connect to Formspree or your email host when ready to go live.
      </p>
    </form>
  );
}
