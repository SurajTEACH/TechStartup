// src/pages/BlogDetails.jsx
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import blogData from "../components/BlogData.js";
import { ArrowLeft, Eye } from "lucide-react";

// ─── Content Renderer ────────────────────────────────────────────────────────
// Converts the JSON content array into JSX — swap this with API data later

const renderContent = (content) => {
  // Fallback: if content is still an HTML string (old format), render it directly
  if (typeof content === "string") {
    return (
      <div
        className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white
          prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl
          prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl
          prose-p:mb-5 prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300
          prose-strong:text-black dark:prose-strong:text-white
          prose-ul:my-6 prose-ul:pl-6 prose-ul:space-y-3
          prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Guard: if not array, show nothing
  if (!Array.isArray(content)) return null;

  return content.map((block, blockIndex) => {
    // Plain section: heading + paragraphs
    if (block.type === "section") {
      return (
        <div key={blockIndex} className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {block.heading}
          </h2>
          {block.paragraphs?.map((para, pIndex) => (
            <p
              key={pIndex}
              className="mb-5 leading-relaxed text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      );
    }

    // Lifecycle section: heading + intro + subsections
    if (block.type === "lifecycle-section") {
      return (
        <div key={blockIndex} className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {block.heading}
          </h2>
          {block.intro && (
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              {block.intro}
            </p>
          )}
          {block.subsections?.map((sub, sIndex) => (
            <div key={sIndex} className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                {sub.heading}
              </h3>
              <p
                className="leading-relaxed text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: sub.paragraph }}
              />
            </div>
          ))}
        </div>
      );
    }

    // List section: heading + bullet list with bold keywords
    if (block.type === "list-section") {
      return (
        <div key={blockIndex} className="mb-10">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {block.heading}
          </h2>
          <ul className="space-y-3 pl-2">
            {block.items?.map((item, iIndex) => (
              <li
                key={iIndex}
                className="flex items-start gap-2 leading-relaxed text-gray-600 dark:text-gray-300"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-black dark:text-white">
                    {item.bold}
                  </strong>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  });
};

// ─── BlogDetails Page ─────────────────────────────────────────────────────────

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Blog Not Found
      </div>
    );
  }

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] lg:mb-12">
                <h1 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  {blog.title}
                </h1>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {blog.description}
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-start md:text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      className="pr-1 text-base font-medium text-gray-500 hover:text-primary"
                      to="/"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-gray-400" />
                  </li>
                  <li className="text-base font-medium text-primary">
                    Blog Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shape */}
        <span className="absolute left-0 top-0 -z-10">
          <svg width="287" height="254" viewBox="0 0 287 254" fill="none">
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0)"
            />
            <defs>
              <linearGradient
                id="paint0"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </section>

      {/* Article */}
      <article className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">

            {/* Categories / Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {blog.categories.map((cat, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              {blog.title}
            </h1>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>

            {/* Author + Views */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-5 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1 text-sm text-gray-500">
                <Eye className="h-4 w-4" />
                <span>{blog.views} views</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-10 mt-10 overflow-hidden rounded-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Blog Content — rendered from JSON */}
            <div className="text-base">
              {renderContent(blog.content)}
            </div>

            {/* Footer Row: Back to Blog + Share */}
            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Blog
              </Link>

              {/* Share Buttons */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Share:
                </span>

                {/* Twitter / X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  aria-label="Share on Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  aria-label="Share on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetails;
