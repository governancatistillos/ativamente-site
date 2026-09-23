import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre nós' },
    { path: '/terapia-para-autismo-alphaville', label: 'Autismo' },
    { path: '/aba-infantil-alphaville', label: 'ABA' },
    { path: '/fonoaudiologia-infantil-alphaville', label: 'Fonoaudiologia' },
    { path: '/desenvolvimento-infantil-alphaville', label: 'Desenvolvimento' },
    { path: '/terapias', label: 'Terapias' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/unidades', label: 'Unidades' },
    { path: '/contato', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;
  const whatsappLink = "https://wa.me/5511991263146?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div className="bg-white p-1.5 rounded-xl shadow-sm">
              <img 
                src="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-QKLL4.png" 
                alt="AtivaMente Alphaville Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-bold transition-colors duration-200 group ${
                    isActive(link.path)
                      ? 'text-[hsl(var(--header-active))]'
                      : 'text-[hsl(var(--header-foreground))/80] hover:text-[hsl(var(--header-hover))]'
                  }`}
                >
                  {link.label}
                  {/* Animated Underline */}
                  <span 
                    className={`absolute bottom-0 left-3 right-3 h-[3px] rounded-t-md bg-[hsl(var(--header-active))] transition-transform duration-300 origin-left ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} 
                  />
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="ml-2">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200">
                <MessageCircle className="mr-2 h-4 w-4" />
                Agende Sua Consulta
              </Button>
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[hsl(var(--header-foreground))] hover:bg-white/10 rounded-full transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] border-l-white/10">
              <SheetTitle className="text-[hsl(var(--header-foreground))] text-left mb-6 font-bold text-xl">Menu</SheetTitle>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-bold transition-all duration-200 rounded-xl flex items-center ${
                      isActive(link.path)
                        ? 'bg-white/10 text-[hsl(var(--header-active))] border-l-4 border-[hsl(var(--header-active))]'
                        : 'text-[hsl(var(--header-foreground))/80] hover:text-[hsl(var(--header-hover))] hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-bold h-12 shadow-md active:scale-[0.98] transition-transform">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agende Sua Consulta
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;