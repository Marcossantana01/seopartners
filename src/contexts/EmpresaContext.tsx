"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type EmpresaContextValue = {
  empresaId: string | null;
  setEmpresaId: (id: string | null) => void;
};

const EmpresaContext = createContext<EmpresaContextValue | undefined>(undefined);

export function EmpresaProvider({ children }: { children: ReactNode }) {
  const [empresaId, setEmpresaId] = useState<string | null>(null);

  return (
    <EmpresaContext.Provider value={{ empresaId, setEmpresaId }}>
      {children}
    </EmpresaContext.Provider>
  );
}

export function useEmpresaContext() {
  const context = useContext(EmpresaContext);
  if (!context) {
    throw new Error("useEmpresaContext must be used within EmpresaProvider");
  }
  return context;
}
