export interface WalletDigital {
  id: string;
  value: number;
  description: string;
  type: TypeTransaction;
}

export enum TypeTransaction {
  Entrada = "Entrada",
  Saida = "Saida",
}
