// Form.Label
import Link from "next/link";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormLabelStrong = styled(Form.Label)`
  font-weight: bold;
`;

export const FormCheckCustom = styled(Form.Check)`
  /* font-weight: bold; */
  label {
    font-size: 13px;
  }
  .form-check-input {
    border-color: ${(props) => props.theme.themeColor.success};
  }
  .form-check-input:checked {
    background-color: ${(props) => props.theme.themeColor.success};
    border-color: ${(props) => props.theme.themeColor.success};
  }
`;

export const PStrong = styled.p`
  font-weight: bold;
`;

export const LinkCustom = styled(Link)`
  color: ${(props) => props.theme.themeColor.success};
`;
