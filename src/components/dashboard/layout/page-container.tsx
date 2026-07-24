import { ReactNode } from "react";

type PageContainerProps = Readonly<{
  title: string;
  description?: string;
  children: ReactNode;
}>;

export function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}