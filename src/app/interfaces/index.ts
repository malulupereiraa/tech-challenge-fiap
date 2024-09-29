export type Transaction = {
  id: string,
  type: string,
  date: string,
  amount: number
};

export type Transactions = {
  transactions: Transaction[]
};
