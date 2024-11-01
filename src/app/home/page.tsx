/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col, Container } from "react-bootstrap";
import CardTCF from "../@core/components/ui/Card/Card";
import TransacaoForm from "../@core/components/forms/Transacao";
import { createTransaction } from "../@core/services/transaction_service";
import { useState } from "react";
import ToastTCF from "../@core/components/Toast";
import Menu from "../@core/components/ui/menu/Menu";
import TransactionsHeader from "../@core/components/ui/header-transactions/TransactionsHeader";
import HomeStatement from "./page.home-statement";
import StyledHome from "./styledHome";

export default function Home() {
  const transactions = [
    { transactionType: "deposit", amount: 1000, date: "2023-10-10" },
  ];

  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");

  const handleTransacaoForm = async (e: any, formData: any) => {
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
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
      <TransactionsHeader name="Joana" />
      <Row>
        <div className="col-xs-12 col-sm-12 col-md-3 col-xl-2">
          <div className="d-flex flex-column align-items-center align-items-sm-start">
            <Menu />
          </div>
        </div>
        <div className="col py-3">
          <StyledHome>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <Row className="rowBalance">
                <Col xs={12} sm={12} md={12} lg={12}>
                      <CardTCF
                        title="Nova Transação"
                        body={
                          <TransacaoForm
                            onSubmitAction={handleTransacaoForm}
                            showDatePicker={false}
                          />
                        }
                      />
                </Col>               
              </Row>
              <Row className="rowCardTCF">
                <Col xs={12} sm={12} md={12} lg={12}>
                      <CardTCF
                        title="Nova Transação"
                        body={
                          <TransacaoForm
                            onSubmitAction={handleTransacaoForm}
                            showDatePicker={false}
                          />
                        }
                      />
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Row>
                <Col>
                  <HomeStatement />
                </Col>
              </Row>
            </Col>
          </StyledHome>
        </div>
      </Row>
    </>
  );
}
