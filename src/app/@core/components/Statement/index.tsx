import Container from "./Container";
import Button from "@/app/@core/components/ui/Button";
import Props from "@/app/@core/props/statement/statement";
import StatementItemProps from "../../props/statement/statement-item";
import StatementSection from "./StatementSection";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";

export default ({ transactions, loading }: Props) => {
  const [sortDirection, setSortDirection] = useState(-1);
  const [filter, setFilter] = useState<"positive" | "negative" | "all">("all");

  const sortByDate = (
    transactionA: StatementItemProps,
    transactionB: StatementItemProps
  ) => {
    if (transactionA.date < transactionB.date) return sortDirection * -1;

    if (transactionA.date > transactionB.date) return sortDirection * 1;

    return 0;
  };

  const toggleFilter = () => {
    switch (filter) {
      case "all":
        setFilter("positive");
        break;
      case "positive":
        setFilter("negative");
        break;
      default:
        setFilter("all");
        break;
    }
  };

  const filteredTransactions = () => {
    if (filter == "positive")
      return transactions.filter((transaction) => transaction.amount > 0);

    if (filter == "negative")
      return transactions.filter((transaction) => transaction.amount < 0);

    return transactions;
  };

  const transactionsByMonth = () => {
    const transactionsWithParsedDate = filteredTransactions()
      .map((transaction: StatementItemProps) => {
        if (typeof transaction.date !== "string") return transaction;

        return Object.assign(transaction, {
          date: new Date(`${transaction.date}T00:00:00`),
        });
      })
      .sort(sortByDate);

    return Object.groupBy(
      transactionsWithParsedDate,
      (transaction: StatementItemProps) => {
        return (transaction.date as Date).toLocaleDateString("pt-BR", {
          month: "long",
        });
      }
    );
  };

  const filterIcon = () => {
    if (filter == "all") return <FaArrowRightArrowLeft />;

    if (filter == "positive") return <FaArrowRightLong />;

    return <FaArrowLeftLong />;
  };

  const placeholder = () => {
    return (
      <div className="section-placeholder">
        {[1, 2].map(() => (
          <div className="section-item-placeholder">
            <h6>
              <Placeholder animation="wave">
                <Placeholder xs={4} />
              </Placeholder>
            </h6>
            <div>
              <Placeholder animation="wave">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
            <div>
              <Placeholder animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <header>
        <h3>Extrato</h3>
        <div className="actions">
          <Button
            size="sm"
            icon={filterIcon()}
            rounded={true}
            onClick={toggleFilter}
            disabled={loading}
          />
          <Button
            size="sm"
            icon={
              sortDirection < 0 ? (
                <FaArrowDownWideShort />
              ) : (
                <FaArrowDownShortWide />
              )
            }
            rounded={true}
            onClick={() => setSortDirection((d) => d * -1)}
            disabled={loading}
          />
        </div>
      </header>

      {loading
        ? placeholder()
        : Object.entries(transactionsByMonth()).map((monthTransactions) => (
            <StatementSection
              month={monthTransactions[0]}
              items={monthTransactions[1] as StatementItemProps[]}
            />
          ))}
    </Container>
  );
};
