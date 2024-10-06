/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Col, Spinner } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { ButtonProps } from "../../../props/button";

const ButtonTCF: React.FC<ButtonProps> = ({
  label,
  size,
  disabled,
  rounded,
  variant,
  type,
  icon,
  onClick,
}) => {
  return (
    <>
      <Button
        type={type ? type : undefined}
        variant={variant ? variant : "primary"}
        size={size}
        disabled={disabled}
        className={
          rounded && icon
            ? "rounded-circle w-icon"
            : rounded
            ? "rounded-circle"
            : icon
            ? "w-icon"
            : ""
        }
        onClick={onClick}
      >
        {icon ? icon : label}
      </Button>
    </>
  );
};
export default ButtonTCF;
