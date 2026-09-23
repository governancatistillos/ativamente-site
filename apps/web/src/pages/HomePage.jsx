import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Info, HeartPulse, Users, Image as ImageIcon, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const whatsappLink = "https://wa.me/5511991263146?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

  // Função apenas para registrar a conversão no Google Ads
  const handleWhatsappClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17709990832/CiesCKien9QcELCH5PxB'
      });
    }
  };

  const navCards = [{
    title: 'Sobre Nós',
    icon: Info,
    path: '/sobre',
    desc: 'Conheça nossa história, missão e os valores que guiam nosso trabalho.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }, {
    title: 'Terapias',
    icon: HeartPulse,
    path: '/terapias',
    desc: 'Explore nossas 10 especialidades focadas no desenvolvimento infantil.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },  {
    title: 'Galeria',
    icon: ImageIcon,
    path: '/galeria',
    desc: 'Veja fotos dos nossos ambientes lúdicos e preparados com carinho.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }, {
    title: 'Unidades',
    icon: MapPin,
    path: '/unidades',
    desc: 'Encontre a unidade da AtivaMente mais próxima de você.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  }, {
    title: 'Contato',
    icon: Phone,
    path: '/contato',
    desc: 'Fale conosco para tirar dúvidas ou agendar uma avaliação.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  }];

  const reasons = [
    'Atendimento multidisciplinar com foco em desenvolvimento infantil',
    'Equipe especializada em neurodesenvolvimento e autismo',
    'Acolhimento, orientação familiar e acompanhamento individualizado',
    'Ambientes preparados para conforto, segurança e progresso real'
  ];

  const campaignCards = [
    {
      title: 'Autismo',
      path: '/terapia-para-autismo-alphaville',
      desc: 'Apoio especializado para comunicação, rotina e desenvolvimento infantil.',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'ABA',
      path: '/aba-infantil-alphaville',
      desc: 'Estratégias baseadas em evidências para autonomia e independência.',
      icon: HeartPulse,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      title: 'Fonoaudiologia',
      path: '/fonoaudiologia-infantil-alphaville',
      desc: 'Atendimento focado em fala, linguagem e comunicação da criança.',
      icon: Info,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Desenvolvimento',
      path: '/desenvolvimento-infantil-alphaville',
      desc: 'Acompanhamento para rotina, comportamento e bem-estar infantil.',
      icon: MapPin,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return <>
      <Helmet>
        <title>Início - AtivaMente Alphaville</title>
        <meta name="description" content="Clínica especializada em atendimento infantil multidisciplinar em Alphaville com terapias integradas para desenvolvimento, comunicação e acolhimento familiar." />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/" />
        <meta property="og:title" content="AtivaMente Alphaville" />
        <meta property="og:description" content="Clínica especializada em atendimento infantil multidisciplinar em Alphaville com terapias integradas para desenvolvimento, comunicação e acolhimento familiar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-QKLL4.png" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section with Background Image */}
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: 'url("https://images.cdn-files-a.com/uploads/7228758/2000_639bc18d27d57.jpg")'
          }} />
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-2xl mb-8">
                <img src="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-QKLL4.png" alt="AtivaMente Alphaville" className="h-16 md:h-24 w-auto object-contain" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance drop-shadow-lg">
                Terapia e desenvolvimento infantil em Alphaville
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-balance drop-shadow-md">
                Atendimento multidisciplinar para autismo, comunicação, comportamento e bem-estar da sua família
              </h2>

              <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Na AtivaMente Alphaville, você encontra acolhimento, ciência e estratégias individuais para cada etapa do desenvolvimento da sua criança.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleWhatsappClick}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white text-lg h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Agende sua Consulta
                  </Button>
                </a>

                <Link to="/terapias" className="inline-block">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/80 text-white bg-white/5 hover:bg-white/10 text-lg h-14 px-10 rounded-full shadow-xl"
                  >
                    Conheça as terapias
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Cards Section */}
        <section className="py-24 bg-background relative -mt-10 z-30 rounded-t-[3rem]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Como podemos ajudar?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Explore nossos serviços e conheça mais sobre o nosso espaço dedicado ao desenvolvimento do seu filho.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {index + 1}
                  </div>
                  <p className="text-base font-semibold text-foreground">{reason}</p>
                </motion.div>
              ))}
            </div>

            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary">Atendimentos mais procurados</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {campaignCards.map((card, idx) => (
                  <Link to={card.path} key={card.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.45 }}
                      className="bg-card rounded-3xl p-6 shadow-md border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 h-full"
                    >
                      <div className={`w-14 h-14 rounded-2xl ${card.bgColor} flex items-center justify-center mb-4`}>
                        <card.icon className={`h-7 w-7 ${card.color}`} />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{card.title}</h4>
                      <p className="text-sm leading-6 text-muted-foreground">{card.desc}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {navCards.map((card, idx) => <Link to={card.path} key={idx}>
                  <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: idx * 0.1,
                duration: 0.5
              }} className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:border-primary/30 card-hover h-full flex flex-col items-center text-center group">
                    <div className={`w-20 h-20 rounded-2xl ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`h-10 w-10 ${card.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                </Link>)}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dê o primeiro passo hoje</h2>
            <p className="text-xl mb-10 text-primary-foreground/80">Nossa equipe está pronta para receber sua família com todo o cuidado e atenção que vocês merecem.</p>
            
            {/* Botão do Rodapé envolvido por tag <a> nativa */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleWhatsappClick}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Fale com nossa equipe
              </Button>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};

export default HomePage;