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
    <div className="w-full bg-gradient-to-b from-indigo-600 to-blue-800 pt-6 text-gray-200 flex-col">
      <div className="container mx-auto my-0">
        <div className="flex justify-around w-full pb-5">
          <div className="w-auto">
            <Link href="/">
              <img
                src="/logotipoWhite.png"
                alt="Aravena y Asociados"
                className="h-10"
              />
            </Link>
          </div>
          <Contact
            width="w-full"
            showSocials="true"
            direction="flex-row"
            align="items-center"
          ></Contact>
        </div>
      </div>
      <div className="w-full my-0 mx-auto text-center py-5 text-sm bg-black bg-opacity-10 ">
        <p>&#169; Todos los derecho reservados de Aravena y Asociados</p>
        <a href="" className="">
          Creado por <span className="font-semibold">Ch.Escobarf</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
