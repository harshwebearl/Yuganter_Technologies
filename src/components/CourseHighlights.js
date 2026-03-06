import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CodeBracketIcon, CpuChipIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function CourseHighlights() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js with hands-on projects.",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      duration: "6 Months",
      popular: true,
      link: "/courses/full-stack-mern",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Data Science & AI/ML",
      description: "Learn data analysis, machine learning, and AI with real datasets.",
      icon: <CpuChipIcon className="w-8 h-8" />,
      duration: "7 Months",
      popular: true,
      link: "/courses/data-science-ai-ml",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Python Development",
      description: "Build scalable applications and automation scripts with Python & Django.",
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      duration: "5 Months",
      popular: false,
      link: "/courses/python-development",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Popular Programs
          </p> 

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Start Your <span className="text-indigo-400">Professional Journey</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Choose from our career-focused programs designed to make you industry-ready
            with practical knowledge and real-world skills.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {popularCourses.map((course, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute -inset-1 bg-gradient-to-tr ${course.color} opacity-20 rounded-2xl blur-3xl group-hover:opacity-40 transition-all`}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">

                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white group-hover:bg-white/20 group-hover:text-black transition-all duration-500">
                    {course.icon}
                  </div>

                  {course.popular && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-400 text-black">
                      Popular
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] w-full bg-white/10 mb-5"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">
                    {course.duration}
                  </span>

                  <Link
                    to={course.link}
                    className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:gap-3 transition-all"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/courses"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 px-5 py-2 rounded-xl font-semibold text-sm md:text-base text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/50 inline-block"
            >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}