/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col, Container } from "react-bootstrap";
import CardTCF from "../@core/components/ui/Card";
import TransacaoForm from "../@core/components/forms/Transacao";
import { createTransaction } from "../@core/services/transaction_service";
import { useState } from "react";
import ToastTCF from "../@core/components/Toast";
import Menu from "../@core/components/ui/menu/Menu";
import TransactionsHeader from "../@core/components/ui/header-transactions/TransactionsHeader";
import HomeStatement from "./page.home-statement";
import StyledHome from "./styledHome";
import CardSaldoComponent from "../@core/components/ui/CardSaldo/CardSaldo";

export default function Home() {
  const transactions = [
    { transactionType: "deposit", amount: 1000, date: "2023-10-10" },
  ];

  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");

  const handleTransacaoForm = async (e: any, formData: any) => {
    // TODO: function Transacao Form
    await createTransaction(formData)
      .then(() => {
        setShowToast(true);
        setMessage("Transação Realizada com Sucesso");
        setIcon("success");
        setToastTitle("Sucesso!");
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((error: any) => {
        setShowToast(true);
        setMessage(error);
        setIcon("error");
        setToastTitle("Erro!");
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        console.error(error);
      });
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <CardSaldoComponent
            name="Cibele"
            balance={5000}
            showBalance={false}
          />
        </Col>
      </Row>
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
      <TransactionsHeader name="Joana" />
      <StyledHome>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Container>
            <Row>
              <Col xl={2} lg={6}>
                <Menu />
              </Col>
              <Col xl={8} lg={6}>
                <Row className="rowBalance">
                  <CardTCF
                    title="Nova Transação"
                    body={
                      <TransacaoForm
                        onSubmitAction={handleTransacaoForm}
                        showDatePicker={false}
                      />
                    }
                  />
                </Row>
                <Row className="rowCardTCF">
                  <CardTCF
                    title="Nova Transação"
                    body={
                      <TransacaoForm
                        onSubmitAction={handleTransacaoForm}
                        showDatePicker={false}
                      />
                    }
                  />
                </Row>
              </Col>
              <Col xl={2} lg={6}>
                <HomeStatement />
              </Col>
            </Row>
          </Container>
        </Col>
      </StyledHome>
    </>
  );
}
