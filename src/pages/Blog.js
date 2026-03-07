import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  useEffect(() => {
    document.title = "IT Blog & Insights - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Latest insights on web development, mobile apps, AI, and IT trends from YugAntar Technologies."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "Top Web Development Trends in 2024",
      description: "Explore the most important web development trends like AI integration, progressive web apps, and serverless architecture.",
      category: "Web Development",
      readTime: "5 min read",
      slug: "web-development-trends",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "How Mobile Apps Transform Modern Businesses",
      description: "Mobile apps help businesses automate operations, improve customer engagement, and boost revenue through digital solutions.",
      category: "Mobile Development",
      readTime: "6 min read",
      slug: "mobile-app-business-growth",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning for Startups",
      description: "Discover how AI-powered tools and machine learning models help startups improve efficiency and gain competitive advantage.",
      category: "AI & ML",
      readTime: "7 min read",
      slug: "ai-ml-startups",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Why Every Business Needs a CRM System",
      description: "CRM systems help manage leads, track sales, automate workflows, and improve customer relationships effectively.",
      category: "Business Solutions",
      readTime: "5 min read",
      slug: "crm-business-benefits",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Cloud Computing Benefits for Growing Companies",
      description: "Cloud technology allows businesses to scale faster, reduce infrastructure cost, and maintain high data security.",
      category: "Cloud Solutions",
      readTime: "4 min read",
      slug: "cloud-computing-benefits",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Cybersecurity Best Practices for Businesses",
      description: "Learn essential cybersecurity strategies to protect your business data, applications, and digital infrastructure.",
      category: "Cybersecurity",
      readTime: "6 min read",
      slug: "cybersecurity-best-practices",
      color: "from-red-500 to-rose-400"
    }
  ];

  return (
    <div className="bg-[#0a0f1a] text-white min-h-screen font-sans selection:bg-secondary-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary-500/10 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-secondary-400 uppercase bg-secondary-400/10 border border-secondary-400/20 rounded-full">
                Knowledge Hub
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Tech Insights & <br />
                <span className="text-secondary-400">Future Trends.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Stay ahead of the curve with expert perspectives on AI, Cloud, and Software Engineering. We translate complex tech into business growth.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20"
                >
                  Get IT Consultation
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
                <div className="absolute from-secondary-500 to-primary-500"></div>
                <img
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
                  alt="Tech Analysis"
                  className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[350px]"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Articles</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md">
                Exploring the intersection of technology and business strategy through deep-dives and tutorials.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Icon with Glowing background */}
              {/* <div className={`w-16 h-16 flex items-center justify-center text-4xl rounded-2xl bg-gradient-to-br ${article.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {article.icon}
              </div> */}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-secondary-400 bg-secondary-400/10 px-3 py-1 rounded-md">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500 font-medium italic">
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary-400 transition-colors duration-300 leading-tight">
                {article.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {article.description}
              </p>

              {/* <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-secondary-400 transition-all"
              >
                READ ARTICLE 
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link> */}
            </div>
          ))}
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[40px] p-12 md:p-20 overflow-hidden text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 blur-[80px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-500/20 blur-[80px] rounded-full"></div>

            <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
              Ready to transform your <br className="hidden md:block"/> digital presence?
            </h3>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join 50+ businesses in Ahmedabad that scaled their operations with our custom IT solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20"
            >
              Start Your Project Now
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}