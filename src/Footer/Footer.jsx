import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Whitelogo from "../Image/white-removebg-preview.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft">
        <div className="ft-left">
          <img src={Whitelogo} alt="" />
         <div className="ft-leftContent">
         <h1>See and Close the Gap</h1>
          <p>
            Lorem ipsum dolor sit amet 
            <br /> consectetur adipisicing elit.
            <br />  A ad consectetur numquam hic 
            <br /> culpa ducimus.
          </p>
          <h3>Follow us:</h3>
          <div className="icons">
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
          </div>
         </div>
        </div>
        <div className="ft-right">
          <h1>Suscribe to our Newsletter</h1>
          <input type="email" />
          <span>
            <button type="submit">Suscribe</button>
          </span>
        </div>
      </div>
      <div className="ft-center">
        <p>Careers</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
        <p>&copy; theChosenDevop</p>
    </div>
  );
};

export default Footer;
