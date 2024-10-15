import Container from "./Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Props from "@/app/@core/props/statement/statement-item";

export default ({
  transactionType,
  amount,
  date
}: Props) => {
  const amountSignClassName = `statement-item-${amount > 0 ? 'positive' : 'negative'}-amount`;
  const formattedAmount = amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const translatedTransactionType = transactionType == 'deposit' ? 'Depósito' : 'Transferência';

  const formattedDate = () => {
    const utcDate = new Date(`${date}T00:00:00`);
    const day = `00${utcDate.getDate().toString()}`.slice(-2);
    const month = `00${utcDate.getMonth() + 1}`.slice(-2);

    return `${day}/${month}`;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h6 className="statement-item-title">
            {translatedTransactionType}
          </h6>
          <span className={`statement-item-amount ${amountSignClassName}`}>
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
