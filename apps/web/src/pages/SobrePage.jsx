import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
const SobrePage = () => {
  return <>
      <Helmet>
        <title>Sobre Nós - AtivaMente Alphaville</title>
        <meta name="description" content="Conheça a história, missão, valores e a equipe da AtivaMente Alphaville, dedicada ao desenvolvimento integral infantil em Alphaville." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/sobre" />
        <meta property="og:title" content="Sobre Nós - AtivaMente Alphaville" />
        <meta property="og:description" content="Conheça a história, missão, valores e a equipe da AtivaMente Alphaville, dedicada ao desenvolvimento integral infantil em Alphaville." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/sobre" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/56a32ce411be85185493962187ff9f32.png" />
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
              <img src="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/56a32ce411be85185493962187ff9f32.png" alt="AtivaMente Alphaville Logo" className="h-24 w-auto mx-auto mb-8 bg-white p-4 rounded-2xl shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Sobre a AtivaMente</h1>
              <p className="text-xl text-primary-foreground/90 font-medium">
                Dedicação, ciência e amor no desenvolvimento infantil.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-3xl shadow-lg border-t-4 border-primary card-hover">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promover o desenvolvimento integral de crianças e adolescentes através de intervenções terapêuticas baseadas em evidências, acolhendo e capacitando suas famílias.
                </p>
              </div>
              <div className="bg-card p-8 rounded-3xl shadow-lg border-t-4 border-secondary card-hover">
                <Eye className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em Alphaville e região no atendimento multidisciplinar infantil, reconhecida pela excelência clínica e resultados transformadores.
                </p>
              </div>
              <div className="bg-card p-8 rounded-3xl shadow-lg border-t-4 border-accent card-hover">
                <Heart className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ética, empatia, embasamento científico, respeito à neurodiversidade, transparência e compromisso com a evolução de cada paciente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Histórico e Expertise */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Nossa História e Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                A AtivaMente Alphaville nasceu do sonho de criar um espaço onde o cuidado infantil fosse verdadeiramente integrado. Com anos de experiência clínica, nossa fundação baseia-se na compreensão de que o desenvolvimento humano é complexo e requer múltiplos olhares.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Hoje, contamos com duas unidades estruturadas para oferecer o que há de mais moderno e eficaz em terapias infantis, sempre mantendo o calor humano e o acolhimento que são nossas marcas registradas.
              </p>
            </div>
          </div>
        </section>

        {/* Equipe Multidisciplinar */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Users className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Equipe Multidisciplinar</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                  Nosso maior patrimônio é nossa equipe. Reunimos profissionais de diversas áreas da saúde e educação, todos com especializações rigorosas e paixão pelo que fazem.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Trabalhamos de forma transdisciplinar: os casos são discutidos em conjunto, garantindo que as intervenções de uma área potencializem os resultados das outras.
                </p>
              </div>
              <div>
                <img src="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/whatsapp-image-2025-10-21-at-07.58.35-HiW8v.jpeg" alt="Equipe em atendimento" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 bg-brand-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {['Planos terapêuticos 100% individualizados', 'Reuniões periódicas de alinhamento com a família', 'Integração com a escola do paciente', 'Estrutura física adaptada e segura', 'Materiais terapêuticos de alta qualidade', 'Supervisão clínica constante'].map((item, idx) => <div key={idx} className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-md border border-border">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-bold">{item}</span>
                </div>)}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default SobrePage;