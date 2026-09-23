import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, MapPin, Sparkles, Brain, Stethoscope, HeartHandshake } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const whatsappLink = 'https://wa.me/5511991263146?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20minha%20crian%C3%A7a.';

const benefits = [
  'Atendimento multidisciplinar com foco no desenvolvimento infantil',
  'Acolhimento para crianças, famílias e neurodiversidade',
  'Equipe especializada em comunicação, comportamento e autonomia',
  'Estratégias individualizadas com acompanhamento e orientação à família'
];

const services = [
  {
    title: 'ABA',
    icon: Brain,
    description: 'Intervenção baseada em evidências para desenvolvimento de comunicação, autonomia e reduções de comportamentos que dificultam o cotidiano.'
  },
  {
    title: 'Psicologia',
    icon: HeartHandshake,
    description: 'Apoio emocional e orientações práticas para a criança e para a família, com olhar atento ao bem-estar e ao desenvolvimento.'
  },
  {
    title: 'Fonoaudiologia',
    icon: Stethoscope,
    description: 'Trabalho com linguagem, fala, comunicação e habilidades funcionais para melhorar a interação e a qualidade de vida.'
  }
];

const processSteps = [
  {
    title: 'Avaliação inicial',
    description: 'Entendemos as necessidades da criança, o contexto familiar e os principais desafios do desenvolvimento.'
  },
  {
    title: 'Planejamento individualizado',
    description: 'Definimos objetivos claros, estratégias adequadas e um acompanhamento alinhado ao cotidiano da família.'
  },
  {
    title: 'Acompanhamento com suporte',
    description: 'Você recebe orientação prática e apoio contínuo para evoluir com confiança e tranquilidade.'
  }
];

const faqs = [
  {
    question: 'A AtivaMente atende crianças com autismo?',
    answer: 'Sim. A clínica oferece atendimento multidisciplinar com foco no desenvolvimento infantil, incluindo suporte clínico, terapias especializadas e orientação à família.'
  },
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A avaliação inicial permite entender as necessidades da criança, mapear objetivos e definir a melhor abordagem terapêutica.'
  },
  {
    question: 'A clínica fica em Alphaville?',
    answer: 'Sim. A AtivaMente Alphaville atende na região com espaços pensados para acolher, estimular e apoiar o desenvolvimento das crianças.'
  }
];

const AdsLandingPage = () => {
  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'landing_ads',
        value: 1
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Terapia Infantil em Alphaville | AtivaMente</title>
        <meta
          name="description"
          content="AtivaMente Alphaville oferece terapia infantil em Alphaville com atendimento multidisciplinar para autismo, comunicação, desenvolvimento e acolhimento familiar."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/atendimento-infantil-alphaville" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main>
          <section className="relative overflow-hidden bg-primary text-primary-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%)]" />
            <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-accent">
                    Atendimento infantil especializado
                  </span>

                  <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                    Terapia infantil em Alphaville para apoiar comunicação, autonomia e desenvolvimento
                  </h1>

                  <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
                    A AtivaMente Alphaville oferece acolhimento especializado para crianças que precisam de suporte em linguagem, comportamento, atenção, adaptação e desenvolvimento, com atendimento individualizado e acolhedor para a família.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={handleWhatsappClick}>
                      <Button className="h-14 rounded-full bg-secondary px-8 text-base font-bold text-white hover:bg-secondary/90">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Falar no WhatsApp
                      </Button>
                    </a>

                    <Link to="/terapias">
                      <Button variant="outline" className="h-14 rounded-full border-white/70 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10">
                        Ver terapias
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-5">
                    <Link to="/" className="inline-flex items-center text-sm font-bold text-accent underline-offset-4 hover:underline">
                      ← Voltar para o início
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm"
                >
                  <div className="rounded-[1.5rem] bg-white p-6 text-foreground">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Sparkles className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Atendimento</p>
                        <h2 className="text-xl font-extrabold text-primary">AtivaMente Alphaville</h2>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                          <span className="text-sm leading-6 text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Por que escolher a AtivaMente</p>
                <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">
                  Atendimento com acolhimento, ciência e atenção real ao desenvolvimento da sua criança
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {services.map(({ title, icon: Icon, description }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[2rem] border border-border bg-card p-8 shadow-lg"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Como funciona</p>
                <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">
                  Um processo simples, humano e pensado para apoiar sua família desde o primeiro passo
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-border bg-white p-8 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-black text-primary-foreground">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground">Localização e atendimento</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Com uma estrutura pensada para acolher famílias e estimular desenvolvimento, a AtivaMente Alphaville trabalha em um ambiente cuidadoso, seguro e preparado para diferentes necessidades infantis.
                  </p>
                  <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-sm font-medium text-foreground">
                    Alameda Rio Negro, 500 - Alphaville Industrial, Barueri - SP
                  </div>
                </div>

                <div className="space-y-4">
                  {faqs.map((item) => (
                    <div key={item.question} className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
                      <h4 className="text-xl font-bold text-foreground">{item.question}</h4>
                      <p className="mt-3 text-base leading-7 text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-black text-foreground md:text-5xl">Pronto para dar o próximo passo?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Fale com nossa equipe e agende uma avaliação para entender como a terapia pode apoiar o desenvolvimento da sua criança.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={handleWhatsappClick}>
                  <Button className="h-14 rounded-full bg-secondary px-8 text-base font-bold text-white hover:bg-secondary/90">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agendar avaliação
                  </Button>
                </a>

                <Link to="/contato">
                  <Button variant="outline" className="h-14 rounded-full border-primary/30 bg-white px-8 text-base font-bold text-primary hover:bg-primary/5">
                    Falar por e-mail
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdsLandingPage;
