"use client";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { BackgroundHome } from "./@core/components/Home/Main/MainContainer";
import { ContainerFHCustom } from "./@theme/custom/ContainerFH";
import { RowCentered } from "./@theme/custom/RowCenter";
import Header from "./@core/components/Home/Header";
import Footer from "./@core/components/Home/Footer";
import ButtonTCF from "./@core/components/ui/Button";
import { navigateToLoginPage } from "./actions";
import { H1BoldError, H3BoldError } from "./@theme/custom/FormStyles";

export default function Custom404() {
  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Col className="p-0">
        <BackgroundHome>
          <ContainerFHCustom>
            <RowCentered className="pt-4">
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <H1BoldError>Ops! Não encontramos a página... </H1BoldError>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <H3BoldError>
                  E olha que exploramos o universo procurando por ela! Que tal
                  voltar e tentar novamente?
                </H3BoldError>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                <ButtonTCF
                  variant={"orange"}
                  label={"Voltar ao Início"}
                  disabled={false}
                  size={"sm"}
                  onClick={() => navigateToLoginPage()}
                />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Image
                  src="Ilustracao404.svg"
                  width={470.1}
                  height={354}
                  alt="Logo Página Não Encontrada"
                />
              </Col>
            </RowCentered>
          </ContainerFHCustom>
        </BackgroundHome>
      </Col>
      <Footer />
    </Row>
  );
}
