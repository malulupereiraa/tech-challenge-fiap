import { Col, Container, Row } from "react-bootstrap";
import { HeaderStyler } from "./HeaderContainer";
import ButtonTCF from "../../ui/button/Button";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { themed } from "@/app/@theme/themed";

export default function Header() {
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
}