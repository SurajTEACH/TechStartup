import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { FiArrowRight } from 'react-icons/fi';

const Support = () => (
  <div className="bg-primary min-h-screen">
    <Navbar />
    <section className="page-hero pt-28 pb-12 diagonal-bg">
      <div className="max-w-7xl mx-auto px-6 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-3">Contact Page</h1>
          <p className="text-gray-400 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 mt-2">
          <Link to="/" className="hover:text-white">Home</Link><span>›</span><span className="text-accent">Contact Page</span>
        </div>
      </div>
    </section>

    <section className="py-20">
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

export default Support;
