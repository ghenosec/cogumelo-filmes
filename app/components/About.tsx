import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-12 bg-dark-bg text-text-main">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
          Cogumelo Filmes: Paixão Que Move Câmeras e Histórias.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed mb-6 text-text-light font-sans">
              Com mais de 10 anos de experiência, somos sua parceira estratégica no universo audiovisual.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-sans">
              Na Cogumelo Filmes, respiramos cinema e somos obcecados por contar histórias. Nossa equipe de criativos e técnicos experientes transforma conceitos em realidade visual, combinando paixão artística com rigor técnico.
            </p>
            <p className="text-lg leading-relaxed font-sans">
              Do roteiro à pós-produção, garantimos que cada projeto não apenas atinja, mas supere as expectativas, seja para uma campanha publicitária de alto impacto ou um filme independente com alma.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl border border-brand-blue/50">
            <Image 
              src="/images/time.png" 
              alt="Equipe Cogumelo Filmes em ação" 
              layout="fill" 
              objectFit="cover" 
              className="hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;