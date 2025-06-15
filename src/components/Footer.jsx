import React from "react";
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer text-light py-4">
      <div className="text-center">
        TravelMate UK &copy; {new Date().getFullYear()} | Explore with ease
      </div>
    </footer>
  );
};

export default Footer;
