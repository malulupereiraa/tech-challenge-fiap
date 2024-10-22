export type TransactionType = "deposit" | "transference";

export type Transaction = {
  id: string,
  type: TransactionType,
  date: string,
  amount: number
};
