
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { FiCheck,FiStar } from 'react-icons/fi';

const missionCards = [
  { icon: '🎯', title: 'Our Mission', desc: 'To empower startups and businesses by delivering innovative, scalable, and affordable digital solutions that drive growth and create real-world impact.' },
  { icon: '🚀', title: 'Our Vision', desc: 'To become a globally recognized software innovation company known for quality, transparency, and cutting-edge technology solutions.' },
];

const teamMembers = [
 
  { name: 'MR. KAMLESH SHAH', role: 'Founder & CEO', desc: 'A visionary leader with a strong background in technology and business strategy, driving innovation and building scalable digital solutions with a focus on long-term growth.', img: '/kamlesh.jpeg' },
];


const About = () => (
  <div className="bg-primary min-h-screen">
    <Navbar />

    {/* Page Hero */}
    <section className="page-hero pt-28 pb-12 diagonal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-3">About Us</h1>
            <p className="text-gray-400 max-w-lg">We are a technology-driven software company delivering scalable, secure, and high-performance digital solutions. Our mission is to help businesses grow through innovation, quality engineering, and customer-centric design.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 mt-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>›</span>
            <span className="text-accent">About Us</span>
          </div>
        </div>
      </div>
    </section>

    {/* Empowering + Why Choose Us */}
            <section className="py-24 section-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
              
              {/* Left Content */}
              <div>
                <h2 className="max-w-[560px] text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
                  Empowering Startups and
                  <br />
                  Modern Businesses
                </h2>

                <p className="mt-6 max-w-[560px] text-[16px] sm:text-[17px] leading-8 text-gray-400">
                  We specialize in building scalable, secure, and high-performance
                  applications tailored for startups, SaaS products, and enterprise
                  solutions. Our approach combines innovation, best practices, and
                  cutting-edge technologies to deliver results that matter.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 max-w-[620px]">
                  {[
                    "High-quality, modern design",
                    "Developer-friendly architecture",
                    "Tailwind CSS & Next.js powered",
                    "Extensive documentation & support",
                    "Optimized for performance & scalability",
                    "Lifetime-ready solutions for growth",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="check-icon mt-1 shrink-0">
                        <FiCheck size={12} />
                      </div>
                      <span className="text-[15px] leading-7 text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[420px] w-full max-w-[430px]">
                  
                  {/* Main Large Card */}
                  <div className="absolute left-0 top-0 h-[320px] sm:h-[355px] w-[250px] sm:w-[280px] rounded-2xl bg-card border border-blue-500/20 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.35)]">
                    <div className="mockup-box h-[88px] sm:h-[90px] rounded-xl bg-blue-500/20" />

                    <div className="mt-5 h-4 rounded bg-blue-500/10" />
                    <div className="mt-5 grid grid-cols-[1.6fr,0.8fr] gap-3">
                      <div className="mockup-box h-[134px] sm:h-[140px] rounded-xl" />
                      <div className="flex flex-col gap-3">
                        <div className="mockup-box h-[42px] rounded-xl" />
                        <div className="mockup-box h-[42px] rounded-xl opacity-70" />
                        <div className="mockup-box h-[42px] rounded-xl bg-blue-500/20" />
                      </div>
                    </div>
                  </div>

                  {/* Top Right Small Card */}
                  <div className="absolute right-0 top-0 h-[188px] w-[116px] sm:h-[190px] sm:w-[120px] rounded-2xl bg-card border border-blue-500/20 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.28)]">
                    <div className="mx-auto mb-3 h-4 w-[72px] rounded-full bg-blue-500/10" />

                    <div className="mx-auto flex h-5 w-[74px] items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-[8px] text-gray-300">
                      Fully Responsive
                    </div>

                    <div className="relative mt-4 flex justify-center">
                      <div className="absolute -top-3 right-[22px] h-16 border-r border-dashed border-blue-400/30" />
                      <div className="flex h-11 w-11 rotate-[-14deg] items-center justify-center rounded-[10px] bg-blue-500/80 shadow-md">
                        <div className="h-5 w-5 rounded-full border-2 border-white/90" />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <div className="rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1 text-[8px] font-semibold text-green-300 shadow">
                        Update Now
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right Small Card */}
                  <div className="absolute bottom-0 right-0 flex h-[112px] w-[116px] sm:h-[118px] sm:w-[120px] items-center justify-center rounded-2xl bg-card border border-blue-500/20 shadow-[0_18px_40px_rgba(15,23,42,0.24)]">
                    <div className="flex h-[54px] w-[54px] rotate-[-12deg] items-center justify-center rounded-xl bg-blue-500/80 shadow-md">
                      <div className="h-6 w-6 rounded-full border-[3px] border-white border-t-transparent rotate-45" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 section-gradient overflow-hidden relative">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
                </div>
        
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Image */}
                    <div className="relative flex justify-center">
                      <div className="relative w-full max-w-[520px]">
                        
                        {/* Glow Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl rounded-3xl"></div>
        
                        {/* Main Card */}
                        <div className="relative card-style rounded-3xl p-6 border border-blue-500/20">
                          <div className="relative card-style rounded-3xl p-6 border border-blue-500/20 h-[400px] overflow-hidden">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover rounded-2xl"
                            >
                              <source src="/aboutSection.mp4" type="video/mp4" />
                            </video>
                          </div>
                                  
                          {/* Floating Badge */}
                          <div className="absolute -top-5 -right-5 bg-accent text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                            MERN Stack
                          </div>
                        </div>
                      </div>
                    </div>
        
                    {/* Right Content */}
                    <div>
                      <div className="badge badge-blue mb-6">
                        <FiStar size={12} />
                        Why Choose Us
                      </div>
        
                      <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                        Modern Development
                        <span className="text-accent"> Solutions</span>
                      </h2>
        
                      <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                        We build scalable, secure, and high-performance applications using
                        modern technologies and industry best practices to help businesses
                        grow faster in the digital world.
                      </p>
        
                      {/* Feature Cards */}
                      <div className="space-y-6">
        
                        {/* Card 1 */}
                        <div className="card-style rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-accent flex-shrink-0">
                              <FiCheck size={20} />
                            </div>
        
                            <div>
                              <h3 className="text-white font-bold text-xl mb-2">
                                Bug-Free & Clean Code
                              </h3>
        
                              <p className="text-gray-400 leading-relaxed text-sm">
                                We write clean, maintainable, and optimized code following
                                modern development standards for long-term scalability and
                                reliability.
                              </p>
                            </div>
                          </div>
                        </div>
        
                        {/* Card 2 */}
                        <div className="card-style rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-accent flex-shrink-0">
                              <FiCheck size={20} />
                            </div>
        
                            <div>
                              <h3 className="text-white font-bold text-xl mb-2">
                                Premier Support & Collaboration
                              </h3>
        
                              <p className="text-gray-400 leading-relaxed text-sm">
                                We provide continuous support, transparent communication, and
                                seamless collaboration throughout the development lifecycle.
                              </p>
                            </div>
                          </div>
                        </div>
        
                        {/* Card 3 */}
                        <div className="card-style rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-accent flex-shrink-0">
                              <FiCheck size={20} />
                            </div>
        
                            <div>
                              <h3 className="text-white font-bold text-xl mb-2">
                                Modern MERN Stack
                              </h3>
        
                              <p className="text-gray-400 leading-relaxed text-sm">
                                Using MongoDB, Express, React, and Node.js, we create
                                high-performance web applications with modern UI and scalable
                                backend systems.
                              </p>
                            </div>
                          </div>
                        </div>
        
                      </div>
                    </div>
        
                  </div>
                </div>
              </section>
        

    {/* Mission & Vision */}
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Our Mission & Vision</h2>
        <p className="section-subtitle">Helping startups and businesses build impactful digital products with confidence.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {missionCards.map((m, i) => (
            <div key={i} className="card-style p-10 rounded-2xl">
              <div className="text-5xl mb-6">{m.icon}</div>
              <h3 className="text-white font-bold text-2xl mb-4">{m.title}</h3>
              <p className="text-gray-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">A passionate team of developers and designers building the future of your business.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m, i) => (
            <div key={i} className="card-style p-6 rounded-2xl text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-blue-500/20 flex items-center justify-center">
                {m.img
                  ? <img src={m.img} alt={m.name} className="w-full h-full object-cover"/>
                  : <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" fill="#4f6ef7" opacity="0.4"/><ellipse cx="24" cy="40" rx="16" ry="10" fill="#4f6ef7" opacity="0.3"/></svg>
                }
              </div>
              <h3 className="text-white font-bold text-base mb-1">{m.name}</h3>
              <p className="text-accent text-sm mb-3">{m.role}</p>
              <p className="text-gray-400 text-xs leading-relaxed text-center">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us Stats */}
 {/* Why Choose Us */}
<section className="relative py-20 lg:py-24 bg-[#f5f5f5] dark:bg-[#0a0f2d] overflow-hidden">
  
  {/* Background Blur */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <div className="h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-5">
        Why Choose Us
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        We combine expertise, innovation, and a client-first approach
        to deliver outstanding solutions.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {/* Card */}
      {[
        {
          title: "Innovative Solutions",
          desc: "We deliver creative and efficient solutions that solve real business problems.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
            </svg>
          )
        },
        {
          title: "Client Focused",
          desc: "Our team works closely with clients to ensure satisfaction and transparency.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <circle cx="9" cy="7" r="4"/>
            </svg>
          )
        },
        {
          title: "Fast & Reliable",
          desc: "We deliver projects on time without compromising on quality or performance.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
          )
        },
        {
          title: "Secure & Scalable",
          desc: "Our solutions are built with security and scalability in mind for long-term growth.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
            </svg>
          )
        }
      ].map((item, index) => (
        
        <div
            key={index}
            className="group relative bg-white dark:bg-[#111944] rounded-[28px] 
            px-5 py-7 shadow-md hover:shadow-2xl transition-all duration-500 
            hover:-translate-y-3 cursor-pointer overflow-hidden min-h-[320px]"
          >

          {/* Bottom Blue Progress Bar */}
          <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 transition-all duration-500 group-hover:scale-110">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="text-[25px] font-bold text-black dark:text-white mb-2 leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[15px] leading-[1.7] text-gray-600 dark:text-gray-300">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    <Footer />
    <ScrollToTop />
  </div>
);

export default About;
