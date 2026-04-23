
# LeadFlow AI — SaaS de Gestão de Leads com IA

Plataforma SaaS premium para captura, organização e atendimento automatizado de leads via WhatsApp, com IA classificando e respondendo clientes.

## Identidade Visual

**Estilo:** Clean, minimalista, premium — inspirado em Stripe, Linear e Notion.

- **Paleta:** neutros (branco, cinza claro, cinza grafite, preto) com **roxo violeta (#7C3AED)** como cor de destaque
- **Tipografia:** Inter — moderna, legível, hierarquia clara
- **Bordas suaves** (radius médio), sombras sutis, muito espaço em branco
- **Dark mode** disponível via toggle no topbar
- **Microinterações:** hover states suaves, transições rápidas, skeletons em loading

## Layout Global

- **Sidebar fixa à esquerda** com logo, navegação por ícones + labels (Dashboard, Leads, Chat, Automações, Configurações), colapsável
- **Topbar** com busca global, ícone de notificações com badge, toggle dark mode, avatar do usuário com menu
- **Área principal** com padding generoso, cards arredondados, divisão clara entre seções

## Telas

### 1. Dashboard
- 4 cards de métricas no topo: Total de Leads, Leads respondidos pela IA, Taxa de conversão, Tempo médio de resposta — cada um com ícone, valor grande, variação % vs período anterior
- Gráfico de área (leads ao longo do tempo) com seletor de período (7d / 30d / 90d)
- Card "Distribuição por status" (donut chart)
- Lista de leads recentes (avatar, nome, última mensagem truncada, tag, tempo relativo)

### 2. Leads (CRM)
- Toggle entre **visão Kanban** (4 colunas: Novo, Em atendimento, Qualificado, Fechado) e **visão Tabela**
- Cards de lead arrastáveis com: nome, última mensagem, badge de temperatura (🔥 quente / 🌤 morno / ❄️ frio), origem (WhatsApp), data
- Filtros no topo: busca, tag, origem, responsável
- Botão "Novo lead" no canto superior direito
- Empty states ilustrados quando coluna vazia

### 3. Chat (destaque visual)
- Layout 2 colunas: lista de conversas à esquerda (avatar, nome, preview, badge de não lidas, indicador IA ativa), conversa ativa à direita
- Mensagens estilo WhatsApp Web:
  - Cliente: bolha cinza claro à esquerda
  - IA: bolha roxa clara com ícone ✨ identificando IA
  - Usuário humano: bolha roxa sólida à direita
- Header da conversa com nome, status, tag, botão "Pausar IA / Assumir conversa"
- Indicador animado "IA está digitando..." quando aplicável
- Input inferior com anexos, emoji, e botão de envio; toggle "Responder como IA / Manual"
- Painel lateral direito (colapsável) com dados do lead, histórico, notas internas

### 4. Automações
- Lista em cards com: nome, descrição, gatilho, ações, toggle ativo/inativo, contador de execuções
- Exemplos pré-criados: "Responder novos leads automaticamente", "Follow-up após 24h sem resposta", "Qualificar leads quentes"
- Botão "Criar automação" abre modal/drawer com builder simples (Quando isso → Faça isso)
- Cada card mostra ícone do gatilho e badge de status

### 5. Configurações
- Navegação interna em abas verticais: Perfil, Integrações, IA, Equipe, Plano
- **Integrações:** cards de WhatsApp Business, API, Webhooks, com status de conexão
- **IA:** seletor de tom de voz (Profissional / Amigável / Casual), tipo de resposta (Curta / Detalhada), prompt customizado, idioma
- **Perfil:** avatar, nome, email, senha, preferências de notificação

## Componentes-chave
- Badges de temperatura (quente/morno/frio) com cores distintas
- Botões primário (roxo), secundário (outline), ghost
- Inputs com label flutuante e estados de foco/erro
- Tabelas com sort, hover de linha, paginação
- Skeletons em todos carregamentos
- Empty states com ilustração + CTA
- Toasts (sonner) para feedback de ações

## Dados
Mock data realista para todas as telas (leads, conversas, automações, métricas) — sem backend nesta fase. Estrutura preparada para conectar Lovable Cloud futuramente.
