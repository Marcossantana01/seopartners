export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(date: string | number | Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}
