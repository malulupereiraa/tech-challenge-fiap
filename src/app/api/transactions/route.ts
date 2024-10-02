import { listTransactions, createTransaction } from '../../services/transaction_service';

export const GET = async (request: Request) => {
  const transactions = await listTransactions();

  return Response.json(transactions);
}

export const POST = async (request: Request) => {
  const data = await request.json();
  const id = await createTransaction(data as object);

  return new Response(JSON.stringify({ id }), {
    headers: { 'Content-Type': 'application/json' },
    status: 201
  });
}
