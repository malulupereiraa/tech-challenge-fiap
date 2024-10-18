/* eslint-disable @typescript-eslint/no-explicit-any */

import { TransactionType } from "../../types/transaction";

export default interface StatementItemPropsProps {
  /** ??? */
  transactionType: TransactionType,
  /** ??? */
  amount: number,
  /** ??? */
  date: string | Date
};
