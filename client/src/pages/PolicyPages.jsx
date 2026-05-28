import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const PolicyPage = ({ title, breadcrumb, children }) => (
  <div className="bg-primary min-h-screen">
    <Navbar />
    <section className="page-hero pt-28 pb-12 diagonal-bg">
      <div className="max-w-7xl mx-auto px-6 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-3">{title}</h1>
          <p className="text-gray-400">Last updated: January 2026</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 mt-2">
          <Link to="/" className="hover:text-white">Home</Link><span>›</span><span className="text-accent">{breadcrumb}</span>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="card-style p-10 rounded-2xl prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </section>
    <Footer />
    <ScrollToTop />
  </div>
);

export const Terms = () => (
  <PolicyPage title="Terms & Conditions" breadcrumb="Terms & Conditions">
    <h2 className="text-white text-2xl font-bold mb-4">Terms & Conditions</h2>
    <p className="text-gray-400 leading-relaxed mb-6">Welcome to SK Software Innovation Solution. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.</p>
    <h3 className="text-white text-lg font-bold mb-3">1. Acceptance of Terms</h3>
    <p className="text-gray-400 leading-relaxed mb-6">By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
    <h3 className="text-white text-lg font-bold mb-3">2. Services</h3>
    <p className="text-gray-400 leading-relaxed mb-6">SK Software Innovation Solution provides software development, web design, and IT consulting services. We reserve the right to modify, suspend, or discontinue any service at any time.</p>
    <h3 className="text-white text-lg font-bold mb-3">3. Intellectual Property</h3>
    <p className="text-gray-400 leading-relaxed mb-6">All content, code, and materials created by SK Software remain our intellectual property unless explicitly transferred via written agreement. Clients receive a license to use deliverables upon full payment.</p>
    <h3 className="text-white text-lg font-bold mb-3">4. Payment</h3>
    <p className="text-gray-400 leading-relaxed mb-6">Payment terms are defined per project. A deposit may be required before work begins. Late payments may result in project suspension.</p>
    <h3 className="text-white text-lg font-bold mb-3">5. Limitation of Liability</h3>
    <p className="text-gray-400 leading-relaxed mb-6">SK Software is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our maximum liability shall not exceed the amount paid for the specific service.</p>
    <h3 className="text-white text-lg font-bold mb-3">6. Contact</h3>
    <p className="text-gray-400 leading-relaxed">For any questions regarding these terms, please contact us at s.k.singh72718@gmail.com</p>
  </PolicyPage>
);

export const Privacy = () => (
  <PolicyPage title="Privacy Policy" breadcrumb="Privacy Policy">
    <h2 className="text-white text-2xl font-bold mb-4">Privacy Policy</h2>
    <p className="text-gray-400 leading-relaxed mb-6">SK Software Innovation Solution is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
    <h3 className="text-white text-lg font-bold mb-3">1. Information We Collect</h3>
    <p className="text-gray-400 leading-relaxed mb-6">We collect information you provide directly, such as name, email address, phone number, and project details when you contact us or sign up for our services.</p>
    <h3 className="text-white text-lg font-bold mb-3">2. How We Use Your Information</h3>
    <p className="text-gray-400 leading-relaxed mb-6">We use your information to provide and improve our services, communicate with you, send updates, and process payments.</p>
    <h3 className="text-white text-lg font-bold mb-3">3. Data Security</h3>
    <p className="text-gray-400 leading-relaxed mb-6">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.</p>
    <h3 className="text-white text-lg font-bold mb-3">4. Cookies</h3>
    <p className="text-gray-400 leading-relaxed mb-6">We use cookies to enhance your browsing experience. You may disable cookies through your browser settings, though this may affect functionality.</p>
    <h3 className="text-white text-lg font-bold mb-3">5. Contact</h3>
    <p className="text-gray-400 leading-relaxed">For privacy-related questions, contact us at s.k.singh72718@gmail.com</p>
  </PolicyPage>
);

export const Refund = () => (
  <PolicyPage title="Refund Policy" breadcrumb="Refund Policy">
    <h2 className="text-white text-2xl font-bold mb-4">Refund Policy</h2>
    <p className="text-gray-400 leading-relaxed mb-6">We strive to deliver high-quality services and ensure client satisfaction. Please read our refund policy carefully before purchasing our services.</p>
    <h3 className="text-white text-lg font-bold mb-3">1. General Policy</h3>
    <p className="text-gray-400 leading-relaxed mb-6">All sales are final once work has commenced. Refunds are considered only in specific circumstances outlined below.</p>
    <h3 className="text-white text-lg font-bold mb-3">2. Eligibility for Refund</h3>
    <p className="text-gray-400 leading-relaxed mb-6">A refund may be issued if: (a) work has not yet begun, (b) we fail to deliver as per the agreed scope, or (c) there is a technical error on our part.</p>
    <h3 className="text-white text-lg font-bold mb-3">3. Non-Refundable Items</h3>
    <p className="text-gray-400 leading-relaxed mb-6">Deposits, completed milestones, third-party costs, and domain/hosting fees are non-refundable.</p>
    <h3 className="text-white text-lg font-bold mb-3">4. Refund Process</h3>
    <p className="text-gray-400 leading-relaxed mb-6">To request a refund, email us at s.k.singh72718@gmail.com within 7 days of the issue. Approved refunds are processed within 10 business days.</p>
    <h3 className="text-white text-lg font-bold mb-3">5. Contact</h3>
    <p className="text-gray-400 leading-relaxed">For refund queries, contact: s.k.singh72718@gmail.com or +91 6265987559</p>
  </PolicyPage>
);
