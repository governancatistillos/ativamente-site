import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Mail, Instagram } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 bg-white p-2 rounded-xl inline-block w-fit">
              <img src="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-q08bs.png" alt="AtivaMente Alphaville Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Clínica especializada em atendimento infantil com equipe multidisciplinar dedicada ao desenvolvimento integral da criança.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Início</Link></li>
              <li><Link to="/terapia-para-autismo-alphaville" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Autismo</Link></li>
              <li><Link to="/aba-infantil-alphaville" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">ABA</Link></li>
              <li><Link to="/fonoaudiologia-infantil-alphaville" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Fonoaudiologia</Link></li>
              <li><Link to="/desenvolvimento-infantil-alphaville" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Desenvolvimento</Link></li>
              <li><Link to="/terapias" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Terapias</Link></li>
              <li><Link to="/contato" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">Alameda Rio Negro, 500 - Alphaville Industrial, Barueri - SP, Brasil Unidade I - Salas 104, 105, 107 e 108 Unidade II - Salas 109, 112, 115 e 116</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-[#25D366]" />
                <a href="https://wa.me/5511991263146" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary-foreground hover:text-[#25D366] transition-colors">Fale conosco: (11) 99126-3146</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">contato@clinicaativamentealphaville.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Horário de Atendimento</h3>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Segunda a Sexta: 8h às 18h<br />
              Sábado: 8h às 12h
            </p>
            <h3 className="text-lg font-bold mb-4 text-accent">Redes sociais</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ativamentealphaville/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da AtivaMente" className="inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-bold hover:bg-accent hover:text-primary transition-all duration-200">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 AtivaMente Alphaville. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;