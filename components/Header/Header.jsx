import React from "react";
import Contacto from "../Footer/Contact";
export default function Header() {
  const showContact = (e) => {
    e.preventDefault;
    var contact = document.querySelector("#contactHeader");
    if (contact.classList.contains("hidden")) {
      contact.classList.remove("opacity-0");
      contact.classList.add("opacity-100");
      contact.classList.toggle("hidden");
    } else {
      contact.classList.remove("opacity-100");
      contact.classList.add("opacity-0");
      contact.classList.toggle("hidden");
    }
  };
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white shadow-md relative z-50">
      <img src="/logotipoBlue2.png" alt="" className="h-10" />
      <div className="flex gap-2 relative">
        <div className="">
          <a
            href=""
            className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-indigo-600 hover:text-white rounded"
          >
            Inicio
          </a>
        </div>
        <div className="">
          <a
            href=""
            className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-indigo-600 hover:text-white rounded"
          >
            Servicios
          </a>
        </div>
        <div className="">
          <a
            href=""
            className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-indigo-600 hover:text-white rounded"
          >
            Cotizar Plan
          </a>
        </div>
        <div className="">
          <a
            className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-indigo-600 hover:text-white rounded cursor-pointer"
            onClick={showContact}
          >
            Contacto
          </a>
        </div>
        <div
          id="contactHeader"
          className="absolute top-12 -right-8 bg-indigo-700 rounded-md text-white py-3 px-8 opacity-0 hidden transition-opacity"
        >
          <h1>Contactanos</h1>
          <Contacto props="w-full"></Contacto>
        </div>
      </div>
    </div>
  );
}
