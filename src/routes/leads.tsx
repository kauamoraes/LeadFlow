import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { TemperatureBadge } from "@/components/temperature-badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Filter, LayoutGrid, List, Inbox } from "lucide-react";
import {
  leads as initialLeads,
  type Lead,
  type LeadStatus,
  type LeadTemperature,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/leads")({
  component: LeadsPage,
  head: () => ({
    meta: [
      { title: "Leads — LeadFlow AI" },
      { name: "description", content: "Gerencie seus leads em visão Kanban ou tabela." },
    ],
  }),
});

const columns: { key: LeadStatus; label: string; tone: string }[] = [
  { key: "novo", label: "Novo", tone: "bg-chart-2/15 text-chart-2" },
  { key: "atendimento", label: "Em atendimento", tone: "bg-primary/15 text-primary" },
  { key: "qualificado", label: "Qualificado", tone: "bg-chart-3/15 text-chart-3" },
  { key: "fechado", label: "Fechado", tone: "bg-chart-4/15 text-chart-4" },
];

function LeadsPage() {
  const [view, setView] = useState<"kanban" | "tabela">("kanban");
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState(initialLeads);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "WhatsApp",
    temperature: "morno" as LeadTemperature,
    lastMessage: "",
    value: "",
  });

  const filtered = leads.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  const handleAddLead = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Preencha os campos obrigatórios");
      return;
    }

    const newLead: Lead = {
      id: String(Math.max(...leads.map((l) => parseInt(l.id) || 0)) + 1),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      source: formData.source,
      temperature: formData.temperature,
      lastMessage: formData.lastMessage || "Novo lead adicionado",
      status: "novo",
      date: "agora",
      value: formData.value ? parseInt(formData.value) : 0,
    };

    setLeads([...leads, newLead]);
    toast.success(`Lead "${newLead.name}" adicionado com sucesso!`);
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      source: "WhatsApp",
      temperature: "morno",
      lastMessage: "",
      value: "",
    });
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-[1500px] space-y-6 p-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {leads.length} leads no funil — gerencie em Kanban ou tabela.
            </p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4" /> Novo lead
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Adicionar novo lead</DialogTitle>
                <DialogDescription>
                  Preencha os dados do lead para adicioná-lo ao funil de vendas.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    placeholder="+55 11 98765-4321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="source">Origem</Label>
                  <Select
                    value={formData.source}
                    onValueChange={(value) => setFormData({ ...formData, source: value })}
                  >
                    <SelectTrigger id="source">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                      <SelectItem value="Email">Email</SelectItem>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="Instagram">Instagram</SelectItem>
                      <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                      <SelectItem value="Referência">Referência</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperatura</Label>
                  <Select
                    value={formData.temperature}
                    onValueChange={(value) =>
                      setFormData({ ...formData, temperature: value as LeadTemperature })
                    }
                  >
                    <SelectTrigger id="temperature">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quente">Quente</SelectItem>
                      <SelectItem value="morno">Morno</SelectItem>
                      <SelectItem value="frio">Frio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem inicial</Label>
                  <Input
                    id="message"
                    placeholder="Deixe uma nota sobre o lead..."
                    value={formData.lastMessage}
                    onChange={(e) => setFormData({ ...formData, lastMessage: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="value">Valor potencial (R$)</Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="0"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
                  Cancelar
                </Button>
                <Button onClick={handleAddLead} className="flex-1">
                  Adicionar lead
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome..."
              className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" /> Filtros
          </Button>
          <Tabs
            value={view}
            onValueChange={(v) => setView(v as "kanban" | "tabela")}
            className="ml-auto"
          >
            <TabsList>
              <TabsTrigger value="kanban">
                <LayoutGrid className="h-4 w-4" /> Kanban
              </TabsTrigger>
              <TabsTrigger value="tabela">
                <List className="h-4 w-4" /> Tabela
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {view === "kanban" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {columns.map((col) => {
              const items = filtered.filter((l) => l.status === col.key);
              return (
                <div
                  key={col.key}
                  className="flex flex-col rounded-xl border border-border bg-muted/30 p-3"
                >
                  <div className="mb-3 flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <span className={cn("rounded-md px-2 py-0.5 text-xs font-medium", col.tone)}>
                        {col.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{items.length}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {items.length === 0 ? (
                      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-8 text-center">
                        <Inbox className="h-6 w-6 text-muted-foreground/40" />
                        <p className="mt-2 text-xs text-muted-foreground">Nenhum lead aqui</p>
                      </div>
                    ) : (
                      items.map((l) => <LeadCard key={l.id} lead={l} />)
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Lead</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Temperatura</th>
                    <th className="px-4 py-3 font-medium">Origem</th>
                    <th className="px-4 py-3 font-medium">Última mensagem</th>
                    <th className="px-4 py-3 font-medium text-right">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l) => (
                    <tr
                      key={l.id}
                      className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                              {l.name
                                .split(" ")
                                .slice(0, 2)
                                .map((p) => p[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium">{l.name}</p>
                            <p className="text-xs text-muted-foreground">{l.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "rounded-md px-2 py-0.5 text-xs font-medium",
                            columns.find((c) => c.key === l.status)?.tone,
                          )}
                        >
                          {columns.find((c) => c.key === l.status)?.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <TemperatureBadge value={l.temperature} />
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{l.source}</td>
                      <td className="px-4 py-3 max-w-[280px]">
                        <p className="truncate text-muted-foreground">{l.lastMessage}</p>
                      </td>
                      <td className="px-4 py-3 text-right text-xs text-muted-foreground">
                        {l.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </AppShell>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="cursor-grab rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
              {lead.name
                .split(" ")
                .slice(0, 2)
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <p className="truncate text-sm font-medium">{lead.name}</p>
        </div>
        <TemperatureBadge value={lead.temperature} />
      </div>
      <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{lead.lastMessage}</p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="rounded bg-muted px-1.5 py-0.5">{lead.source}</span>
        <span>{lead.date}</span>
      </div>
    </div>
  );
}
