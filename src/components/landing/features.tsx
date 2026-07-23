import {
  BookOpen,
  ChartColumn,
  Clock3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Organize suas matérias",
    description:
      "Cadastre todas as disciplinas e mantenha seus estudos organizados em um único lugar.",
    icon: BookOpen,
  },
  {
    title: "Registre suas sessões",
    description:
      "Acompanhe cada sessão de estudo para criar uma rotina consistente.",
    icon: Clock3,
  },
  {
    title: "Visualize sua evolução",
    description:
      "Acompanhe seu progresso e descubra como seus hábitos evoluem ao longo do tempo.",
    icon: ChartColumn,
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Tudo o que você precisa para estudar melhor
          </h2>

          <p className="mt-4 text-muted-foreground">
            Ferramentas simples para organizar seus estudos e acompanhar
            seu desempenho.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-4 h-8 w-8 text-primary" />

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}