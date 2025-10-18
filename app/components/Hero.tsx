import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[70vh] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/60 z-10"></div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 object-cover w-full h-full"
        poster="/images/loading.png" 
      >
        <source src="/videos/cogumelo-reel.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-4 leading-tight">
          Sua Visão. Nossa Imagem. <br className="hidden md:block"/> Filmes Que Deixam Marca.
        </h1>
        <h2 className="text-xl md:text-2xl text-text-light mb-8 max-w-2xl mx-auto font-sans">
          Excelência em produção e pós-produção audiovisual para o mercado publicitário e projetos independentes.
        </h2>
        <a 
          href="#contato" 
          className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 font-sans"
        >
          Solicite um Orçamento Agora
        </a>
      </div>
    </section>
  );
};

export default Hero;