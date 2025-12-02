import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/all-course");
  };
  const slides = [
    {
      title: "Share Your Skills, Learn Something New",
      desc: "From guitar to coding to yoga — SkillSwap connects learners and teachers in your local community.",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80",
    },
    {
      title: "Teach What You Love",
      desc: "Host workshops, mentor beginners, and turn your passion into purpose by helping others grow.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1500&q=80",
    },
    {
      title: "Learn Together, Grow Together",
      desc: "Connect with creative minds nearby. Join group sessions, trade skills, and build lasting friendships.",
      img: "https://i.ibb.co.com/V0YqhtpD/pexels-panditwiguna-3401403.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden rounded-2xl scroll-behavior: smooth;">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="h-[550px] md:h-[650px] lg:h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
                <h1
                  className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="mt-4 text-base md:text-lg max-w-2xl text-gray-200"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.desc}
                </p>
                <button
                  className="btn mt-6 px-8 py-3btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg  hover:shadow-lg transition-all duration-300 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  onClick={handleExplore}
                >
                  Explore Skills
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
