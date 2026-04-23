import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { TemperatureBadge } from "@/components/temperature-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Sparkles, TrendingUp, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { metrics, leadsOverTime, statusDistribution, leads } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1400px] space-y-8 p-8">
        <header className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Visão geral do seu funil de leads e desempenho da IA.
            </p>
          </div>
          <Tabs defaultValue="7d">
            <TabsList>
              <TabsTrigger value="7d">7 dias</TabsTrigger>
              <TabsTrigger value="30d">30 dias</TabsTrigger>
              <TabsTrigger value="90d">90 dias</TabsTrigger>
            </TabsList>
          </Tabs>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Total de Leads"
            value={metrics.totalLeads.value.toLocaleString("pt-BR")}
            change={metrics.totalLeads.change}
            icon={Users}
          />
          <MetricCard
            label="Respondidos pela IA"
            value={metrics.aiResponded.value.toLocaleString("pt-BR")}
            change={metrics.aiResponded.change}
            icon={Sparkles}
            accent
          />
          <MetricCard
            label="Taxa de conversão"
            value={`${metrics.conversion.value}%`}
            change={metrics.conversion.change}
            icon={TrendingUp}
          />
          <MetricCard
            label="Tempo médio resposta"
            value={metrics.avgResponseTime.value}
            change={metrics.avgResponseTime.change}
            icon={Clock}
            inverse
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Leads ao longo do tempo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={leadsOverTime}>
                    <defs>
                      <linearGradient id="leadsFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      stroke="var(--color-border)"
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="date"
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-popover)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stroke="var(--color-primary)"
                      strokeWidth={2}
                      fill="url(#leadsFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Distribuição por status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusDistribution}
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {statusDistribution.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-popover)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-4 space-y-2">
                {statusDistribution.map((s) => (
                  <li key={s.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                      {s.name}
                    </span>
                    <span className="font-medium tabular-nums">{s.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recent leads */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Leads recentes</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {leads.slice(0, 6).map((l) => (
                <li
                  key={l.id}
                  className="flex items-center gap-4 px-6 py-3 hover:bg-muted/40 transition-colors"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {l.name
                        .split(" ")
                        .slice(0, 2)
                        .map((p) => p[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-medium">{l.name}</p>
                      <TemperatureBadge value={l.temperature} />
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{l.lastMessage}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{l.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

function MetricCard({
  label,
  value,
  change,
  icon: Icon,
  accent,
  inverse,
}: {
  label: string;
  value: string;
  change: number;
  icon: typeof Users;
  accent?: boolean;
  inverse?: boolean;
}) {
  const positive = inverse ? change < 0 : change > 0;
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">{label}</span>
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              accent ? "bg-primary/10 text-primary" : "bg-muted text-foreground/70",
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
        <div
          className={cn(
            "mt-1 flex items-center gap-1 text-xs font-medium",
            positive ? "text-[color:var(--color-success)]" : "text-[color:var(--color-hot)]",
          )}
        >
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {Math.abs(change)}%{" "}
          <span className="text-muted-foreground font-normal">vs. mês anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}
