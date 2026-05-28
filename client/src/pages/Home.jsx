import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { FiArrowRight, FiSearch, FiCheck, FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { BsGrid, BsStack, BsGrid3X3, BsGear, BsDisplay, BsTelephone } from 'react-icons/bs';

const features = [
  { icon: <BsGrid size={24}/>, title: 'Modern Tech Stack', desc: 'We build scalable and future-ready applications using modern technologies like React, Node.js, Express, MongoDB, and cloud-based services. Our tech stack ensures high performance, security, and seamless user experience across all platforms.' },
  { icon: <BsStack size={24}/>, title: 'Clean & Optimized Code', desc: 'Our development process focuses on writing clean, structured, and optimized code that enhances application speed, reduces bugs, and improves long-term maintainability.' },
  { icon: <BsGrid3X3 size={24}/>, title: 'Scalable Architecture', desc: 'We design applications with a scalable architecture that grows with your business — supporting high-traffic workloads, modular components, and smooth feature expansion.' },
  { icon: <BsGear size={24}/>, title: 'Secure Applications', desc: 'Security is built into every layer. From authentication and authorization to encrypted APIs and secure databases, we ensure your data and users remain completely protected.' },
  { icon: <BsDisplay size={24}/>, title: 'Fast Performance', desc: 'Our applications are engineered for speed — optimized APIs, efficient database queries, and lightning-fast frontend interactions ensure a seamless user experience.' },
  { icon: <BsTelephone size={24}/>, title: 'Smart Integration', desc: 'We integrate APIs, payment gateways, CRM tools, AI modules, and cloud services to deliver a fully connected and automated workflow.' },
  { icon: <BsGrid3X3 size={24}/>, title: 'Reliable Backend Systems', desc: 'Our backend is designed for reliability, ensuring smooth operations, zero downtime, and powerful data handling capabilities.' },
  { icon: <BsStack size={24}/>, title: 'Seamless Deployment', desc: 'Using modern deployment tools like Docker, CI/CD pipelines, and cloud hosting, we ensure smooth and uninterrupted releases for your product.' },
];

const projects = [
  {
    title: 'Kakkarenterprises', category: 'Website Development',
    desc: 'We specialize in the sale, service, repair, and spare parts of all types of electric',
    tags: ['CSS', 'JavaScript', 'HTML'], liveDemo: '#', github: null,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
  },
  {
    title: 'SK Software Solution', category: 'Website Development',
    desc: 'We provide professional software development, web application creation, and modern website design.',
    tags: ['Next.Js', 'MongoDB', 'Node.js', 'tailwind css'], liveDemo: '#', github: null,
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80',
  },
  {
    title: 'Organic Chakki', category: 'Website Development',
    desc: 'Discover the authentic taste of traditional Indian spices, carefully selected from the finest farms',
    tags: ['React', 'JavaScript', 'Tailwind css', 'NodeJs'], liveDemo: '#', github: '#',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80',
  },
];

const testimonials = [
  { stars: 5, text: '"Working with this developer was an absolute pleasure. The MERN stack application delivered was robust, scalable, and exactly as envisioned. Highly recommended!', name: 'Suresh Kumar', role: 'Founder @TechWave', img: 'https://i.pravatar.cc/60?img=11' },
  { stars: 5, text: '"Exceptional attention to detail and timely delivery. The project was bug-free and perfectly optimized for performance. The support during the deployment phase was fantastic.', name: 'Anita Sharma', role: 'CEO @UIExperts', img: 'https://i.pravatar.cc/60?img=5' },
  { stars: 5, text: '"The application exceeded our expectations. Clean code, efficient database handling, and seamless frontend experience made it a pleasure to work with this developer.', name: 'Rohit Verma', role: 'CTO @CodeCraft', img: 'https://i.pravatar.cc/60?img=8' },
];

const monthlyPricing = [
  {
    price: '$10', period: '/mo', name: 'Basic', desc: 'Best for individuals & small websites',
    btn: 'Start Free Trial', popular: true, btnLink: '/signup',
    features: ['Static Website (Up to 3 Pages)', 'Responsive Design (Mobile Friendly)', 'Basic UI Design', 'Contact Form Integration', 'SEO Friendly Structure', 'Free Hosting Guidance', 'Email Support'],
    notIncluded: ['Email Support'],
  },
  {
    price: '$49', period: '/mo', name: 'Professional', desc: 'Perfect for startups & growing businesses',
    btn: 'Get Started', popular: true, btnLink: '/signup',
    features: ['Dynamic Website (Up to 8 Pages)', 'Admin Panel / CMS', 'Responsive UI (Mobile + Tablet)', 'SEO Optimization', 'API Integration', 'Performance Optimization', 'Contact & Lead Forms'],
  },
  {
    price: '$99', period: '/mo', name: 'Enterprise (Pro)', desc: 'Advanced solutions for large businesses',
    btn: 'Contact Us', popular: false, btnLink: '/support',
    features: ['Custom Web Application', 'Full Stack Development (MERN / Next.js)', 'Advanced Admin Dashboard', 'Authentication & Role Management', 'Payment Gateway Integration', 'High Performance & Security', 'Cloud Deployment Support'],
  },
];

const blogs = [
  { category: 'Blockchain Technology', title: 'Blockchain Technology', desc: 'Blockchain is a shared, immutable digital ledger, enabling the recording of transactions and the tra...', author: 'SK SOFTWARE', date: 'Apr 14, 2026', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=80', authorImg: '' },
  { category: 'Software Development', title: 'The Importance of Custom Software Development for Modern Businesses', desc: 'In today\'s competitive digital landscape, businesses need more than off-the-shelf solutions to stay ...', author: 'SURESH KUMAR SINGH', date: 'Jan 4, 2026', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80', authorImg: 'https://i.pravatar.cc/40?img=12' },
  { category: 'Software Development', title: 'Software Development: Building Scalable, Secure, and Future-Ready Solutions', desc: 'In today\'s digital world, software development plays a critical role in shaping how businesses opera...', author: 'SURESH KUMAR SINGH', date: 'Jan 4, 2026', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', authorImg: 'https://i.pravatar.cc/40?img=12' },
];

const Home = () => {
  const [pricingYearly, setPricingYearly] = useState(false);

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient diagonal-bg min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            <div>
              <div className="badge badge-blue mb-6">
                <FiStar size={12} /> Trusted by 100+ Companies Worldwide
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Build Powerful & <span className="text-accent">Modern</span><br />Digital Solutions
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                We provide professional software development, web application creation, and modern website design. Get unlimited updates with 24×7 dedicated technical support. Your business deserves scalable, secure, and high-performance solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/support"><button className="btn-primary text-base px-7 py-3">Get Started <FiArrowRight /></button></Link>
                <Link to="/projects/:slug"><button className="btn-outline text-base px-7 py-3"><FiSearch size={16} /> Explore Projects</button></Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[['100+','Projects Done'],['50+','Happy Clients'],['10+','Years Experience'],['24/7','Support']].map(([num,label])=>(
                  <div key={label} className="card-style p-5 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-1">{num}</div>
                    <div className="text-gray-400 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero Visual - Exact match to original */}
            <div className="hero-visual-wrap">
              {/* Background concentric circles */}
              <div className="hero-circle-1"></div>
              <div className="hero-circle-2"></div>

              {/* Floating code card */}
              <div className="hero-code-card animate-float">
                {/* Top code snippet */}
                <div className="hero-code-snippet">
                  <span className="c-muted">&lt; </span>
                  <span className="c-blue">div</span>
                  <span className="c-muted"> className = </span>
                  <span className="c-green">"app"</span>
                  <span className="c-muted"> &gt;</span>
                </div>

                {/* </> center icon */}
                <div className="hero-slash-icon">
                  <span className="hero-slash-text">&lt;/&gt;</span>
                </div>

                {/* Bottom code snippet */}
                <div className="hero-code-bottom">
                  <div className="c-muted">function <span style={{color:'var(--accent)'}}>App</span>() {'{'}</div>
                </div>

                {/* Dots */}
                <div className="hero-dots">
                  <div className="hero-dot active"></div>
                  <div className="hero-dot"></div>
                </div>

                {/* Tech badges */}
                <div className="hero-tech-row">
                  <div className="tech-badge">React</div>
                  <div className="tech-badge">Next.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-gradient py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Key Features</h2>
          <p className="section-subtitle">We provide cutting-edge solutions with modern technologies, clean code, scalable architecture, and secure, high-performance applications.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-style p-6 rounded-xl">
                <div className="icon-box">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cutting Edge Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-64 h-64 border border-blue-500/10 rotate-45 -translate-x-32 -translate-y-32"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 border border-blue-500/10 rotate-45 translate-x-32 translate-y-32"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 text-center mb-12">
    <h2 className="section-title">Experience Our Cutting-Edge Solutions</h2>
    <p className="section-subtitle">
      Discover how our innovative technology and expert team deliver
      high-performance applications, seamless integrations, and scalable
      solutions tailored to your business needs.
    </p>
  </div>

  <div className="max-w-4xl mx-auto px-6">
    <div className="rounded-2xl overflow-hidden border border-blue-500/20 relative">
      <video
        src="/shap.mp4"
        className="w-full object-cover max-h-96"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
          <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-t-transparent border-b-transparent border-l-white ml-1"></div>
        </button>
      </div>
    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-50">
      {["UIdeck", "TailGrids", "Lineicons", "graygrids", "TailAdmin"].map((b) => (
        <span key={b} className="text-gray-400 font-bold text-lg">
          {b}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* Empowering Startups */}
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
  {/* new section */}
   {/* New Section */}
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
                  <img
                    src="/about.svg"
                    alt="about"
                    className="w-full object-contain animate-float"
                  />

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


      {/* Featured Projects */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Featured Projects</h2>
          <p className="section-subtitle">Explore our portfolio of innovative projects and solutions that showcase our expertise and creativity.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="card-style rounded-2xl overflow-hidden">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
                  <span className="featured-badge">Featured</span>
                </div>
                <div className="p-6">
                  <span className="badge badge-blue text-xs mb-3">{p.category}</span>
                  <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="border-t border-blue-900/30 pt-4 flex gap-4">
                    <a href={p.liveDemo} className="flex items-center gap-1 text-accent text-sm hover:underline"><FiExternalLink size={13}/> Live Demo</a>
                    {p.github && <a href={p.github} className="flex items-center gap-1 text-gray-400 text-sm hover:text-white"><FiGithub size={13}/> GitHub</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects/:slug"><button className="btn-primary px-10 py-3 text-base">View All Projects <FiArrowRight/></button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Hear from our satisfied clients who trusted us to deliver high-quality, scalable MERN stack applications.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card-style p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_,j)=><FiStar key={j} className="star fill-current" size={18}/>)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t border-blue-900/30 pt-5 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Flexible and Transparent Pricing</h2>
          <p className="section-subtitle">Choose a plan that fits your needs. Our pricing is simple, affordable, and scalable as your business grows.</p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!pricingYearly ? 'text-accent' : 'text-gray-400'}`}>Monthly</span>
            <div className={`toggle-switch ${pricingYearly ? 'yearly' : ''}`} onClick={() => setPricingYearly(!pricingYearly)}></div>
            <span className={`text-sm font-medium ${pricingYearly ? 'text-accent' : 'text-gray-400'}`}>Yearly</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyPricing.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.popular && i === 1 ? 'popular' : ''}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-blue text-xs">Popular</div>}
                <div className="flex items-end justify-between mb-2">
                  <div><span className="text-4xl font-extrabold text-white">{pricingYearly ? plan.price.replace('$', '$').replace(/\d+/, n => Math.round(n*10)) : plan.price}</span><span className="text-gray-400 text-sm">{plan.period}</span></div>
                  <span className="text-white font-bold">{plan.name}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <Link to={plan.btnLink}><button className="btn-primary w-full justify-center mb-8 py-3">{plan.btn}</button></Link>
                <div className="space-y-3">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <FiCheck size={14} className="text-accent flex-shrink-0"/>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">From the Blog of the Week</h2>
          <p className="section-subtitle">Stay updated with our latest news, insights, and updates</p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b, i) => (
              <div key={i} className="blog-card">
                <div className="relative">
                  <img src={b.img} alt={b.title} className="w-full h-52 object-cover"/>
                  <span className="category-badge">{b.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{b.desc}</p>
                  <div className="border-t border-blue-900/30 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold">{b.author[0]}</div>
                      <span className="text-white text-xs font-semibold">{b.author}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-xs">Date</div>
                      <div className="text-gray-400 text-xs">{b.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Subscribe */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card-style p-8 rounded-2xl">
              <h3 className="text-white text-2xl font-bold mb-2">Have a Question? Get in Touch</h3>
              <p className="text-gray-400 text-sm mb-8">Our support team is ready to assist you. Fill out the form below, and we'll respond promptly.</p>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div><label className="label-text">Full Name</label><input className="input-field" placeholder="Enter your full name"/></div>
                <div><label className="label-text">Email Address</label><input className="input-field" placeholder="Enter your email address"/></div>
                <div><label className="label-text">Phone Number (Optional)</label><input className="input-field" placeholder="Enter your phone number"/></div>
                <div><label className="label-text">Subject (Optional)</label><input className="input-field" placeholder="Enter subject"/></div>
              </div>
              <div className="mb-6"><label className="label-text">Your Message</label><textarea className="input-field h-32 resize-none" placeholder="Write your message here..."></textarea></div>
              <button className="btn-primary px-10 py-3">Send Message <FiArrowRight/></button>
            </div>
            <div className="card-style p-8 rounded-2xl">
              <h3 className="text-white text-xl font-bold mb-2">Subscribe for Latest Updates</h3>
              <p className="text-gray-400 text-sm mb-6">Stay informed with our latest news, updates, and special offers. Enter your details below to subscribe.</p>
              <div className="border-t border-blue-900/30 mb-6"></div>
              <div className="space-y-4">
                <input className="input-field" placeholder="Your Full Name"/>
                <input className="input-field" placeholder="Your Email Address"/>
                <button className="btn-primary w-full justify-center py-3">Subscribe Now</button>
                <p className="text-gray-500 text-xs text-center">We respect your privacy. No spam, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
