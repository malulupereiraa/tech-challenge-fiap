/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
// import ButtonTCF from "./@core/components/ui/button/Button";
// import ModalTCF from "./@core/components/ui/modal/Modal";
// import { BsTrash3Fill } from "react-icons/bs";
// import { ImPencil } from "react-icons/im";
// import { Col, Row } from "react-bootstrap";
// import CadastroForm from "./@core/components/forms/Cadastro";
import Header from './@core/components/ui/header/Header';
import Menu from './@core/components/ui/menu/Menu';

export default function Home() {

    return (
      <>
        <Header name='Joana da Silva Oliveira'/>
        <Menu/>
      </>  
    );
  















  //*********************************************************** */
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [isModalHomeOpen, setIsModalHomeOpen] = useState<boolean>(false);

  // const handleOpen = (type: string) => {
  //   switch (type) {
  //     case "delete":
  //       setIsModalOpen(true);
  //       break;
  //     default:
  //       setIsModalHomeOpen(true);
  //   }
  // };

  // const handleClose = (type: string) => {
  //   switch (type) {
  //     case "delete":
  //       setIsModalOpen(false);
  //       break;
  //     default:
  //       setIsModalHomeOpen(false);
  //   }
  // };

  // const handleCloseSubmit = async () => {
  //   // TODO: function delete
  //   setIsModalOpen(false);
  // };

  // const handleCadastroForm = (formData: any) => {
  //   // TODO: function Cadastro Form
  //   console.log(formData);
  // };

  // return (
  //   <>
  //     <Row>
  //       <Col xs={12} sm={12} md={12} lg={12}>
  //         <ButtonTCF size={"sm"} label={"Botão de Teste SM"} disabled={false} />
  //         <ButtonTCF
  //           size={undefined}
  //           label={"Botão de Teste MD"}
  //           disabled={false}
  //         />
  //         <ButtonTCF size={"lg"} label={"Botão de Teste LG"} disabled={false} />
  //         <ButtonTCF size={"lg"} label={"R"} disabled={false} rounded={true} />
  //         <ButtonTCF
  //           size={"lg"}
  //           icon={<BsTrash3Fill />}
  //           disabled={false}
  //           rounded={true}
  //         />
  //         <ButtonTCF
  //           size={"lg"}
  //           icon={<ImPencil />}
  //           disabled={false}
  //           rounded={true}
  //         />
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Abrir Minha Conta"}
  //           disabled={false}
  //           variant={"green"}
  //         />
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Já Tenho Conta"}
  //           disabled={false}
  //           variant={"green-outline"}
  //         />
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Voltar ao Início"}
  //           disabled={false}
  //           variant={"orange"}
  //         />
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Concluir Transação"}
  //           disabled={false}
  //           variant={"base"}
  //         />
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col xs={12} sm={12} md={12} lg={12}>
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Open Modal Delete"}
  //           disabled={false}
  //           variant={"base"}
  //           onClick={() => handleOpen("delete")}
  //         />
  //         <ButtonTCF
  //           size={"sm"}
  //           label={"Open Modal Home"}
  //           disabled={false}
  //           variant={"base"}
  //           onClick={() => handleOpen("home")}
  //         />
  //       </Col>
  //     </Row>
  //     <ModalTCF
  //       title="Delete Item"
  //       isOpen={isModalOpen}
  //       body={"Remover Item?"}
  //       hasFooter={true}
  //       center={true}
  //       sizeModal="md"
  //       type={"delete"}
  //       onCloseAction={handleClose}
  //       onSubmitAction={handleCloseSubmit}
  //     />
  //     <ModalTCF
  //       isOpen={isModalHomeOpen}
  //       body={<CadastroForm onSubmitAction={handleCadastroForm} />}
  //       hasFooter={false}
  //       center={true}
  //       sizeModal="md"
  //       type={"fullheight"}
  //       onCloseAction={handleClose}
  //       onSubmitAction={handleCloseSubmit}
  // //     />
  //   </>
  // );


}
