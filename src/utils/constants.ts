export const APP_NAME = "SEO Partners";

export const SUPABASE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};

export const ROLES = [
  "administrador",
  "gestor",
  "consultor",
  "cliente",
  "financeiro",
  "suporte",
] as const;
