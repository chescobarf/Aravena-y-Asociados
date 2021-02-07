import React from "react";
import Header from "../components/Header/Header";
import HubspotForm from "react-hubspot-form";
import Footer from "../components/Footer/Footer";
function Cotizar() {
  return (
    <>
      <Header></Header>
      <div className="container grid mx-auto my-12 md:px-2">
        <div className="w-full shadow-lg px-10 py-5 hover:shadow-2xl text-center rounded-lg">
          <div className="w-full">
            <h1 className="text-3xl mb-2">
              <span className="text-amber-500 font-bold">
                Cotiza los servicios
              </span>{" "}
              que necesitas con nosotros
            </h1>
            <p className="text-lg mb-10 text-gray-600">
              Una vez envies el formulario, nos pondremos en contacto muy pronto
            </p>
          </div>
          <HubspotForm
            portalId="7636559"
            formId="365282d7-0724-4c7c-85fc-b39ff40b8972"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cotizar;
