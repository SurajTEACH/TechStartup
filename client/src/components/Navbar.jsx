import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isDark, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/support' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={isDark ? '/logoCompnay.png' : '/logolight.jpeg'}
            alt="CodeSetu Technologies"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'font-semibold'
                  : 'opacity-70 hover:opacity-100'
              }`}
              style={{ color: 'var(--text-primary)' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            Sign In
          </Link>

          <Link to="/signup">
            <button className="btn-primary text-sm">
              Sign Up
            </button>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-lg"
            style={{ color: 'var(--text-primary)' }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-6 py-4"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium py-2 ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'opacity-70'
                }`}
                style={{ color: 'var(--text-primary)' }}
              >
                {link.name}
              </Link>
            ))}

            <div
              className="flex gap-3 pt-2 border-t"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <Link
                to="/signin"
                className="btn-outline flex-1 justify-center text-sm"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="btn-primary flex-1 justify-center text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;