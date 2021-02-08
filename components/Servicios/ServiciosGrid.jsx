import React from "react";
import Link from "next/link";

function ServiciosGrid() {
  return (
    <div className="container mx-auto my-14 md:px-2">
      <div className="grid place-content-center bg-white text-center">
        <h4 className="uppercase text-amber-500 font-bold text-base mb-3">
          ¿Cómo podemos ayudarte?
        </h4>
        <h2 className="font-bold text-4xl mb-3">Servicios Principales</h2>
        <p className="text-gray-500 px-48 md:px-10 sm:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reprehenderit rem dolore ex dicta earum voluptatibus delectus non amet
          quos qui perferendis eaque, laboriosam maxime ab debitis recusandae
          officia cum!
        </p>
        <div className="servicios grid grid-cols-2 gap-8 mt-14 sm:grid-cols-1">
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Servicios Contables
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  Realizamos el registro de su información contable
                  correspondiente a ventas, compras y gastos de su empresa mes a
                  mes para cumplir con las obligaciones fiscales tributarias
                  establecidos por la ley. En lo principal declaración de IVA.
                </dd>
              </div>
            </div>
          </Link>
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Servicio Para Contabilidades Atrasadas
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  En breve plazo posible colocamos su contabilidad al día,
                  regularizamos los IVA atrasados, imposiciones, asistimos a
                  citaciones del SII, rectificamos Declaración de Impuesto
                  Renta, entre otros
                </dd>
              </div>
            </div>
          </Link>
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Recursos Humanos
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  Confeccionamos Contratos de Trabajo, Liquidaciones de Sueldo
                  mensualmente, Libro de remuneraciones, Preparamos y Declaramos
                  sus Imposiciones, Confeccionamos Cartas de Aviso Despido,
                  Calculamos y Confeccionamos Finiquitos.
                </dd>
              </div>
            </div>
          </Link>
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Trámites Ante El SII
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  Asesoramos permanentemente a nuestros clientes. Gestionamos la
                  Iniciación de actividades, Ampliaciones de Giro, cambio de
                  Domicilio, Cambios Societarios, IVA Exportador, Cambio de
                  Sujeto, Términos de Giro, etc.
                </dd>
              </div>
            </div>
          </Link>
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Regularizaciones Ante La Municipalidad Y/O Seremi
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  Si ya iniciaste tu emprendimiento y debes regularizar
                  patentes, permisos u otros, te ayudamos. Cuéntanos tu caso y
                  te daremos solución.
                </dd>
              </div>
            </div>
          </Link>
          <Link href="/Servicios">
            <div className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 text-left">
                  Actualizaciones
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-left">
                  Mantenemos informados a nuestros clientes respecto de cambios
                  en las normativas tributarias y laborales
                </dd>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiciosGrid;
