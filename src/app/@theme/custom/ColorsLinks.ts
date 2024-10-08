import styled from "styled-components";
import { themed } from "../themed";

export const ColorsLinks = styled.a`
    &:active {
        color:  ${(props) => props.theme.themeColor.secondary};
    }

    &:visited {
        color:  ${(props) => props.theme.themeColor.succes};
    }

    &:link {
        color:  ${(props) => props.theme.themeColor.dark};
    }

    &:hover{
    font-weight: 700;
    color:  ${(props) => props.theme.themeColor.succes};
}
`;
