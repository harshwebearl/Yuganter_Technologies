import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroSlider() {

  const slides = [
    {
      title: "MERN Stack Development",
      subtitle: "Become a Full-Stack JavaScript Developer",
      desc: "Learn MongoDB, Express.js, React.js and Node.js with real-world projects and industry mentors.",
      points: [
        "15+ Real World Projects",
        "MongoDB + Express + React + Node",
        "API Development & Deployment",
        "100% Placement Assistance"
      ],
      duration: "3 Months Program",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      color: "from-emerald-400 to-green-600"
    },
    {
      title: "UI / UX Design",
      subtitle: "Design Modern Apps & Websites",
      desc: "Master user interface design, wireframing, prototyping and design systems using Figma.",
      points: [
        "Figma & Design Systems",
        "Mobile & Web UI Design",
        "Wireframing & Prototyping",
        "Portfolio Projects"
      ],
      duration: "3 Months Program",
      img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Digital Marketing",
      subtitle: "Grow Brands & Businesses Online",
      desc: "Learn SEO, Google Ads, Social Media Marketing and content strategies used by top brands.",
      points: [
        "SEO & Google Ranking",
        "Meta & Instagram Ads",
        "Content Marketing Strategy",
        "Live Campaign Practice"
      ],
      duration: "3 Months Program",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      color: "from-orange-400 to-red-500"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
    <section className="relative py-24 bg-gray-900 text-white min-h-screen overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 items-center gap-14 min-h-[520px]">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm">
              🚀 Professional Career Course
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <h3 className="text-lg text-indigo-400 font-medium">
              {slides[current].subtitle}
            </h3>

            <p className="text-gray-300 text-lg max-w-xl">
              {slides[current].desc}
            </p>

            {/* Course Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {slides[current].points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400 font-bold">✔</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Course Duration */}
            <div className="text-sm text-yellow-400 font-semibold">
              📅 {slides[current].duration}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">

            <Link
  to="/courses"
  className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 px-5 py-2 rounded-xl font-semibold text-sm md:text-base text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/50 inline-block"
>
  <span className="relative z-10">View Course</span>

  {/* Arrow Icon */}
  <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>

  {/* Glow Effect */}
  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition"></span>
</Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition"
              >
                Book Free Demo
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
<div className="flex justify-center">

  <div className="relative w-full max-w-md">

    {/* Image without shadow or glow */}
    <img
      src={slides[current].img}
      alt="course"
      className="rounded-2xl w-full h-[360px] object-cover"
    />

  </div>

</div>

        </div>

      {/* ARROWS */}
<button
  onClick={prevSlide}
  className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 p-3 rounded-full hover:bg-white/20 transition z-20"
>
  ❮
</button>

<button
  onClick={nextSlide}
  className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white/10 border border-white/20 p-3 rounded-full hover:bg-white/20 transition z-20"
>
  ❯
</button>

        {/* INDICATORS */}
        <div className="flex justify-center mt-12 gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-8"
                  : "bg-gray-500 w-3"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}