import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram } from 'lucide-react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const clinicPosition = [-23.5020447, -46.8497470];

const ClinicMap = () => (
  <MapContainer center={clinicPosition} zoom={16} scrollWheelZoom={false} className="relative z-0 h-full w-full">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={clinicPosition}>
      <Popup>AtivaMente Alphaville<br />Alameda Rio Negro, 500</Popup>
    </Marker>
  </MapContainer>
);

const ContatoPage = () => {
  const whatsappLink = "https://wa.me/5511991263146?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";
  const emailLink = "mailto:clinicaativamentealphaville@gmail.com";
  const instagramLink = "https://www.instagram.com/ativamentealphaville/";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-card p-8 rounded-3xl shadow-lg border border-border group-hover:border-accent transition-all text-center h-full flex flex-col items-center justify-center card-hover">
                  <div className="h-20 w-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Instagram className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-6 font-medium">Acompanhe novidades e conheça mais sobre a AtivaMente.</p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 w-full rounded-full font-bold">
                    Acessar Instagram
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-extrabold text-primary mb-6">Unidade I</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Alameda Rio Negro, 500</p>
                      <p className="text-muted-foreground font-medium">Alphaville Industrial, Barueri - SP</p>
                      <p className="mt-1 text-sm font-semibold text-secondary">Salas 104, 105, 107 e 108</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Telefone</p>
                      <p className="text-muted-foreground font-medium">(11) 99126-3146</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Horário</p>
                      <p className="text-muted-foreground font-medium">Segunda a sexta, 7h às 20h<br />Sábado, 8h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-extrabold text-primary mb-6">Unidade II</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Alameda Rio Negro, 500</p>
                      <p className="text-muted-foreground font-medium">Alphaville Industrial, Barueri - SP</p>
                      <p className="mt-1 text-sm font-semibold text-accent">Salas 109, 112, 115 e 116</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Telefone</p>
                      <p className="text-muted-foreground font-medium">(11) 99126-3146</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Horário</p>
                      <p className="text-muted-foreground font-medium">Segunda a sexta, 7h às 20h<br />Sábado, 8h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-primary">Como chegar</h3>
                  <p className="text-sm text-muted-foreground">Um único mapa para as duas unidades, no mesmo endereço.</p>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=AtivaMente+Alphaville+Alameda+Rio+Negro+500+Barueri+SP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                  <MapPin className="h-4 w-4" />
                  Abrir no Google Maps
                </a>
              </div>
              <div className="h-72 w-full bg-muted sm:h-96">
                <ClinicMap />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};

export default ContatoPage;