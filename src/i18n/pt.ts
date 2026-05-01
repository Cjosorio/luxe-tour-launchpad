import type { Dict } from "./es";

export const pt: Dict = {
  brand: "Castellanos",
  brandFull: "Transporte Turístico Castellanos",
  nav: {
    why: "Sobre",
    services: "Serviços",
    fleet: "Frota",
    story: "História",
    coverage: "Cobertura",
    contact: "Cotação",
  },
  cta: {
    quote: "Solicitar cotação",
    whatsapp: "WhatsApp",
    whatsappLong: "Contato por WhatsApp",
    reserve: "Reserve seu transporte",
    viewDetails: "Ver detalhes",
    quoteThis: "Cotar este veículo",
    send: "Enviar por WhatsApp",
  },
  hero: {
    eyebrow: "Transporte executivo & turístico",
    title: "Viagens seguras, confortáveis e pontuais.",
    titleAccent: "Sem exceções.",
    subtitle:
      "Mais de uma década movendo passageiros com a elegância, disciplina e cuidado que eles merecem.",
    scroll: "Descubra",
  },
  why: {
    eyebrow: "Por que nos escolher",
    title: "Padrões que se sentem desde o primeiro minuto.",
    items: [
      { title: "Motoristas profissionais", desc: "Choferes certificados, apresentáveis e com ampla experiência em rotas turísticas." },
      { title: "Frota moderna", desc: "Veículos recentes, climatizados e mantidos sob os mais altos padrões." },
      { title: "Pontualidade garantida", desc: "Operação cronometrada. Chegamos antes para que você nunca espere." },
      { title: "Atenção personalizada", desc: "Cada serviço é projetado sob medida para o passageiro, o grupo e o destino." },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "Projetados para cada tipo de viagem.",
    items: [
      { title: "Transferências do aeroporto", desc: "Coleta e entrega pontuais, monitoramento de voos e atendimento 24/7." },
      { title: "Excursões turísticas", desc: "Rotas guiadas e transferências para os destinos mais emblemáticos." },
      { title: "Transporte corporativo", desc: "Mobilidade executiva para empresas, convenções e eventos." },
      { title: "Eventos e grupos", desc: "Casamentos, congressos e transferências em grupo com coordenação impecável." },
    ],
  },
  fleet: {
    eyebrow: "Nossa frota",
    title: "Veículos selecionados com critério.",
    subtitle:
      "Cada unidade é pensada para uma experiência: desde transferências executivas privadas até excursões em grupo de longa distância.",
    capacityLabel: "Capacidade",
    featuresLabel: "Características",
    pax: "passageiros",
  },
  story: {
    eyebrow: "Nossa história",
    title: "Uma tradição construída quilômetro a quilômetro.",
    paragraph:
      "O que começou como um serviço familiar de transporte se tornou uma marca reconhecida pela disciplina, calor humano e detalhe. Cada viagem conta uma história; nós garantimos que seja memorável.",
    missionTitle: "Missão",
    mission: "Oferecer experiências de transporte seguras, pontuais e confortáveis, superando as expectativas de cada passageiro.",
    visionTitle: "Visão",
    vision: "Ser a empresa de transporte turístico de referência por sua excelência operacional e seu cuidado humano.",
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "A confiança se conquista viagem após viagem.",
    items: [
      { quote: "Serviço impecável do início ao fim. Sempre pontuais e os motoristas extraordinariamente atenciosos.", author: "María Pérez", role: "Tour em grupo — 22 pax" },
      { quote: "Contratamos para nosso evento corporativo. Profissionalismo absoluto, veículos impecáveis.", author: "Carlos Rodríguez", role: "Diretor, Grupo Andino" },
      { quote: "A melhor decisão para nossa lua de mel. Cada detalhe foi cuidado com carinho.", author: "Laura & Diego", role: "Transferências privadas" },
      { quote: "Há anos usamos Castellanos para nossas transferências ao aeroporto. Nunca um atraso.", author: "Andrea Salinas", role: "Cliente frequente" },
    ],
  },
  coverage: {
    eyebrow: "Cobertura",
    title: "Operamos nas principais rotas turísticas.",
    description: "Cobrimos transferências urbanas, interprovinciais e excursões aos destinos mais procurados.",
    zones: [
      "Aeroporto Internacional",
      "Centro da cidade",
      "Hotéis e resorts",
      "Rotas de excursão",
      "Eventos e convenções",
      "Transferências interprovinciais",
    ],
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "O que você precisa saber.",
    items: [
      { q: "Como solicito uma cotação?", a: "Escreva pelo WhatsApp ou preencha o formulário. Respondemos em menos de 30 minutos em horário comercial." },
      { q: "Quais métodos de pagamento aceitam?", a: "Aceitamos dinheiro, transferências bancárias e cartões. Para serviços corporativos temos crédito empresarial." },
      { q: "Com quanta antecedência devo reservar?", a: "Recomendamos pelo menos 48 horas, embora atendamos serviços urgentes conforme disponibilidade." },
      { q: "Posso cancelar ou modificar uma reserva?", a: "Sim. Cancelamentos com mais de 24 horas de antecedência não têm custo." },
      { q: "Os veículos estão segurados?", a: "Todos nossos veículos têm seguro vigente e manutenção certificada." },
      { q: "Atendem fora da cidade?", a: "Sim, operamos transferências interprovinciais e excursões de longa distância." },
    ],
  },
  contact: {
    eyebrow: "Reserve agora",
    title: "Sua próxima viagem, perfeitamente coordenada.",
    subtitle: "Conte-nos os detalhes e montamos uma cotação sob medida em minutos.",
    name: "Nome completo",
    phone: "Telefone",
    date: "Data do serviço",
    service: "Tipo de serviço",
    vehicle: "Veículo preferido",
    message: "Detalhes adicionais",
    selectOption: "Selecione uma opção",
    anyVehicle: "Qualquer / a recomendar",
  },
  footer: {
    tagline: "Transporte turístico premium há mais de uma década.",
    rights: "Todos os direitos reservados.",
    contact: "Contato",
    follow: "Siga-nos",
    nav: "Navegação",
  },
  whatsapp: {
    floating: "Fale conosco no WhatsApp",
    defaultMsg: "Olá, gostaria de informações sobre seus serviços de transporte.",
    quoteMsg: (data) =>
      `Olá Castellanos, gostaria de uma cotação:%0A%0A• Nome: ${data.name}%0A• Telefone: ${data.phone}%0A• Data: ${data.date}%0A• Serviço: ${data.service}%0A• Veículo: ${data.vehicle}%0A• Detalhes: ${data.message}`,
    fleetMsg: (name) => `Olá Castellanos, quero cotar o veículo ${name}.`,
  },
};