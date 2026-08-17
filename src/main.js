// Baralho dos Arquétipos - Main Application
// 54 cartas com interpretações masculina e feminina

const CARDS_DATABASE = [
  // COPAS - O Mundo Emocional
  {
    id: "copas-a",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "A",
    name: "O Sensível / A Sensível",
    image: "assets/cards/copas-a.png",
    qrCode: "assets/qr/copas-a.png",
    male: {
      name: "O Sensível",
      description: "Empático, intuitivo e extremamente atento aos sentimentos dos outros. Valoriza conexões profundas.",
      strength: "Empatia",
      risk: "Pode absorver demais os problemas alheios"
    },
    female: {
      name: "A Sensível",
      description: "Empática, intuitiva e muito atenta aos sentimentos das pessoas.",
      strength: "Empatia",
      risk: "Absorver problemas alheios"
    }
  },
  {
    id: "copas-2",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "2",
    name: "O Companheiro / A Companheira",
    image: "assets/cards/copas-2.png",
    qrCode: "assets/qr/copas-2.png",
    male: {
      name: "O Companheiro",
      description: "Pessoa que funciona melhor em parceria. Valoriza confiança, reciprocidade e lealdade.",
      strength: "Cooperação",
      risk: "Dificuldade em agir sozinho"
    },
    female: {
      name: "A Companheira",
      description: "Valoriza parceria, confiança e reciprocidade.",
      strength: "Lealdade",
      risk: "Depender demais da outra pessoa"
    }
  },
  {
    id: "copas-3",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "3",
    name: "O Social / A Social",
    image: "assets/cards/copas-3.png",
    qrCode: "assets/qr/copas-3.png",
    male: {
      name: "O Social",
      description: "Extrovertido, divertido e comunicativo. Gosta de grupos e de criar vínculos.",
      strength: "Sociabilidade",
      risk: "Pode buscar aprovação"
    },
    female: {
      name: "A Social",
      description: "Comunicativa, divertida e confortável em grupos.",
      strength: "Sociabilidade",
      risk: "Buscar aprovação"
    }
  },
  {
    id: "copas-4",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "4",
    name: "O Acolhedor / A Acolhedora",
    image: "assets/cards/copas-4.png",
    qrCode: "assets/qr/copas-4.png",
    male: {
      name: "O Acolhedor",
      description: "Reservado, tranquilo e protetor. Prefere poucos relacionamentos, mas profundos.",
      strength: "Estabilidade emocional",
      risk: "Pode se fechar"
    },
    female: {
      name: "A Acolhedora",
      description: "Tranquila, reservada e protetora com quem ama.",
      strength: "Estabilidade",
      risk: "Fechar-se emocionalmente"
    }
  },
  {
    id: "copas-5",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "5",
    name: "O Dramático / A Intensa",
    image: "assets/cards/copas-5.png",
    qrCode: "assets/qr/copas-5.png",
    male: {
      name: "O Dramático",
      description: "Vive emoções intensamente. Pode transformar acontecimentos pequenos em grandes experiências.",
      strength: "Paixão",
      risk: "Impulsividade emocional"
    },
    female: {
      name: "A Intensa",
      description: "Vive as emoções com grande intensidade.",
      strength: "Paixão",
      risk: "Impulsividade emocional"
    }
  },
  {
    id: "copas-6",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "6",
    name: "O Nostálgico / A Nostálgica",
    image: "assets/cards/copas-6.png",
    qrCode: "assets/qr/copas-6.png",
    male: {
      name: "O Nostálgico",
      description: "Ligado ao passado, às memórias e às pessoas que marcaram sua vida.",
      strength: "Lealdade",
      risk: "Dificuldade em deixar o passado"
    },
    female: {
      name: "A Nostálgica",
      description: "Muito ligada às memórias e às pessoas importantes do passado.",
      strength: "Lealdade",
      risk: "Dificuldade em seguir em frente"
    }
  },
  {
    id: "copas-7",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "7",
    name: "O Sonhador / A Sonhadora",
    image: "assets/cards/copas-7.png",
    qrCode: "assets/qr/copas-7.png",
    male: {
      name: "O Sonhador",
      description: "Imaginativo, idealista e cheio de possibilidades.",
      strength: "Criatividade",
      risk: "Idealização excessiva"
    },
    female: {
      name: "A Sonhadora",
      description: "Imaginativa, romântica e idealista.",
      strength: "Criatividade",
      risk: "Idealizar pessoas ou situações"
    }
  },
  {
    id: "copas-8",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "8",
    name: "O Intenso / A Profunda",
    image: "assets/cards/copas-8.png",
    qrCode: "assets/qr/copas-8.png",
    male: {
      name: "O Intenso",
      description: "Sente profundamente, mas nem sempre demonstra. Quando cria um vínculo, leva muito a sério.",
      strength: "Profundidade",
      risk: "Ciúme ou possessividade"
    },
    female: {
      name: "A Profunda",
      description: "Não cria vínculos facilmente, mas quando cria, leva-os muito a sério.",
      strength: "Profundidade",
      risk: "Possessividade"
    }
  },
  {
    id: "copas-9",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "9",
    name: "O Idealista / A Idealista",
    image: "assets/cards/copas-9.png",
    qrCode: "assets/qr/copas-9.png",
    male: {
      name: "O Idealista",
      description: "Busca uma vida emocionalmente significativa e acredita muito em seus ideais.",
      strength: "Esperança",
      risk: "Expectativas irreais"
    },
    female: {
      name: "A Idealista",
      description: "Procura relações e experiências que tenham significado.",
      strength: "Esperança",
      risk: "Expectativas elevadas demais"
    }
  },
  {
    id: "copas-10",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "10",
    name: "O Harmonizador / A Harmonizadora",
    image: "assets/cards/copas-10.png",
    qrCode: "assets/qr/copas-10.png",
    male: {
      name: "O Harmonizador",
      description: "Busca equilíbrio, paz e relações saudáveis.",
      strength: "Diplomacia",
      risk: "Evita conflitos necessários"
    },
    female: {
      name: "A Harmonizadora",
      description: "Busca paz, estabilidade e relações equilibradas.",
      strength: "Diplomacia",
      risk: "Evitar conflitos necessários"
    }
  },
  {
    id: "copas-j",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "J",
    name: "O Romântico / A Romântica",
    image: "assets/cards/copas-j.png",
    qrCode: "assets/qr/copas-j.png",
    male: {
      name: "O Romântico",
      description: "Carismático, espontâneo e movido por sentimentos.",
      strength: "Entusiasmo",
      risk: "Agir antes de pensar"
    },
    female: {
      name: "A Romântica",
      description: "Espontânea, carismática e guiada pelo coração.",
      strength: "Entusiasmo",
      risk: "Agir emocionalmente"
    }
  },
  {
    id: "copas-q",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "Q",
    name: "A Empática / A Empática",
    image: "assets/cards/copas-q.png",
    qrCode: "assets/qr/copas-q.png",
    male: {
      name: "A Empática",
      description: "Perceptiva, madura emocionalmente e excelente em compreender pessoas.",
      strength: "Inteligência emocional",
      risk: "Carregar problemas dos outros"
    },
    female: {
      name: "A Empática",
      description: "Excelente observadora das emoções dos outros.",
      strength: "Inteligência emocional",
      risk: "Assumir os problemas alheios"
    }
  },
  {
    id: "copas-k",
    suit: "copas",
    suitSymbol: "♥",
    suitLabel: "Copas",
    rank: "K",
    name: "O Protetor / A Protetora",
    image: "assets/cards/copas-k.png",
    qrCode: "assets/qr/copas-k.png",
    male: {
      name: "O Protetor",
      description: "Líder emocional. Cuida das pessoas próximas e tenta manter o grupo unido.",
      strength: "Lealdade",
      risk: "Assumir responsabilidades demais"
    },
    female: {
      name: "A Protetora",
      description: "Forte emocionalmente e muito protetora com seu círculo.",
      strength: "Lealdade",
      risk: "Querer controlar tudo para proteger quem ama"
    }
  },

  // OUROS - Ambição e Realização
  {
    id: "ouros-a",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "A",
    name: "O Construtor / A Construtora",
    image: "assets/cards/ouros-a.png",
    qrCode: "assets/qr/ouros-a.png",
    male: {
      name: "O Construtor",
      description: "Enxerga oportunidades e quer transformar ideias em algo concreto.",
      strength: "Iniciativa",
      risk: "Obsessão por resultados"
    },
    female: {
      name: "A Construtora",
      description: "Gosta de transformar ideias em coisas concretas.",
      strength: "Iniciativa",
      risk: "Obsessão por resultados"
    }
  },
  {
    id: "ouros-2",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "2",
    name: "O Adaptável / A Adaptável",
    image: "assets/cards/ouros-2.png",
    qrCode: "assets/qr/ouros-2.png",
    male: {
      name: "O Adaptável",
      description: "Consegue administrar várias coisas simultaneamente.",
      strength: "Flexibilidade",
      risk: "Dispersão"
    },
    female: {
      name: "A Adaptável",
      description: "Consegue equilibrar diferentes responsabilidades.",
      strength: "Flexibilidade",
      risk: "Dispersão"
    }
  },
  {
    id: "ouros-3",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "3",
    name: "O Profissional / A Profissional",
    image: "assets/cards/ouros-3.png",
    qrCode: "assets/qr/ouros-3.png",
    male: {
      name: "O Profissional",
      description: "Gosta de aprender, aperfeiçoar técnicas e fazer as coisas corretamente.",
      strength: "Competência",
      risk: "Perfeccionismo"
    },
    female: {
      name: "A Profissional",
      description: "Gosta de aprender e aperfeiçoar suas habilidades.",
      strength: "Competência",
      risk: "Perfeccionismo"
    }
  },
  {
    id: "ouros-4",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "4",
    name: "O Conservador / A Conservadora",
    image: "assets/cards/ouros-4.png",
    qrCode: "assets/qr/ouros-4.png",
    male: {
      name: "O Conservador",
      description: "Valoriza segurança, estabilidade e aquilo que já conquistou.",
      strength: "Prudência",
      risk: "Medo de arriscar"
    },
    female: {
      name: "A Conservadora",
      description: "Valoriza segurança e estabilidade.",
      strength: "Prudência",
      risk: "Medo de mudanças"
    }
  },
  {
    id: "ouros-5",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "5",
    name: "O Sobrevivente / A Sobrevivente",
    image: "assets/cards/ouros-5.png",
    qrCode: "assets/qr/ouros-5.png",
    male: {
      name: "O Sobrevivente",
      description: "Aprende com dificuldades e consegue continuar mesmo quando as condições são ruins.",
      strength: "Resistência",
      risk: "Pessimismo"
    },
    female: {
      name: "A Sobrevivente",
      description: "Aprendeu a continuar mesmo depois de dificuldades.",
      strength: "Resistência",
      risk: "Pessimismo"
    }
  },
  {
    id: "ouros-6",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "6",
    name: "O Investidor / A Investidora",
    image: "assets/cards/ouros-6.png",
    qrCode: "assets/qr/ouros-6.png",
    male: {
      name: "O Investidor",
      description: "Pensa em longo prazo e gosta de construir algo gradualmente.",
      strength: "Planejamento",
      risk: "Excesso de cautela"
    },
    female: {
      name: "A Investidora",
      description: "Pensa no futuro e prefere construir gradualmente.",
      strength: "Planejamento",
      risk: "Excesso de cautela"
    }
  },
  {
    id: "ouros-7",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "7",
    name: "O Paciente / A Paciente",
    image: "assets/cards/ouros-7.png",
    qrCode: "assets/qr/ouros-7.png",
    male: {
      name: "O Paciente",
      description: "Entende que grandes resultados levam tempo.",
      strength: "Perseverança",
      risk: "Esperar demais"
    },
    female: {
      name: "A Paciente",
      description: "Sabe que grandes resultados precisam de tempo.",
      strength: "Perseverança",
      risk: "Esperar demais"
    }
  },
  {
    id: "ouros-8",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "8",
    name: "O Especialista / A Especialista",
    image: "assets/cards/ouros-8.png",
    qrCode: "assets/qr/ouros-8.png",
    male: {
      name: "O Especialista",
      description: "Focado em dominar uma habilidade.",
      strength: "Disciplina",
      risk: "Obsessão"
    },
    female: {
      name: "A Especialista",
      description: "Dedica-se intensamente a dominar determinada habilidade.",
      strength: "Disciplina",
      risk: "Obsessão"
    }
  },
  {
    id: "ouros-9",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "9",
    name: "O Independente / A Independente",
    image: "assets/cards/ouros-9.png",
    qrCode: "assets/qr/ouros-9.png",
    male: {
      name: "O Independente",
      description: "Gosta de conquistar as próprias coisas e depender pouco dos outros.",
      strength: "Autonomia",
      risk: "Dificuldade em pedir ajuda"
    },
    female: {
      name: "A Independente",
      description: "Gosta de conquistar suas próprias coisas e depender pouco dos outros.",
      strength: "Autonomia",
      risk: "Dificuldade em pedir ajuda"
    }
  },
  {
    id: "ouros-10",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "10",
    name: "O Magnata / A Magnata",
    image: "assets/cards/ouros-10.png",
    qrCode: "assets/qr/ouros-10.png",
    male: {
      name: "O Magnata",
      description: "Pensa em patrimônio, legado e resultados de longo prazo.",
      strength: "Visão estratégica",
      risk: "Materialismo"
    },
    female: {
      name: "A Magnata",
      description: "Pensa em patrimônio, sucesso e legado.",
      strength: "Visão de longo prazo",
      risk: "Materialismo"
    }
  },
  {
    id: "ouros-j",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "J",
    name: "O Empreendedor / A Empreendedora",
    image: "assets/cards/ouros-j.png",
    qrCode: "assets/qr/ouros-j.png",
    male: {
      name: "O Empreendedor",
      description: "Vê oportunidades rapidamente e gosta de experimentar.",
      strength: "Iniciativa",
      risk: "Impaciência"
    },
    female: {
      name: "A Empreendedora",
      description: "Vê oportunidades e gosta de experimentar novas ideias.",
      strength: "Iniciativa",
      risk: "Impaciência"
    }
  },
  {
    id: "ouros-q",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "Q",
    name: "A Administradora / A Administradora",
    image: "assets/cards/ouros-q.png",
    qrCode: "assets/qr/ouros-q.png",
    male: {
      name: "A Administradora",
      description: "Organizada, prática e excelente em administrar recursos.",
      strength: "Organização",
      risk: "Controle excessivo"
    },
    female: {
      name: "A Administradora",
      description: "Organizada, prática e boa em administrar recursos.",
      strength: "Organização",
      risk: "Excesso de controle"
    }
  },
  {
    id: "ouros-k",
    suit: "ouros",
    suitSymbol: "◆",
    suitLabel: "Ouros",
    rank: "K",
    name: "O Estrategista / A Estrategista",
    image: "assets/cards/ouros-k.png",
    qrCode: "assets/qr/ouros-k.png",
    male: {
      name: "O Estrategista",
      description: "Pensa em décadas, não em dias. Quer construir algo grande e duradouro.",
      strength: "Visão de longo prazo",
      risk: "Pode sacrificar o presente pelo futuro"
    },
    female: {
      name: "A Estrategista",
      description: "Planeja a vida pensando em grandes objetivos e no futuro.",
      strength: "Visão de longo prazo",
      risk: "Sacrificar o presente pelo futuro"
    }
  },

  // PAUS - Ação e Coragem
  {
    id: "paus-a",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "A",
    name: "O Iniciador / A Iniciadora",
    image: "assets/cards/paus-a.png",
    qrCode: "assets/qr/paus-a.png",
    male: {
      name: "O Iniciador",
      description: "Não espera as condições perfeitas. Começa.",
      strength: "Iniciativa",
      risk: "Precipitação"
    },
    female: {
      name: "A Iniciadora",
      description: "Não espera o momento perfeito. Simplesmente começa.",
      strength: "Iniciativa",
      risk: "Precipitação"
    }
  },
  {
    id: "paus-2",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "2",
    name: "O Explorador / A Exploradora",
    image: "assets/cards/paus-2.png",
    qrCode: "assets/qr/paus-2.png",
    male: {
      name: "O Explorador",
      description: "Gosta de descobrir coisas novas e testar possibilidades.",
      strength: "Curiosidade",
      risk: "Dificuldade de permanecer em uma coisa"
    },
    female: {
      name: "A Exploradora",
      description: "Curiosa e disposta a experimentar coisas novas.",
      strength: "Curiosidade",
      risk: "Falta de constância"
    }
  },
  {
    id: "paus-3",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "3",
    name: "O Visionário / A Visionária",
    image: "assets/cards/paus-3.png",
    qrCode: "assets/qr/paus-3.png",
    male: {
      name: "O Visionário",
      description: "Consegue imaginar onde quer chegar antes de começar.",
      strength: "Visão",
      risk: "Pode negligenciar os detalhes"
    },
    female: {
      name: "A Visionária",
      description: "Consegue enxergar possibilidades antes de outras pessoas.",
      strength: "Visão",
      risk: "Negligenciar detalhes"
    }
  },
  {
    id: "paus-4",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "4",
    name: "O Organizador / A Organizadora",
    image: "assets/cards/paus-4.png",
    qrCode: "assets/qr/paus-4.png",
    male: {
      name: "O Organizador",
      description: "Transforma energia em estrutura.",
      strength: "Liderança",
      risk: "Rigidez"
    },
    female: {
      name: "A Organizadora",
      description: "Transforma energia e ideias em estrutura.",
      strength: "Liderança",
      risk: "Rigidez"
    }
  },
  {
    id: "paus-5",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "5",
    name: "O Competidor / A Competidora",
    image: "assets/cards/paus-5.png",
    qrCode: "assets/qr/paus-5.png",
    male: {
      name: "O Competidor",
      description: "Gosta de desafios e de provar sua capacidade.",
      strength: "Determinação",
      risk: "Competitividade excessiva"
    },
    female: {
      name: "A Competidora",
      description: "Gosta de desafios e de testar seus próprios limites.",
      strength: "Determinação",
      risk: "Competitividade excessiva"
    }
  },
  {
    id: "paus-6",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "6",
    name: "O Líder / A Líder",
    image: "assets/cards/paus-6.png",
    qrCode: "assets/qr/paus-6.png",
    male: {
      name: "O Líder",
      description: "Naturalmente assume a frente quando ninguém sabe o que fazer.",
      strength: "Liderança",
      risk: "Autoritarismo"
    },
    female: {
      name: "A Líder",
      description: "Naturalmente assume a frente quando uma situação exige alguém para comandar.",
      strength: "Liderança",
      risk: "Autoritarismo"
    }
  },
  {
    id: "paus-7",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "7",
    name: "O Desafiador / A Desafiadora",
    image: "assets/cards/paus-7.png",
    qrCode: "assets/qr/paus-7.png",
    male: {
      name: "O Desafiador",
      description: "Não aceita facilmente ser intimidado.",
      strength: "Coragem",
      risk: "Teimosia"
    },
    female: {
      name: "A Desafiadora",
      description: "Não se intimida facilmente e defende aquilo em que acredita.",
      strength: "Coragem",
      risk: "Teimosia"
    }
  },
  {
    id: "paus-8",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "8",
    name: "O Executor / A Executora",
    image: "assets/cards/paus-8.png",
    qrCode: "assets/qr/paus-8.png",
    male: {
      name: "O Executor",
      description: "Extremamente rápido para transformar planos em ações.",
      strength: "Produtividade",
      risk: "Agir rápido demais"
    },
    female: {
      name: "A Executora",
      description: "Extremamente rápida para transformar planos em ações.",
      strength: "Produtividade",
      risk: "Agir sem pensar o suficiente"
    }
  },
  {
    id: "paus-9",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "9",
    name: "O Resistente / A Resistente",
    image: "assets/cards/paus-9.png",
    qrCode: "assets/qr/paus-9.png",
    male: {
      name: "O Resistente",
      description: "Pode estar cansado, mas continua.",
      strength: "Resistência",
      risk: "Dificuldade de reconhecer limites"
    },
    female: {
      name: "A Resistente",
      description: "Continua mesmo quando as coisas ficam difíceis.",
      strength: "Resistência",
      risk: "Não reconhecer seus próprios limites"
    }
  },
  {
    id: "paus-10",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "10",
    name: "O Guerreiro / A Guerreira",
    image: "assets/cards/paus-10.png",
    qrCode: "assets/qr/paus-10.png",
    male: {
      name: "O Guerreiro",
      description: "Assume grandes responsabilidades e enfrenta obstáculos diretamente.",
      strength: "Força de vontade",
      risk: "Carregar peso demais sozinho"
    },
    female: {
      name: "A Guerreira",
      description: "Enfrenta grandes responsabilidades sem fugir delas.",
      strength: "Força de vontade",
      risk: "Tentar carregar tudo sozinha"
    }
  },
  {
    id: "paus-j",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "J",
    name: "O Aventureiro / A Aventureira",
    image: "assets/cards/paus-j.png",
    qrCode: "assets/qr/paus-j.png",
    male: {
      name: "O Aventureiro",
      description: "Espontâneo, energético e disposto a experimentar.",
      strength: "Coragem",
      risk: "Impulsividade"
    },
    female: {
      name: "A Aventureira",
      description: "Energética, espontânea e disposta a experimentar.",
      strength: "Coragem",
      risk: "Impulsividade"
    }
  },
  {
    id: "paus-q",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "Q",
    name: "A Comandante / A Comandante",
    image: "assets/cards/paus-q.png",
    qrCode: "assets/qr/paus-q.png",
    male: {
      name: "A Comandante",
      description: "Carismática, determinada e capaz de mobilizar outras pessoas.",
      strength: "Liderança",
      risk: "Necessidade de controle"
    },
    female: {
      name: "A Comandante",
      description: "Carismática e determinada, consegue mobilizar outras pessoas.",
      strength: "Liderança",
      risk: "Necessidade de controle"
    }
  },
  {
    id: "paus-k",
    suit: "paus",
    suitSymbol: "♣",
    suitLabel: "Paus",
    rank: "K",
    name: "O Conquistador / A Conquistadora",
    image: "assets/cards/paus-k.png",
    qrCode: "assets/qr/paus-k.png",
    male: {
      name: "O Conquistador",
      description: "Extremamente orientado para objetivos. Quer vencer e deixar uma marca.",
      strength: "Determinação",
      risk: "Transformar tudo em competição"
    },
    female: {
      name: "A Conquistadora",
      description: "Extremamente orientada para objetivos e grandes realizações.",
      strength: "Determinação",
      risk: "Transformar tudo em competição"
    }
  },

  // ESPADAS - Inteligência e Estratégia
  {
    id: "espadas-a",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "A",
    name: "O Analista / A Analista",
    image: "assets/cards/espadas-a.png",
    qrCode: "assets/qr/espadas-a.png",
    male: {
      name: "O Analista",
      description: "Observa antes de agir e procura entender o problema profundamente.",
      strength: "Lógica",
      risk: "Pensar demais"
    },
    female: {
      name: "A Analista",
      description: "Observa primeiro e age depois de compreender o problema.",
      strength: "Lógica",
      risk: "Pensar demais"
    }
  },
  {
    id: "espadas-2",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "2",
    name: "O Observador / A Observadora",
    image: "assets/cards/espadas-2.png",
    qrCode: "assets/qr/espadas-2.png",
    male: {
      name: "O Observador",
      description: "Fala pouco e presta atenção em tudo.",
      strength: "Percepção",
      risk: "Passividade"
    },
    female: {
      name: "A Observadora",
      description: "Fala pouco, mas percebe muito.",
      strength: "Percepção",
      risk: "Passividade"
    }
  },
  {
    id: "espadas-3",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "3",
    name: "O Cético / A Cética",
    image: "assets/cards/espadas-3.png",
    qrCode: "assets/qr/espadas-3.png",
    male: {
      name: "O Cético",
      description: "Não aceita informações simplesmente porque alguém afirmou.",
      strength: "Pensamento crítico",
      risk: "Desconfiança excessiva"
    },
    female: {
      name: "A Cética",
      description: "Não acredita facilmente em afirmações sem evidências.",
      strength: "Pensamento crítico",
      risk: "Desconfiança"
    }
  },
  {
    id: "espadas-4",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "4",
    name: "O Calculista / A Calculista",
    image: "assets/cards/espadas-4.png",
    qrCode: "assets/qr/espadas-4.png",
    male: {
      name: "O Calculista",
      description: "Prefere esperar o momento certo.",
      strength: "Paciência estratégica",
      risk: "Excesso de planejamento"
    },
    female: {
      name: "A Calculista",
      description: "Prefere esperar até encontrar o momento certo.",
      strength: "Paciência estratégica",
      risk: "Planejamento excessivo"
    }
  },
  {
    id: "espadas-5",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "5",
    name: "O Tático / A Tática",
    image: "assets/cards/espadas-5.png",
    qrCode: "assets/qr/espadas-5.png",
    male: {
      name: "O Tático",
      description: "Pensa em vantagens, consequências e possibilidades.",
      strength: "Estratégia",
      risk: "Pode enxergar relações como jogos"
    },
    female: {
      name: "A Tática",
      description: "Pensa vários movimentos à frente.",
      strength: "Estratégia",
      risk: "Enxergar relações como jogos"
    }
  },
  {
    id: "espadas-6",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "6",
    name: "O Racional / A Racional",
    image: "assets/cards/espadas-6.png",
    qrCode: "assets/qr/espadas-6.png",
    male: {
      name: "O Racional",
      description: "Tenta controlar emoções para tomar decisões objetivas.",
      strength: "Racionalidade",
      risk: "Frieza"
    },
    female: {
      name: "A Racional",
      description: "Tenta separar emoções das decisões importantes.",
      strength: "Objetividade",
      risk: "Parecer fria"
    }
  },
  {
    id: "espadas-7",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "7",
    name: "O Maquiavélico / A Maquiavélica",
    image: "assets/cards/espadas-7.png",
    qrCode: "assets/qr/espadas-7.png",
    male: {
      name: "O Maquiavélico",
      description: "Excelente em compreender incentivos e antecipar movimentos dos outros. (Arquétipo de estratégia, não diagnóstico psicológico)",
      strength: "Leitura estratégica",
      risk: "Manipulação"
    },
    female: {
      name: "A Maquiavélica",
      description: "Excelente em perceber interesses, incentivos e possíveis movimentos das pessoas.",
      strength: "Leitura estratégica",
      risk: "Manipulação"
    }
  },
  {
    id: "espadas-8",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "8",
    name: "O Perfeccionista / A Perfeccionista",
    image: "assets/cards/espadas-8.png",
    qrCode: "assets/qr/espadas-8.png",
    male: {
      name: "O Perfeccionista",
      description: "Enxerga erros que outras pessoas não percebem.",
      strength: "Precisão",
      risk: "Autocrítica excessiva"
    },
    female: {
      name: "A Perfeccionista",
      description: "Percebe detalhes e erros que outras pessoas ignoram.",
      strength: "Precisão",
      risk: "Autocrítica"
    }
  },
  {
    id: "espadas-9",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "9",
    name: "O Pensador / A Pensadora",
    image: "assets/cards/espadas-9.png",
    qrCode: "assets/qr/espadas-9.png",
    male: {
      name: "O Pensador",
      description: "Passa muito tempo refletindo, analisando e buscando respostas.",
      strength: "Profundidade intelectual",
      risk: "Ruminação"
    },
    female: {
      name: "A Pensadora",
      description: "Passa muito tempo refletindo e procurando compreender as coisas profundamente.",
      strength: "Profundidade intelectual",
      risk: "Pensar excessivamente"
    }
  },
  {
    id: "espadas-10",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "10",
    name: "O Realista / A Realista",
    image: "assets/cards/espadas-10.png",
    qrCode: "assets/qr/espadas-10.png",
    male: {
      name: "O Realista",
      description: "Consegue aceitar verdades desagradáveis e trabalhar com elas.",
      strength: "Objetividade",
      risk: "Pessimismo"
    },
    female: {
      name: "A Realista",
      description: "Prefere uma verdade desagradável a uma mentira confortável.",
      strength: "Objetividade",
      risk: "Pessimismo"
    }
  },
  {
    id: "espadas-j",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "J",
    name: "O Investigador / A Investigadora",
    image: "assets/cards/espadas-j.png",
    qrCode: "assets/qr/espadas-j.png",
    male: {
      name: "O Investigador",
      description: "Curioso, observador e interessado em descobrir o que está por trás das coisas.",
      strength: "Investigação",
      risk: "Curiosidade excessiva"
    },
    female: {
      name: "A Investigadora",
      description: "Curiosa, observadora e interessada em descobrir o que está por trás das coisas.",
      strength: "Investigação",
      risk: "Curiosidade excessiva"
    }
  },
  {
    id: "espadas-q",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "Q",
    name: "A Estrategista / A Estrategista",
    image: "assets/cards/espadas-q.png",
    qrCode: "assets/qr/espadas-q.png",
    male: {
      name: "A Estrategista",
      description: "Inteligente, independente e difícil de manipular.",
      strength: "Discernimento",
      risk: "Distanciamento emocional"
    },
    female: {
      name: "A Estrategista",
      description: "Inteligente, independente e difícil de manipular.",
      strength: "Discernimento",
      risk: "Distanciamento emocional"
    }
  },
  {
    id: "espadas-k",
    suit: "espadas",
    suitSymbol: "♠",
    suitLabel: "Espadas",
    rank: "K",
    name: "O Mestre Estrategista / A Mestra Estrategista",
    image: "assets/cards/espadas-k.png",
    qrCode: "assets/qr/espadas-k.png",
    male: {
      name: "O Mestre Estrategista",
      description: "Combina inteligência, autocontrole e planejamento de longo prazo.",
      strength: "Estratégia",
      risk: "Excesso de racionalização"
    },
    female: {
      name: "A Mestra Estrategista",
      description: "Combina inteligência, autocontrole e planejamento de longo prazo.",
      strength: "Estratégia",
      risk: "Racionalizar demais as próprias emoções"
    }
  },

  // CORINGAS
  {
    id: "joker-vermelho",
    suit: "coringas",
    suitSymbol: "🃏",
    suitLabel: "Coringa Vermelho",
    rank: "Coringa",
    name: "O Caótico / A Caótica",
    image: "assets/cards/joker-vermelho.png",
    qrCode: "assets/qr/joker-vermelho.png",
    male: {
      name: "O Caótico",
      description: "Representa alguém imprevisível, criativo e que quebra padrões.",
      strength: "Criatividade",
      risk: "Previsibilidade"
    },
    female: {
      name: "A Caótica",
      description: "Criativa, imprevisível e pouco interessada em seguir padrões.",
      strength: "Liberdade",
      risk: "Falta de estrutura"
    }
  },
  {
    id: "joker-preto",
    suit: "coringas",
    suitSymbol: "🃏",
    suitLabel: "Coringa Preto",
    rank: "Coringa",
    name: "O Anarquista / A Rebelde",
    image: "assets/cards/joker-preto.png",
    qrCode: "assets/qr/joker-preto.png",
    male: {
      name: "O Anarquista",
      description: "Questiona as regras do jogo e não aceita estruturas simplesmente porque existem.",
      strength: "Ruptura",
      risk: "Destruição"
    },
    female: {
      name: "A Rebelde",
      description: "Questiona regras e estruturas estabelecidas e prefere construir seu próprio caminho.",
      strength: "Ruptura",
      risk: "Isolamento"
    }
  }
];

// ============= APP STATE =============
let currentGender = null;
let filteredCards = [...CARDS_DATABASE];
let currentDetailCard = null;

// ============= DOM ELEMENTS =============
const genderButtons = document.querySelectorAll('.gender-btn');
const searchInput = document.getElementById('searchInput');
const suitButtons = document.querySelectorAll('.suit-btn');
const cardGrid = document.getElementById('cardGrid');
const detailModal = document.getElementById('detailModal');
const genderModal = document.getElementById('genderModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const randomCardBtn = document.getElementById('randomCardBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const backToDeckBtn = document.getElementById('backToDeckBtn');
const shareCardBtn = document.getElementById('shareCardBtn');

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
  // Carregar gênero da URL
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get('carta');
  const genderParam = urlParams.get('modo');

  if (genderParam && ['masculino', 'feminino'].includes(genderParam)) {
    selectGender(genderParam);
  } else if (cardId) {
    // Se há carta na URL, mostrar seletor de gênero
    showGenderModal();
  }

  // Abrir carta direto se está na URL
  if (cardId) {
    setTimeout(() => openCardDetail(cardId), 500);
  }

  setupEventListeners();
  renderCards();
});

// ============= EVENT LISTENERS =============
function setupEventListeners() {
  // Gender selection
  genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const gender = btn.dataset.gender;
      selectGender(gender);
      closeGenderModal();
    });
  });

  // Gender modal buttons
  document.querySelectorAll('[data-gender-select]').forEach(btn => {
    btn.addEventListener('click', () => {
      const gender = btn.dataset.genderSelect;
      selectGender(gender);
      closeGenderModal();
    });
  });

  // Search
  searchInput?.addEventListener('input', filterCards);

  // Suit filters
  suitButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      suitButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterCards();
    });
  });

  // Random card
  randomCardBtn?.addEventListener('click', () => {
    if (!currentGender) {
      showGenderModal();
      return;
    }
    const randomCard = CARDS_DATABASE[Math.floor(Math.random() * CARDS_DATABASE.length)];
    openCardDetail(randomCard.id);
  });

  // Reset filters
  resetFiltersBtn?.addEventListener('click', () => {
    searchInput.value = '';
    suitButtons.forEach(b => b.classList.remove('is-active'));
    document.querySelector('[data-suit="todos"]').classList.add('is-active');
    filterCards();
  });

  // Close modal
  closeModalBtn?.addEventListener('click', closeModal);
  detailModal?.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });

  // Back to deck
  backToDeckBtn?.addEventListener('click', closeModal);

  // Share card
  shareCardBtn?.addEventListener('click', shareCard);
}

// ============= GENDER SELECTION =============
function selectGender(gender) {
  currentGender = gender;
  genderButtons.forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.gender === gender ? 'true' : 'false');
  });
  renderCards();
}

function showGenderModal() {
  genderModal.classList.remove('hidden');
  genderModal.setAttribute('aria-hidden', 'false');
}

function closeGenderModal() {
  genderModal.classList.add('hidden');
  genderModal.setAttribute('aria-hidden', 'true');
}

// ============= FILTERING =============
function filterCards() {
  const searchTerm = searchInput?.value?.toLowerCase() || '';
  const activeSuit = document.querySelector('.suit-btn.is-active')?.dataset.suit || 'todos';

  filteredCards = CARDS_DATABASE.filter(card => {
    const matchesSuit = activeSuit === 'todos' || card.suit === activeSuit;
    const matchesSearch = searchTerm === '' || 
                         card.id.toLowerCase().includes(searchTerm) ||
                         card.name.toLowerCase().includes(searchTerm) ||
                         card.male.description.toLowerCase().includes(searchTerm) ||
                         card.female.description.toLowerCase().includes(searchTerm);
    return matchesSuit && matchesSearch;
  });

  renderCards();
}

// ============= RENDERING =============
function renderCards() {
  cardGrid.innerHTML = '';

  if (!currentGender) {
    cardGrid.innerHTML = `
      <div class="empty-state">
        <p>Selecione <strong>Masculino</strong> ou <strong>Feminino</strong> acima para começar.</p>
      </div>
    `;
    return;
  }

  if (filteredCards.length === 0) {
    cardGrid.innerHTML = `
      <div class="empty-state">
        <p>Nenhuma carta encontrada.</p>
      </div>
    `;
    return;
  }

  const mainCards = filteredCards.filter(c => c.suit !== 'coringas');
  const jokers = filteredCards.filter(c => c.suit === 'coringas');

  // Regular cards
  mainCards.forEach(card => {
    const cardEl = createCardElement(card);
    cardGrid.appendChild(cardEl);
  });

  // Separator
  if (jokers.length > 0 && mainCards.length > 0) {
    const separator = document.createElement('div');
    separator.className = 'cards-separator';
    separator.innerHTML = '<span>Os Coringas</span>';
    cardGrid.appendChild(separator);
  }

  // Jokers
  jokers.forEach(card => {
    const cardEl = createCardElement(card);
    cardGrid.appendChild(cardEl);
  });
}

function createCardElement(card) {
  const cardData = card[currentGender];
  const div = document.createElement('div');
  div.className = `card-catalog card-${card.suit}`;
  
  // Truncar descrição para ~60 caracteres
  const descShort = cardData.description.length > 60 
    ? cardData.description.substring(0, 60) + '...' 
    : cardData.description;
  
  div.innerHTML = `
    <div class="catalog-image">
      <img src="${card.image}" alt="${cardData.name}" loading="lazy" />
      <div class="catalog-suit-badge">${card.suitSymbol} ${card.suitLabel}</div>
    </div>
    
    <div class="catalog-info">
      <div class="catalog-header">
        <h3 class="catalog-name">${cardData.name}</h3>
        <span class="catalog-rank">${card.rank}</span>
      </div>
      
      <p class="catalog-description">${descShort}</p>
      
      <div class="catalog-attributes">
        <div class="attr-box">
          <span class="attr-label">💪 Força</span>
          <span class="attr-value">${cardData.strength}</span>
        </div>
        <div class="attr-box">
          <span class="attr-label">⚠️ Risco</span>
          <span class="attr-value">${cardData.risk}</span>
        </div>
      </div>
      
      <div class="catalog-qr">
        <img src="${card.qrCode}" alt="QR Code: ${cardData.name}" title="Escaneie para abrir" />
      </div>
      
      <button class="catalog-btn" type="button">Ver Completo →</button>
    </div>
  `;
  
  div.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-btn') || !e.target.closest('.catalog-qr')) {
      openCardDetail(card.id);
    }
  });
  
  return div;
}

// ============= DETAIL MODAL =============
function openCardDetail(cardId) {
  if (!currentGender) {
    showGenderModal();
    return;
  }

  const card = CARDS_DATABASE.find(c => c.id === cardId);
  if (!card) return;

  currentDetailCard = card;
  const cardData = card[currentGender];

  document.getElementById('detailImage').src = card.image;
  document.getElementById('detailImage').alt = cardData.name;
  document.getElementById('detailTitle').textContent = cardData.name;
  document.getElementById('detailDescription').textContent = cardData.description;
  document.getElementById('detailSuitBadge').innerHTML = `<span>${card.suitSymbol} ${card.suitLabel}</span>`;
  document.getElementById('detailStrength').textContent = cardData.strength;
  document.getElementById('detailRisk').textContent = cardData.risk;
  document.getElementById('detailQr').src = card.qrCode;
  document.getElementById('detailQr').alt = `QR Code: ${cardData.name}`;

  const baseUrl = window.location.origin + window.location.pathname;
  const qrUrl = `${baseUrl}?carta=${card.id}&modo=${currentGender}`;
  document.getElementById('detailQrUrl').textContent = qrUrl;

  detailModal.classList.remove('hidden');
  detailModal.setAttribute('aria-hidden', 'false');

  // Update URL
  const newUrl = `${baseUrl}?carta=${card.id}&modo=${currentGender}`;
  window.history.replaceState({ card: cardId }, cardData.name, newUrl);
}

function closeModal() {
  detailModal.classList.add('hidden');
  detailModal.setAttribute('aria-hidden', 'true');
  window.history.replaceState({}, '', window.location.pathname);
}

// ============= SHARING =============
function shareCard() {
  if (!currentDetailCard) return;
  
  const cardData = currentDetailCard[currentGender];
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?carta=${currentDetailCard.id}&modo=${currentGender}`;
  
  if (navigator.share) {
    navigator.share({
      title: cardData.name,
      text: `Confira a carta "${cardData.name}" do Baralho dos Arquétipos`,
      url: shareUrl
    });
  } else {
    // Fallback: copiar para clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copiado para a área de transferência!');
    });
  }
}
