"use client"

import { FormInput } from '@/components/FormInput';
import { Logo } from '@/components/Logo';
import React, { useState } from 'react';


export default function SignUpForm () {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e : Event) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e : Event) => {
    const { name , value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
     
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8">
      <Logo label={"Create account"} />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange}/>
        <FormInput name="email" type="email" label="Email" value={formData.email} onChange={handleChange}/>
        <FormInput name="password" type={showPassword ? 'text' : 'password'}label="Password" showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} value={formData.password} onChange={handleChange}/>
        <FormInput name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'}label="Confirm Password" showPassword={showConfirmPassword} onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} value={formData.confirmPassword} onChange={handleChange}/>

        <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Sign Up
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </form>
    </div>

    </div>
  );
};


