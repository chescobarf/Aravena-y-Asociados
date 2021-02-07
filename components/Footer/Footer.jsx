import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-amber-500 to-amber-600 pt-12 text-gray-50 flex-col md:px-2 sm:px-2">
      <div className="container mx-auto my-0 pb-10 sm:pb-4">
        <div className="flex justify-around w-full pb-5 md:flex-col md:gap-8 sm:flex-col sm:items-center">
          <div className="w-auto sm:mb-3">
            <Link href="/">
              <img
                src="/logotipoWhite.png"
                alt="Aravena y Asociados"
                className="h-10 sm:h-8"
              />
            </Link>
          </div>
          <Contact
            width="w-full"
            showSocials="true"
            direction="flex-row"
            align="items-center"
            media="md:grid md:grid-cols-2 sm:flex sm:flex-col"
          ></Contact>
        </div>
      </div>
      <div className="w-full my-0 mx-auto text-center py-5 text-sm bg-amber-700 bg-opacity-10">
        <p>&#169; Todos los derecho reservados de Aravena y Asociados</p>
        <a href="https://christian-escobar.netlify.app/" className="">
          Creado por <span className="font-semibold">Ch.Escobarf</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
