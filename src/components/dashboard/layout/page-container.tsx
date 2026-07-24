import { ReactNode } from "react";

type PageContainerProps = Readonly<{
  title: string;
  description?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}>;

export function PageContainer({
  title,
  description,
  header,
  children,
}: PageContainerProps) {
  return (
    <div className="space-y-6">
      {header}

      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {description && (
          <p className="text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}