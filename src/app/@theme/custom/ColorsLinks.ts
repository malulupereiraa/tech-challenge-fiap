import styled from "styled-components";

export const ColorsLinks = styled.nav`
 a {
        color: ${(props) => props.theme.themeColor.dark};
        text-decoration: none; /* Para remover sublinhado, se necessário */
        
        &:visited {
            color: red; /* Cor do link visitado */
        }

        &:disabled {
            color: ${(props) => props.theme.themeColor.secondary};
            pointer-events: none; /* Desabilita a interação */
        }

        &:hover {
            font-weight: 700;
            color: ${(props) => props.theme.themeColor.secondary};
        }
    }
`;
