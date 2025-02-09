"use client"

import { FormInput } from '@/components/FormInput';
import { Logo } from '@/components/Logo';
import React, { useState } from 'react';


export default function SignUpForm () {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      <Logo label={"Sign In"} />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput name="email" type="email" label="Email" value={formData.email} onChange={handleChange}/>
        <FormInput name="password" type={showPassword ? 'text' : 'password'}label="Password" showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} value={formData.password} onChange={handleChange}/>

        <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Sign In
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>

    </div>
  );
};


