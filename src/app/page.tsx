'use client'
import Image from 'next/image';
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { Col, Container, Row } from "react-bootstrap";
import { BackgroundHome, FooterStyler, HeaderStyler } from "./@theme/custom/BackgroundHome";
import ButtonTCF from "./@core/components/ui/button/Button";
import { useState } from "react";
import ModalTCF from "./@core/components/ui/modal/Modal";
import CadastroForm from "./@core/components/forms/Cadastro";
import { themed } from './@theme/themed';


const Header: React.FC = () => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} className="p-0">
      <HeaderStyler>
        <header className="py-4 header_bg">
          <Container>
            <Row className="d-flex align-items-center justify-content-between">

              <Col xs={12} sm={12} md={5} lg={5} className="d-none d-md-flex align-items-center gap-5">
                <img src="/Logo.svg" alt="Descrição da imagem" className='header_img' />
                <div className="d-flex gap-4">
                  <label className='header_title'>Sobre</label>
                  <label className='header_title'>Serviços</label>
                </div>
              </Col>

              <Col xs={12} sm={12} className="d-flex d-md-none justify-content-between align-items-center w-100">
                <div className="dropdown">
                  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <GrMenu style={{ color: themed.themeColor.success, fontSize: '32px' }} />
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#sobre">Sobre</a></li>
                    <li><a className="dropdown-item" href="#servicos">Serviços</a></li>
                  </ul>
                </div>
                <img src="/Logo.svg" alt="Descrição da imagem" className='header_img' />
              </Col>

              <Col xs={12} sm={12} md={5} lg={5} className="d-none d-md-flex justify-content-end gap-3">
                <Link href="/home">
                  <ButtonTCF size={'sm'} label={'Abrir Minha Conta'} disabled={false} variant={"green"} />
                </Link>
                <ButtonTCF size={'sm'} label={'Já Tenho Conta'} disabled={false} variant={"green-outline"} />
              </Col>
            </Row>
          </Container>
        </header>
      </HeaderStyler>
    </Col>
  );
};



const Footer: React.FC = () => {
  return (
    <FooterStyler className='p-0'>
      <footer className="bg-black py-4 pb-5">
        <Container>
          <Row className="pt-4">

            <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
              <ul className="list-unstyled d-flex flex-column  align-items-md-start footer_ul">
                <li className="mb-2 footer_title">Serviços</li>
                <li className="mb-1">Conta corrente</li>
                <li className="mb-1">Conta PJ</li>
                <li className="mb-1">Cartão de crédito</li>
              </ul>
            </Col>


            <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
              <ul className="list-unstyled d-flex flex-column  align-items-md-start footer_ul">
                <li className="mb-2 footer_title">Contato</li>
                <li className="mb-1">0800 004 250 08</li>
                <li className="mb-1">teste@gmail.com</li>
                <li className="mb-1">ouvidoria@outlook.com</li>
              </ul>
            </Col>


            <Col xs={12} sm={4} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
              <span className='footer_title'>Desenvolvido com Amor</span>
              <img
                src="img_home/Logo Bytebank Branco.svg"
                alt="Descrição da imagem"

                className="mb-3 mt-3 footer_img"
              />
              <div className="d-flex gap-3 justify-content-center">
                <img
                  src="img_home/Instagram.svg"
                  alt="Descrição da imagem"
                  className='footer_img_logo'
                />
                <img
                  src="img_home/Whatsapp.svg"
                  alt="Descrição da imagem"
                  className='footer_img_logo'
                />
                <img
                  src="img_home/Youtube.svg"
                  alt="Descrição da imagem"
                  className='footer_img_logo'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </FooterStyler>
  );
};


const Main: React.FC = () => {
  const vantagens = [
    {
      icon: "img_home/Ícone Presente.svg",
      title: "Conta e cartão gratuitos",
      description: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
    },
    {
      icon: "img_home/Ícone Saque.svg",
      title: "Saques sem custo",
      description: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
    },
    {
      icon: "img_home/Ícone Pontos.svg",
      title: "Programa de pontos",
      description: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
    },
    {
      icon: "img_home/Ícone Dispositivos.svg",
      title: "Seguro Dispositivos",
      description: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
    },
  ];
  return (

    <main className="p-0">
      <BackgroundHome>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={5}
              lg={5}
              className="d-flex align-items-center mb-3 mt-5 mt-lg-0"
            >
              <h1>
                Experimente mais liberdade no controle da sua vida
                financeira. Crie sua conta com a gente!
              </h1>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} className="mb-3 mt-4">
              <Image
                className="main_image"
                src="img_home/Ilustração Banner.svg"
                width={0}
                height={0}
                alt="Logo do banco"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="d-flex align-items-center justify-content-center  d-md-none gap-3 mb-4">
              <Link href="/home">
                <ButtonTCF size={'sm'} label={'Abrir Minha Conta'} disabled={false} variant={"dark"} />
              </Link>
              <ButtonTCF size={'sm'} label={'Já Tenho Conta'} disabled={false} variant={"dark-outline"} />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="d-flex justify-content-center mb-4"
            >
              <h3 className='text-dark'>Vantagens do nosso banco:</h3>
            </Col>
          </Row>
          <Row>
            {vantagens.map((vantagem, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={3}
                lg={3}
                className="mb-5"
              >
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center"
                  >
                    <img
                      className='advantage_image'
                      src={vantagem.icon}
                      alt={vantagem.title}
                    />

                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center text-center"
                  >
                    <h4 className='advantage_title'>{vantagem.title}</h4>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center  text-center"
                  >
                    <span className="text-center advantage_text" >
                      {vantagem.description}
                    </span>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </BackgroundHome>


    </main>

  )
}


export default function Home() {
  const [isModalHomeOpen, setIsModalHomeOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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


  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />

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
    </Row>

  )
}
