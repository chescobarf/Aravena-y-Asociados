import React from "react";
export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white shadow-md relative z-50">
      <img src="/logotipoBlue.png" alt="" className="h-10" />
      <div className="flex gap-2">
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
            Nosotros
          </a>
        </div>
        <div className="">
          <a
            href=""
            className="px-4 py-2 font-medium text-base text-gray-800 hover:bg-indigo-600 hover:text-white rounded"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
