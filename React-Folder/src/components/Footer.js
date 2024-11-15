import React, { useState } from "react";
import logo from "../assets/logo.png";
import Feedback from "./Feedback";

const Footer = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-4 px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Services</h6>
          <ul>
            <li>
              <a
                href="/genetic-analysis"
                className="link link-hover block mb-2"
              >
                Genetic Analysis
              </a>
            </li>
            <li>
              <a href="/nutrition-plans" className="link link-hover block mb-2">
                Nutrition Plans
              </a>
            </li>
            <li>
              <a href="/consultation" className="link link-hover block mb-2">
                Expert Consultation
              </a>
            </li>
            <li>
              <a href="/advertisement" className="link link-hover block mb-2">
                Advertisement
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
          <ul>
            <li>
              <a href="/faq" className="link link-hover block mb-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="/about" className="link link-hover block mb-2">
                About us
              </a>
            </li>
            <li>
              <a href="/contact" className="link link-hover block mb-2">
                Contact
              </a>
            </li>
            <div>
              <li>
                <button
                  className="link link-hover block mb-2"
                  onClick={toggleFeedbackForm}
                >
                  Feedback
                </button>
                <Feedback
                  show={showFeedbackForm}
                  onClose={toggleFeedbackForm}
                />
              </li>
            </div>

            <li>
              <a href="/community" className="link link-hover block mb-2">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
          <ul>
            <li>
              <a href="/legalCompliance" className="link link-hover block mb-2">
                Legal & Compliance
              </a>
            </li>
            <li>
              <a href="/privacy" className="link link-hover block mb-2">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="link link-hover block mb-2">
                Cookie policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto -mt-4  py-4 px-5 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm">
        <aside className="flex items-center mb-4 md:mb-0">
          <img src={logo} width="55" height="55" alt="logo" className="pr-5" />
          <p>
            Nutrition Precision
            <br />
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav className="flex gap-4">
          <a
            href="https://www.youtube.com/@jmediacorporation3903"
            className="hover:text-gray-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/jmedia-corp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.5c0-1.381-.282-2.34-1.75-2.34s-2.25.959-2.25 2.34v5.5h-3v-11h3v1.502c.878-.648 1.716-1.102 2.75-1.102 2.271 0 3.75 1.646 3.75 4.098v6.502z" />
            </svg>
          </a>
          <a
          href="https://x.com/PhoenixLab94718"
          className="hover:text-gray-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.92 0 .386.043.761.127 1.122-4.087-.205-7.713-2.164-10.141-5.144-.424.729-.667 1.574-.667 2.476 0 1.708.87 3.215 2.19 4.099-.807-.026-1.567-.247-2.231-.616v.062c0 2.385 1.697 4.374 3.946 4.828-.413.112-.848.172-1.296.172-.317 0-.626-.031-.927-.088.626 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.107-6.114 2.107-.398 0-.79-.023-1.175-.068 2.179 1.396 4.768 2.212 7.548 2.212 9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.637.961-.694 1.8-1.56 2.462-2.548z"></path>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/phoenixlabs1/"
          className="hover:text-gray-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.243 1.309 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.243 1.247-3.608 1.309-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.243-1.309-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.243-1.247 3.608-1.309 1.265-.059 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.012-4.947.071-1.35.062-2.675.35-3.708 1.383-1.033 1.033-1.32 2.358-1.382 3.708-.059 1.281-.071 1.688-.071 4.947s.012 3.667.071 4.947c.062 1.35.35 2.675 1.383 3.708 1.033 1.033 2.358 1.32 3.708 1.382 1.281.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.35-.062 2.675-.35 3.708-1.383 1.033-1.033 1.32-2.358 1.382-3.708.059-1.281.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.062-1.35-.35-2.675-1.383-3.708-1.033-1.033-2.358-1.32-3.708-1.382-1.281-.059-1.688-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm6.406-11.845c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z"></path>
          </svg>
        </a>

        <a
          href="https://www.facebook.com/people/Phoenix-Labs/100085708352952/"
          className="hover:text-gray-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M22.675 0h-21.35c-.73 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.324-.596 1.324-1.325v-21.35c0-.729-.596-1.325-1.325-1.325z"></path>
          </svg>
        </a>

        </nav>
      </div>
    </footer>
  );
};

export default Footer;
