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
      contact.classList.toggle("sm:hidden");
    }
  };
  const showMenu = () => {
    var menu = document.querySelector("#menuHamburguer");
    if (menu.classList.contains("sm:hidden")) {
      menu.classList.remove("sm:hidden");
      menu.classList.add("sm:flex");
    } else {
      menu.classList.remove("sm:flex");
      menu.classList.add("sm:hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md relative z-50 sm:px-5">
      <Link href="/">
        <img
          src="/logotipo.png"
          alt=""
          className="h-10 md:h-8 cursor-pointer sm:h-7"
        />
      </Link>
      <div className="flex gap-2 relative sm:hidden">
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
      <div className="hidden sm:grid sm:place-items-center">
        <button className="cursor-pointer text-gray-500" onClick={showMenu}>
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="hidden sm:hidden gap-2 absolute top-14 flex-col bg-white w-full left-0"
        id="menuHamburguer"
      >
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
        <Link href="/Contacto">
          <a className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-amber-500 hover:text-white rounded cursor-pointer">
            Contacto
          </a>
        </Link>
        {/* <div
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
        </div> */}
      </div>
    </header>
  );
}
