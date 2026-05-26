import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
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

            <form>

              {/* Name */}
              <div className="form-group">
                <label className="form-label">Name</label>
                <div className="form-input">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="Your Name" />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="form-input">
                  <FaEnvelope className="form-icon" />
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message</label>
                <div className="form-input">
                  <textarea placeholder="Your Message"></textarea>
                </div>
              </div>

              <button className="submit-btn">Send Message</button>

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
                    <p>your@email.com</p>
                  </div>
                </div>

                <div className="info-item-contact">
                  <div className="info-icon-contact">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <p>+91 9876543210</p>
                  </div>
                </div>

                <div className="info-item-contact">
                  <div className="info-icon-contact">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Gujarat, India</p>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="contact-social">
                <h4>Follow Me</h4>
                <div className="social-buttons">

                  <a href="https://linkedin.com" className="social-button" target="_blank">
                    <FaLinkedin />
                  </a>

                  <a href="https://github.com" className="social-button" target="_blank">
                    <FaGithub />
                  </a>

                  <a href="https://twitter.com" className="social-button" target="_blank">
                    <FaTwitter />
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
                <li>Internships</li>
                <li>Full-time Jobs</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}