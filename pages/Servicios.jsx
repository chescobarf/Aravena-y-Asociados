import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

function Cotizar() {
  const [servicios, setServicios] = useState([]);

  const [servicio, SetServicio] = useState(1);

  const fetchData = () => {
    // fetch("http://localhost:3000/api/servicesArray")
    fetch("https://aravena-y-asociados.netlify.app/api/servicesArray")
      .then((response) => response.json())
      .then((data) => setServicios(data))
      .catch((error) => console.error("Error:", error));
    console.log(servicios);
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
    } else {
      descrip.innerHTML = "";
      title.innerHTML = "";
      imgback.setAttribute("src", "");
    }
  });

  return (
    <>
      <Header></Header>
      <div className="container mx-auto my-12 flex flex-row gap-8 md:px-2">
        <div className="lateral w-6/12 flex flex-col gap-2">
          {servicios.map((item) => {
            return (
              <button
                class="item flex bg-gray-border-gray-100 border-gray-100 rounded-md shadow-md p-4 hover:shadow-xl transition-all items-center cursor-pointer w-full"
                key={item.id}
                onClick={() => SetServicio(item.id)}
              >
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                    <img src={item.svg} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900 text-left">
                    {item.name}
                  </dt>
                </div>
              </button>
            );
          })}
        </div>
        <div className="shadow-xl w-full hover:shadow-2xl rounded-md relative h-auto grid py-8 px-12 text-white">
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
            <div id="description" className="text-xl"></div>
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

export default Cotizar;
