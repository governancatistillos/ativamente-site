import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const galleryData = [
  {
    id: 1,
    url: 'https://images.cdn-files-a.com/uploads/7228758/2000_63a34a203475f.png?width=1200',
    title: 'Recepção Acolhedora',
    description: 'Ambiente preparado para receber as famílias com conforto.',
    category: 'Ambientes'
  },
  {
    id: 2,
    url: 'https://images.cdn-files-a.com/uploads/7228758/2000_639bc0407564f.jpg?width=1200',
    title: 'Sala de Terapia Ocupacional com IS',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 5,
    url: 'https://images.cdn-files-a.com/uploads/7228758/2000_63a346fa0a5f6_filter_63a358c8bbbeb.jpg?width=1200',
    title: 'Sessão de Fonoaudiologia',
    description: 'Estímulo da fala com recursos visuais e interativos.',
    category: 'Terapias'
  },
  {
    id: 7,
    url: 'https://images.cdn-files-a.com/uploads/7228758/2000_639bc04085a74.jpg?width=1200',
    title: 'Sala Lúdica',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 8,
    url: 'https://i.imgur.com/PoeNHE1.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 9,
    url: 'https://i.imgur.com/50M6nhP.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 10,
    url: 'https://i.imgur.com/Om5ActK.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 11,
    url: 'https://i.imgur.com/lL18IZ1.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 12,
    url: 'https://i.imgur.com/COcWsVn.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 13,
    url: 'https://i.imgur.com/8Lqmn8G.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 14,
    url: 'https://i.imgur.com/0l0nM4F.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 15,
    url: 'https://i.imgur.com/D9HBKfn.jpeg',
    title: 'Terapia',
    description: '',
    category: 'Terapias'
  },
  {
    id: 16,
    url: 'https://i.imgur.com/CgJVPPV.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 17,
    url: 'https://i.imgur.com/tkl4hbB.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 18,
    url: 'https://i.imgur.com/prULFQ9.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 19,
    url: 'https://i.imgur.com/0uGwwL0.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 20,
    url: 'https://i.imgur.com/PPs62KW.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 21,
    url: 'https://i.imgur.com/OFdS5O4.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
  {
    id: 22,
    url: 'https://i.imgur.com/itkElIV.jpeg',
    title: 'Ambientes',
    description: '',
    category: 'Ambientes'
  },
];

const GaleriaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['Todos', 'Ambientes', 'Terapias', 'Atividades', 'Eventos'];

  const filteredImages = selectedCategory === 'Todos'
    ? galleryData
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galeria - AtivaMente Alphaville</title>
        <meta name="description" content="Veja os ambientes, salas de terapia e o espaço acolhedor da clínica AtivaMente Alphaville em Alphaville." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://clinicaativamentealphaville.com/galeria" />
        <meta property="og:title" content="Galeria - AtivaMente Alphaville" />
        <meta property="og:description" content="Veja os ambientes, salas de terapia e o espaço acolhedor da clínica AtivaMente Alphaville em Alphaville." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clinicaativamentealphaville.com/galeria" />
        <meta property="og:image" content="https://images.cdn-files-a.com/uploads/7228758/2000_63a34a203475f.png?width=1200" />
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
                Nossa Galeria
              </h1>
              <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
                Explore nossos ambientes preparados com carinho para o desenvolvimento infantil.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full font-bold transition-all ${
                    selectedCategory === category 
                      ? 'bg-accent text-accent-foreground shadow-md hover:bg-accent/90' 
                      : 'border-accent/20 text-foreground hover:border-accent hover:bg-accent/5'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-muted/30 flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredImages.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-card"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <ZoomIn className="h-10 w-10 text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                      <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                      <p className="text-white/90 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-foreground">Nenhuma foto encontrada nesta categoria.</h3>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
            <DialogTitle className="sr-only">
              {selectedImage?.title || 'Visualização de imagem'}
            </DialogTitle>
            {selectedImage && (
              <div className="relative rounded-2xl overflow-hidden bg-black/90">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="w-full max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
};

export default GaleriaPage;