import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type SummaryCardProps = Readonly<{
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}>;

export function SummaryCard({
  title,
  value,
  description,
  icon: Icon,
}: SummaryCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold">
            {value}
          </h2>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="size-6 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}