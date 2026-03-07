// import React from "react";
// import { Link } from "react-router-dom";
// import { Code, PenTool, BarChart3 } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-[100vh] flex items-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//         "url('')"
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="max-w-2xl text-white">
//           <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-3">
//             Welcome To
//           </p>

//         <h1 className="text-5xl md:text-3xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-secondary-300 group-hover:to-primary-300">
//   YugAntar Technologies
// </h1>
// <br/>

//           <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
//             YugAntar Technologies is a leading IT training and development
//             institute focused on empowering students with modern technical
//             skills. We provide industry-oriented courses, hands-on projects,
//             and expert mentorship to help you build a successful career in
//             the technology world.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/courses"
//               className="bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
//             >
//               Explore Courses
//             </Link>

//             <Link
//               to="/about"
//               className="border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>

//         {/* Course Boxes */}
//        <div className="grid md:grid-cols-3 gap-10 mt-16">
          
//   {/* MERN Stack */}
//   <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 shadow-lg border-l-4 border-indigo-500 hover:scale-105 transition">
//     <div className="bg-indigo-100 p-3 rounded-lg">
//       <Code className="text-indigo-600" size={32} />
//     </div>
//     <div>
//       <h3 className="font-semibold text-gray-700">
//         Become A Developer In
//       </h3>
//       <p className="text-indigo-500 font-bold">
//         MERN Stack Development
//       </p>
//     </div>
//   </div>

//   {/* UI UX */}
//   <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 shadow-lg border-l-4 border-secondary-500 hover:scale-105 transition">
//     <div className="bg-secondary-100 p-3 rounded-lg">
//       <PenTool className="text-secondary-600" size={32} />
//     </div>
//     <div>
//       <h3 className="font-semibold text-gray-700">
//         Learn Professional
//       </h3>
//       <p className="text-secondary-500 font-bold">
//         UI / UX Designing
//       </p>
//     </div>
//   </div>

//   {/* Digital Marketing */}
//   <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 flex items-center gap-4 shadow-lg border-l-4 border-primary-500 hover:scale-105 transition">
//     <div className="bg-primary-100 p-3 rounded-lg">
//       <BarChart3 className="text-primary-600" size={32} />
//     </div>
//     <div>
//       <h3 className="font-semibold text-gray-700">
//         Start Your Career In
//       </h3>
//       <p className="text-primary-500 font-bold">
//         Digital Marketing
//       </p>
//     </div>
//   </div>

// </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { Code, PenTool, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl text-white">
          <p className="text-secondary-400 font-semibold tracking-widest uppercase mb-3">
            Welcome To
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Build Your Tech Career With{" "}
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
              YugAntar Technologies
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            YugAntar Technologies is a modern IT training institute focused on
            building real-world skills through practical learning, live
            projects, and expert mentorship.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-secondary-500 to-primary-500 px-7 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/about"
              className="border border-white/40 px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {/* MERN */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition">
            <div className="bg-indigo-500/20 p-3 rounded-lg">
              <Code className="text-indigo-400" size={30} />
            </div>

            <div>
              <h3 className="text-gray-200 text-sm">
                Become a Developer in
              </h3>
              <p className="text-white font-semibold text-lg">
                MERN Stack Development
              </p>
            </div>
          </div>

          {/* UI UX */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition">
            <div className="bg-pink-500/20 p-3 rounded-lg">
              <PenTool className="text-pink-400" size={30} />
            </div>

            <div>
              <h3 className="text-gray-200 text-sm">
                Learn Professional
              </h3>
              <p className="text-white font-semibold text-lg">
                UI / UX Designing
              </p>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition">
            <div className="bg-green-500/20 p-3 rounded-lg">
              <BarChart3 className="text-green-400" size={30} />
            </div>

            <div>
              <h3 className="text-gray-200 text-sm">
                Start Your Career In
              </h3>
              <p className="text-white font-semibold text-lg">
                Digital Marketing
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}