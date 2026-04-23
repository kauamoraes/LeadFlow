import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { TemperatureBadge } from "@/components/temperature-badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sparkles, Send, Paperclip, Smile, Phone, Search, MoreVertical, Bot } from "lucide-react";
import { leads, conversations, type Message } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/chat")({
  component: ChatPage,
  head: () => ({
    meta: [
      { title: "Chat — LeadFlow AI" },
      { name: "description", content: "Atenda leads via WhatsApp com suporte da IA." },
    ],
  }),
});

function ChatPage() {
  const [activeId, setActiveId] = useState("1");
  const [aiMode, setAiMode] = useState(true);
  const active = leads.find((l) => l.id === activeId)!;
  const messages: Message[] = conversations[activeId] ?? [];

  return (
    <AppShell>
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* Conversations list */}
        <aside className="flex w-[320px] shrink-0 flex-col border-r border-border bg-card">
          <div className="border-b border-border p-4">
            <h2 className="text-sm font-semibold">Conversas</h2>
            <div className="relative mt-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Buscar conversa..."
                className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {leads.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => setActiveId(l.id)}
                  className={cn(
                    "flex w-full items-start gap-3 border-b border-border/50 p-4 text-left transition-colors hover:bg-muted/40",
                    activeId === l.id && "bg-muted/60",
                  )}
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {l.name
                        .split(" ")
                        .slice(0, 2)
                        .map((p) => p[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{l.name}</p>
                      <span className="shrink-0 text-[11px] text-muted-foreground">{l.date}</span>
                    </div>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">{l.lastMessage}</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      {l.aiActive && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-ai-soft)] px-1.5 py-0.5 text-[10px] font-medium text-primary">
                          <Sparkles className="h-2.5 w-2.5" /> IA
                        </span>
                      )}
                      {l.unread ? (
                        <span className="ml-auto inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                          {l.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Active conversation */}
        <section className="flex min-w-0 flex-1 flex-col bg-background">
          <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                  {active.name
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">{active.name}</p>
                  <TemperatureBadge value={active.temperature} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {active.phone} • {active.source}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5">
                <Bot className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium">IA ativa</span>
                <Switch checked={aiMode} onCheckedChange={setAiMode} />
              </div>
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="mx-auto flex max-w-3xl flex-col gap-3">
              {messages.map((m) => (
                <Bubble key={m.id} message={m} />
              ))}
              {aiMode && (
                <div className="flex items-center gap-2 self-start rounded-2xl bg-[color:var(--color-ai-soft)] px-4 py-2.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs text-primary">IA está digitando</span>
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border bg-card p-4">
            <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-xl border border-input bg-background px-3 py-2 focus-within:ring-2 focus-within:ring-ring/20">
              <button className="text-muted-foreground hover:text-foreground">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="text-muted-foreground hover:text-foreground">
                <Smile className="h-4 w-4" />
              </button>
              <input
                placeholder={aiMode ? "Responder como IA..." : "Digite sua mensagem..."}
                className="flex-1 bg-transparent py-1.5 text-sm focus:outline-none"
              />
              <Button size="sm" className="gap-1.5">
                <Send className="h-3.5 w-3.5" /> Enviar
              </Button>
            </div>
          </div>
        </section>

        {/* Right panel */}
        <aside className="hidden w-[280px] shrink-0 flex-col border-l border-border bg-card xl:flex">
          <div className="border-b border-border p-5 text-center">
            <Avatar className="mx-auto h-16 w-16">
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                {active.name
                  .split(" ")
                  .slice(0, 2)
                  .map((p) => p[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <p className="mt-3 text-sm font-semibold">{active.name}</p>
            <p className="text-xs text-muted-foreground">{active.email}</p>
            <div className="mt-3 flex justify-center">
              <TemperatureBadge value={active.temperature} />
            </div>
          </div>
          <div className="space-y-4 p-5 text-sm">
            <InfoRow label="Telefone" value={active.phone} />
            <InfoRow label="Origem" value={active.source} />
            <InfoRow label="Status" value={active.status} />
            <InfoRow label="Valor estimado" value={`R$ ${active.value?.toLocaleString("pt-BR")}`} />
            <div>
              <p className="mb-1.5 text-xs font-medium text-muted-foreground">Notas internas</p>
              <textarea
                className="h-24 w-full resize-none rounded-lg border border-input bg-background p-2 text-xs focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Adicionar nota..."
              />
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function Bubble({ message }: { message: Message }) {
  if (message.role === "client") {
    return (
      <div className="self-start max-w-[70%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">
        {message.content}
        <div className="mt-1 text-[10px] text-muted-foreground">{message.time}</div>
      </div>
    );
  }
  if (message.role === "ai") {
    return (
      <div className="self-end max-w-[70%] rounded-2xl rounded-br-sm bg-[color:var(--color-ai-soft)] px-4 py-2.5 text-sm">
        <div className="mb-1 flex items-center gap-1 text-[11px] font-medium text-primary">
          <Sparkles className="h-3 w-3" /> Resposta IA
        </div>
        {message.content}
        <div className="mt-1 text-right text-[10px] text-primary/70">{message.time}</div>
      </div>
    );
  }
  return (
    <div className="self-end max-w-[70%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
      {message.content}
      <div className="mt-1 text-right text-[10px] text-primary-foreground/70">{message.time}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}
