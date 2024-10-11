import styled from "styled-components";


const StyledMenu = styled.nav`
 a {
        color: ${(props) => props.theme.themeColor.dark};
        text-decoration: none; 
        
        &:visited {
            color: ${(props) => props.theme.themeColor.success};
        }

        &:active {
            color: ${(props) => props.theme.themeColor.secondary};
        }

        &:hover {
            font-weight: 700;
            color: ${(props) => props.theme.themeColor.secondary};
        }
    }

`;

export default StyledMenu;

