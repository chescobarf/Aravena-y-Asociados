import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact(props) {
  const socials = () => {
    if (props.showSocials == "true") {
      return (
        <div className="flex flex-row gap-2" id="socials">
          <a
            href=""
            className="bg-white rounded-full h-8 w-8 grid place-items-center px-1 py-1"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-amber-500 w-full h-full "
            />
          </a>
          <a
            href=""
            className="bg-white rounded-full h-8 w-8 grid place-items-center px-1 py-1"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-amber-500 w-full h-full "
            />
          </a>
          <a
            href=""
            className="bg-white rounded-full h-8 w-8 grid place-items-center px-1 py-1"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-amber-500 w-full h-full "
            />
          </a>
          <a
            href=""
            className="bg-white rounded-full h-8 w-8 grid place-items-center px-1 py-1"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-amber-500 w-full h-full "
            />
          </a>
        </div>
      );
    }
  };

  return (
    <div
      className={`flex ${props.direction} ${props.align} gap-5 ${props.media}`}
    >
      <div className="item">
        <a className="flex items-center gap-3" href="">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <Link href="/Contacto">
            <p>Agustinas #1185 of 58 , Santiago Centro</p>
          </Link>
        </a>
      </div>
      <div className="item flex flex-col gap-2 md:row-start-2">
        <a
          className="flex items-center gap-3"
          href="mailto:alex.aravena@aravenayasociados.cl"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <p>alex.aravena@aravenayasociados.cl</p>
        </a>
        <a
          className="flex items-center gap-3"
          href="mailto:charlotte.aviles@aravenayasociados.cl"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <p>charlotte.aviles@aravenayasociados.cl</p>
        </a>
      </div>
      <div className="item">
        <a className="flex items-center gap-3" href="">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <Link href="/Contacto">
            <p>26725756 / 26965196 / 968745054</p>
          </Link>
        </a>
      </div>
      {socials()}
    </div>
  );
}

export default Contact;
