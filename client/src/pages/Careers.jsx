import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const filters = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

const Careers = () => {
  const [active, setActive] = useState('All');

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <section className="page-hero pt-28 pb-12 diagonal-bg">
        <div className="max-w-7xl mx-auto px-6 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-3">Careers</h1>
            <p className="text-gray-400 max-w-lg">Join our team and build the future of technology. Explore exciting career opportunities at SK Software Innovation Solution.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 mt-2">
            <Link to="/" className="hover:text-white">Home</Link><span>›</span><span className="text-accent">Careers</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${active === f ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📋</div>
            <h3 className="text-white text-2xl font-bold mb-3">No Opportunities Available</h3>
            <p className="text-gray-400">Check back soon for new opportunities!</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Careers;
