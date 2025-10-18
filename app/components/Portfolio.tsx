"use client";

import React from 'react';
import Image from 'next/image';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

const portfolioItems = [
  {
    title: 'Jeep Commander 2026 - Jeep Saga',
    thumbnail: '/images/jeepcommander.png', 
    videoUrl: '/videos/video2.mp4', 
  },
  {
    title: 'Praia Club Sport Bar',
    thumbnail: '/images/praiaclubesport.png',
    videoUrl: '/videos/video3.mp4', 
  },
  {
    title: 'Mel Flores de Aroeira',
    thumbnail: '/images/melfloresdearoeira.png',
    videoUrl: '/videos/video1.mp4', 
  },
];

const Portfolio: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = React.useState('');

  const openVideoModal = (url: string) => {
    setCurrentVideoUrl(url);
    setShowModal(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoUrl('');
    setShowModal(false);
  };

  return (
    <section id="portfolio" className="py-12 bg-dark-bg text-text-main">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Nosso Trabalho
        </h2>
        <p className="text-lg text-text-light text-center mb-12 font-sans">
          Histórias que contamos com paixão.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openVideoModal(item.videoUrl)}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={600}
                height={337} 
                objectFit="cover"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircleIcon className="h-16 w-16 text-brand-blue" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold font-sans">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/cogumelofilmes/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 font-sans"
          >
            Explore Nosso Portfólio Completo
          </a>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-dark-bg rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeVideoModal} 
              className="absolute top-4 right-4 text-white text-3xl z-60 hover:text-brand-blue transition-colors duration-200"
              aria-label="Fechar vídeo"
            >
              &times;
            </button>
            <video
              src={currentVideoUrl}
              controls
              autoPlay
              className="w-full h-full"
              title="Portfólio Cogumelo Filmes"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;