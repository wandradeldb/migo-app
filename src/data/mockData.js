// ─── MIGO AJUDA — Guias ───────────────────────────────────────────────────────

export const guides = [
  {
    id: 'pps-number',
    title: 'Número PPS',
    subtitle: 'Solicite seu Número de Serviço Público Pessoal',
    icon: '🪪',
    category: 'Identidade',
    readTime: '8 min',
    popular: true,
    steps: [
      {
        title: 'Verifique se você precisa de um Número PPS',
        content:
          'O Número PPS é obrigatório para trabalhar, acessar serviços públicos e receber benefícios sociais na Irlanda. Se você planeja trabalhar ou morar na Irlanda por mais de alguns meses, você precisa de um.',
        tip: 'Seu empregador ou senhorio pode pedir esse número — providencie assim que chegar.',
      },
      {
        title: 'Agende um horário no Centro Intreo mais próximo',
        content:
          'Os Números PPS são emitidos nos Centros Intreo e em alguns escritórios do DSP. Você deve comparecer pessoalmente. Encontre o centro mais próximo em gov.ie.',
        tip: 'Em Dublin, o escritório do NIDP na Cathedral Street cuida dos registros de PPS.',
      },
      {
        title: 'Reúna seus documentos',
        content:
          'Você precisará de: (1) Prova de identidade — passaporte ou carteira de identidade nacional. (2) Comprovante de endereço na Irlanda — conta de luz, carta do banco ou contrato de aluguel com data dos últimos 3 meses. (3) Comprovante do motivo pelo qual precisa do número PPS (ex: carta do empregador, formulário de benefício).',
        tip: 'Leve os originais E fotocópias de todos os documentos.',
      },
      {
        title: 'Compareça ao seu horário agendado',
        content:
          'Chegue no horário. Um funcionário do DSP verificará seus documentos e tirará sua foto. A entrevista geralmente dura 15 a 20 minutos.',
      },
      {
        title: 'Receba seu Número PPS',
        content:
          'Seu Número PPS é enviado pelo correio para seu endereço na Irlanda em 5 a 10 dias úteis. Guarde a carta com cuidado — você precisará desse número para quase tudo na Irlanda.',
        tip: 'Seu Número PPS começa com 7 dígitos seguidos de 1 a 2 letras (ex: 1234567A).',
      },
    ],
    faq: [
      { q: 'Posso me inscrever online?', a: 'Atualmente, a maioria dos casos exige inscrição presencial.' },
      { q: 'Há alguma taxa?', a: 'Não, solicitar o Número PPS é totalmente gratuito.' },
      { q: 'Meu cônjuge/parceiro também pode obter um?', a: 'Sim, cada pessoa deve se inscrever individualmente com seus próprios documentos.' },
    ],
  },
  {
    id: 'revenue-tax',
    title: 'Revenue & Impostos',
    subtitle: 'Cadastre-se no Revenue, entenda o PAYE e declare imposto de renda',
    icon: '💰',
    category: 'Finanças',
    readTime: '12 min',
    popular: true,
    steps: [
      {
        title: 'Primeiro, obtenha seu Número PPS',
        content: 'Você precisa ter um Número PPS antes de se cadastrar no Revenue. Depois de obtê-lo, acesse revenue.ie.',
      },
      {
        title: 'Crie uma conta "myAccount" no revenue.ie',
        content:
          'Acesse revenue.ie e clique em "myAccount". Cadastre-se usando seu Número PPS, data de nascimento e endereço na Irlanda. Você receberá uma senha temporária pelo correio em até 5 dias.',
        tip: 'Use o app Revenue (myRevenue) para acesso rápido pelo celular.',
      },
      {
        title: 'Entenda o PAYE',
        content:
          'A maioria dos empregados é tributada pelo sistema PAYE (Pay As You Earn — Pague à Medida que Ganha). Seu empregador desconta o imposto de renda, USC (Contribuição Social Universal) e PRSI (seguro social) do seu salário antes de você recebê-lo.',
      },
      {
        title: 'Verifique seus Créditos Fiscais',
        content:
          'No myAccount, acesse "Manage my Tax 2024". Você tem direito ao Crédito Fiscal Pessoal (€1.875) e ao Crédito Fiscal de Empregado (€1.875). Se você é pai/mãe solteiro(a) ou tem dependentes, pode ter mais créditos.',
        tip: 'Créditos não utilizados podem ser recuperados retroativamente — verifique seu histórico.',
      },
      {
        title: 'Informe seu Número PPS ao empregador',
        content:
          'Forneça seu Número PPS ao empregador. Eles vão te cadastrar no PAYE e seus créditos fiscais serão aplicados ao seu salário.',
      },
      {
        title: 'Entregue sua declaração anual (Formulário 12)',
        content:
          'Ao final de cada ano fiscal (janeiro a dezembro), trabalhadores PAYE podem enviar um Formulário 12 online pelo myAccount para receber restituições ou pagar valores em atraso. O prazo geralmente é 31 de outubro.',
        tip: 'Muitos trabalhadores recebem restituição se não trabalharam o ano completo ou tiveram despesas médicas.',
      },
    ],
    faq: [
      { q: 'O que é o USC?', a: 'Contribuição Social Universal — um imposto sobre a renda bruta acima de €13.000. As alíquotas variam de 0,5% a 8%.' },
      { q: 'Pago imposto sobre toda a renda?', a: 'A alíquota padrão do imposto de renda é de 20% para rendimentos até €42.000 e 40% para rendimentos acima disso.' },
    ],
  },
  {
    id: 'hap',
    title: 'Benefício HAP (Moradia)',
    subtitle: 'Housing Assistance Payment — subsídio de aluguel para baixa renda',
    icon: '🏠',
    category: 'Moradia',
    readTime: '10 min',
    popular: false,
    steps: [
      {
        title: 'Verifique sua elegibilidade',
        content:
          'O HAP é destinado a pessoas que se qualificam para apoio habitacional social. Você deve estar na lista de habitação social e estar alugando de um proprietário privado. Sua renda deve estar abaixo dos limites do HAP para o tamanho de sua família.',
        tip: 'Portadores do Stamp 4 e cidadãos da UE geralmente são elegíveis se atenderem aos requisitos de renda.',
      },
      {
        title: 'Inscreva-se na lista de habitação social',
        content:
          'Entre em contato com seu conselho local (ex: Dublin City Council, Cork City Council) para solicitar apoio habitacional social. Isso o coloca na lista de espera e o torna elegível para o HAP.',
      },
      {
        title: 'Encontre um imóvel que aceite HAP',
        content:
          'Os imóveis HAP devem atender a padrões mínimos e estar na área de sua autoridade local. Use o Daft.ie e filtre por "HAP aceito". Muitos proprietários em áreas de alta demanda não aceitam HAP — seja persistente.',
        tip: 'Pergunte para outros membros da comunidade Migo — muitos proprietários brasileiros aceitam HAP.',
      },
      {
        title: 'Preencha o formulário de solicitação do HAP',
        content:
          'Depois de encontrar um imóvel, baixe o formulário HAP no site da sua autoridade local. Tanto você (inquilino) quanto seu proprietário devem preencher seções. Envie ao departamento de habitação do conselho local.',
      },
      {
        title: 'Os pagamentos HAP começam',
        content:
          'Se aprovado, seu conselho paga o aluguel diretamente ao proprietário todo mês. Você paga uma contribuição de "aluguel diferencial" ao conselho, calculada com base em sua renda.',
        tip: 'Os pagamentos do HAP começam a partir da data de aprovação — não são retroativos.',
      },
    ],
    faq: [
      { q: 'Quanto o HAP cobre?', a: 'Os limites do HAP variam por área. Em Dublin, uma pessoa solteira recebe até €660/mês; um casal com 2 filhos recebe até €1.000/mês.' },
      { q: 'Meu proprietário pode recusar o HAP?', a: 'Desde 2021, os proprietários não podem discriminar inquilinos com HAP nos termos das Leis de Status Igual.' },
    ],
  },
  {
    id: 'child-benefit',
    title: 'Abono de Família (Child Benefit)',
    subtitle: 'Pagamento mensal para crianças menores de 18 anos',
    icon: '👶',
    category: 'Família',
    readTime: '6 min',
    popular: false,
    steps: [
      {
        title: 'Verifique a elegibilidade',
        content:
          'O Child Benefit é pago ao cuidador principal de crianças menores de 16 anos, ou menores de 18 se estiverem em educação em período integral ou com deficiência. Sua criança deve morar com você na Irlanda. Você deve ter residência legal (ex: Stamp 4, cidadão da UE, refugiado).',
      },
      {
        title: 'Qual é o valor?',
        content:
          'O Child Benefit é de €140 por criança por mês. É pago na primeira terça-feira de cada mês. Para gêmeos, a taxa é 1,5 vezes o pagamento mensal por criança.',
      },
      {
        title: 'Solicite online ou pelo correio',
        content:
          'Baixe o formulário CB1 em gov.ie, ou solicite online pelo MyWelfare.ie. Você precisará do seu Número PPS e do Número PPS da criança (solicite ao mesmo tempo que o seu).',
        tip: 'Solicite o mais rápido possível — o benefício é pago a partir do mês da solicitação, não do nascimento.',
      },
      {
        title: 'Envie os documentos',
        content:
          'Pode ser necessário fornecer: certidão de nascimento, comprovante de endereço, autorização de imigração (se não for da UE) e seu Número PPS.',
      },
      {
        title: 'Receba os pagamentos',
        content:
          'Após aprovação, os pagamentos são feitos diretamente na sua conta bancária indicada, na primeira terça-feira de cada mês.',
      },
    ],
    faq: [
      { q: 'Preciso estar trabalhando para receber o Child Benefit?', a: 'Não. O Child Benefit não é vinculado à renda e não depende de emprego.' },
      { q: 'E se meu filho nasceu no exterior?', a: 'Você ainda pode solicitar, desde que você e seu filho estejam morando na Irlanda e você tenha direito de residência.' },
    ],
  },
  {
    id: 'stamp4',
    title: 'Stamp 4 — Visto de Longa Duração',
    subtitle: 'Solicite e renove sua permissão de imigração Stamp 4',
    icon: '🛂',
    category: 'Imigração',
    readTime: '15 min',
    popular: true,
    steps: [
      {
        title: 'Entenda o que significa o Stamp 4',
        content:
          'O Stamp 4 dá o direito de morar e trabalhar livremente na Irlanda sem precisar de uma licença de trabalho. Você pode trabalhar para qualquer empregador, estudar e acessar a maioria dos serviços públicos. Ele não concede cidadania — isso requer um processo separado de naturalização.',
      },
      {
        title: 'Verifique se você é elegível',
        content:
          'O Stamp 4 é geralmente concedido após: (1) 5 anos com permissão de trabalho (Critical Skills ou General Employment Permit). (2) 3 anos como cônjuge/parceiro de cidadão irlandês ou da UE. (3) Concessão de status de refugiado ou proteção subsidiária. (4) Ser familiar de um portador do Stamp 4.',
      },
      {
        title: 'Agende um horário com o ISD (Dublin) ou Garda (demais cidades)',
        content:
          'Em Dublin, registre-se no escritório do Immigration Service Delivery (ISD) — agende online em inis.gov.ie. Fora de Dublin, vá à delegacia local do Garda National Immigration Bureau (GNIB).',
        tip: 'Os horários em Dublin podem ser agendados com semanas de antecedência. Agende o quanto antes.',
      },
      {
        title: 'Reúna seus documentos',
        content:
          'Leve: (1) Passaporte válido e atual. (2) Cartão IRP (Irish Residence Permit) atual. (3) Comprovante de residência contínua (contracheques, extratos bancários, P60s dos últimos 5 anos). (4) Comprovante de endereço. (5) Fotos para passaporte. (6) Taxa de solicitação (€300).',
      },
      {
        title: 'Compareça ao seu horário',
        content:
          'Um funcionário irá revisar seus documentos e dados biométricos. Se aprovado, seu novo cartão IRP com Stamp 4 será enviado pelo correio em 10 a 15 dias úteis.',
        tip: 'Sua permissão atual permanece válida enquanto você espera, desde que tenha solicitado antes do vencimento.',
      },
      {
        title: 'Renovação do Stamp 4',
        content:
          'O Stamp 4 geralmente deve ser renovado a cada 2 a 3 anos. O processo é o mesmo — agende um horário e leve documentos atualizados e a taxa. Guarde todos os contracheques e registros financeiros ao longo de sua estadia.',
      },
    ],
    faq: [
      { q: 'Posso viajar para fora da Irlanda com o Stamp 4?', a: 'Sim, mas você pode precisar de um visto de reentrada se for nacional de fora do EEE. Consulte inis.gov.ie.' },
      { q: 'O Stamp 4 leva à cidadania?', a: 'Após 5 anos de residência computável, você pode solicitar a naturalização como cidadão irlandês.' },
    ],
  },
  {
    id: 'driving-licence',
    title: 'Conversão de Carta de Habilitação',
    subtitle: 'CNH Brasileira → Portuguesa → Irlandesa, passo a passo',
    icon: '🚗',
    category: 'Transporte',
    readTime: '20 min',
    popular: true,
    steps: [
      {
        title: 'Por que converter via Portugal?',
        content:
          'O Brasil tem um acordo bilateral com Portugal que permite trocar a CNH brasileira por uma habilitação portuguesa (europeia) sem precisar fazer prova. Com uma habilitação europeia, você pode trocá-la pela habilitação irlandesa — também sem prova.',
        tip: 'Isso evita que você precise fazer a prova teórica irlandesa e as 12 aulas obrigatórias como motorista iniciante.',
      },
      {
        title: 'Passo 1 — Troque sua CNH por habilitação portuguesa (em Portugal)',
        content:
          'Você deve fazer isso presencialmente em Portugal. Agende um horário no IMT (Instituto da Mobilidade e dos Transportes). Você precisará de: CNH brasileira válida, passaporte válido, NIF português, comprovante de endereço em Portugal e pagamento de taxas (~€50).',
        tip: 'Você não precisa ser residente em Portugal — turistas podem fazer isso. Muitos brasileiros viajam especificamente para Porto ou Lisboa para essa etapa.',
      },
      {
        title: 'Passo 2 — Aguarde sua habilitação portuguesa',
        content:
          'A habilitação portuguesa é enviada pelo correio para seu endereço em Portugal em 2 a 4 semanas. Se não tiver endereço em Portugal, use o endereço de um familiar ou um serviço de correspondência. A habilitação é válida em toda a União Europeia.',
      },
      {
        title: 'Passo 3 — Cadastre-se no NDLS (National Driver Licence Service) na Irlanda',
        content:
          'Agende um horário no centro NDLS mais próximo (ndls.ie). Você precisará de: (1) Habilitação portuguesa. (2) Documento de identidade válido (passaporte). (3) Comprovante de endereço na Irlanda. (4) Formulário D401 preenchido (disponível no NDLS). (5) Taxa de €55. (6) Laudo de aptidão visual de um optometrista.',
      },
      {
        title: 'Passo 4 — Entregue e receba sua habilitação irlandesa',
        content:
          'O NDLS recolherá sua habilitação portuguesa e emitirá uma irlandesa. As categorias da sua habilitação portuguesa são transferidas. Sua habilitação irlandesa chegará pelo correio em 5 a 10 dias úteis.',
        tip: 'Tire uma fotocópia da sua habilitação portuguesa antes de entregá-la.',
      },
    ],
    faq: [
      { q: 'Preciso fazer prova na Irlanda?', a: 'Não — com uma habilitação europeia completa (ex: portuguesa), você pode trocá-la pela irlandesa sem fazer provas.' },
      { q: 'Quais categorias são transferidas?', a: 'Geralmente a categoria B (automóvel). Moto (A) ou caminhão (C) podem requerer verificação adicional.' },
      { q: 'Quanto tempo leva o processo completo?', a: 'Planeje de 4 a 8 semanas no total, entre a etapa portuguesa e o recebimento da habilitação irlandesa.' },
    ],
  },
  {
    id: 'car-insurance',
    title: 'Seguro de Automóvel na Irlanda',
    subtitle: 'Entenda o seguro irlandês e consiga o melhor preço',
    icon: '🛡️',
    category: 'Transporte',
    readTime: '8 min',
    popular: false,
    steps: [
      {
        title: 'Entenda os tipos de cobertura',
        content:
          'Na Irlanda existem 3 tipos principais: (1) Third Party Only (TPO) — requisito legal mínimo, cobre danos causados a terceiros. (2) Third Party, Fire & Theft (TPFT) — adiciona cobertura se seu carro for roubado ou pegar fogo. (3) Comprehensive (Compreensivo) — cobre tudo, incluindo danos ao seu próprio carro.',
      },
      {
        title: 'Faça cotações online',
        content:
          'Use sites de comparação: insuremycars.ie, coverinaclick.ie, bonkers.ie. Tenha em mãos: matrícula do carro, data do NCT, número da sua habilitação, há quantos anos você dirige e seu bônus de não-sinistro.',
        tip: 'Quilometragem anual: seja preciso — subestimar pode anular seu seguro.',
      },
      {
        title: 'Declare todo o seu histórico de condutor',
        content:
          'As seguradoras irlandesas exigem a declaração de: (1) Todos os sinistros anteriores. (2) Todas as condenações. (3) Todas as apólices anteriores. Omitir essas informações pode anular completamente sua apólice.',
      },
      {
        title: 'Bônus de Não-Sinistro (No Claims Bonus — NCB)',
        content:
          'Cada ano sem sinistro lhe dá um Bônus de Não-Sinistro, reduzindo seu prêmio. Após 5 anos, você pode ter até 50% de desconto. Peça à sua seguradora anterior (no Brasil ou em Portugal) uma carta confirmando os anos sem sinistro — algumas seguradoras irlandesas aceitam o NCB estrangeiro.',
        tip: 'A aceitação do NCB estrangeiro varia por seguradora — sempre pergunte.',
      },
      {
        title: 'Compre a apólice e receba seu disco',
        content:
          'Após a compra online, você recebe um Certificado de Seguro e um disco pelo correio/e-mail. O disco deve ser exibido no para-brisa. Mantenha o certificado no carro.',
      },
    ],
    faq: [
      { q: 'O seguro de carro é caro na Irlanda?', a: 'A Irlanda tem alguns dos prêmios mais altos da Europa. Motoristas novos podem pagar de €1.500 a €3.000+ por ano. Comparar preços é essencial.' },
      { q: 'Posso dirigir enquanto aguardo meu disco?', a: 'Sim — com a confirmação de compra (e-mail), você já está coberto. O disco físico é apenas para exibição.' },
    ],
  },
];

// ─── MIGO AJUDA — Consultas ───────────────────────────────────────────────────

export const consultationTypes = [
  { id: 'basic', label: 'Dúvida Rápida', duration: '30 min', price: 30, description: 'Um assunto, respostas rápidas' },
  { id: 'standard', label: 'Consulta Completa', duration: '60 min', price: 55, description: 'Ajuda detalhada sobre qualquer tema de burocracia' },
  { id: 'premium', label: 'Revisão de Documentos', duration: '90 min', price: 80, description: 'Revisão e preparação de documentos com especialista' },
];

export const consultants = [
  { id: 1, name: 'Fernanda Costa', role: 'Especialista em Imigração', languages: ['Português', 'Inglês'], rating: 4.9, reviews: 87, avatar: '👩🏽', available: true },
  { id: 2, name: 'Rodrigo Alves', role: 'Especialista em Impostos e Revenue', languages: ['Português', 'Inglês', 'Espanhol'], rating: 4.8, reviews: 62, avatar: '👨🏻', available: true },
  { id: 3, name: 'Juliana Mendes', role: 'Consultora de Moradia e HAP', languages: ['Português', 'Inglês'], rating: 5.0, reviews: 44, avatar: '👩🏼', available: false },
];

// ─── MIGO MERCADO — Produtos ──────────────────────────────────────────────────

export const categories = ['Todos', 'Comida', 'Beleza', 'Artesanato', 'Serviços'];

export const marketItems = [
  {
    id: 1,
    title: 'Pão de Queijo (12 unidades)',
    seller: 'Mariana Oliveira',
    sellerAvatar: '👩🏽',
    price: 8,
    category: 'Comida',
    location: 'Tallaght, Dublin',
    emoji: '🧀',
    description: 'Pão de queijo caseiro com receita autêntica de Minas Gerais. Feito fresquinho toda sexta-feira. Peça até quinta-feira.',
    rating: 5.0,
    reviews: 23,
    badge: 'Popular',
    badgeColor: 'bg-accent text-white',
  },
  {
    id: 2,
    title: 'Brigadeiros Sortidos (caixa com 20)',
    seller: 'Camila Santos',
    sellerAvatar: '👩🏾',
    price: 15,
    category: 'Comida',
    location: 'Cork City',
    emoji: '🍫',
    description: 'Brigadeiros artesanais nos sabores clássico de chocolate, pistache, Nutella e coco. Perfeito para festas e eventos.',
    rating: 4.9,
    reviews: 31,
    badge: null,
    badgeColor: '',
  },
  {
    id: 3,
    title: 'Moqueca de Camarão (serve 4)',
    seller: 'Luciana Ferreira',
    sellerAvatar: '👩🏻',
    price: 35,
    category: 'Comida',
    location: 'Blanchardstown, Dublin',
    emoji: '🍲',
    description: 'Moqueca baiana tradicional com leite de coco e azeite de dendê. Ingredientes frescos, pronto para esquentar.',
    rating: 4.8,
    reviews: 18,
    badge: 'Novo',
    badgeColor: 'bg-migo text-white',
  },
  {
    id: 4,
    title: 'Box Braids — Cabeça Inteira',
    seller: 'Aisha Barbosa',
    sellerAvatar: '👩🏿',
    price: 120,
    category: 'Beleza',
    location: 'Drumcondra, Dublin',
    emoji: '💆🏾‍♀️',
    description: 'Box braids profissional em sua casa ou na minha. Inclui cabelo. Dura de 5 a 7 horas. Reserve com antecedência.',
    rating: 5.0,
    reviews: 47,
    badge: 'Mais Pedido',
    badgeColor: 'bg-yellow-400 text-yellow-900',
  },
  {
    id: 5,
    title: 'Unhas em Gel — Jogo Completo',
    seller: 'Patrícia Lima',
    sellerAvatar: '👩🏽',
    price: 45,
    category: 'Beleza',
    location: 'Clondalkin, Dublin',
    emoji: '💅',
    description: 'Extensão ou sobreposição de gel. Grande variedade de cores. Atendimento em domicílio num raio de 5km. Inclui nail art.',
    rating: 4.7,
    reviews: 29,
    badge: null,
    badgeColor: '',
  },
  {
    id: 6,
    title: 'Quadro de Macramê Artesanal',
    seller: 'Beatriz Alves',
    sellerAvatar: '👩🏼',
    price: 55,
    category: 'Artesanato',
    location: 'Galway',
    emoji: '🪢',
    description: 'Painel de macramê boho, 60x80cm. Algodão natural. Feito sob encomenda — personalize tamanho e cor.',
    rating: 4.9,
    reviews: 14,
    badge: 'Artesanal',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 7,
    title: 'Faxina Residencial — 3 horas',
    seller: 'Maria Aparecida',
    sellerAvatar: '👩🏽',
    price: 60,
    category: 'Serviços',
    location: 'Dublin (Todas as Regiões)',
    emoji: '🧹',
    description: 'Serviço completo de faxina residencial. Traz seus próprios materiais. Vagas semanais e quinzenais disponíveis. Referências a pedido.',
    rating: 4.9,
    reviews: 68,
    badge: 'Confiável',
    badgeColor: 'bg-migo-light text-migo',
  },
  {
    id: 8,
    title: 'Babysitter / Cuidadora de Crianças',
    seller: 'Ana Paula Souza',
    sellerAvatar: '👩🏻',
    price: 12,
    category: 'Serviços',
    location: 'Sul de Dublin',
    emoji: '🧸',
    description: '€12/hora. Experiente com crianças de 0 a 10 anos. Bilíngue (PT/EN). Certificado de Primeiros Socorros. Referências disponíveis.',
    rating: 5.0,
    reviews: 22,
    badge: null,
    badgeColor: '',
  },
];

// ─── MIGO EMPREGOS — Trabalhadores ────────────────────────────────────────────

export const workers = [
  {
    id: 1,
    name: 'Maria Silva',
    avatar: '👩🏽',
    role: 'Faxineira e Organizadora Residencial',
    location: 'Dublin (todas as regiões)',
    availability: 'Seg–Sex, horários flexíveis',
    rate: '€14/hora',
    languages: ['Português', 'Inglês'],
    skills: ['Faxina Residencial', 'Limpeza de Escritório', 'Passar Roupa', 'Organização', 'Limpeza de Forno'],
    experience: '4 anos na Irlanda',
    bio: 'Trabalhadora, confiável e atenciosa aos detalhes. Disponível imediatamente. Referências fornecidas. Verificação de antecedentes realizada.',
    verified: true,
    stamp: 'Stamp 4',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    avatar: '👨🏻',
    role: 'Construção Civil e Terraplanagem',
    location: 'Cork e região',
    availability: 'Disponível em tempo integral',
    rate: '€18/hora',
    languages: ['Português', 'Inglês', 'Espanhol'],
    skills: ['Terraplanagem', 'Alvenaria', 'Concreto', 'Paisagismo', 'Cercas', 'Servente em Geral'],
    experience: '6 anos na Irlanda',
    bio: 'Experiente em obras residenciais e comerciais. Transporte próprio. Possui cartão CSCS. Histórico sólido em segurança do trabalho.',
    verified: true,
    stamp: 'Stamp 4',
  },
  {
    id: 3,
    name: 'Ana Lima',
    avatar: '👩🏾',
    role: 'Babysitter / Au Pair',
    location: 'Sul de Dublin / Wicklow',
    availability: 'Tempo integral ou parcial',
    rate: '€13/hora',
    languages: ['Português', 'Inglês'],
    skills: ['Cuidado de Crianças', 'Ajuda com Dever de Casa', 'Culinária', 'Serviços Leves', 'Transporte Escolar', 'Primeiros Socorros'],
    experience: '3 anos na Irlanda',
    bio: 'Carinhosa e responsável. Certificado de Primeiros Socorros. Experiência com crianças de 1 a 12 anos. Carro próprio. Aceita morar na casa ou externamente.',
    verified: true,
    stamp: 'Stamp 1G',
  },
];

// ─── MIGO EMPREGOS — Vagas ────────────────────────────────────────────────────

export const jobs = [
  {
    id: 1,
    title: 'Auxiliar de Cozinha e Atendente',
    company: 'Samba Grill',
    companyLogo: '🍽️',
    location: 'Temple Bar, Dublin 2',
    salary: '€13,50–€15/hora',
    type: 'Meio período / Integral',
    posted: 'há 2 dias',
    languages: ['Português', 'Inglês'],
    description:
      'Somos um restaurante brasileiro-irlandês em busca de funcionários animados e simpáticos. Vagas disponíveis tanto na cozinha quanto no salão. Experiência anterior é um diferencial, mas não obrigatório — treinamos.',
    requirements: ['Permissão para trabalhar na Irlanda', 'Boa atitude', 'Trabalho em equipe', 'Inglês básico'],
    benefits: ['Refeição para funcionários', 'Gorjetas', 'Escala flexível', 'Início imediato'],
    contact: 'hr@sambagrill.ie',
  },
  {
    id: 2,
    title: 'Serventes de Obras — Construção Civil',
    company: 'Cork Build Ltd',
    companyLogo: '🏗️',
    location: 'Cork City e região',
    salary: '€14–€18/hora (PAYE)',
    type: 'Tempo integral',
    posted: 'há 1 semana',
    languages: ['Inglês'],
    description:
      'Múltiplas vagas para serventes em obras residenciais e comerciais na região de Cork. É necessário ter cartão CSCS ou disposição para obtê-lo em até 2 semanas (auxiliamos com o custo).',
    requirements: ['Cartão CSCS (ou disposição para obter)', 'Botas com biqueira de aço', 'Certificado de manuseio manual', 'Permissão legal de trabalho'],
    benefits: ['Horas extras disponíveis', 'Emprego PAYE', 'Transporte a partir do centro de Cork'],
    contact: 'jobs@corkbuild.ie',
  },
  {
    id: 3,
    title: 'Babá / Au Pair Residente',
    company: 'Família Murphy (particular)',
    companyLogo: '👨‍👩‍👧‍👦',
    location: 'Killiney, Co. Dublin',
    salary: '€900–€1.100/mês + quarto e alimentação gratuitos',
    type: 'Integral, Residente',
    posted: 'há 3 dias',
    languages: ['Inglês', 'Português bem-vindo'],
    description:
      'Família de 4 pessoas busca babá carinhosa e responsável para 2 crianças de 3 e 6 anos. Babá que fale português é bem-vinda — estamos aprendendo português! Responsabilidades: levar à escola, atividades e cozinha leve.',
    requirements: ['Experiência com crianças', 'Certificado de Primeiros Socorros', 'Habilitação sem infrações', 'Referências'],
    benefits: ['Quarto privativo', 'Todas as refeições', 'Uso do carro da família', 'Fins de semana livres'],
    contact: 'murphyfamilynanny@gmail.com',
  },
];

// ─── MIGO HOSPEDAGEM — Anúncios ───────────────────────────────────────────────

export const stays = [
  {
    id: 1,
    title: 'Quarto Individual Aconchegante — Tallaght',
    host: 'Renata Oliveira',
    hostAvatar: '👩🏽',
    hostJoined: 'Membro desde 2022',
    hostLanguages: ['Português', 'Inglês'],
    location: 'Tallaght, Dublin 24',
    transport: '5 min a pé da estação Luas de Tallaght',
    price: 30,
    minNights: 3,
    maxNights: 30,
    guests: 1,
    emoji: '🛏️',
    features: ['Quarto privativo', 'Banheiro compartilhado', 'Acesso à cozinha', 'Wi-Fi', 'Máquina de lavar', 'Anfitriã brasileira'],
    description:
      'Quarto individual aconchegante em uma casa brasileira acolhedora. Muito perto do Luas (Linha Vermelha). Perfeito para quem chegou agora e precisa de tempo para encontrar moradia definitiva. Refeições podem ser combinadas à parte por €5/dia.',
    available: true,
    rating: 4.9,
    reviews: 34,
    rules: ['Proibido fumar', 'Proibido animais', 'Silêncio após as 22h'],
  },
  {
    id: 2,
    title: 'Quarto de Casal — Centro de Cork',
    host: 'Fábio & Clara Mendes',
    hostAvatar: '👫',
    hostJoined: 'Membro desde 2021',
    hostLanguages: ['Português', 'Inglês', 'Espanhol'],
    location: 'Centro de Cork',
    transport: '10 min a pé da Rodoviária de Cork',
    price: 45,
    minNights: 2,
    maxNights: 60,
    guests: 2,
    emoji: '🏡',
    features: ['Quarto privativo', 'Banheiro privativo', 'Acesso à cozinha', 'Wi-Fi', 'Estacionamento', 'Casais bem-vindos'],
    description:
      'Lindo quarto de casal em nossa casa no centro de Cork. Somos um casal brasileiro e sabemos como é difícil chegar na Irlanda. Perfeito para casais ou dois amigos. Bem perto de comércio e transporte público.',
    available: true,
    rating: 5.0,
    reviews: 21,
    rules: ['Proibido fumar dentro de casa', 'Sem festas', 'Respeite os horários de silêncio'],
  },
  {
    id: 3,
    title: 'Studio Privativo — Blanchardstown',
    host: 'Thiago Pereira',
    hostAvatar: '👨🏻',
    hostJoined: 'Membro desde 2023',
    hostLanguages: ['Português', 'Inglês'],
    location: 'Blanchardstown, Dublin 15',
    transport: '3 min a pé das linhas de ônibus de Blanchardstown',
    price: 50,
    minNights: 7,
    maxNights: 90,
    guests: 1,
    emoji: '🏠',
    features: ['Studio privativo', 'Banheiro privativo', 'Cozinha compacta', 'Wi-Fi', 'Smart TV', 'Mobiliado completo'],
    description:
      'Studio totalmente independente anexo à casa do anfitrião. Privacidade total. Ideal para quem está começando um novo emprego e precisa de 1 a 3 meses de moradia temporária. Todas as contas incluídas.',
    available: true,
    rating: 4.8,
    reviews: 12,
    rules: ['Prefere não fumante', 'Sem animais', 'Preferência por profissionais'],
  },
];
