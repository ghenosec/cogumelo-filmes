"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-100 bg-black shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/cogumelo-logo.png" alt="Cogumelo Filmes Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-xl md:text-2xl font-heading font-extrabold text-white hidden sm:inline">Cogumelo Filmes</span>
        </Link>
        <button 
          className="md:hidden text-brand-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <ul className="hidden md:flex space-x-8">
          <li><Link href="#sobre" className="hover:text-brand-blue transition-colors duration-200">Sobre</Link></li>
          <li><Link href="#servicos" className="hover:text-brand-blue transition-colors duration-200">Serviços</Link></li>
          <li><Link href="#portfolio" className="hover:text-brand-blue transition-colors duration-200">Portfólio</Link></li>
          <li><Link href="#contato" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300">Contato</Link></li>
        </ul>
        <div className={`md:hidden absolute top-full left-0 w-full bg-black shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="#sobre" onClick={() => setIsOpen(false)} className="block py-2 hover:text-brand-blue transition-colors duration-200">Sobre</Link></li>
            <li><Link href="#servicos" onClick={() => setIsOpen(false)} className="block py-2 hover:text-brand-blue transition-colors duration-200">Serviços</Link></li>
            <li><Link href="#portfolio" onClick={() => setIsOpen(false)} className="block py-2 hover:text-brand-blue transition-colors duration-200">Portfólio</Link></li>
            <li><Link href="#contato" onClick={() => setIsOpen(false)} className="block py-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-5 rounded-full transition-colors duration-300">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;