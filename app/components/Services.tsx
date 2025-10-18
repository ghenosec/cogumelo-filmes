import React from 'react';
import { FilmIcon, TvIcon, SparklesIcon } from '@heroicons/react/24/outline';

const servicesData = [
  {
    icon: FilmIcon,
    title: 'Produção Publicitária',
    description: 'Criamos filmes publicitários envolventes que capturam a essência da sua marca e comunicam sua mensagem com clareza e emoção. Da concepção à entrega, garantimos excelência e impacto.',
  },
  {
    icon: TvIcon,
    title: 'Produção Independente',
    description: 'Apoiamos cineastas e criadores independentes em todas as fases, de curtas e longas-metragens a documentários. Conte com nossa expertise técnica e paixão artística para realizar seu projeto.',
  },
  {
    icon: SparklesIcon,
    title: 'Pós-Produção',
    description: 'Nossa equipe de pós-produção é especialista em dar o toque final. Serviços incluem edição, color grading, motion graphics, finalização e efeitos visuais (VFX) que elevam a qualidade do seu conteúdo.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-10 bg-dark-secondary text-text-main">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Nossos Serviços
        </h2>
        <p className="text-lg text-text-light text-center mb-10 font-sans">
          Soluções completas para sua produção audiovisual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-dark-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center border border-transparent hover:border-brand-blue h-full"
            >
              <service.icon className="h-12 w-12 text-brand-blue mb-4" />
              <h3 className="text-lg font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-text-light font-sans leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contato" 
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 font-sans"
          >
            Descubra Nossas Soluções
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;