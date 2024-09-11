import "../assets/css/Footer.css"; // Adjust styling in Footer.css

// Importing icons from react-icons
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About The Dating Doc</h3>
          <p>
            The Dating Doc is the premier dating service that “swipes right” to
            true connections and healthy dating habits. We offer expert
            coaching, matchmaking, and social events catered to singles of all
            backgrounds. Whether you’re seeking a relationship, wanting to
            improve as a dater, or enjoy original dating content – you’re in the
            right place!
          </p>
          <div className="footer-social-media">
            <a href="https://instagram.com">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://spotify.com">
              <FaSpotify className="social-icon" />
            </a>
          </div>
        </div>

        {/* More Info Section */}
        <div className="footer-info">
          <h3>More Info</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/reviews">Reviews</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/media">Media</a>
            </li>
            <li>
              <a href="/articles">Articles</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="gender">Gender *</label>
            <input type="text" id="gender" name="gender" required />

            <label htmlFor="relationship-status">Relationship Status *</label>
            <input
              type="text"
              id="relationship-status"
              name="relationship-status"
              required
            />

            <label htmlFor="captcha">Enter Captcha Code *</label>
            <div className="captcha-container">
              <input type="text" id="captcha" name="captcha" required />
              <button type="button" className="captcha-refresh">
                ↻
              </button>
            </div>

            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
            <p>We respect your email privacy.</p>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>Copyright 2024 The Dating Doc: San Antonio Dating Service</p>
      </div>
    </footer>
  );
};

export default Footer;
