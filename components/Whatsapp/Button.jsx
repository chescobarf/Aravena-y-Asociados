import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Button(props) {
  return (
    <>
      <a
        href={`https://wa.me/${props.numero}`}
        className="fixed bottom-2 left-3 rounded-full bg-gray-900 px-5 py-2 flex place-items-center gap-3 text-white cursor-pointer w-max sm:left-1 sm:bottom-4 sm:px-3 sm:py-1"
      >
        <div className="img h-5">
          <FontAwesomeIcon icon={faWhatsapp} className="w-full h-full" />
        </div>
        <div className="text">Whatsapp</div>
      </a>
    </>
  );
}

export default Button;
