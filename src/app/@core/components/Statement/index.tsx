import Container from "./Container";
import Button from "@/app/@core/components/ui/Button/Button";
import { ImPencil } from "react-icons/im";
import { BsTrash3Fill } from "react-icons/bs";
import Props from "@/app/@core/props/statement/statement";
import StatementItemProps from "../../props/statement/statement-item";
import StatementSection from "./StatementSection";

export default ({
  transactions,
  onEditionButtonClicked,
  onRemovalButtonClicked
}: Props) => {
  const transactionsByMonth = () => {
    const transactionsWithParsedDate =
      transactions.map((transaction: StatementItemProps) => {
        if(typeof(transaction.date) !== "string")
          return transaction;

        return Object.assign(transaction, {
          date: new Date(`${transaction.date}T00:00:00`)
        });
      });

    return Object.groupBy(transactionsWithParsedDate, (transaction: { date: Date; }) => {
      return (transaction.date as Date).toLocaleDateString("pt-BR", {
        month: "long"
      })
    });
  };

  return (
    <Container>
      <header>
        <h3>Extrato</h3>
        <div className="actions">
          <Button
            size="sm"
            icon={<ImPencil />}
            rounded={true}
            onClick={onEditionButtonClicked}
          />
          <Button
            size="sm"
            icon={<BsTrash3Fill />}
            rounded={true}
            onClick={onRemovalButtonClicked}
          />
        </div>
      </header>
      {Object.entries(transactionsByMonth()).map((monthTransactions) => (
        <StatementSection
          month={monthTransactions[0]}
          items={monthTransactions[1] as StatementItemProps[]}
        />
      ))}
    </Container>
  );
};
