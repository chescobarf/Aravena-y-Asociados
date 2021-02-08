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
    autoplay: false,
    fade: true,
    swipeToSlide: true,
    arrows: false,
  };
  const carrousel = {};
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="flex relative w-full sm:grid sm:place-content-center sm:pt-1">
            <div className="content w-1/2 grid place-content-center px-10 sm:w-full sm:z-10 sm:text-white">
              <h2 className="text-6xl leading-none font-bold text-gray-900 mb-10 sm:text-lg sm:mb-2 sm:text-white">
                Servicio contable y tributario para
                <span className="text-amber-500"> Pymes</span>
              </h2>
              <p className="text-lg mb-7 sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                assumenda animi excepturi aliquid earum ab porro itaque
                consequatur aperiam et aliquam laudantium laboriosam cum,
                cumque, deleniti similique quia id impedit?
              </p>
              <a
                href=""
                className="bg-amber-500 w-max px-2 py-3 text-white rounded-md font-semibold sm:px-1 sm:py-2 sm:text-xs sm:mb-4"
              >
                Conocer Mas
              </a>
            </div>
            <svg
              class="lg:block absolute right-1/2 inset-y-0 h-full w-48 text-white transform translate-x-1/2 sm:hidden"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>
            <div className="img w-1/2 sm:w-full sm:absolute sm:top-0 sm:right-0 sm:z-0 imgFilter">
              <img
                src="/banner.png"
                alt=""
                className="w-full object-cover sm:h-72 h-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex relative w-full sm:grid sm:place-content-center sm:pt-1">
            <div className="img w-1/2 sm:w-full sm:absolute sm:top-0 sm:right-0 sm:z-0 imgFilter">
              <img
                src="/asesoria.jpg"
                alt=""
                className="w-full object-cover sm:h-72 h-full"
              />
            </div>
            <svg
              class="lg:block absolute right-1/2 inset-y-0 h-full w-48 text-white transform translate-x-1/2 sm:hidden"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 50,0 50,150 0,100"></polygon>
            </svg>
            <div className="content w-1/2 grid place-content-center px-10 sm:w-full sm:z-10 sm:text-white">
              <h2 className="text-6xl leading-none font-bold text-gray-800 sm:text-gray-200 mb-10 sm:text-lg sm:mb-2">
                Servicio contable y tributario para
                <span className="text-amber-500"> Pymes</span>
              </h2>
              <p className="text-lg sm:text-sm">
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
