import Link from "next/link";
import React, { Fragment } from "react";
import Header from "../components/Header/Header";

export default function Custom404() {
  return (
    <Fragment>
      {/* <Header></Header> */}
      <h1 className="mx-auto mt-8 mb-6 w-full text-center font-bold text-4xl text-gray-800">
        <span className="text-amber-500">Opps!</span> La pagina que estas
        buscando no existe
      </h1>
      <div className="grid place-content-center">
        <img src="404.jpg" alt="Error 404" />
        <Link href="/" className="but">
          <button className="bg-amber-500 px-5 py-3 w-max mx-auto text-white rounded-md">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </Fragment>
  );
}
