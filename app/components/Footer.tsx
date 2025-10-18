import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-secondary py-12 text-text-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl border border-brand-blue/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0!2d-48.2365418!3d-18.929657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x94a44ff4e6b6ee53%3A0x9d092fb18e63fa79!2sR.+Francisco+Ant%C3%B4nio+de+Oliveira%2C+1736+-+Santa+M%C3%B4nica%2C+Uberl%C3%A2ndia+-+MG%2C+38408-258!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Cogumelo Filmes"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-start space-x-4 mb-4">
                <Link href="/" className="flex-shrink-0 pt-2">
                  <Image src="/images/cogumelo-logo2.png" alt="Cogumelo Filmes Logo" width={80} height={80} />
                </Link>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-white">Cogumelo Filmes</h3>
                  <p className="text-text-light">
                    Nascida em abril de 2013, a ideia de um cogumelo com propriedade alucinógenas,
                    se junta ao nome e slogan, formando a Cogumelo - Filmes Alucinantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-brand-blue" size={20} />
                <span className="text-text-light">Uberlândia, MG - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-blue" size={20} />
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5534999129291" className="text-text-light hover:text-brand-blue transition-colors">
                  (34) 99912-9291
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-blue" size={20} />
                <a href="mailto:juninho@cogumelofilmes.com.br" className="text-text-light hover:text-brand-blue transition-colors">
                juninho@cogumelofilmes.com.br
                </a>
              </div>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mb-6">
              <Link href="https://www.instagram.com/cogumelofilmes/" target="_blank" rel="noopener noreferrer" 
                    className="text-text-light hover:text-brand-blue transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.youtube.com/@CogumeloFilmes" target="_blank" rel="noopener noreferrer" 
                    className="text-text-light hover:text-brand-blue transition-colors">
                <Youtube size={24} />
              </Link>
              <Link href="https://www.facebook.com/CogumeloFilmes/" target="_blank" rel="noopener noreferrer" 
                    className="text-text-light hover:text-brand-blue transition-colors">
                <Facebook size={24} />
              </Link>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm font-sans">
                © {new Date().getFullYear()} Cogumelo Filmes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;