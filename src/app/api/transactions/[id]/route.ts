import type { Transaction } from "../../../@core/models/transaction";
import { showTransaction, updateTransaction, deleteTransaction } from '../../../@core/services/transaction_service';

type Params = {
  id: string
};

export const GET = async (request: Request, { params }: { params: Params }) => {
  const transaction = await showTransaction(params.id);

  return handleTransactionResponse(transaction);
}

export const PUT = async (request: Request, { params }: { params: Params }) => {
  const transactionData = await request.json() as Transaction;
  const transaction = await updateTransaction(params.id, transactionData);

  return handleTransactionResponse(transaction);
}

export const DELETE = async (request: Request, { params }: { params: Params }) => {
  const transaction = await deleteTransaction(params.id);

  return handleTransactionResponse(transaction);
}

const handleTransactionResponse = async (transaction: Transaction | undefined) => {
  if(transaction) {
    return new Response(JSON.stringify(transaction), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Transaction not found.', { status: 404 });
}
