"use client";

import { Row } from "react-bootstrap";
import Footer from "./@core/components/Home/Footer";
import Header from "./@core/components/Home/Header";
import Main from "./@core/components/Home/Main";

export default function Home() {
  const handleLoginForm = (formData: any) => {
    // TODO: function Login Form
    console.log(formData);
  };

  return (
    <Row style={{ overflowX: "hidden" }}>
      <Header />
      <Main />
      <Footer />
    </Row>
  );
}
