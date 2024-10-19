/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import ButtonTCF from "./@core/components/ui/Button/Button";
import ModalTCF from "./@core/components/ui/Modal/Modal";
import { BsTrash3Fill } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { Col, Row } from "react-bootstrap";
import CadastroForm from "./@core/components/forms/Cadastro";
import LoginForm from "./@core/components/forms/Login";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalHomeOpen, setIsModalHomeOpen] = useState<boolean>(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);

  const handleOpen = (type: string) => {
    switch (type) {
      case "delete":
        setIsModalOpen(true);
        break;
      case "home":
        setIsModalHomeOpen(true);
        break;
      default:
        setIsModalLoginOpen(true);
    }
  };

  const handleClose = (type: string) => {
    switch (type) {
      case "delete":
        setIsModalOpen(false);
        break;
      case "home":
        setIsModalHomeOpen(false);
        break;
      default:
        setIsModalLoginOpen(false);
    }
  };

  const handleCloseSubmit = async () => {
    // TODO: function delete
    setIsModalOpen(false);
  };

  const handleCadastroForm = (formData: any) => {
    // TODO: function Cadastro Form
    console.log(formData);
  };

  const handleLoginForm = (formData: any) => {
    // TODO: function Login Form
    console.log(formData);
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <ButtonTCF size={"sm"} label={"Botão de Teste SM"} disabled={false} />
          <ButtonTCF
            size={undefined}
            label={"Botão de Teste MD"}
            disabled={false}
          />
          <ButtonTCF size={"lg"} label={"Botão de Teste LG"} disabled={false} />
          <ButtonTCF size={"lg"} label={"R"} disabled={false} rounded={true} />
          <ButtonTCF
            size={"lg"}
            icon={<BsTrash3Fill />}
            disabled={false}
            rounded={true}
          />
          <ButtonTCF
            size={"lg"}
            icon={<ImPencil />}
            disabled={false}
            rounded={true}
          />
          <ButtonTCF
            size={"sm"}
            label={"Abrir Minha Conta"}
            disabled={false}
            variant={"green"}
          />
          <ButtonTCF
            size={"sm"}
            label={"Já Tenho Conta"}
            disabled={false}
            variant={"green-outline"}
          />
          <ButtonTCF
            size={"sm"}
            label={"Voltar ao Início"}
            disabled={false}
            variant={"orange"}
          />
          <ButtonTCF
            size={"sm"}
            label={"Concluir Transação"}
            disabled={false}
            variant={"base"}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <ButtonTCF
            size={"sm"}
            label={"Open Modal Delete"}
            disabled={false}
            variant={"base"}
            onClick={() => handleOpen("delete")}
          />
          <ButtonTCF
            size={"sm"}
            label={"Open Modal Home"}
            disabled={false}
            variant={"base"}
            onClick={() => handleOpen("home")}
          />
          <ButtonTCF
            size={"sm"}
            label={"Open Modal Login"}
            disabled={false}
            variant={"base"}
            onClick={() => handleOpen("login")}
          />
        </Col>
      </Row>
      <ModalTCF
        title="Delete Item"
        isOpen={isModalOpen}
        body={"Remover Item?"}
        hasFooter={true}
        center={true}
        sizeModal="md"
        type={"delete"}
        onCloseAction={handleClose}
        onSubmitAction={handleCloseSubmit}
      />
      <ModalTCF
        isOpen={isModalHomeOpen}
        body={<CadastroForm onSubmitAction={handleCadastroForm} />}
        title={' '}
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"fullheight"}
        onCloseAction={handleClose}
        onSubmitAction={handleCloseSubmit}
      />
      <ModalTCF
        isOpen={isModalLoginOpen}
        body={<LoginForm onSubmitAction={handleLoginForm} />}
        title={' '}
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"fullheight"}
        onCloseAction={handleClose}
        onSubmitAction={handleCloseSubmit}
      />
    </>
  );
}
