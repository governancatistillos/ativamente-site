# AtivaMente Alphaville

> Terapia e desenvolvimento infantil com acolhimento, ciência e cuidado individualizado.

Site institucional da **AtivaMente Alphaville**, clínica de atendimento infantil multidisciplinar em Alphaville, Barueri (SP). A plataforma apresenta a clínica, suas especialidades, profissionais e unidades, além de facilitar o contato das famílias e o agendamento de consultas.

<p align="center">
  <a href="https://clinicaativamentealphaville.com/">Acessar o site</a>
  &nbsp;·&nbsp;
  <a href="https://www.instagram.com/ativamentealphaville/">Instagram</a>
  &nbsp;·&nbsp;
  <a href="https://wa.me/5511991263146">Falar pelo WhatsApp</a>
</p>

## Sobre a clínica

A AtivaMente oferece acompanhamento infantil multidisciplinar com foco no desenvolvimento, na comunicação, na autonomia e no bem-estar. O trabalho é planejado de acordo com as necessidades de cada criança e inclui acolhimento e orientação à família.

O site reúne informações sobre a clínica e seus serviços, com páginas dedicadas a temas como autismo, ABA, fonoaudiologia e desenvolvimento infantil. Também conta com páginas de campanha para facilitar o acesso a conteúdos específicos.

## Especialidades

O site apresenta dez áreas de atendimento:

- ABA (Análise do Comportamento Aplicada)
- Psicologia
- Fonoaudiologia
- Psicopedagogia
- Fisioterapia
- Hidroterapia
- Equoterapia
- Terapia Ocupacional
- Musicoterapia
- Nutrição

## O site

- Apresentação da clínica, sua história e seus valores.
- Páginas de terapias e profissionais.
- Galeria de ambientes e informações sobre as unidades.
- Página de contato e acesso rápido ao WhatsApp.
- Páginas temáticas para autismo, ABA, fonoaudiologia e desenvolvimento infantil.
- Metadados para compartilhamento e mecanismos de busca.
- Layout responsivo para dispositivos móveis e desktops.

### Páginas principais

| Página | Caminho |
| --- | --- |
| Início | `/` |
| Sobre a clínica | `/sobre` |
| Terapias | `/terapias` |
| Profissionais | `/profissionais` |
| Galeria | `/galeria` |
| Unidades | `/unidades` |
| Contato | `/contato` |
| Atendimento para autismo | `/terapia-para-autismo-alphaville` |
| ABA infantil | `/aba-infantil-alphaville` |
| Fonoaudiologia infantil | `/fonoaudiologia-infantil-alphaville` |
| Desenvolvimento infantil | `/desenvolvimento-infantil-alphaville` |

## Tecnologias

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/) 7
- [React Router](https://reactrouter.com/) para navegação
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Radix UI](https://www.radix-ui.com/) para componentes acessíveis
- [Framer Motion](https://www.framer.com/motion/) para animações
- [Lucide](https://lucide.dev/) para ícones
- [ESLint](https://eslint.org/) para análise estática

## Executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) e npm
- Git

### Instalação

```bash
git clone https://github.com/governancatistillos/ativamente-site.git
cd ativamente-site
npm run setup
```

### Desenvolvimento

```bash
npm run dev
```

O Vite inicia o site em `http://localhost:3000`.

### Build de produção

```bash
npm run build
```

Os arquivos de produção são gerados em `apps/web/dist`.

### Visualizar o build

Depois de gerar o build:

```bash
npm run start --prefix apps/web
```

O preview local fica disponível em `http://localhost:3000`.

### Lint

```bash
npm run lint
```

## Estrutura do projeto

```text
.
├── apps/
│   └── web/
│       ├── plugins/       # Plugins e integrações do Vite
│       ├── public/        # Arquivos públicos do site
│       ├── src/
│       │   ├── components/ # Componentes compartilhados e UI
│       │   ├── hooks/      # Hooks React
│       │   ├── lib/        # Utilitários
│       │   └── pages/      # Páginas e landing pages
│       └── tools/          # Ferramentas de geração
├── package.json            # Workspaces e comandos do monorepo
└── knip.json               # Configuração de análise de código não utilizado
```

## Contato

**AtivaMente Alphaville**  
Alameda Rio Negro, 500, Alphaville Industrial  
Barueri, SP, Brasil  
Telefone e WhatsApp: [(11) 99126-3146](https://wa.me/5511991263146)  
E-mail: [contato@clinicaativamentealphaville.com](mailto:contato@clinicaativamentealphaville.com)  
Instagram: [@ativamentealphaville](https://www.instagram.com/ativamentealphaville/)

---

<p align="center">
  <strong>AtivaMente Alphaville</strong><br />
  Desenvolvimento infantil com cuidado, parceria e propósito.
</p>