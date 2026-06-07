import { Role } from "./roles";

export type Permission =
  | "view_dashboard"
  | "manage_leads"
  | "manage_clients"
  | "manage_companies"
  | "manage_contracts"
  | "manage_commissions"
  | "manage_payments"
  | "manage_support";

export const rolePermissions: Record<Role, Permission[]> = {
  administrador: [
    "view_dashboard",
    "manage_leads",
    "manage_clients",
    "manage_companies",
    "manage_contracts",
    "manage_commissions",
    "manage_payments",
    "manage_support",
  ],
  gestor: ["view_dashboard", "manage_leads", "manage_clients", "manage_companies", "manage_contracts"],
  consultor: ["view_dashboard", "manage_leads", "manage_clients"],
  cliente: ["view_dashboard"],
  financeiro: ["view_dashboard", "manage_payments", "manage_commissions"],
  suporte: ["view_dashboard", "manage_support"],
};
