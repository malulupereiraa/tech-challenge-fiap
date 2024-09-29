import { listTransactions, createTransaction } from '../../services/transaction_service';

export async function GET(request: Request) {
  const transactions = await listTransactions();

  return Response.json(transactions);
}

export async function POST(request: Request) {
  const data = await request.json();
  const id = await createTransaction(data as object);

  return new Response(JSON.stringify({ id }), {
    headers: { 'Content-Type': 'application/json' },
    status: 201
  });
}
