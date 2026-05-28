// src/pages/Blog.jsx

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import blogData from "../components/BlogData.js";

const Blog = () => {
  return (
    <div className="bg-white dark:bg-[#0d1238] min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
          <div className="absolute top-0 right-0 border-l-[220px] border-l-transparent border-b-[220px] border-b-indigo-500/10"></div>
          <div className="absolute bottom-0 left-1/3 border-r-[180px] border-r-transparent border-t-[180px] border-t-indigo-500/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* left */}
            <div>
              <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
                Blog
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Stay updated with our latest news and insights
              </p>
            </div>

            {/* right breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-lg">
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
              <span>›</span>
              <span className="text-primary">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog middle content */}
      <section className="pb-14 pt-4">
        <div className="max-w-4xl mx-auto px-5 text-center">

          <span className="inline-block px-4 py-1 mb-5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Latest Articles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-5">
            Blogs
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Stay updated with our latest news and insights
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-50 dark:bg-[#171d4b] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-sm dark:shadow-none"
              >
                {/* image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* content */}
                <div className="p-5">

                  {/* categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.categories.slice(0, 3).map((cat, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* title */}
                  <Link to={`/blog/${blog.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug hover:text-primary transition line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>

                  {/* desc */}
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
                    {blog.shortDesc}
                  </p>

                  {/* footer */}
                  <div className="border-t border-gray-200 dark:border-white/10 mt-5 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-white text-sm font-semibold">
                        {blog.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-gray-900 dark:text-white text-sm font-semibold">
                          {blog.author}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">
                          {blog.date}
                        </p>
                      </div>
                    </div>

                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      👁 {blog.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
