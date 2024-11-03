export type TransactionType = "deposito" | "debito" | "pix" | "ted" | "tef";

export type Transaction = {
  id: string,
  type: TransactionType,
  date: string,
  amount: number
};
