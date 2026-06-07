import { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="mb-4">
      <h2>{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
      {children}
    </div>
  );
}
