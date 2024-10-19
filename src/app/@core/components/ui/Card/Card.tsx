/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "react-bootstrap";
import {
  CardContentCustom,
  CardContentBodyCustom,
} from "../../../../@theme/custom/CardTCF";
import { CardProps } from "../../../props/card";

const CardTCF: React.FC<CardProps> = ({ title }) => {
  return (
    <>
      <CardContentCustom>
        <img
          src="/pixelstopright.svg"
          className="top-right"
          alt="Border Top Right"
        />
        <img
          src="/pixelsbottomleft.svg"
          className="bottom-left"
          alt="Border Bottom Left"
        />
        <CardContentBodyCustom>
          <Card.Title>{title}</Card.Title>
          This is some text within a card body. This is some text within a card
          body. This is some text within a card body. This is some text within a
          card body. This is some text within a card body. This is some text
          within a card body. This is some text within a card body. This is some
          text within a card body. This is some text within a card body. This is
          some text within a card body.
        </CardContentBodyCustom>
      </CardContentCustom>
    </>
  );
};
export default CardTCF;
