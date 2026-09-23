import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Brain, HeartHandshake, Stethoscope, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

const whatsappLink = 'https://wa.me/5511991263146?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20minha%20crian%C3%A7a%20com%20interesse%20em%20autismo.';

const reasons = [
  'Acolhimento para crianças e famílias em busca de orientação e suporte',
  'Atendimento multidisciplinar com foco em comunicação e desenvolvimento',
  'Estratégias individualizadas para rotina, autonomia e bem-estar',
  'Equipe com olhar sensível e atuação baseada em boas práticas clínicas'
];

const supports = [
  {
    title: 'ABA',
    icon: Brain,
    description: 'Intervenção estruturada para aumentar habilidades sociais, comunicativas e de independência, com foco em metas funcionais e práticas do dia a dia.'
  },
  {
    title: 'Psicologia',
    icon: HeartHandshake,
    description: 'Apoio emocional, orientação familiar e acompanhamento para lidar com desafios de forma mais segura e acolhedora.'
  },
  {
    title: 'Fonoaudiologia',
    icon: Stethoscope,
    description: 'Trabalho em linguagem, comunicação e desenvolvimento de habilidades que favorecem interação, expressão e autonomia.'
  }
];

const AutismoLandingPage = () => {
  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'landing_autismo',
        value: 1
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Terapia para Autismo em Alphaville | AtivaMente</title>
        <meta
          name="description"
          content="AtivaMente Alphaville oferece atendimento para autismo em Alphaville com apoio multidisciplinar, acolhimento familiar e estratégias para desenvolvimento infantil."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/terapia-para-autismo-alphaville" />
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
                    Apoio para autismo
                  </span>

                  <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                    Terapia para autismo em Alphaville com acolhimento e desenvolvimento real
                  </h1>

                  <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
                    A AtivaMente Alphaville oferece atendimento especializado para crianças com autismo, focado em comunicação, autonomia, rotina e suporte à família em cada etapa do processo.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={handleWhatsappClick}>
                      <Button className="h-14 rounded-full bg-secondary px-8 text-base font-bold text-white hover:bg-secondary/90">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Falar no WhatsApp
                      </Button>
                    </a>

                    <Link to="/contato">
                      <Button variant="outline" className="h-14 rounded-full border-white/70 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10">
                        Solicitar avaliação
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
                        <Brain className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Atendimento</p>
                        <h2 className="text-xl font-extrabold text-primary">AtivaMente Alphaville</h2>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {reasons.map((reason) => (
                        <li key={reason} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                          <span className="text-sm leading-6 text-muted-foreground">{reason}</span>
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Como a AtivaMente pode ajudar</p>
                <h2 className="mt-4 text-3xl font-black text-foreground md:text-4xl">
                  Suporte para comunicação, rotina e desenvolvimento infantil com atenção individualizada
                </h2>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {supports.map(({ title, icon: Icon, description }) => (
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
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground">Atendimento acolhedor em Alphaville</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    Nosso atendimento é pensado para crianças e famílias que buscam orientação segura, estratégias concretas e apoio profissional em um ambiente acolhedor e preparado para desenvolvimento.
                  </p>
                  <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-sm font-medium text-foreground">
                    Alameda Rio Negro, 500 - Alphaville Industrial, Barueri - SP
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <div className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-foreground">A avaliação inicial ajuda a entender o que a criança precisa</h4>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      A partir do diagnóstico do contexto e das demandas da criança, definimos um plano de atendimento com foco em reais avanços do desenvolvimento e maior conforto para a rotina familiar.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-border bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-foreground">Você não precisa navegar sozinho nessa etapa</h4>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      A família recebe apoio, orientação e acompanhamento para lidar com o processo com mais clareza, segurança e acolhimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-3xl font-black text-foreground md:text-5xl">Agende uma avaliação e fale com nossa equipe</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Se você busca apoio para o desenvolvimento da sua criança, fale com a AtivaMente e conheça o melhor caminho para acolhimento e progresso.
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

export default AutismoLandingPage;
