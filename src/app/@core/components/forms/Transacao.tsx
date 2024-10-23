/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { Col, Form, Row } from "react-bootstrap";
import { TransacaoFormProps } from "../../props/transacao-form";
import ButtonTCF from "../ui/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as formik from "formik";
import * as yup from "yup";
import {
  ErrorMessage,
  FormLabelStrong,
} from "../../../@theme/custom/FormStyles";
import { useEffect, useRef, useState } from "react";

const TransacaoForm: React.FC<TransacaoFormProps> = ({
  formValues,
  isEdit,
  isView,
  showDatePicker,
  onSubmitAction,
}) => {
  const { Formik } = formik;
  const [startDate, setStartDate] = useState(new Date());
  const initialValue = useRef<any>({});
  const [loading, setLoading] = useState(true);

  const schema = yup.object().shape({
    transaction: yup
      .string()
      .required("Por favor, escolha um tipo de transação!"),
    amount: yup
      .number()
      .positive("Deve ser um valor positivo!")
      .required("Por favor, insira um valor!")
      .min(1, "Olá! O valor tem que ser maior ou igual a 1!"),
    date: yup.date().required(),
  });

  useEffect(() => {
    setLoading(true);
    !isEdit && !isView
      ? ((initialValue.current = {
          transaction: "",
          amount: "",
          date: new Date(),
        }),
        setLoading(false))
      : ((initialValue.current = formValues), setStartDate(initialValue.current.date), setLoading(false));
  }, [isView, isEdit, formValues]);

  return (
    <>
      {!loading && (
        <>
          <Formik
            validationSchema={schema}
            onSubmit={() => console.log()}
            initialValues={initialValue.current}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              dirty,
              isValid,
            }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  onSubmitAction(e, values);
                }}
              >
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <FormLabelStrong>Tipo de Transação</FormLabelStrong>
                      <Form.Select
                        aria-label="Transacao"
                        name="transaction"
                        onChange={handleChange}
                        value={values.transaction}
                        disabled={isView}
                        isValid={touched.transaction && !errors.transaction}
                      >
                        <option>Selecione o Tipo de Transação</option>
                        <option value="1">TED</option>
                        <option value="2">TEF</option>
                        <option value="3">PIX</option>
                        <option value="4">Débito</option>
                      </Form.Select>
                      {errors.transaction && touched.transaction ? (
                        <ErrorMessage>
                          {errors.transaction as string}
                        </ErrorMessage>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput3"
                    >
                      <FormLabelStrong>Valor</FormLabelStrong>
                      <Form.Control
                        type="number"
                        placeholder="Informe o Valor"
                        name="amount"
                        step={0.1}
                        value={values.amount}
                        onChange={handleChange}
                        isValid={touched.amount && !errors.amount}
                        disabled={isView}
                      />
                      {errors.amount && touched.amount ? (
                        <ErrorMessage>{errors.amount as string}</ErrorMessage>
                      ) : null}
                    </Form.Group>
                  </Col>
                  {showDatePicker && (
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.Datepicker"
                      >
                        <FormLabelStrong>Data</FormLabelStrong>
                        <DatePicker name="date" selected={startDate} onChange={(date: any) => {
                          setStartDate(date)
                          values.date = date
                        }} />
                        {errors.date && touched.date ? (
                          <ErrorMessage>{errors.date as string}</ErrorMessage>
                        ) : null}
                      </Form.Group>
                    </Col>
                  )}
                </Row>
                <Row className="mt-3 text-end">
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div className="d-grid gap-2">
                      <ButtonTCF
                        variant={"base"}
                        label={!isView ? "Concluir Transação" : "OK"}
                        disabled={
                          !isEdit && !isView ? !(dirty && isValid) : false
                        }
                        size={"sm"}
                        type="submit"
                      />
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};
export default TransacaoForm;
