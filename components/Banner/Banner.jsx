import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  const carrousel = {};
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="flex relative w-full">
            <div className="content w-1/2 grid place-content-center px-10">
              <h2 className="text-6xl leading-none font-bold text-gray-900 mb-10">
                Servicio contable y tributario para
                <span className="text-indigo-600"> Pymes</span>
              </h2>
              <p className="text-lg mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                assumenda animi excepturi aliquid earum ab porro itaque
                consequatur aperiam et aliquam laudantium laboriosam cum,
                cumque, deleniti similique quia id impedit?
              </p>
              <a
                href=""
                className="bg-indigo-600 w-max px-3 py-4 text-white rounded-md font-semibold"
              >
                Conocer Mas
              </a>
            </div>
            <svg
              class="hidden lg:block absolute right-1/2 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>
            <div className="img w-1/2 ">
              <img
                src="/banner.png"
                alt=""
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex relative w-full">
            <div className="img w-1/2 ">
              <img
                src="/asesoria.jpg"
                alt=""
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              />
            </div>
            <svg
              class="hidden lg:block absolute right-1/2 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 50,0 50,150 0,100"></polygon>
            </svg>

            <div className="content w-1/2 grid place-content-center px-10">
              <h2 className="text-6xl leading-none font-bold text-gray-900 mb-10">
                Servicio contable y tributario para
                <span className="text-indigo-600"> Pymes</span>
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                assumenda animi excepturi aliquid earum ab porro itaque
                consequatur aperiam et aliquam laudantium laboriosam cum,
                cumque, deleniti similique quia id impedit?
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
