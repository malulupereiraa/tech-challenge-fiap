import type { Transaction } from "../types/transaction";
import type { Transactions } from "../types/transactions";
import { JSONFilePreset } from 'lowdb/node';
import { customAlphabet } from 'nanoid';

export async function listTransactions() {
  const db = await openDB();
  const { transactions } = db.data;

  return transactions;
}

export async function createTransaction(data: object) {
  const db = await openDB();
  const nanoid = customAlphabet('1234567890abcdef', 9);
  const id = nanoid();

  data = { ...data, id };

  db.data.transactions.push(data as Transaction);

  await db.write();

  return id;
}

export async function showTransaction(id: string): Promise<Transaction | undefined> {
  const db = await openDB();

  return db.data.transactions.find((user: Transaction) => user.id === id);
}

export async function deleteTransaction(id: string) {
  const db = await openDB();
  const transaction: Transaction | undefined = db.data.transactions.find((u: Transaction) => u.id === id);

  if(!transaction) return;

  db.update((data: Transactions) => {
    data.transactions = data.transactions.filter((u: Transaction) => u.id !== id)
  });

  return transaction;
}

export async function updateTransaction(
  id: string,
  userData: Transaction
): Promise<Transaction | undefined> {
  const db = await openDB();
  const { transactions } = db.data;
  const index: number = db.data.transactions.findIndex((user: Transaction) => user.id === id);

  if(index < 0) return;

  const user: Transaction = transactions[index];

  const newUserData: Transaction = {
    ...userData,
    id: user.id
  };

  transactions[index] = newUserData;

  db.update((data: Transactions) => data.transactions = transactions);

  return newUserData;
}

async function openDB() {
  const defaultData: Transactions = { transactions: [] };

  return JSONFilePreset<Transactions>('db.json', defaultData);
}
