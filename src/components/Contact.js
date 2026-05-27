import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_x55n882",
      "template_m02h6w9",
      form.current,
      "gGt6vn0wEzvT9IC4m"
    )
    .then(
      () => {
        toast.success("Message sent successfully!");        
        form.current.reset();
      },
      () => {
        toast.error("Failed to send message. Try again!");
      }
    );
};
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <h2 style={{ textAlign: "center", color: "#fff", marginBottom: "10px" }}>
          Contact Me
        </h2>
        <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "50px" }}>
          Feel free to reach out 👋
        </p>

        <div className="contact-grid">

          {/* LEFT - FORM */}
          <div className="contact-form">
            <h3>Send Message</h3>

            <form ref={form} onSubmit={sendEmail}>

              {/* Name */}
              <div className="form-group">
                <label className="form-label">Name</label>
                <div className="form-input">
                  <FaUser className="form-icon" />
<input 
  type="text" 
  name="from_name" 
  placeholder="Your Name" 
  required 
/>                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="form-input">
                  <FaEnvelope className="form-icon" />
                  <input 
                    type="email" 
                    name="from_email" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <div className="form-input">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn">
  Send Message
</button>

            </form>
          </div>

          {/* RIGHT - INFO */}
          <div className="contact-info">


            <div className="contact-info">
              <h3>Get In Touch</h3>

              <div className="info-items">

                <div className="info-item-contact">
                  <div className="info-icon-contact">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <p>maitrip306@email.com</p>
                  </div>
                </div>

                <div className="info-item-contact">
                  <div className="info-icon-contact">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+91 6359186508</p>
                  </div>
                </div>

                <div className="info-item-contact">
                  <div className="info-icon-contact">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Navsari, Gujarat, India</p>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="social-buttons">

                  <a href="https://www.linkedin.com/in/patel-maitri-16875a256" className="social-button" target="_blank">
                    <FaLinkedin />
                  </a>

                  <a href="https://github.com/pMaitri01" className="social-button" target="_blank">
                    <FaGithub />
                  </a>

                </div>
              </div>

            </div>

            {/* AVAILABILITY */}
            <div className="availability">
              <h4>Available For</h4>
              <p>I am available for freelance or full-time opportunities.</p>
              <ul>
                <li>Web Development</li>
                <li>Full-time Jobs</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <ToastContainer 
  position="top-right"
  autoClose={3000}
  theme="dark"
/>
    </section>
  );
}