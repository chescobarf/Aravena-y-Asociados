import React from "react";
import Contact from "../Footer/Contact";
import Link from "next/link";
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
      <Link href="/">
        <img src="/logotipo.png" alt="" className="h-10 md:h-8" />
      </Link>
      <div className="flex gap-2 relative">
        <Link href="/">
          <a className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-amber-500 hover:text-white rounded ">
            Inicio
          </a>
        </Link>
        <Link href="/Servicios">
          <a className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-amber-500 hover:text-white rounded">
            Servicios
          </a>
        </Link>
        <Link href="/Cotizar">
          <a className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-amber-500 hover:text-white rounded">
            Cotizar Plan
          </a>
        </Link>
        <a
          className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-amber-500 hover:text-white rounded cursor-pointer"
          onClick={showContact}
        >
          Contacto
        </a>
        <div
          id="contactHeader"
          className="absolute top-12 -right-8 bg-white rounded-md text-black py-3 px-8 opacity-0 hidden transition-opacity shadow-lg rounded-t-none"
        >
          <h1 className="mb-4">Contactanos</h1>
          <Contact
            width="w-full"
            showSocials="false"
            direction="flex-col"
            align="items-baseline"
          ></Contact>
        </div>
      </div>
    </div>
  );
}
