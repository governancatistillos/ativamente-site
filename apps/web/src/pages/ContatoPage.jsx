import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const ContatoPage = () => {
  const whatsappLink = "https://wa.me/5511991263146?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const emailLink = "mailto:clinicaativamentealphaville@gmail.com";

  // Função apenas para registrar a conversão no Google Ads
  const handleWhatsappClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17709990832/CiesCKien9QcELCH5PxB'
      });
    }
  };

  return <>
      <Helmet>
        <title>Contato - AtivaMente Alphaville</title>
        <meta name="description" content="Entre em contato com a AtivaMente Alphaville por WhatsApp, e-mail ou visite nossas unidades em Alphaville." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/contato" />
        <meta property="og:title" content="Contato - AtivaMente Alphaville" />
        <meta property="og:description" content="Entre em contato com a AtivaMente Alphaville por WhatsApp, e-mail ou visite nossas unidades em Alphaville." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/contato" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-QKLL4.png" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Fale Conosco</h1>
              <p className="text-xl text-primary-foreground/90 font-medium">
                Estamos prontos para atender você. Escolha o melhor canal de comunicação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Direct Contact Channels */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* WhatsApp Card ajustado com tag <a> normal e onClick apenas para trackear */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleWhatsappClick}
                className="block group"
              >
                <div className="bg-card p-8 rounded-3xl shadow-lg border border-border group-hover:border-secondary transition-all text-center h-full flex flex-col items-center justify-center card-hover">
                  <div className="h-20 w-20 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-6 font-medium">Atendimento rápido e direto para agendamentos e dúvidas.</p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white w-full rounded-full font-bold">
                    Iniciar Conversa
                  </Button>
                </div>
              </a>

              {/* Email */}
              <a href={emailLink} className="block group">
                <div className="bg-card p-8 rounded-3xl shadow-lg border border-border group-hover:border-primary transition-all text-center h-full flex flex-col items-center justify-center card-hover">
                  <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground mb-6 font-medium">Para assuntos administrativos ou envio de documentos.</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full rounded-full font-bold">
                    Enviar E-mail
                  </Button>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Units Information */}
        <section className="py-16 bg-brand-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-primary mb-12">Nossas Unidades</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Unidade I */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-primary mb-6">Unidade I</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Endereço</p>
                      <p className="text-muted-foreground font-medium">Alameda Rio Negro, 500, Unidade I - Salas 105, 107 e 108<br />Alphaville, Barueri - SP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Telefone</p>
                        <p className="text-muted-foreground font-medium">(11) 99126-3146</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Horário</p>
                        <p className="text-muted-foreground font-medium">Seg-Sex: 7h às 20h | Sáb: 8h às 17h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-64 bg-muted">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.846306314168!2d-46.84974702421873!3d-23.50204475941657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0304b93293af%3A0x884ca323c406ec77!2sAtiva%20Mente%20Alphaville!5e0!3m2!1spt-PT!2sbr!4v1774874692961!5m2!1spt-PT!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen="" loading="lazy" title="Mapa Unidade I"></iframe>
                </div>
              </div>

              {/* Unidade II */}
              <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-primary mb-6">Unidade II</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Endereço</p>
                      <p className="text-muted-foreground font-medium">Alameda Rio Negro, 500, Unidade II - Salas 112, 115 e 116<br />Alphaville, Barueri - SP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Telefone</p>
                        <p className="text-muted-foreground font-medium">(11) 99126-3146</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-foreground">Horário</p>
                        <p className="text-muted-foreground font-medium">Seg-Sex: 7h às 20h | Sáb: 8h às 17h</p>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="w-full h-64 bg-muted">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.846306314168!2d-46.84974702421873!3d-23.50204475941657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0304b93293af%3A0x884ca323c406ec77!2sAtiva%20Mente%20Alphaville!5e0!3m2!1spt-PT!2sbr!4v1774874692961!5m2!1spt-PT!2sbr" width="100%" height="100%" style={{
                    border: 0
                  }} allowFullScreen="" loading="lazy" title="Mapa Unidade II"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};

export default ContatoPage;