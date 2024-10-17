'use client'


import { Row } from "react-bootstrap";
import Footer from "./@core/components/Home/Footer";
import Header from "./@core/components/Home/Header";
import Main from "./@core/components/Home/Main";

export default function Home() {

  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />

    </Row>

  )
}
