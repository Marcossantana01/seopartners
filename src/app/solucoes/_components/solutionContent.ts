export type SolutionContent = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  problems: string[];
  process: string[];
  benefits: string[];
  results: string[];
};

export const solutions: Record<string, SolutionContent> = {
  seo: {
    slug: "seo",
    eyebrow: "SEO E CRESCIMENTO ORGÂNICO",
    title: "SEO que transforma buscas em oportunidades de venda.",
    subtitle:
      "Aumente sua presença no Google, gere demanda recorrente e construa uma máquina de aquisição previsível.",
    problems: [
      "Baixa presença orgânica nas buscas estratégicas.",
      "Conteúdos sem intenção comercial clara.",
      "Site lento, mal estruturado ou pouco rastreável.",
    ],
    process: [
      "Diagnóstico técnico, semântico e competitivo.",
      "Planejamento de palavras-chave por etapa do funil.",
      "Otimização contínua de páginas, conteúdo e autoridade.",
    ],
    benefits: [
      "Mais tráfego qualificado sem depender apenas de mídia paga.",
      "Ativos digitais que seguem gerando demanda no longo prazo.",
      "Decisões guiadas por dados de busca, conversão e receita.",
    ],
    results: [
      "Crescimento de posições para termos estratégicos.",
      "Aumento de visitantes qualificados e leads orgânicos.",
      "Redução gradual do custo de aquisição.",
    ],
  },
  "google-ads": {
    slug: "google-ads",
    eyebrow: "MÍDIA DE ALTA INTENÇÃO",
    title: "Google Ads com foco em receita, não em cliques.",
    subtitle:
      "Criamos campanhas para capturar demanda pronta, otimizar investimento e aproximar marketing do resultado comercial.",
    problems: [
      "Investimento desperdiçado em termos pouco qualificados.",
      "Campanhas sem leitura clara de ROI.",
      "Leads chegando sem prioridade para o time comercial.",
    ],
    process: [
      "Mapeamento de intenção, oferta e jornada.",
      "Criação de campanhas, páginas e eventos de conversão.",
      "Otimização por dados de CRM, vendas e rentabilidade.",
    ],
    benefits: [
      "Controle de verba por canal, campanha e objetivo.",
      "Acompanhamento mais claro entre anúncio, lead e venda.",
      "Aprendizado contínuo para escalar o que funciona.",
    ],
    results: [
      "Mais oportunidades com intenção de compra.",
      "Melhora de taxa de conversão e qualidade dos leads.",
      "Previsibilidade maior no investimento de aquisição.",
    ],
  },
  "meta-ads": {
    slug: "meta-ads",
    eyebrow: "DEMANDA E PERFORMANCE SOCIAL",
    title: "Meta Ads para gerar desejo, demanda e vendas.",
    subtitle:
      "Planejamos campanhas no Instagram e Facebook com criativos, segmentação e mensuração conectados ao funil comercial.",
    problems: [
      "Anúncios bonitos, mas sem conversão consistente.",
      "Criativos sem teste, variação ou leitura de dados.",
      "Dificuldade para separar alcance, lead e venda real.",
    ],
    process: [
      "Definição de públicos, ofertas e hipóteses criativas.",
      "Produção e testes de campanhas por etapa do funil.",
      "Análise de desempenho por lead, oportunidade e venda.",
    ],
    benefits: [
      "Aquisição mais ativa em mercados com demanda latente.",
      "Criativos alinhados à proposta de valor da empresa.",
      "Otimização de verba por performance e qualidade.",
    ],
    results: [
      "Aumento de leads e oportunidades qualificadas.",
      "Melhor aproveitamento de verba em campanhas sociais.",
      "Aprendizado claro sobre públicos, mensagens e ofertas.",
    ],
  },
  "landing-pages": {
    slug: "landing-pages",
    eyebrow: "PÁGINAS QUE CONVERTEM",
    title: "Landing pages pensadas para transformar tráfego em oportunidade.",
    subtitle:
      "Criamos páginas objetivas, rápidas e orientadas à conversão para campanhas, ofertas e jornadas comerciais.",
    problems: [
      "Tráfego pago sendo enviado para páginas genéricas.",
      "Baixa clareza de oferta, prova e chamada para ação.",
      "Experiência ruim no mobile prejudicando conversões.",
    ],
    process: [
      "Mapeamento da oferta, público e objeções de compra.",
      "Construção de estrutura, copy, layout e rastreamento.",
      "Testes e melhorias com base em dados de conversão.",
    ],
    benefits: [
      "Mais conversões com o mesmo investimento em mídia.",
      "Mensagem alinhada à campanha e à etapa do funil.",
      "Base pronta para testes de oferta e escala.",
    ],
    results: [
      "Melhora de taxa de conversão das campanhas.",
      "Redução de desperdício em tráfego qualificado.",
      "Mais clareza sobre quais ofertas geram pipeline.",
    ],
  },
  "crm-vendas": {
    slug: "crm-vendas",
    eyebrow: "CRM COMERCIAL",
    title: "CRM para organizar vendas e transformar leads em receita.",
    subtitle:
      "Estruturamos funis, etapas, rotinas e dados para o comercial operar com visibilidade, cadência e prioridade.",
    problems: [
      "Leads perdidos por falta de processo comercial.",
      "Funil sem etapas claras, responsáveis ou previsibilidade.",
      "Marketing sem retorno sobre o que vira venda.",
    ],
    process: [
      "Diagnóstico do processo comercial e dos pontos de perda.",
      "Configuração de funis, campos, automações e indicadores.",
      "Treinamento e acompanhamento das rotinas de gestão.",
    ],
    benefits: [
      "Mais controle sobre oportunidades e próximos passos.",
      "Integração entre captação, atendimento e fechamento.",
      "Dados confiáveis para decisões de marketing e vendas.",
    ],
    results: [
      "Menos perda de leads ao longo do funil.",
      "Maior taxa de resposta, qualificação e fechamento.",
      "Previsão comercial mais clara para a liderança.",
    ],
  },
  automacao: {
    slug: "automacao",
    eyebrow: "AUTOMAÇÃO DE MARKETING E VENDAS",
    title: "Automação para acelerar rotinas sem perder contexto.",
    subtitle:
      "Conectamos ferramentas, dados e fluxos para reduzir tarefas manuais e aumentar a velocidade de resposta ao lead.",
    problems: [
      "Equipe gastando tempo com tarefas repetitivas.",
      "Leads sem nutrição, segmentação ou follow-up adequado.",
      "Ferramentas desconectadas gerando dados incompletos.",
    ],
    process: [
      "Mapeamento dos fluxos atuais e gargalos operacionais.",
      "Criação de automações entre marketing, CRM e atendimento.",
      "Monitoramento para ajustar regras, mensagens e etapas.",
    ],
    benefits: [
      "Resposta mais rápida e consistente para cada lead.",
      "Menos trabalho manual em processos críticos.",
      "Jornada mais organizada do primeiro contato à venda.",
    ],
    results: [
      "Aumento de produtividade do time comercial.",
      "Mais leads acompanhados no tempo certo.",
      "Redução de falhas operacionais no funil.",
    ],
  },
  "business-intelligence": {
    slug: "business-intelligence",
    eyebrow: "BI E RELATÓRIOS",
    title: "Business Intelligence para decidir com clareza.",
    subtitle:
      "Organizamos dados de marketing, vendas e receita em painéis que mostram o que importa para crescer.",
    problems: [
      "Relatórios fragmentados entre plataformas diferentes.",
      "Dificuldade para conectar campanha, lead, venda e receita.",
      "Decisões tomadas com atraso ou dados inconsistentes.",
    ],
    process: [
      "Mapeamento das fontes de dados e indicadores de negócio.",
      "Construção de dashboards para operação e liderança.",
      "Rotina de análise para transformar dados em ação.",
    ],
    benefits: [
      "Visão unificada do funil de aquisição e vendas.",
      "Mais transparência sobre investimento, retorno e gargalos.",
      "Gestão com foco em indicadores acionáveis.",
    ],
    results: [
      "Relatórios mais rápidos, confiáveis e úteis.",
      "Identificação de oportunidades de otimização.",
      "Mais alinhamento entre marketing, vendas e liderança.",
    ],
  },
  "growth-partnership": {
    slug: "growth-partnership",
    eyebrow: "PARCERIA DE CRESCIMENTO",
    title: "Não entregamos leads. Entregamos crescimento.",
    subtitle:
      "A SEO Partners atua como parceira estratégica da empresa, unindo marketing, vendas, CRM, automação, Business Intelligence e consultoria para construir crescimento previsível.",
    problems: [
      "Marketing gera leads, mas vendas não transforma em receita.",
      "CRM, campanhas e relatórios operam desconectados.",
      "A liderança não tem clareza sobre gargalos, prioridades e próximos movimentos.",
      "Fornecedores executam tarefas isoladas sem visão de crescimento.",
    ],
    process: [
      "Começamos pelo diagnóstico do negócio, da oferta, do funil e das metas comerciais.",
      "Desenhamos uma estratégia integrada de marketing, vendas, CRM, automação e dados.",
      "Executamos campanhas, páginas, fluxos, dashboards e rotinas comerciais com acompanhamento contínuo.",
      "Atuamos em ciclos de análise e melhoria com consultoria estratégica para escalar o que gera receita.",
    ],
    benefits: [
      "Marketing conectado ao comercial e às metas reais da empresa.",
      "CRM estruturado para dar visibilidade, cadência e previsibilidade ao funil.",
      "Automações que reduzem tarefas manuais e aumentam velocidade de resposta.",
      "Business Intelligence para acompanhar investimento, pipeline, receita e gargalos.",
      "Consultoria estratégica para priorizar canais, ofertas, processos e decisões de crescimento.",
    ],
    results: [
      "Mais oportunidades qualificadas e melhor aproveitamento comercial.",
      "Funil mais previsível, mensurável e integrado.",
      "Decisões com base em dados de marketing, vendas e receita.",
      "Crescimento sustentável com a SEO Partners atuando como extensão estratégica da empresa.",
    ],
  },
};
