import Container from "./Container";
import StatementItem from "../StatementItem";
import Props from "@/app/@core/props/statement/statement-section";

export default ({
  items
}: Props) => {
  const firstItemDate = new Date(new Date(`${items[0].date}T00:00:00`));
  const month = firstItemDate.toLocaleDateString("pt-BR", { month: "long" });

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
