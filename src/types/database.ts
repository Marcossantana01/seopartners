import { Role } from "./roles";

export type User = {
  id: string;
  email: string;
  name?: string;
  role: Role;
};

export type Empresa = {
  id: string;
  name: string;
};

export type Cliente = {
  id: string;
  name: string;
  empresaId: string;
};

export type Contrato = {
  id: string;
  title: string;
  empresaId: string;
  clienteId: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
};

export type Comissao = {
  id: string;
  amount: number;
  contratoId: string;
};
