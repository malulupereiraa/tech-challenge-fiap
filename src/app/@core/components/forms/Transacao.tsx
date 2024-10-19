import { Col, Form, Row } from "react-bootstrap";
import { TransacaoFormProps } from "../../props/transacao-form";
import ButtonTCF from "../ui/Button/Button";
import * as formik from "formik";
import * as yup from "yup";
import { RowCentered } from "../../../@theme/custom/RowCenter";
import { FormLabelStrong } from "../../../@theme/custom/FormStyles";

const TransacaoForm: React.FC<TransacaoFormProps> = ({ onSubmitAction }) => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    transacao: yup.string().required(),
    valor: yup.number().required(),
    date: yup.date().required(),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          transacao: "",
          valor: "",
          date: "",
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
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <FormLabelStrong>Tipo de Transação</FormLabelStrong>
                  <Form.Control
                    type="transacao"
                    placeholder="Informa a Transação"
                    name="transacao"
                    value={values.transacao}
                    onChange={handleChange}
                    isValid={touched.transacao && !errors.transacao}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <FormLabelStrong>Valor</FormLabelStrong>
                  <Form.Control
                    type="valor"
                    placeholder="Informe o Valor"
                    name="valor"
                    value={values.valor}
                    onChange={handleChange}
                    isValid={touched.valor && !errors.valor}
                  />
                </Form.Group>
              </Col>
            </Row>
            <RowCentered>
              <Col xs={12} sm={12} md={12} lg={12}>
                <ButtonTCF
                  variant={"green"}
                  label={"Acessar"}
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
export default TransacaoForm;
