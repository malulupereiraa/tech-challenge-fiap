import Container from "./Container";
import StatementItem from "../StatementItem";
import Props from "@/app/@core/props/statement/statement-section";

export default ({
  month,
  items
}: Props) => {
  return (
    <Container>
      <h6>{month}</h6>
      {
        items.map((transaction) => (
          <StatementItem
            amount={transaction.amount}
            date={transaction.date}
            transactionType={transaction.transactionType}
          />
        ))
      }
    </Container>
  );
};
