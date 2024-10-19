import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardContentCustom = styled(Card)`
  background-color: ${(props) => props.theme.themeColor.darkGrey};
  border: none;
  position: relative;
  img.top-right {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 4%;
    z-index: 0;
  }
  img.bottom-left {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 4%;
    z-index: 0;
  }
`;

export const CardContentBodyCustom = styled(Card.Body)`
  z-index: 1;
`;
