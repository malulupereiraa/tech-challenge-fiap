'use client'
import ButtonTCF from "./@core/components/button/Button";
import { themed } from "./@theme/themed";
import Image from 'next/image';
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { Col, Container, Row } from "react-bootstrap";
import { BackgroundHome } from "./@theme/custom/BackgroundHome";


const Header: React.FC = () => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} className="p-0">
      <header style={{ backgroundColor: themed.themeColor.dark }} className="py-4">
        <Container>
          <Row className="d-flex align-items-center justify-content-between">

            <Col xs={12} sm={12} md={5} lg={5} className="d-none d-md-flex align-items-center gap-5">
              <Image src="/Logo.svg" alt="Descrição da imagem" width={145.69} height={32} />
              <div className="d-flex gap-4">
                <label style={{ ...themed.themeFonts.headerSemibold, color: themed.themeColor.success }}>Sobre</label>
                <label style={{ ...themed.themeFonts.headerSemibold, color: themed.themeColor.success }}>Serviços</label>
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
              <Image src="/Logo.svg" alt="Descrição da imagem" width={145.69} height={32} />
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
    </Col>
  );
};



const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4 pb-5">
      <Container>
        <Row className="pt-4">

          <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <ul className="list-unstyled d-flex flex-column  align-items-md-start" style={{ color: themed.themeColor.white, fontSize: themed.font_size.fontsizemedium }}>
              <li className="mb-2" style={{ ...themed.themeFonts.headerSemibold }}>Serviços</li>
              <li className="mb-1">Conta corrente</li>
              <li className="mb-1">Conta PJ</li>
              <li className="mb-1">Cartão de crédito</li>
            </ul>
          </Col>


          <Col xs={12} sm={4} md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <ul className="list-unstyled d-flex flex-column  align-items-md-start" style={{ color: themed.themeColor.white, fontSize: themed.font_size.fontsizemedium }}>
              <li className="mb-2" style={{ ...themed.themeFonts.headerSemibold }}>Contato</li>
              <li className="mb-1">0800 004 250 08</li>
              <li className="mb-1">teste@gmail.com</li>
              <li className="mb-1">ouvidoria@outlook.com</li>
            </ul>
          </Col>


          <Col xs={12} sm={4} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
            <span style={{ ...themed.themeFonts.headerSemibold, color: themed.themeColor.white, fontSize: themed.font_size.fontsizemedium }}>Desenvolvido com Amor</span>
            <Image
              src="img_home/Logo Bytebank Branco.svg"
              alt="Descrição da imagem"
              width={145.69}
              height={32}
              className="mb-3 mt-3"
            />
            <div className="d-flex gap-3 justify-content-center">
              <Image
                src="img_home/Instagram.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
                priority
                style={{ objectFit: 'contain' }} 
              />
              <Image
                src="img_home/Whatsapp.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
                priority
                style={{ objectFit: 'contain' }} 
              />
              <Image
                src="img_home/Youtube.svg"
                alt="Descrição da imagem"
                width={29}
                height={29}
                priority
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
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
              className="d-flex align-items-center mb-3"
            >
              <h1 style={{ ...themed.themeFonts.textHomeMain }}>
                Experimente mais liberdade no controle da sua vida
                financeira. Crie sua conta com a gente!
              </h1>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} className="mb-3 mt-4">
              <Image
                src="img_home/Ilustração Banner.svg"
                width={0}
                height={0}
                alt="Logo do banco"
                style={{ width: "100%", height: "100%" }}
              />
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
              <h3 style={{ ...themed.themeFonts.headerSemibold, color: themed.themeColor.dark, fontSize: themed.font_size.fontsizexlarge }}>Vantagens do nosso banco:</h3>
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
                    <Image
                      src={vantagem.icon}
                      alt={vantagem.title}
                      width={60}
                      height={50}
                      priority
                      layout="intrinsic"
                    />

                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center  text-center"
                  >
                    <h4 style={{ color: themed.themeColor.success }}>{vantagem.title}</h4>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    className="d-flex justify-content-center  text-center"
                  >
                    <span className="text-center" style={{ color: themed.themeColor.grey }}>
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
  return (


    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />
    </Row>

  );
}
