// import type { Transaction } from "../../../@core/types/transaction";
// import {
//   showTransaction,
//   updateTransaction,
//   deleteTransaction,
// } from "../../../@core/services/transaction_service";

// type Params = {
//   id: string;
// };

// export const GET = async (request: Request, { params }: { params: Params }) => {
//   const transaction = await showTransaction(params.id);

//   return handleTransactionResponse(transaction);
// };

// export const PUT = async (request: Request, { params }: { params: Params }) => {
//   const transactionData = (await request.json()) as Transaction;
//   const transaction = await updateTransaction(params.id, transactionData);

//   return handleTransactionResponse(transaction);
// };

// export const DELETE = async (
//   request: Request,
//   { params }: { params: Params }
// ) => {
//   const transaction = await deleteTransaction(params.id);

//   return handleTransactionResponse(transaction);
// };

// const handleTransactionResponse = async (
//   transaction: Transaction | undefined
// ) => {
//   if (transaction) {
//     return new Response(JSON.stringify(transaction), {
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   return new Response("Transaction not found.", { status: 404 });
// };


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";
import fsPromises from "fs/promises";

export async function GET(
  req: Request,
  context: { params: { id: string } },
  res: NextApiResponse<Response>
) {
  const idTransaction = context.params.id;
  try {
    const trans = await fsPromises.readFile(
      "src/app/@core/mocks/transactions.json",
      "utf-8"
    );
    const json = JSON.parse(trans);
    const resultSearch = json.find(
      (t: any) => t.id === parseInt(idTransaction)
    );
    console.log(resultSearch);
    return NextResponse.json(resultSearch);
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "No transaction found!" }),
      { status: 404, headers: { "content-type": "application/json" } }
    );
  }
}

export async function PUT(
  req: Request,
  context: { params: { id: string } },
  res: NextApiResponse<Response>
) {
  // console.log("PUT", context.params.id);
  const idTransaction = context.params.id;
  const body: any = await req.json();
  try {
    const trans = await fsPromises.readFile(
      "src/app/@core/mocks/transactions.json",
      "utf-8"
    );
    const json = JSON.parse(trans);
    const index = json.findIndex((t: any) => t.id === parseInt(idTransaction));
    json[index] = { id: parseInt(idTransaction), ...body };
    return NextResponse.json({
      res: await fsPromises.writeFile(
        "src/app/@core/mocks/transactions.json",
        JSON.stringify(json),
        "utf8"
      ),
    });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "No transaction Updated!" }),
      { status: 404, headers: { "content-type": "application/json" } }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } },
  res: NextApiResponse<Response>
) {
  // console.log("DELETE", context.params.id);
  const idTransaction = context.params.id;
  try {
    const trans = await fsPromises.readFile(
      "src/app/@core/mocks/transactions.json",
      "utf-8"
    );
    const json = JSON.parse(trans);
    const index = json.findIndex((t: any) => t.id === parseInt(idTransaction));
    if (index > -1) {
      json.splice(index, 1);
    }
    return NextResponse.json({
      res: await fsPromises.writeFile(
        "src/app/@core/mocks/transactions.json",
        JSON.stringify(json),
        "utf8"
      ),
    });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "No transaction Updated!" }),
      { status: 404, headers: { "content-type": "application/json" } }
    );
  }
}
