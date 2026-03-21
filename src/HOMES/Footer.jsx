import React from "react";
 import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">YourBrand</h4>
            <p className="text-light opacity-75">
              I have built AI-powered automation systems to help businesses save time,
              increase productivity, and scale effortlessly.
            </p>

            {/* Social Icons */}
            <div>
              <a href="#" className="text-light me-3">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-facebook fs-5"></i>
              </a>
            </div>
          </div>


          {/* Services */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li className="text-light opacity-75">AI Chatbots</li>
              <li className="text-light opacity-75">Workflow Automation</li>
              <li className="text-light opacity-75">CRM Integration</li>
              <li className="text-light opacity-75">Lead Generation</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/contactanishmankani/" target="_blank" className="text-light opacity-75 text-decoration-none">LinkdeIn</a></li>
              <li><a href="https://www.instagram.com/mankanianeesh?igsh=aGl6Y3pzZHV6MWVw"  target="_blank"  rel="noopener noreferrer"className="text-light opacity-75 text-decoration-none">Instagram</a></li>
              <li><a href="https://www.facebook.com/share/1Cv15jUs5A/"  target="_blank" rel="noopener noreferrer" className="text-light opacity-75 text-decoration-none">Facebook</a></li>
              <li><a href="https://docs.google.com/document/d/1iBShoS2FmZy1c_rp6pGl-rcNPWE6t8i_/preview" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 text-decoration-none">Case Studies</a></li>
              <li><a href="https://github.com/anish-mankani1" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 text-decoration-none">GitHub</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="text-light opacity-75 mb-1">Email: mankanianeesh@gmail.com</p>
            <p className="text-light opacity-75 mb-1">Phone: +918378853372</p>
            <p className="text-light opacity-75"> Nagpur Maharashtra,India</p>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
          <p className="mb-2 mb-md-0 text-light opacity-75">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}