export type LeadStatus = "novo" | "atendimento" | "qualificado" | "fechado";
export type LeadTemperature = "quente" | "morno" | "frio";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  lastMessage: string;
  temperature: LeadTemperature;
  status: LeadStatus;
  source: string;
  date: string;
  unread?: number;
  aiActive?: boolean;
  avatar?: string;
  email?: string;
  value?: number;
}

export const leads: Lead[] = [
  {
    id: "1",
    name: "Mariana Costa",
    phone: "+55 11 98765-4321",
    email: "mariana@empresa.com",
    lastMessage: "Olá! Gostaria de saber mais sobre o plano premium.",
    temperature: "quente",
    status: "novo",
    source: "WhatsApp",
    date: "há 2min",
    unread: 3,
    aiActive: true,
    value: 4500,
  },
  {
    id: "2",
    name: "Rafael Almeida",
    phone: "+55 21 99876-1234",
    email: "rafael@startup.io",
    lastMessage: "Perfeito, podemos agendar uma demo amanhã?",
    temperature: "quente",
    status: "atendimento",
    source: "WhatsApp",
    date: "há 12min",
    unread: 1,
    aiActive: false,
    value: 8900,
  },
  {
    id: "3",
    name: "Juliana Pereira",
    phone: "+55 31 98123-4567",
    email: "ju.pereira@gmail.com",
    lastMessage: "Vou pensar e retorno na sexta.",
    temperature: "morno",
    status: "atendimento",
    source: "WhatsApp",
    date: "há 1h",
    aiActive: true,
    value: 2100,
  },
  {
    id: "4",
    name: "Carlos Mendes",
    phone: "+55 11 97654-3210",
    email: "carlos@negocio.br",
    lastMessage: "Fechado! Como faço o pagamento?",
    temperature: "quente",
    status: "qualificado",
    source: "WhatsApp",
    date: "há 3h",
    value: 12500,
  },
  {
    id: "5",
    name: "Beatriz Lima",
    phone: "+55 41 98765-1111",
    email: "bia@email.com",
    lastMessage: "Obrigada, talvez no próximo mês.",
    temperature: "frio",
    status: "atendimento",
    source: "Instagram",
    date: "há 5h",
    value: 1500,
  },
  {
    id: "6",
    name: "Pedro Henrique",
    phone: "+55 51 99988-7766",
    email: "pedro@corp.com",
    lastMessage: "Já assinei, muito obrigado!",
    temperature: "quente",
    status: "fechado",
    source: "WhatsApp",
    date: "ontem",
    value: 6700,
  },
  {
    id: "7",
    name: "Larissa Souza",
    phone: "+55 71 98877-6655",
    email: "larissa@email.com",
    lastMessage: "Quanto custa o plano básico?",
    temperature: "morno",
    status: "novo",
    source: "WhatsApp",
    date: "há 30min",
    unread: 2,
    aiActive: true,
    value: 800,
  },
  {
    id: "8",
    name: "Thiago Ribeiro",
    phone: "+55 11 96543-2109",
    email: "thiago@dev.io",
    lastMessage: "Não tenho interesse no momento.",
    temperature: "frio",
    status: "novo",
    source: "Site",
    date: "há 1h",
    value: 0,
  },
  {
    id: "9",
    name: "Amanda Rocha",
    phone: "+55 19 98765-5544",
    email: "amanda@design.co",
    lastMessage: "Adorei a proposta, vou fechar!",
    temperature: "quente",
    status: "qualificado",
    source: "WhatsApp",
    date: "há 2h",
    value: 9200,
  },
  {
    id: "10",
    name: "Felipe Cardoso",
    phone: "+55 27 99654-3322",
    email: "felipe@email.com",
    lastMessage: "Pagamento confirmado, obrigado.",
    temperature: "quente",
    status: "fechado",
    source: "WhatsApp",
    date: "há 2d",
    value: 3400,
  },
];

export const metrics = {
  totalLeads: { value: 1284, change: 12.5 },
  aiResponded: { value: 942, change: 23.1 },
  conversion: { value: 28.4, change: 4.2 },
  avgResponseTime: { value: "1.2s", change: -18.5 },
};

export const leadsOverTime = [
  { date: "Seg", leads: 45, conversoes: 12 },
  { date: "Ter", leads: 62, conversoes: 18 },
  { date: "Qua", leads: 58, conversoes: 15 },
  { date: "Qui", leads: 78, conversoes: 24 },
  { date: "Sex", leads: 95, conversoes: 31 },
  { date: "Sáb", leads: 42, conversoes: 9 },
  { date: "Dom", leads: 38, conversoes: 7 },
];

export const statusDistribution = [
  { name: "Novo", value: 384, color: "var(--color-chart-2)" },
  { name: "Em atendimento", value: 512, color: "var(--color-chart-1)" },
  { name: "Qualificado", value: 248, color: "var(--color-chart-3)" },
  { name: "Fechado", value: 140, color: "var(--color-chart-4)" },
];

export type MessageRole = "client" | "ai" | "human";
export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  time: string;
}

export const conversations: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      role: "client",
      content: "Olá! Vi o anúncio de vocês no Instagram.",
      time: "10:24",
    },
    {
      id: "m2",
      role: "ai",
      content:
        "Oi Mariana! Tudo bem? Que bom ter você por aqui ✨ Posso te ajudar com informações sobre nossos planos. Qual seu principal objetivo?",
      time: "10:24",
    },
    {
      id: "m3",
      role: "client",
      content: "Quero automatizar o atendimento da minha clínica. Recebemos muitas mensagens.",
      time: "10:26",
    },
    {
      id: "m4",
      role: "ai",
      content:
        "Perfeito! Nosso plano Premium é ideal para isso — IA treinada, integrações ilimitadas e relatórios completos. Posso te enviar uma proposta personalizada?",
      time: "10:26",
    },
    {
      id: "m5",
      role: "client",
      content: "Olá! Gostaria de saber mais sobre o plano premium.",
      time: "10:32",
    },
  ],
  "2": [
    { id: "m1", role: "client", content: "Recebi a proposta, parece ótimo!", time: "09:10" },
    {
      id: "m2",
      role: "human",
      content: "Que bom Rafael! Tem alguma dúvida sobre os recursos?",
      time: "09:12",
    },
    {
      id: "m3",
      role: "client",
      content: "Perfeito, podemos agendar uma demo amanhã?",
      time: "09:15",
    },
  ],
};

export interface Automation {
  id: string;
  name: string;
  description: string;
  trigger: string;
  active: boolean;
  executions: number;
  icon: string;
}

export const automations: Automation[] = [
  {
    id: "a1",
    name: "Resposta automática para novos leads",
    description:
      "Responde imediatamente novos contatos com mensagem de boas-vindas e qualifica o interesse.",
    trigger: "Novo lead recebido",
    active: true,
    executions: 1284,
    icon: "zap",
  },
  {
    id: "a2",
    name: "Follow-up após 24h sem resposta",
    description: "Envia mensagem de retomada quando o lead não responde por mais de 24 horas.",
    trigger: "Inatividade de 24h",
    active: true,
    executions: 423,
    icon: "clock",
  },
  {
    id: "a3",
    name: "Qualificar leads quentes",
    description:
      "Marca automaticamente como quente leads que demonstram interesse claro em compra.",
    trigger: "Palavras-chave de compra",
    active: true,
    executions: 187,
    icon: "flame",
  },
  {
    id: "a4",
    name: "Notificar equipe sobre lead premium",
    description: "Avisa o time de vendas quando um lead com alto potencial de receita é detectado.",
    trigger: "Score > 80",
    active: false,
    executions: 56,
    icon: "bell",
  },
];
