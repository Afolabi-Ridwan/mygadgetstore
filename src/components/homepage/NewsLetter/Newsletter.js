import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <h1>
          Sign Up for the <span>NEWSLETTER </span>{" "}
        </h1>

        {/* <div className="formTab"> */}
          

          {/* <div> */}
            <form>
            <div className="envelopeIcon">
            <FaEnvelope  />
          </div>
          
              <div>
                <input type="email" placeholder="Enter your Email" />
              </div>

              <div className="submitBtn">
                <button>
                  {" "}
                  <FaEnvelope /> Subscribe{" "}
                </button>
              </div>
            </form>
          {/* </div> */}
        {/* </div> */}

        <ul className="socialIcons">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterest />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Newsletter;
