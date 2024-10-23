/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Row, Col } from "react-bootstrap";
import CardTCF from "../@core/components/ui/Card/Card";
import TransacaoForm from "../@core/components/forms/Transacao";
import { createTransaction } from "../@core/services/transaction_service";
import { useState } from "react";
import ToastTCF from "../@core/components/Toast";

export default function Home() {
  const [valueToast, setShowToast] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [icon, setIcon] = useState<any>("");
  const [toastTitle, setToastTitle] = useState<string>("");
  
  const handleTransacaoForm = async (e: any, formData: any) => {
    // TODO: function Transacao Form
    console.log(e);
    console.log(formData);
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
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <CardTCF
            title="Nova Transação"
            body={<TransacaoForm onSubmitAction={handleTransacaoForm} showDatePicker={false} />}
          />
        </Col>
      </Row>
    </>
  );
}
