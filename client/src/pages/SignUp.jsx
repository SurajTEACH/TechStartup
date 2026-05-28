import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignUp = () => (
  <div className="bg-primary min-h-screen diagonal-bg flex flex-col">
    <Navbar />
    <div className="flex-1 flex items-center justify-center px-4 pt-20 pb-12">
      <div className="card-style p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Register to access all features and manage your projects.</p>
        <div className="space-y-5">
          <div>
            <label className="label-text">Full Name</label>
            <input className="input-field" type="text" placeholder="Enter your full name"/>
          </div>
          <div>
            <label className="label-text">Your Email</label>
            <input className="input-field" type="email" placeholder="Enter your Email"/>
          </div>
          <div>
            <label className="label-text">Your Password</label>
            <input className="input-field" type="password" placeholder="Enter your Password"/>
          </div>
          <div>
            <label className="label-text">Confirm Password</label>
            <input className="input-field" type="password" placeholder="Confirm your Password"/>
          </div>
          <button className="btn-primary w-full justify-center py-3 text-base mt-2">Sign Up</button>
          <p className="text-gray-400 text-sm text-center">
            Already have an account?{' '}
            <Link to="/signin" className="text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
