import type { Transaction } from "../../../types/transaction";
import { showTransaction, updateTransaction, deleteTransaction } from '../../../services/transaction_service';

type Params = {
  id: string
};

export async function GET(request: Request, { params }: { params: Params }) {
  const transaction = await showTransaction(params.id);

  return handleTransactionResponse(transaction);
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const transactionData = await request.json() as Transaction;
  const transaction = await updateTransaction(params.id, transactionData);

  return handleTransactionResponse(transaction);
}

export async function DELETE(request: Request, { params }: { params: Params }) {
  const transaction = await deleteTransaction(params.id);

  return handleTransactionResponse(transaction);
}

function handleTransactionResponse(transaction: Transaction | undefined) {
  if(transaction) {
    return new Response(JSON.stringify(transaction), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response('Transaction not found.', { status: 404 });
}
