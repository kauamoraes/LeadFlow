import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Plug, Sparkles, Users, CreditCard, Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/configuracoes")({
  component: SettingsPage,
  head: () => ({
    meta: [
      { title: "Configurações — LeadFlow AI" },
      { name: "description", content: "Configure integrações, IA e equipe." },
    ],
  }),
});

const tabs = [
  { key: "perfil", label: "Perfil", icon: User },
  { key: "integracoes", label: "Integrações", icon: Plug },
  { key: "ia", label: "Inteligência Artificial", icon: Sparkles },
  { key: "equipe", label: "Equipe", icon: Users },
  { key: "plano", label: "Plano", icon: CreditCard },
] as const;

type Tab = (typeof tabs)[number]["key"];

function SettingsPage() {
  const [tab, setTab] = useState<Tab>("perfil");

  return (
    <AppShell>
      <div className="mx-auto max-w-[1200px] p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Configurações</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Gerencie sua conta, integrações e IA.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <nav className="flex flex-row gap-1 overflow-x-auto lg:flex-col">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={cn(
                    "flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    tab === t.key
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </nav>

          <div>
            {tab === "perfil" && <ProfileTab />}
            {tab === "integracoes" && <IntegrationsTab />}
            {tab === "ia" && <AITab />}
            {tab === "equipe" && <TeamTab />}
            {tab === "plano" && <PlanTab />}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function ProfileTab() {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div>
          <h2 className="text-base font-semibold">Perfil do usuário</h2>
          <p className="text-xs text-muted-foreground">Atualize suas informações pessoais.</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary/10 text-primary text-base font-semibold">
              LV
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            Alterar foto
          </Button>
        </div>
        <Field label="Nome completo" defaultValue="Lucas Vieira" />
        <Field label="Email" defaultValue="lucas@empresa.com" type="email" />
        <Field label="Telefone" defaultValue="+55 11 98765-4321" />
        <div className="flex justify-end gap-2 border-t border-border pt-4">
          <Button variant="ghost">Cancelar</Button>
          <Button onClick={() => toast.success("Perfil atualizado")}>Salvar alterações</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function IntegrationsTab() {
  const integrations = [
    { name: "WhatsApp Business", desc: "Conecte sua conta para receber leads.", connected: true },
    { name: "API Pública", desc: "Acesse seus dados via REST API.", connected: true },
    { name: "Webhooks", desc: "Receba eventos em tempo real.", connected: false },
    { name: "Instagram Direct", desc: "Atenda mensagens do Instagram.", connected: false },
  ];
  return (
    <div className="space-y-3">
      {integrations.map((i) => (
        <Card key={i.name}>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold">{i.name}</h3>
                {i.connected && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-success)]/15 px-2 py-0.5 text-[11px] font-medium text-[color:var(--color-success)]">
                    <Check className="h-3 w-3" /> Conectado
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">{i.desc}</p>
            </div>
            <Button variant={i.connected ? "outline" : "default"} size="sm">
              {i.connected ? "Gerenciar" : "Conectar"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function AITab() {
  const [tone, setTone] = useState("amigavel");
  const [length, setLength] = useState("media");
  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        <div>
          <h2 className="text-base font-semibold">Configuração da IA</h2>
          <p className="text-xs text-muted-foreground">
            Personalize o comportamento das respostas.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium">Tom de voz</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "profissional", l: "Profissional" },
              { v: "amigavel", l: "Amigável" },
              { v: "casual", l: "Casual" },
            ].map((o) => (
              <button
                key={o.v}
                onClick={() => setTone(o.v)}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                  tone === o.v
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-muted",
                )}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium">Tipo de resposta</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "curta", l: "Curta" },
              { v: "media", l: "Média" },
              { v: "detalhada", l: "Detalhada" },
            ].map((o) => (
              <button
                key={o.v}
                onClick={() => setLength(o.v)}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                  length === o.v
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-muted",
                )}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium">Prompt customizado</label>
          <textarea
            defaultValue="Você é um assistente de vendas amigável da empresa. Responda dúvidas sobre produtos e qualifique o interesse do lead."
            className="h-32 w-full resize-none rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>

        <div className="flex justify-end border-t border-border pt-4">
          <Button onClick={() => toast.success("Configuração da IA salva")}>Salvar</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamTab() {
  const team = [
    { name: "Lucas Vieira", email: "lucas@empresa.com", role: "Admin" },
    { name: "Marina Souza", email: "marina@empresa.com", role: "Atendente" },
    { name: "Diego Castro", email: "diego@empresa.com", role: "Atendente" },
  ];
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-5">
          <div>
            <h2 className="text-base font-semibold">Equipe</h2>
            <p className="text-xs text-muted-foreground">{team.length} membros ativos</p>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4" /> Convidar
          </Button>
        </div>
        <ul className="divide-y divide-border border-t border-border">
          {team.map((m) => (
            <li key={m.email} className="flex items-center gap-3 px-5 py-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.email}</p>
              </div>
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{m.role}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function PlanTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Plano Premium
            </span>
            <h2 className="mt-3 text-2xl font-semibold">
              R$ 297<span className="text-sm font-normal text-muted-foreground">/mês</span>
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Próxima cobrança em 12 de maio.</p>
          </div>
          <Button variant="outline">Gerenciar</Button>
        </div>
        <ul className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
          {[
            "Leads ilimitados",
            "IA com 5.000 respostas/mês",
            "Equipe de até 10 membros",
            "Integrações premium",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[color:var(--color-success)]" /> {f}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium">{label}</label>
      <input
        defaultValue={defaultValue}
        type={type}
        className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}
