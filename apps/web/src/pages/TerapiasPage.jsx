import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TerapiasPage = () => {
  const therapies = [
    {
      title: 'ABA (Análise do Comportamento Aplicada)',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_63a34250a1fec_filter_63a3425f6ad65.jpg',
      description: 'A intervenção baseada na Análise do Comportamento Aplicada (ABA) é fundamentada em evidências científicas e amplamente utilizada no atendimento a crianças com Transtorno do Espectro Autista (TEA), com foco no desenvolvimento de habilidades funcionais para o dia a dia. A partir de avaliação individualizada, são elaborados programas voltados à comunicação, socialização, autonomia e habilidades iniciais, além da redução de comportamentos que dificultam a aprendizagem. O trabalho é realizado em parceria com a família e a escola, favorecendo a generalização das habilidades e um desenvolvimento mais consistente, respeitando as necessidades individuais.',
      description2: '',
      color: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      title: 'Psicologia',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_639baa72a034b.png',
      description: 'A Psicologia é essencial na avaliação e intervenção de crianças com Transtorno do Espectro Autista (TEA), utilizando práticas baseadas em evidências e respeitando as necessidades individuais. As intervenções focam no desenvolvimento socioemocional, comunicação, regulação emocional e autonomia, promovendo melhor adaptação ao cotidiano. Também inclui orientação parental, alinhando estratégias entre clínica e família para potencializar os resultados e favorecer um desenvolvimento mais consistente.',
      description2: '',
      color: 'text-secondary',
      borderColor: 'border-secondary/20'
    },
    {
      title: 'Fonoaudiologia',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_63a3427d4f0e8_filter_63a34293ee9c3.jpg',
      description: 'A Fonoaudiologia, atua no desenvolvimento da comunicação funcional, linguagem e fala de crianças com Transtorno do Espectro Autista (TEA), por meio de práticas baseadas em evidências e planejamento individualizado. O atendimento abrange habilidades de linguagem receptiva e expressiva, comunicação social e intenção comunicativa, além de intervenções específicas em apraxia de fala na infância, Comunicação Aumentativa e Alternativa (CAA) e motricidade orofacial. O trabalho é realizado de forma integrada à equipe multidisciplinar e em parceria com a família, favorecendo a generalização das habilidades e maior funcionalidade no dia a dia.',
      description2: '',
      color: 'text-accent',
      borderColor: 'border-accent/20'
    },
    {
      title: 'Psicopedagogia',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_645454d070441.jpg',
      description: 'Investigação e intervenção cuidadosa nos processos de aprendizagem. Ajudamos crianças a superar dificuldades escolares e transtornos de aprendizagem.',
      description2: 'Desenvolvemos estratégias cognitivas personalizadas, resgatando a autoestima e o prazer genuíno em aprender e descobrir o mundo.',
      color: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      title: 'Fisioterapia',
      image: 'https://i.imgur.com/5cziWxO.jpeg',
      description: 'A Fisioterapia atua no desenvolvimento motor e na funcionalidade de crianças com Transtorno do Espectro Autista (TEA), por meio de estratégias individualizadas e baseadas em evidências. Cada plano de atendimento considera o perfil de desenvolvimento, as necessidades e os objetivos específicos de cada criança. O trabalho contribui para o desenvolvimento da coordenação motora grossa e fina, postura, equilíbrio, força, mobilidade e planejamento motor, promovendo maior autonomia nas atividades do dia a dia. Além disso, a fisioterapia auxilia na prevenção de dificuldades posturais e na melhoria da qualidade de vida e do bem-estar geral da criança, garantindo que os progressos sejam aplicados na rotina diária e favorecendo a independência da criança.',
      description2: '.',
      color: 'text-secondary',
      borderColor: 'border-secondary/20'
    },
    {
      title: 'Hidroterapia',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_639bba1cc9589.png',
      description: 'A Hidroterapia utiliza o ambiente aquático para promover o desenvolvimento motor, funcional e o bem-estar de crianças com Transtorno do Espectro Autista (TEA) e outras necessidades especiais. A hidroterapia contribuem para o desenvolvimento de habilidades como coordenação motora, equilíbrio, força, mobilidade, postura e resistência física. Além disso, a Hidroterapia ajuda a melhorar o controle postural, a consciência corporal, a lateralidade e a percepção espacial, favorecendo maior autonomia e confiança nos movimentos. O trabalho também estimula aspectos socioemocionais, como atenção, concentração, regulação emocional e engajamento, tornando a experiência terapêutica motivadora e significativa.',
      description2: '',
      color: 'text-accent',
      borderColor: 'border-accent/20'
    },
    {
      title: 'Equoterapia',
      image: 'https://images.cdn-files-a.com/uploads/7228758/800_639bbfb0c266f.png',
      description: 'A Equoterapia é uma intervenção terapêutica que utiliza o cavalo como facilitador do desenvolvimento de crianças com Transtorno do Espectro Autista (TEA) e outras necessidades especiais. Durante as sessões, o movimento rítmico do cavalo ajuda a trabalhar o equilíbrio, a postura, a coordenação motora e a força muscular. A atividade também estimula a consciência corporal, a orientação espacial, a lateralidade e o controle dos movimentos, promovendo mais segurança e autonomia nas ações da criança.',
      description2: '.',
      color: 'text-primary',
      borderColor: 'border-primary/20'
    },
    {
      title: 'Terapia Ocupacional',
      image: 'https://i.imgur.com/uXVvrOD.jpeg',
      description: 'A Terapia Ocupacional (TO) é uma área da saúde que tem como objetivo promover a autonomia, independência e qualidade de vida da criança em suas atividades do dia a dia. No contexto do atendimento a crianças autistas, o terapeuta ocupacional atua no desenvolvimento de habilidades essenciais como coordenação motora, integração sensorial, organização, atenção e participação em atividades escolares e sociais. A TO trabalha para ajudar a criança a lidar melhor com estímulos do ambiente (sons, texturas, luzes), desenvolver habilidades de autocuidado (como se vestir, alimentar-se e higiene) e melhorar sua capacidade de interação com o mundo ao seu redor. Cada intervenção é personalizada, respeitando as necessidades e o ritmo de desenvolvimento de cada criança.',
      description2: '.',
      color: 'text-secondary',
      borderColor: 'border-secondary/20'
    },
    {
      title: 'Musicoterapia',
      image: 'https://i.imgur.com/6sB4ooP.jpeg',
      description: 'A Musicoterapia é uma intervenção profissional que utiliza a música como recurso terapêutico para apoiar o desenvolvimento de crianças com Transtorno do Espectro Autista (TEA). Cada atividade é planejada de forma individualizada, considerando o perfil, os interesses e as necessidades de cada criança, e baseada em práticas fundamentadas em evidências. A abordagem promove o desenvolvimento da comunicação, da interação social, da atenção, da regulação emocional e do engajamento, favorecendo que a criança pratique habilidades essenciais para o cotidiano de forma estruturada e motivadora. O trabalho é realizado em integração com a equipe multidisciplinar e em parceria com a família, garantindo que os avanços conquistados durante as sessões possam ser aplicados na rotina diária, ampliando a autonomia e a funcionalidade da criança.',
      description2: '.',
      color: 'text-accent',
      borderColor: 'border-accent/20'
    },
    {
      title: 'Nutrição',
      image: 'https://i.imgur.com/2kEFhae.jpeg',
      description: 'A Nutrição trabalha para apoiar o desenvolvimento global de crianças com Transtorno do Espectro Autista (TEA), promovendo habilidades relacionadas à alimentação. O acompanhamento nutricional contribui para o aprimoramento da aceitação de diferentes texturas e sabores, desenvolvimento da mastigação e deglutição, coordenação e autonomia durante as refeições. Também auxilia na atenção, no foco e no bem-estar geral da criança, favorecendo experiências alimentares mais funcionais e positivas.',
      description2: '.',
      color: 'text-accent',
      borderColor: 'border-accent/20'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terapias - AtivaMente Alphaville</title>
        <meta name="description" content="Conheça as terapias infantis da AtivaMente Alphaville: ABA, Psicologia, Fonoaudiologia, Terapia Ocupacional, Fisioterapia e muito mais." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/terapias" />
        <meta property="og:title" content="Terapias - AtivaMente Alphaville" />
        <meta property="og:description" content="Conheça as terapias infantis da AtivaMente Alphaville: ABA, Psicologia, Fonoaudiologia, Terapia Ocupacional, Fisioterapia e muito mais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/terapias" />
        <meta property="og:image" content="https://images.cdn-files-a.com/uploads/7228758/800_63a34250a1fec_filter_63a3425f6ad65.jpg" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Nossas Terapias
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
                10 especialidades integradas, desenhadas com amor e ciência para o desenvolvimento completo do seu filho.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Therapies List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20 max-w-6xl mx-auto">
              {therapies.map((therapy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-10 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Container - Square Format */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className={`relative w-full max-w-[400px] aspect-square rounded-[2.5rem] overflow-hidden shadow-xl border-4 ${therapy.borderColor} transform transition-transform hover:scale-[1.02] duration-300`}>
                      <img
                        src={therapy.image}
                        alt={therapy.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 ${therapy.color} text-balance`}>
                      {therapy.title}
                    </h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-medium">
                      <p>{therapy.description}</p>
                      <p>{therapy.description2}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TerapiasPage;