import React from "react";

function ServiciosGrid() {
  return (
    <div className="container mx-auto my-14">
      <div className="grid place-content-center bg-white text-center">
        <h4 class="uppercase text-indigo-500 font-bold text-base mb-3">
          ¿Cómo podemos ayudarte?
        </h4>
        <h2 className="font-bold text-4xl mb-3">Servicios Principales</h2>
        <p className="text-gray-500 px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reprehenderit rem dolore ex dicta earum voluptatibus delectus non amet
          quos qui perferendis eaque, laboriosam maxime ab debitis recusandae
          officia cum!
        </p>
        <div className="servicios grid grid-cols-2 gap-8 mt-14">
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                SERVICIOS CONTABLES
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                Realizamos el registro de su información contable
                correspondiente a ventas, compras y gastos de su empresa mes a
                mes para cumplir con las obligaciones fiscales tributarias
                establecidos por la ley. En lo principal declaración de IVA.
              </dd>
            </div>
          </div>
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                SERVICIO PARA CONTABILIDADES ATRASADAS
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                En breve plazo posible colocamos su contabilidad al día,
                regularizamos los IVA atrasados, imposiciones, asistimos a
                citaciones del SII, rectificamos Declaración de Impuesto Renta,
                entre otros
              </dd>
            </div>
          </div>
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                RECURSOS HUMANOS
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                Confeccionamos Contratos de Trabajo, Liquidaciones de Sueldo
                mensualmente, Libro de remuneraciones, Preparamos y Declaramos
                sus Imposiciones, Confeccionamos Cartas de Aviso Despido,
                Calculamos y Confeccionamos Finiquitos.
              </dd>
            </div>
          </div>
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                TRÁMITES ANTE EL SII
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                Asesoramos permanentemente a nuestros clientes. Gestionamos la
                Iniciación de actividades, Ampliaciones de Giro, cambio de
                Domicilio, Cambios Societarios, IVA Exportador, Cambio de
                Sujeto, Términos de Giro, etc.
              </dd>
            </div>
          </div>
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                REGULARIZACIONES ANTE LA MUNICIPALIDAD Y/O SEREMI
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                Si ya iniciaste tu emprendimiento y debes regularizar patentes,
                permisos u otros, te ayudamos. Cuéntanos tu caso y te daremos
                solución.
              </dd>
            </div>
          </div>
          <div class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-lg p-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                ACTUALIZACIONES
              </dt>
              <dd class="mt-2 text-base text-gray-500 text-left">
                Mantenemos informados a nuestros clientes respecto de cambios en
                las normativas tributarias y laborales
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosGrid;
