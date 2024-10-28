"use client";
import { Row } from "react-bootstrap";
import Footer from "./@core/components/Home/Footer";
import Header from "./@core/components/Home/Header";
import Main from "./@core/components/Home/Main";
import TransactionsHeader from "./@core/components/ui/header-transactions/TransactionsHeader";
import Menu from "./@core/components/ui/menu/Menu";

export default function Home() {
  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />
    </Row>
  );
}
