"use client";

import { Row, Col } from "react-bootstrap";
import CardTCF from "../@core/components/ui/Card/Card";
import TransacaoForm from "../@core/components/forms/Transacao";

export default function Home() {
  const handleTransacaoForm = (formData: any) => {
    // TODO: function Transacao Form
    console.log(formData);
    // if (Object.values(formData).indexOf("") === -1) {
    //   setIsModalLoginOpen(false);
    //   navigate();
    // }
  };

  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <CardTCF
          title="Nova Transação"
          body={<TransacaoForm onSubmitAction={handleTransacaoForm} />}
        />
      </Col>
    </Row>
  );
}
