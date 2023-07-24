import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5" id="contact-section" style={{ color: "#3c1e10", backgroundColor: "#ffcf96" }}>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Get in touch today!</h1>
        <p className="lead">
          Welcome to our cake bakery, where heavenly delights await you. Our expert bakers create irresistible confections that blend exquisite flavors, delightful textures, and artistic designs. From birthdays to weddings and every occasion in between, our cakes are crafted with love and attention to detail, using the finest ingredients. Indulge in velvety layers of moist cake, adorned with luscious buttercream, silky ganache, or smooth fondant. Each masterpiece is meticulously decorated, showcasing intricate designs and personalized touches. Ordering is a breeze with our online gallery and convenient delivery services. Come and experience the magic of our cake bakery, and indulge in pure bliss.
        </p>
        <div className="d-flex align-items-center gap-2">
          <a href="https://www.facebook.com/SugarRushbyShanzeh" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{ color: "#3c1e10" }} />
          </a>
          <a href="https://www.instagram.com/sugarrushbyshanzeh" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ color: "#3c1e10", marginLeft: "15px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
