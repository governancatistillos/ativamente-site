import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

// Generate 30 realistic professionals
const generateProfessionals = () => {
  const specialties = [
    'ABA', 'Psicologia', 'Fonoaudiologia', 'Terapia Ocupacional', 
    'Fisioterapia', 'Psicopedagogia', 'Musicoterapia', 'Nutrição'
  ];
  
  const names = [
    'Ana Silva', 'Carlos Santos', 'Mariana Costa', 'João Oliveira', 'Beatriz Souza', 
    'Rafael Lima', 'Juliana Ferreira', 'Lucas Pereira', 'Camila Rodrigues', 'Mateus Almeida', 
    'Fernanda Alves', 'Gabriel Carvalho', 'Amanda Ribeiro', 'Diego Gomes', 'Letícia Martins', 
    'Thiago Araújo', 'Natália Melo', 'Bruno Barbosa', 'Carolina Cardoso', 'Felipe Castro', 
    'Patrícia Rocha', 'Gustavo Dias', 'Vanessa Fernandes', 'Rodrigo Pinto', 'Tatiana Teixeira', 
    'Marcelo Cavalcanti', 'Renata Mendes', 'Eduardo Ramos', 'Priscila Machado', 'Leonardo Correia'
  ];

  return names.map((name, index) => {
    const specialty = specialties[index % specialties.length];
    return {
      id: index + 1,
      name,
      specialty,
      credentials: `Especialista em ${specialty} Infantil`,
      photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=256&font-size=0.33`
    };
  });
};

const ProfissionaisPage = () => {
  const professionals = useMemo(() => generateProfessionals(), []);
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todos');

  const specialtiesList = ['Todos', ...Array.from(new Set(professionals.map(p => p.specialty))).sort()];

  const filteredProfessionals = selectedSpecialty === 'Todos' 
    ? professionals 
    : professionals.filter(p => p.specialty === selectedSpecialty);

  return (
    <>
      <Helmet>
        <title>Profissionais - AtivaMente Alphaville</title>
        <meta name="description" content="Conheça a equipe multidisciplinar de especialistas em desenvolvimento infantil da AtivaMente Alphaville em Alphaville." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/profissionais" />
        <meta property="og:title" content="Profissionais - AtivaMente Alphaville" />
        <meta property="og:description" content="Conheça a equipe multidisciplinar de especialistas em desenvolvimento infantil da AtivaMente Alphaville em Alphaville." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/profissionais" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/ad76ed8e-396e-453f-aac2-367fdf405529/800_664ac5fb8a822-QKLL4.png" />
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
                Nossa Equipe
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
                Conheça os especialistas dedicados ao desenvolvimento e bem-estar do seu filho.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {specialtiesList.map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`rounded-full font-bold transition-all ${
                    selectedSpecialty === specialty 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'border-primary/20 text-foreground hover:border-primary hover:bg-primary/5'
                  }`}
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Professionals Grid */}
        <section className="py-16 bg-muted/30 flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProfessionals.map((prof) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={prof.id}
                  className="bg-card rounded-3xl shadow-lg border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col items-center text-center p-6"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/10 shadow-inner">
                    <img 
                      src={prof.photo} 
                      alt={prof.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">{prof.name}</h3>
                  <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-3">
                    {prof.specialty}
                  </span>
                  <p className="text-sm text-muted-foreground font-medium">
                    {prof.credentials}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {filteredProfessionals.length === 0 && (
              <div className="text-center py-20">
                <UserCircle2 className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-foreground">Nenhum profissional encontrado</h3>
                <p className="text-muted-foreground">Tente selecionar outra especialidade.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProfissionaisPage;