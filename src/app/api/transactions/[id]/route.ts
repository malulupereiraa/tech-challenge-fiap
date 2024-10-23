import type { Transaction } from "../../../@core/types/transaction";
import {
  dbShowTransaction,
  dbUpdateTransaction,
  dbDeleteTransaction,
} from "../../../@core/services/db_service";

type Params = {
  id: string;
};

export const GET = async (request: Request, { params }: { params: Params }) => {
  const transaction = await dbShowTransaction(params.id);

  return handleTransactionResponse(transaction);
};

export const PUT = async (request: Request, { params }: { params: Params }) => {
  const transactionData = (await request.json()) as Transaction;
  const transaction = await dbUpdateTransaction(params.id, transactionData);

  return handleTransactionResponse(transaction);
};

export const DELETE = async (
  request: Request,
  { params }: { params: Params }
) => {
  const transaction = await dbDeleteTransaction(params.id);

  return handleTransactionResponse(transaction);
};

const handleTransactionResponse = async (
  transaction: Transaction | undefined
) => {
  if (transaction) {
    return new Response(JSON.stringify(transaction), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Transaction not found.", { status: 404 });
};

