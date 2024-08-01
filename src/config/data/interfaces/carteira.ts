export interface Carteira {
  id: string;
  value: number;
  description: string;
  type: TypeTransaction;
}

export enum TypeTransaction {
  "Entrada",
  "Saida",
}
