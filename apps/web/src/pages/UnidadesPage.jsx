import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EnvironmentCard from '@/components/EnvironmentCard.jsx';
const UnidadesPage = () => {
  const unidade1Environments = [{
    image: 'https://i.imgur.com/wkR30r3.jpeg',
    title: '',
    description: ''
  }, {
    image: 'https://i.imgur.com/cxLq8gy.jpeg',
    title: '',
    description: ''
  }, {
    image: 'https://i.imgur.com/oKybgwS.jpeg',
    title: '',
    description: ''
  }];
  const unidade2Environments = [{
    image: 'https://i.imgur.com/pXitT3W.jpeg',
    title: '',
    description: ''
  }, {
    image: 'https://i.imgur.com/y7aPCHv.jpeg',
    title: '',
    description: ''
  }, {
    image: 'https://i.imgur.com/3B0nxfW.jpeg',
    title: '',
    description: ''
  }];
  return <>
      <Helmet>
        <title>Nossas Unidades - AtivaMente Alphaville</title>
        <meta name="description" content="Conheça as unidades da AtivaMente Alphaville em Alphaville, com ambientes acolhedores e atendimento especializado para crianças." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/unidades" />
        <meta property="og:title" content="Nossas Unidades - AtivaMente Alphaville" />
        <meta property="og:description" content="Conheça as unidades da AtivaMente Alphaville em Alphaville, com ambientes acolhedores e atendimento especializado para crianças." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/unidades" />
        <meta property="og:image" content="https://i.imgur.com/wkR30r3.jpeg" />
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
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-balance">
                Nossas Unidades
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
                Ambientes cuidadosamente planejados para oferecer conforto, segurança e estímulo ao desenvolvimento das crianças.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Unidade I */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary text-balance">
                Unidade I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">Alameda Rio Negro, 500 - Alphaville Industrial, Barueri - SP, Brasil Unidade I - Salas 104, 105, 107 e 108</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Horário</p>
                    <p className="text-sm text-muted-foreground">Seg-Sex: 7h às 20h | Sáb: 8h às 17h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Contato</p>
                    <p className="text-sm text-muted-foreground">(11) 99126-3146</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl font-medium">
                Nossa primeira unidade conta com infraestrutura completa, incluindo consultórios individuais, salas de terapia equipadas e espaços lúdicos especialmente desenvolvidos para estimular o desenvolvimento infantil de forma segura e acolhedora.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {unidade1Environments.map((env, index) => <EnvironmentCard key={index} image={env.image} title={env.title} description={env.description} delay={index * 0.1} />)}
            </div>
          </div>
        </section>

        {/* Unidade II */}
        <section className="py-20 bg-brand-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-primary text-balance">
                Unidade II
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">Alameda Rio Negro, 500 - Alphaville Industrial, Barueri - SP, Brasil Unidade II - Salas 109, 112, 115 e 116</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Horário</p>
                    <p className="text-sm text-muted-foreground">Seg-Sex: 7h às 20h | Sáb: 8h às 17h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border shadow-sm">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Contato</p>
                    <p className="text-sm text-muted-foreground">(11) 99126-3146</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl font-medium">
                Nossa segunda unidade oferece ambientes modernos e confortáveis, com salas multifuncionais preparadas para diversos tipos de atendimento, área de convivência para atividades em grupo e recepção acolhedora para as famílias.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {unidade2Environments.map((env, index) => <EnvironmentCard key={index} image={env.image} title={env.title} description={env.description} delay={index * 0.1} />)}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default UnidadesPage;