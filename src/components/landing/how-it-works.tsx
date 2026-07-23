import {
  BookOpen,
  ChartColumn,
  Clock3,
} from "lucide-react";

const steps = [
  {
    title: "Cadastre suas matérias",
    description:
      "Adicione as disciplinas que deseja estudar e mantenha tudo organizado.",
    icon: BookOpen,
  },
  {
    title: "Registre cada sessão",
    description:
      "Anote a duração dos estudos para acompanhar sua rotina.",
    icon: Clock3,
  },
  {
    title: "Acompanhe sua evolução",
    description:
      "Visualize estatísticas e descubra seu progresso ao longo do tempo.",
    icon: ChartColumn,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Como funciona
          </h2>

          <p className="mt-4 text-muted-foreground">
            Em poucos passos você começa a organizar seus estudos e acompanhar
            sua evolução.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-8 w-8" />
              </div>

              <span className="mt-6 inline-block text-sm font-semibold text-primary">
                Passo {index + 1}
              </span>

              <h3 className="mt-2 text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}