export type Slide = {
  kicker: string;
  title: string;
  lead?: string;
  points?: { title: string; text: string }[];
  layout: "cover" | "text" | "grid" | "closing" | "refs";
  notes: string;
};

export const slides: Slide[] = [
  { layout: "cover", kicker: "Trabalho escolar · 9º ano", title: "Organização das Nações Unidas", lead: "Juan Guilherme · Colégio Carvalho", notes: "Apresente-se, diga o nome da escola e o tema: a ONU, sua história, funções e desafios." },
  { layout: "text", kicker: "01 · Origem", title: "Nascida após a guerra", lead: "A ONU foi criada em 1945, logo após a Segunda Guerra Mundial, para evitar novos conflitos globais.", points: [
    { title: "1945", text: "Assinatura da Carta das Nações Unidas em São Francisco." },
    { title: "24 de outubro", text: "A Carta entra em vigor — hoje celebrado como Dia das Nações Unidas." },
    { title: "Herança", text: "Substituiu a Liga das Nações, que não conseguiu impedir a guerra." },
  ], notes: "Explique o contexto: o mundo destruído pela guerra buscava uma forma de cooperação permanente." },
  { layout: "text", kicker: "02 · Definição", title: "O que é a ONU?", lead: "Uma organização internacional formada por 193 Estados-membros que se reúnem para dialogar e agir em conjunto.", points: [
    { title: "193", text: "Estados-membros, quase todos os países do mundo." },
    { title: "Nova York", text: "Sede principal da organização, nos Estados Unidos." },
    { title: "Diálogo", text: "Espaço onde países resolvem diferenças pela diplomacia." },
  ], notes: "Destaque o número 193 e a ideia de fórum mundial de diálogo." },
  { layout: "grid", kicker: "03 · Objetivos", title: "Para que serve", points: [
    { title: "Paz e segurança", text: "Prevenir conflitos e manter a paz internacional." },
    { title: "Direitos humanos", text: "Proteger a dignidade e os direitos de todas as pessoas." },
    { title: "Cooperação", text: "Promover a colaboração entre os países." },
    { title: "Desenvolvimento", text: "Apoiar o progresso social e econômico." },
  ], notes: "Leia os quatro objetivos e dê um exemplo rápido de cada um." },
  { layout: "grid", kicker: "04 · Estrutura", title: "Os seis órgãos principais", points: [
    { title: "Assembleia Geral", text: "Todos os membros debatem e votam." },
    { title: "Conselho de Segurança", text: "Responsável pela paz e segurança." },
    { title: "Conselho Econômico e Social", text: "Temas econômicos, sociais e ambientais." },
    { title: "Conselho de Tutela", text: "Acompanhou territórios rumo à independência; hoje sem atividades." },
    { title: "Corte Internacional de Justiça", text: "Tribunal da ONU, em Haia (Países Baixos)." },
    { title: "Secretariado", text: "Administração, liderada pelo Secretário-Geral." },
  ], notes: "Mencione que o Conselho de Tutela suspendeu suas atividades em 1994." },
  { layout: "grid", kicker: "05 · Sistema ONU", title: "Agências e programas", points: [
    { title: "UNICEF", text: "Defende os direitos das crianças." },
    { title: "OMS", text: "Cuida da saúde pública mundial." },
    { title: "UNESCO", text: "Educação, ciência e cultura." },
    { title: "ACNUR", text: "Protege refugiados e deslocados." },
  ], notes: "Pergunte à turma se já ouviram falar de alguma dessas agências." },
  { layout: "text", kicker: "06 · Na prática", title: "Exemplos reais de atuação", points: [
    { title: "MINUSTAH · Haiti (2004–2017)", text: "Missão de paz para estabilizar o país; o Brasil comandou seu componente militar." },
    { title: "UNIOGBIS · Guiné-Bissau (até 2020)", text: "Escritório que apoiou a consolidação da paz e a estabilidade política." },
  ], notes: "Ressalte a participação brasileira no Haiti e o encerramento da UNIOGBIS em dezembro de 2020." },
  { layout: "text", kicker: "07 · Futuro", title: "Agenda 2030 e os ODS", lead: "Em 2015, os países adotaram 17 Objetivos de Desenvolvimento Sustentável para serem alcançados até 2030.", points: [
    { title: "Pessoas", text: "Erradicar a pobreza e a fome, garantir saúde e educação." },
    { title: "Planeta", text: "Combater a mudança do clima e proteger a natureza." },
    { title: "Prosperidade e paz", text: "Trabalho digno, igualdade e instituições fortes." },
  ], notes: "Mostre que os ODS envolvem governos, empresas e cada cidadão." },
  { layout: "text", kicker: "08 · Críticas", title: "Desafios da ONU", points: [
    { title: "Poder de veto", text: "EUA, Rússia, China, França e Reino Unido podem bloquear decisões do Conselho de Segurança." },
    { title: "Conflitos persistentes", text: "Nem sempre consegue impedir guerras e crises humanitárias." },
    { title: "Recursos", text: "Depende de contribuições e da vontade política dos países." },
  ], notes: "Explique o veto com um exemplo simples: um único país pode barrar uma resolução." },
  { layout: "grid", kicker: "09 · Conclusão", title: "O que aprendemos", points: [
    { title: "Cooperação", text: "Problemas globais exigem soluções conjuntas." },
    { title: "Diplomacia", text: "O diálogo é a melhor ferramenta para a paz." },
    { title: "Limites", text: "A ONU é importante, mas precisa de reformas." },
    { title: "Participação", text: "Cada pessoa pode contribuir com os ODS." },
  ], notes: "Resuma as ideias principais antes das referências." },
  { layout: "refs", kicker: "10 · Fontes", title: "Referências", points: [
    { title: "ONU — Nações Unidas", text: "https://www.un.org/pt" },
    { title: "ONU Brasil", text: "https://brasil.un.org" },
    { title: "Objetivos de Desenvolvimento Sustentável", text: "https://brasil.un.org/pt-br/sdgs" },
    { title: "Operações de Paz da ONU", text: "https://peacekeeping.un.org" },
    { title: "UNICEF Brasil", text: "https://www.unicef.org/brazil" },
    { title: "OMS", text: "https://www.who.int" },
    { title: "UNESCO", text: "https://www.unesco.org" },
    { title: "ACNUR Brasil", text: "https://www.acnur.org/portugues" },
  ], notes: "Mostre que todas as fontes são institucionais." },
  { layout: "closing", kicker: "Obrigado!", title: "O futuro também depende de nós", lead: "Juan Guilherme · Colégio Carvalho · 9º ano", notes: "Agradeça e abra espaço para perguntas." },
];
