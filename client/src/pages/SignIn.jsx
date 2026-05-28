import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignIn = () => (
  <div className="bg-primary min-h-screen diagonal-bg flex flex-col">
    <Navbar />
    <div className="flex-1 flex items-center justify-center px-4 pt-20 pb-12">
      <div className="card-style p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-2">Sign in to your account</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Login to your account for a faster checkout.</p>
        <div className="space-y-5">
          <div>
            <label className="label-text">Your Email</label>
            <input className="input-field" type="email" placeholder="Enter your Email"/>
          </div>
          <div>
            <label className="label-text">Your Password</label>
            <input className="input-field" type="password" placeholder="Enter your Password"/>
          </div>
          <button className="btn-primary w-full justify-center py-3 text-base mt-2">Sign in</button>
          <p className="text-gray-400 text-sm text-center">
            Don't you have an account?{' '}
            <Link to="/signup" className="text-accent hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
