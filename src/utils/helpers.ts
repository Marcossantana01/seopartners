export function isEmpty(value: unknown) {
  return value === null || value === undefined || value === "";
}

export function handleError(error: unknown) {
  console.error(error);
  return {
    message: "Ocorreu um erro inesperado.",
    details: error,
  };
}
