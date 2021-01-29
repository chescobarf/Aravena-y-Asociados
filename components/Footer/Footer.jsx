import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
function Footer() {
  return (
    <div className="w-full bg-indigo-600 px-8 pt-6 pb-3 text-gray-200 flex-col">
      <div className="flex justify-between w-full pb-5">
        <div className=" w-1/3 mt-4">
          <img
            src="/logotipoWhite.png"
            alt="Aravena y Asociados"
            className="h-10"
          />
        </div>
        <div className=" border-white border-r border-l w-3/12 items-center">
          <div className="flex flex-col my-0 mx-auto w-max mt-4 gap-3">
            <a href="" className="">
              Inicio
            </a>
            <a href="" className="">
              Servicios
            </a>
            <a href="" className="">
              Cotizar Plan
            </a>
          </div>
        </div>
        <Contact props="w-1/3"></Contact>
        {/* <div className="flex flex-col w-1/3 items-center gap-5 mt-4">
          <div className="item">
            <a className="flex items-center gap-3" href="">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <p>lorem lorem lorem</p>
            </a>
          </div>
          <div className="item">
            <a className="flex items-center gap-3" href="">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <p>lorem lorem lorem</p>
            </a>
          </div>
          <div className="item">
            <a className="flex items-center gap-3" href="">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <p>lorem lorem lorem</p>
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <a
              href=""
              className="bg-white rounded-full h-8 w-8 grid place-items-center"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-indigo-700 w-full h-full px-1 py-1"
              />
            </a>
            <a
              href=""
              className="bg-white rounded-full h-8 w-8 grid place-items-center"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-indigo-700 w-full h-full px-1 py-1"
              />
            </a>
            <a
              href=""
              className="bg-white rounded-full h-8 w-8 grid place-items-center"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-indigo-700 w-full h-full px-1 py-1"
              />
            </a>
            <a
              href=""
              className="bg-white rounded-full h-8 w-8 grid place-items-center"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-indigo-700 w-full h-full px-1 py-1"
              />
            </a>
          </div>
        </div> */}
      </div>
      <div className="w-full my-0 mx-auto text-center border-t pt-5 text-sm">
        <p>&#169; Todos los derecho reservados de Aravena y Asociados</p>
        <a href="" className="">
          Creado por <span className="font-semibold">Ch.Escobarf</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
