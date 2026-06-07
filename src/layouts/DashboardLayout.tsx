import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
