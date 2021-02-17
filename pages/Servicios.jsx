import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

function Cotizar() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [servicio, SetServicio] = useState(1);

  const fetchData = () => {
    // fetch("http://localhost:3000/api/servicesArray")
    // fetch("https://aravena-y-asociados.netlify.app/api/servicesArray")
    fetch("https://aravena-y-asociados.vercel.app/api/servicesArray")
      .then((response) => response.json())
      .then((data) => setServicios(data), setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    var descrip = document.querySelector("#description");
    var title = document.querySelector("#title");
    var content = servicios.find((element) => element.id === servicio);
    var imgback = document.querySelector("#img-back");
    if (content != undefined) {
      descrip.innerHTML = content.descrip;
      title.innerHTML = content.name;
      imgback.setAttribute("src", content.img);
      setLoading(false);
    } else {
      descrip.innerHTML = "";
      title.innerHTML = "";
      imgback.setAttribute("src", "");
      setLoading(true);
    }
  });
  if (loading) {
    return (
      <>
        <Header></Header>
        <div className="container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center">
          <h2 className="hidden text-center text-xl font-bold sm:block ">
            Servicios
          </h2>
          <div className="hidden">
            <div className="lateral w-6/12 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:w-full">
              {servicios.map((item) => {
                return (
                  <button
                    className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all items-center cursor-pointer w-full sm:flex-col sm:gap-2"
                    key={item.id}
                    onClick={() => SetServicio(item.id)}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                        <img src={item.svg} alt="" className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="ml-4 sm:m-0">
                      <dt className="text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base">
                        {item.name}
                      </dt>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10">
              <img
                alt=""
                id="img-back"
                className="absolute w-full h-full z-0 rounded-md"
              />
              <div className="z-10 h-full">
                <h1
                  id="title"
                  className="text-center text-3xl font-bold  mb-8"
                ></h1>
                <div id="description" className="text-xl sm:mb-24"></div>
                <div className="grid place-items-center absolute bottom-0 w-full left-0 mb-8">
                  <Link href="/Cotizar">
                    <a className="px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer">
                      Cotizar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div class="sk-circle">
              <div class="sk-circle1 sk-child"></div>
              <div class="sk-circle2 sk-child"></div>
              <div class="sk-circle3 sk-child"></div>
              <div class="sk-circle4 sk-child"></div>
              <div class="sk-circle5 sk-child"></div>
              <div class="sk-circle6 sk-child"></div>
              <div class="sk-circle7 sk-child"></div>
              <div class="sk-circle8 sk-child"></div>
              <div class="sk-circle9 sk-child"></div>
              <div class="sk-circle10 sk-child"></div>
              <div class="sk-circle11 sk-child"></div>
              <div class="sk-circle12 sk-child"></div>
            </div>
            <h1 className="text-center text-lg">Cargando Datos...</h1>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  } else {
    return (
      <>
        <Header></Header>
        <div className="container mx-auto my-12 flex flex-row gap-8 md:px-2 sm:flex-col sm:items-center">
          <h2 className="hidden text-center text-xl font-bold sm:block ">
            Servicios
          </h2>
          <div className="lateral w-6/12 flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:w-full">
            {servicios.map((item) => {
              return (
                <button
                  className="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all items-center cursor-pointer w-full sm:flex-col sm:gap-2"
                  key={item.id}
                  onClick={() => SetServicio(item.id)}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                      <img src={item.svg} alt="" className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4 sm:m-0">
                    <dt className="text-lg leading-6 font-medium text-gray-900 text-left sm:text-center sm:text-base">
                      {item.name}
                    </dt>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white sm:pb-10">
            <img
              alt=""
              id="img-back"
              className="absolute w-full h-full z-0 rounded-md"
            />
            <div className="z-10 h-full">
              <h1
                id="title"
                className="text-center text-3xl font-bold  mb-8"
              ></h1>
              <div id="description" className="text-xl sm:mb-24"></div>
              <div className="grid place-items-center absolute bottom-0 w-full left-0 mb-8">
                <Link href="/Cotizar">
                  <a className="px-4 py-2 font-medium text-base bg-amber-500 text-white rounded cursor-pointer">
                    Cotizar
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default Cotizar;
