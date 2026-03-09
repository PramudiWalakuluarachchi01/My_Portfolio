import React from "react";
import { portfolioItems } from "../data/data.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Portfolio
        </h2>

        <p className="text-gray-500 text-center text-lg mb-10">
          Explore some of my featured projects below
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {portfolioItems.map((item, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-all"
            >

              <div className="w-full md:w-1/3 rounded-lg overflow-hidden">

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500 }}
                >

                  {item.images?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={item.title}
                        className="w-full h-52 sm:h-64 md:h-72 object-contain"
                      />
                    </SwiperSlide>
                  ))}

                </Swiper>

              </div>

              <div className="w-full md:w-2/3 flex flex-col justify-between">

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.skills?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/20 text-white rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    className="px-4 py-3 cursor-pointer bg-linear-to-r from-teal-400 to-teal-600 rounded-md text-sm hover:opacity-70 transition-opacity"
                  >
                    View Project
                  </a>
                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Portfolio;