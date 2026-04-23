# LeadFlow AI 🚀

Uma plataforma moderna de gerenciamento de leads com inteligência artificial integrada, desenvolvida com as tecnologias mais atualizadas do ecossistema React.

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Vite](https://img.shields.io/badge/Vite-5+-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Recursos Principais](#recursos-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Componentes](#estrutura-de-componentes)
- [Sistema de Temas](#sistema-de-temas)
- [Contribuindo](#contribuindo)

---

## 🎯 Visão Geral

LeadFlow AI é uma solução completa para empresas que desejam otimizar seu funil de vendas através de automação inteligente e gerenciamento centralizado de leads. A plataforma oferece uma interface intuitiva, integrada com IA para automação de respostas e qualificação de leads.

### Objetivos Principais

- ✅ Centralizar todos os leads em uma única plataforma
- ✅ Automatizar tarefas repetitivas com IA
- ✅ Qualificar leads automaticamente
- ✅ Acompanhar conversões em tempo real
- ✅ Fornecer insights através de dashboards interativos

---

## ✨ Recursos Principais

### 1. **Dashboard Inteligente** 📊

- Visualização em tempo real de métricas-chave
- Gráficos interativos de performance
- Distribuição de leads por status
- Histórico de leads adicionados
- Filtros por período (7, 30, 90 dias)

### 2. **Gerenciamento de Leads** 👥

- **Visão Kanban**: Organização visual em colunas por status
- **Visão Tabela**: Listagem completa com detalhes
- Adicionar novos leads com formulário intuitivo
- Classificação por temperatura (Quente, Morno, Frio)
- Status do funil: Novo → Em atendimento → Qualificado → Fechado
- Busca rápida de leads
- Filtros avançados

### 3. **Chat de IA** 💬

- Interface de conversa com IA
- Respostas automáticas inteligentes
- Histórico de conversas
- Integração com leads

### 4. **Automações** ⚡

- Criar automações personalizadas
- Trigger automáticos baseados em eventos
- Rastreamento de execuções
- Ativação/desativação rápida
- Automações pré-configuradas

### 5. **Configurações** ⚙️

- Personalização de preferências
- Gerenciamento de perfil
- Definições de integração

### 6. **Tema Claro/Escuro** 🌓

- Alternância entre temas
- Persistência de preferências
- Transições suaves

---

## 📁 Estrutura do Projeto

```
lead-flow-ai/
├── src/
│   ├── components/
│   │   ├── app-shell.tsx                 # Layout principal
│   │   ├── temperature-badge.tsx         # Badge de temperatura
│   │   ├── theme-provider.tsx            # Provider de temas
│   │   └── ui/                           # Componentes Shadcn/UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── ... (30+ componentes)
│   ├── hooks/
│   │   ├── use-mobile.tsx                # Hook para detectar mobile
│   │   └── use-theme.ts                  # Hook de tema
│   ├── lib/
│   │   ├── mock-data.ts                  # Dados de exemplo
│   │   ├── theme-context.ts              # Context do tema
│   │   └── utils.ts                      # Funções utilitárias
│   ├── routes/
│   │   ├── __root.tsx                    # Layout raiz
│   │   ├── index.tsx                     # Dashboard
│   │   ├── leads.tsx                     # Página de leads
│   │   ├── chat.tsx                      # Chat com IA
│   │   ├── automacoes.tsx                # Automações
│   │   └── configuracoes.tsx             # Configurações
│   ├── router.tsx                        # Configuração de rotas
│   ├── routeTree.gen.ts                  # Gerado automaticamente
│   └── styles.css                        # Estilos globais
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .prettierrc                           # Configuração Prettier
├── eslint.config.js                      # Configuração ESLint
└── README.md

```

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18+** - Biblioteca UI
- **TypeScript 5+** - Tipagem estática
- **Vite 5+** - Build tool rápido
- **TanStack React Router** - Roteamento avançado
- **TanStack React Query** - Gerenciamento de estado assíncrono

### UI & Styling

- **Tailwind CSS 4** - Utilitários CSS
- **Shadcn/UI** - Componentes acessíveis
- **Radix UI** - Primitivos de UI sem estilo
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones SVG

### Formulários & Validação

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Notificações

- **Sonner** - Toast notifications elegantes

### DevTools

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Bun** - Package manager e runtime

### Deployment

- **Cloudflare** - Hosting e serverless functions

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn, pnpm ou Bun como package manager

### Passo 1: Clonar o repositório

```bash
git clone <seu-repositório>
cd lead-flow-ai
```

### Passo 2: Instalar dependências

**Com Bun (recomendado):**

```bash
bun install
```

**Com npm:**

```bash
npm install
```

### Passo 3: Iniciar o servidor de desenvolvimento

```bash
bun run dev
# ou
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Passo 4: Build para produção

```bash
bun run build
# ou
npm run build
```

---

## 💡 Como Usar

### Acessar o Dashboard

1. Abra `http://localhost:5173` no navegador
2. Você será redirecionado automaticamente para o Dashboard
3. Visualize as métricas principais e o estado dos leads

### Adicionar um Novo Lead

1. Clique no botão **"+ Novo lead"** no topo
2. Preencha o formulário:
   - **Nome** (obrigatório)
   - **Email** (obrigatório)
   - **Telefone** (obrigatório)
   - **Origem**: Selecione de onde o lead veio
   - **Temperatura**: Escolha entre Quente, Morno ou Frio
   - **Mensagem inicial**: Nota sobre o lead
   - **Valor potencial**: Receita esperada
3. Clique em **"Adicionar lead"**
4. Uma notificação confirmará a adição

### Gerenciar Leads na Kanban

1. Vá para a página **Leads**
2. Visualize os leads organizados por coluna de status
3. Clique em um lead para ver detalhes
4. Arraste entre colunas para mudar status (em desenvolvimento)

### Visualizar Leads em Tabela

1. Na página **Leads**, clique no ícone **"Tabela"**
2. Visualize todos os leads em formato tabular
3. Use a busca para filtrar por nome
4. Clique em **"Filtros"** para opções avançadas

### Gerenciar Automações

1. Vá para **Automações**
2. Visualize as automações pré-configuradas
3. Ative/desative automações usando o toggle
4. Clique em **"Criar automação"** para criar novas (em breve)

### Chat com IA

1. Acesse a página **Chat**
2. Selecione um lead
3. Converse com a IA para processar respostas
4. As mensagens são armazenadas no histórico

### Mudar Tema

1. Clique no ícone de **tema** no canto superior direito
2. Escolha entre **Claro** ou **Escuro**
3. A preferência é salva automaticamente

---

## 🎨 Funcionalidades Detalhadas

### Dashboard

```
┌─────────────────────────────────────────────┐
│ Dashboard - Visão geral do funil de leads   │
├─────────────────────────────────────────────┤
│ Métricas:                                   │
│  • Total de Leads: 1.284 (+12.5%)          │
│  • Respondidos por IA: 942 (+23.1%)        │
│  • Taxa de Conversão: 28.4% (+4.2%)        │
│  • Tempo Médio Resposta: 1.2s (-18.5%)     │
├─────────────────────────────────────────────┤
│ Gráficos:                                   │
│  • Leads ao longo do tempo (área)           │
│  • Distribuição por status (pizza)          │
│  • Leads mais recentes (cards)              │
└─────────────────────────────────────────────┘
```

### Leads

```
┌──────────────────────────────────────────────┐
│ Leads - Gerenciar funil de vendas            │
├──────────────────────────────────────────────┤
│ Modos de Visualização:                       │
│  • Kanban: Organização visual em colunas    │
│  • Tabela: Lista completa com detalhes      │
├──────────────────────────────────────────────┤
│ Filtros:                                     │
│  • Busca por nome                            │
│  • Filtros avançados (em desenvolvimento)   │
├──────────────────────────────────────────────┤
│ Informações por Lead:                        │
│  • Nome, Email, Telefone                     │
│  • Status (Novo/Atendimento/Qualificado)    │
│  • Temperatura (Quente/Morno/Frio)          │
│  • Origem (WhatsApp/Email/Website)          │
│  • Valor potencial                           │
└──────────────────────────────────────────────┘
```

### Automações

```
┌────────────────────────────────────────────┐
│ Automações - Tarefas inteligentes           │
├────────────────────────────────────────────┤
│ Automações Disponíveis:                     │
│  1. Resposta automática para novos leads   │
│  2. Follow-up após 24h sem resposta        │
│  3. Qualificar leads quentes               │
│  4. Notificar equipe sobre leads premium   │
├────────────────────────────────────────────┤
│ Informações:                                │
│  • Status (Ativo/Inativo)                   │
│  • Trigger (evento que inicia)              │
│  • Total de Execuções                       │
│  • Descrição detalhada                      │
└────────────────────────────────────────────┘
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build           # Build para produção
npm run build:dev       # Build para desenvolvimento

# Preview
npm run preview         # Preview do build

# Qualidade de Código
npm run lint            # Verifica erros com ESLint
npm run format          # Formata código com Prettier
```

---

## 🎯 Estrutura de Componentes

### Componentes Principais

#### `AppShell`

Layout principal que inclui:

- Sidebar com navegação
- Header com tema e ícones
- Área de conteúdo principal
- Gerenciamento de estado colapsado/expandido

```tsx
<AppShell>{/* Conteúdo */}</AppShell>
```

#### `TemperatureBadge`

Badge visual para classificação de leads:

- **Quente** (vermelho) - Alto interesse
- **Morno** (amarelo) - Interesse médio
- **Frio** (azul) - Pouco interesse

```tsx
<TemperatureBadge value="quente" />
```

#### `ThemeProvider`

Provider que gerencia temas claro/escuro:

- Detecta preferência do sistema
- Salva em localStorage
- Aplica classe CSS ao documento

```tsx
<ThemeProvider>{/* App */}</ThemeProvider>
```

### Componentes UI (Shadcn/UI)

Mais de 30 componentes reutilizáveis:

- Button, Input, Dialog, Select
- Card, Tabs, Badge, Avatar
- DropdownMenu, Sheet, Drawer
- Alert, Progress, Slider
- E muitos mais...

---

## 🌓 Sistema de Temas

### Arquitetura

```
src/
├── lib/theme-context.ts       # Context do tema (não renderiza)
├── components/theme-provider.tsx  # Provider componente
└── hooks/use-theme.ts         # Hook para usar tema
```

### Usando o Tema

```tsx
import { useTheme } from "@/hooks/use-theme";

function MyComponent() {
  const { theme, toggle } = useTheme();

  return <button onClick={toggle}>Tema atual: {theme}</button>;
}
```

### CSS Variables

O projeto usa CSS variables para temas:

```css
/* light.css */
--color-hot: #ef4444; /* Quente - Vermelho */
--color-warm: #eab308; /* Morno - Amarelo */
--color-cold: #3b82f6; /* Frio - Azul */
--color-success: #22c55e; /* Sucesso - Verde */
```

---

## 🔧 Configuração de Desenvolvimento

### TypeScript

- Arquivo: `tsconfig.json`
- Target: ES2022
- Modo strict ativado
- Alias `@/*` para imports

### ESLint

- Arquivo: `eslint.config.js`
- Configuração: Recomendada + TypeScript + React
- Desativado: `no-unused-vars` (muito restritivo)

### Prettier

- Arquivo: `.prettierrc`
- Linha: 100 caracteres
- Semicolons: true
- Quotes: duplas
- Trailing comma: all

---

## 📊 Dados de Exemplo

O projeto vem com dados mock em `src/lib/mock-data.ts`:

### Leads

- 10 leads pré-configurados
- Diferentes status e temperaturas
- Informações de contato realistas

### Métricas

- Total de leads
- Leads respondidos por IA
- Taxa de conversão
- Tempo médio de resposta

### Automações

- 4 automações pré-configuradas
- Diferentes triggers e execuções

---

## 🚦 Status do Projeto

### ✅ Implementado

- Dashboard com gráficos
- Listagem de leads (Kanban + Tabela)
- Adicionar novos leads
- Sistema de temas
- UI completa com Shadcn/UI
- Navegação com TanStack Router
- Toast notifications

### 🟡 Em Desenvolvimento

- Drag & drop entre colunas Kanban
- Chat com IA funcional
- Builder de automações
- Integração com APIs reais
- Autenticação de usuários

### ⏳ Planejado

- Integração com WhatsApp API
- Integração com Slack
- Relatórios PDF
- Exportação de dados
- Webhooks customizados
- Machine learning para qualificação

---

## 📦 Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@tanstack/react-router": "^1.168.0",
  "@tanstack/react-query": "^5.83.0",
  "tailwindcss": "^4.2.1",
  "typescript": "^5.7.2",
  "vite": "^5.4.0",
  "eslint": "^9.0.0",
  "prettier": "^3.4.2",
  "sonner": "^1.7.2",
  "recharts": "^2.14.3",
  "lucide-react": "^0.451.0"
}
```

---

## 🤝 Contribuindo

### Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript em todos os arquivos
- Componentes em formato funcional
- Use hooks ao invés de classes
- Mantenha componentes pequenos e focados
- Escreva comentários para lógica complexa
- Siga o padrão de nomenclatura do projeto

### Formatação de Código

```bash
# Antes de commitar, formate seu código:
npm run format
npm run lint
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 👨‍💻 Autor

Desenvolvido como projeto de aprendizado de Full Stack Development.

---

## 📞 Suporte

Para dúvidas ou problemas:

- Abra uma issue no GitHub
- Entre em contato através do email do projeto

---

## 🎉 Agradecimentos

- [TanStack](https://tanstack.com/) - React Router e Query
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Radix UI](https://radix-ui.com/) - Primitivos de UI
- Comunidade React

---

**Última atualização:** Abril 2026
**Versão:** 1.0.0
**Status:** 🟢 Ativo
