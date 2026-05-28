// src/pages/ProjectDetails.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import projectsData from "../components/projectsData";

const ProjectDetails = () => {
  return (
    <div className="bg-white dark:bg-[#0d1238] min-h-screen transition-colors duration-300">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 overflow-hidden pt-24 lg:pt-[150px] mx-4 sm:mx-8 lg:mx-20">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* left */}
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-6 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Projects
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300">
                  Explore our portfolio of innovative projects and solutions
                </p>
              </div>
            </div>

            {/* right */}
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-start md:text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <a
                      className="pr-1 text-base font-medium text-body-color hover:text-primary dark:text-gray-300"
                      href="/"
                    >
                      Home
                    </a>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* shapes */}
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111)" />
              <defs>
                <linearGradient id="paint0_linear_111" x1="-40.5" y1="117" x2="301.926" y2="-97.1485" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z" fill="url(#paint0_linear_0)" />
              <path opacity="0.1" d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z" fill="url(#paint1_linear_0)" />
              <defs>
                <linearGradient id="paint0_linear_0" x1="644" y1="221" x2="429.946" y2="37.0429" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_0" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>

      {/* HEADING SECTION */}
      <section className="pb-10 pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-5 text-center">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Latest Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of innovative projects and solutions
          </p>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="py-10 sm:py-16 mx-4 sm:mx-8 lg:mx-20">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#171d4b] shadow-lg transition duration-300 hover:-translate-y-2"
              >
                {/* image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 sm:h-60 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="p-5 sm:p-6">

                  {/* categories */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.categories.map((cat, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20 dark:text-white"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* title */}
                  <h2 className="mb-3 text-xl sm:text-2xl font-bold text-black dark:text-white">
                    {project.title}
                  </h2>

                  {/* short desc */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.shortDesc}
                  </p>

                  {/* technologies */}
                  <div className="mb-5">
                    <h4 className="mb-2 text-sm font-semibold text-black dark:text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-lg bg-gray-100 dark:bg-white/10 px-2 py-1 text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] text-center rounded-xl bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] text-center rounded-xl border border-gray-300 dark:border-white/20 px-5 py-2 text-sm font-medium text-black dark:text-white transition hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Github
                    </a>
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

export default ProjectDetails;