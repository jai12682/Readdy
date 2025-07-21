
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/62245e7e79f073126bf3d4b3885b372a/567ef5531b3859efb1f67c3aa90b1f17.png" 
              alt="Stratible Logo"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-slate-600 hover:text-slate-800 transition-colors whitespace-nowrap">Features</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-800 transition-colors whitespace-nowrap">Pricing</Link>
            <Link href="/login" className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer">Login</Link>
            <Link href="/register" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer">Get Started</Link>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/features" className="text-slate-600 hover:text-slate-800 transition-colors whitespace-nowrap">Features</Link>
              <Link href="/pricing" className="text-slate-600 hover:text-slate-800 transition-colors whitespace-nowrap">Pricing</Link>
              <Link href="/login" className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer text-center">Login</Link>
              <Link href="/register" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer text-center">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}