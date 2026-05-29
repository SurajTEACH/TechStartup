
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
<<<<<<< HEAD
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Careers from './pages/Careers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import WhatsAppButton from './components/WhatsAppButton';
=======
import { ThemeProvider } from './context/ThemeContext.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Support from './pages/Support.jsx';
import Careers from './pages/Careers.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
>>>>>>> 0655eba6882c0e0d7c157d59f5db4597f38ddc63

import { Terms, Privacy, Refund } from './pages/PolicyPages.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />
          <Route path= "/projects/:slug" element={<ProjectDetails />} />
          <Route path="/support" element={<Support />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
