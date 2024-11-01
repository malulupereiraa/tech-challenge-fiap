import Container from "./Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Props from "@/app/@core/props/statement/statement-item";

export default ({
  transactionType,
  amount,
  date
}: Props) => {
  const formattedAmount = amount.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  const translatedTransactionType = transactionType == "deposit" ? "Depósito" : "Transferência";

  const formattedDate = () => {
    const parsedDate = typeof (date) === 'number' ? (new Date(date)) : date as Date;
    const day = `00${parsedDate.getDate().toString()}`.slice(-2);
    const month = `00${parsedDate.getMonth() + 1}`.slice(-2);

    return `${day}/${month}`;
  };

  return (
    <Container className="statement-item">
      <Row>
        <Col>
          <h6 className="statement-item-title">
            {translatedTransactionType}
          </h6>
          <span className="statement-item-amount">
            {formattedAmount}
          </span>
        </Col>
        <Col xs={3} className="col statement-item-date">
          {formattedDate()}
        </Col>
      </Row>
    </Container>
  );
};
