/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col } from "react-bootstrap";
import CardTCF from "../@core/components/ui/Card";
import TransacaoForm from "../@core/components/forms/Transacao";
import { createTransaction } from "../@core/services/transaction_service";
import { useEffect, useState } from "react";
import ToastTCF from "../@core/components/Toast";
import HomeStatement from "./page.home-statement";
import CardSaldoComponent from "../@core/components/ui/CardSaldo/CardSaldo";

export default function Home() {

  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  const [reloadStatement, setReloadStatement] = useState<boolean>(false);

  const handleTransacaoForm = async (e: any, formData: any) => {
    await createTransaction(formData)
      .then(() => {
        setShowToast(true);
        setMessage("Transação Realizada com Sucesso");
        setIcon("success");
        setToastTitle("Sucesso!");
        setReloadStatement(true);
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

  useEffect(() => {
    if(reloadStatement === true)
      setReloadStatement(false);
  }, [reloadStatement]);

  return (
    <>
      <ToastTCF
        icon={icon}
        message={message}
        title={toastTitle}
        showToast={valueToast}
      />
      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
        <Row className="rowBalance">
          <Col xs={12} sm={12} md={12} lg={12}>
            <CardSaldoComponent
              name="CibelHermelindae"
              balance={5000}
              showBalance={false}
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
          <Col xs={12} sm={12} md={12} lg={12}>
            <HomeStatement reload={reloadStatement} />
          </Col>
        </Row>
      </Col>
    </>
  );
}
