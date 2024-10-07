import { Col, Form, Row } from "react-bootstrap";
import Image from "next/image";
import { CadastroFormProps } from "../../props/cadastro-form";
import ButtonTCF from "../ui/button/Button";
import * as formik from "formik";
import * as yup from "yup";
import { RowCentered } from "../../../@theme/custom/RowCenter";

const CadastroForm: React.FC<CadastroFormProps> = ({ onSubmitAction }) => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Por favor, digite o seu nome!"),
    email: yup
      .string()
      .email("Por favor, digite um e-mail válido!")
      .required("Por favor, digite seu e-mail"),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Os Termos devem ser aceitos."),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          password: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              onSubmitAction(values);
            }}
          >
            <RowCentered className="mb-5">
              <Col xs={12} sm={12} md={12} lg={12}>
                <Image
                  src="data:image/png;base64,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"
                  width={135}
                  height={135}
                  alt="Picture of the author"
                />
              </Col>
            </RowCentered>
            <Row className="mb-1">
              <Col xs={12} sm={12} md={12} lg={12}>
                <p>Preencha os campos abaixo para criar sua conta corrente!</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu nome completo"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
              </Col>
            </Row>
            <RowCentered>
              <Col xs={12} sm={12} md={12} lg={12}>
                <ButtonTCF
                  variant={"orange"}
                  label={"Criar Conta"}
                  disabled={false}
                  size={"sm"}
                  type="submit"
                />
              </Col>
            </RowCentered>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default CadastroForm;
