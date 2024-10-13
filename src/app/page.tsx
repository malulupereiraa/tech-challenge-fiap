/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import ButtonTCF from "./@core/components/ui/button/Button";
import ModalTCF from "./@core/components/ui/modal/Modal";
import { BsTrash3Fill } from "react-icons/bs";
import { ImPencil } from "react-icons/im";
import { Col, Row } from "react-bootstrap";
import CadastroForm from "./@core/components/forms/Cadastro";
import CustomInput from "./@core/components/ui/input/Input";
import { formatCurrency } from "../app/@core/utils/masks"
import SelectComponent from "./@core/components/ui/select/Select";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalHomeOpen, setIsModalHomeOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(formatCurrency("000"));
  const [valueSelect, setValueSelect] = useState<string>("Selecione o tipo de transação");
  const [value2, setValue2] = useState<string>((""));
  const [valueSelect2, setValueSelect2] = useState<string>("Escolha a opção desejada");

  const handleOpen = (type: string) => {
    switch (type) {
      case "delete":
        setIsModalOpen(true);
        break;
      default:
        setIsModalHomeOpen(true);
    }
  };

  const handleClose = (type: string) => {
    switch (type) {
      case "delete":
        setIsModalOpen(false);
        break;
      default:
        setIsModalHomeOpen(false);
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

  const handleInputValue = (value: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatCurrency(value.target.value));
  };

   const handleInputValue2 = (value: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(value.target.value);
  };

  interface Transacoes {
    label: string;
    value: string;
  }

  const optins: Transacoes[] = [
    { label: 'Transferência', value: 'tef' },
    { label: 'Saque', value: 'saque' },
    { label: 'Pagamento', value: 'pagamento'},
  ]

  const optins2: Transacoes[] = [
    { label: 'Extrato', value: 'tef' },
    { label: 'Pix', value: 'saque' },
    { label: 'Cartão de crédito', value: 'pagamento'},
  ]

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
        hasFooter={false}
        center={true}
        sizeModal="md"
        type={"fullheight"}
        onCloseAction={handleClose}
        onSubmitAction={handleCloseSubmit}
      />
      <Col xs={6} sm={6} md={6} lg={6} className="m-1">        
        <CustomInput type="currency" value={value} onChange={handleInputValue} width={"250px"}/>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} className="m-1">        
        <CustomInput type="text" value={value2} onChange={handleInputValue2} width={"250px"} placeholder="Seu nome"/>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} className="m-1">        
        <SelectComponent<Transacoes> options={optins} optionSelected="Selecione o tipo de transação" labelKey="label"
          valueKey="value" onChange={(value) => setValueSelect(value)} value={valueSelect} width="355px" />
      </Col>
       <Col xs={6} sm={6} md={6} lg={6} className="m-1">        
        <SelectComponent<Transacoes> options={optins2} optionSelected="Escolha a opção desejada" labelKey="label"
          valueKey="value" onChange={(value) => setValueSelect2(value)} value={valueSelect2} width="355px" />
      </Col>
    </>
  );
}
