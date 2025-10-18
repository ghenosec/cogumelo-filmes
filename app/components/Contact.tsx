import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-12 bg-dark-bg text-text-main">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
          Vamos Criar Seu Próximo Sucesso?
        </h2>
        <p className="text-lg text-text-light text-center mb-12 font-sans">
          Entre em contato conosco e descubra como podemos elevar seu projeto audiovisual.
        </p>

        <div className="max-w-md mx-auto bg-dark-secondary p-8 rounded-xl shadow-xl border border-brand-blue/50">
          <div className="text-center">
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5534999129291&text=Olá! Gostaria de saber mais sobre os serviços da Cogumelo Filmes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-full transition-colors duration-300 font-sans text-lg"
            >
              <MessageCircle size={28} />
              <span>Fale Conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;