    import styled from "styled-components";


const StyledMenu = styled.div`
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
                border-bottom: 1px solid ${(props) => props.theme.themeColor.secondary};
            }
        }


    .menuContainer {
        display: flex;
        justify-content: center;
        width: 180px;
        height: 100vh;
        text-align: center;
        padding: 5px 0px 0 15px;
        margir: 0;
        background-color: ${(props) => props.theme.themeColor.white};

    }

    .itensMenu {
        display: flex;
        font-size: 16px;
        flex-direction: column;
    }


    .itensMenu a {
        text-decoration: none;
        padding: 10px 0;
        margin: 0 2%;

    }

    .openButton{
            background-color: ${(props) => props.theme.themeColor.primary};
            color: ${(props) => props.theme.themeColor.secondary};
        }



 @media (min-width: 361px) and (max-width: 720px) {
        .menuContainer {
            align-items: center;
            padding: 5px 20px 0 20px;
            width: 100%;
            min-height: 60px;
            max-height: 120px;
            text-align: center;
            background-color: ${(props) => props.theme.themeColor.backgroundBase};
        }

        .itensMenu {
            flex-direction: row;
            font-size: 16px;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;

        }

        .itensMenuBorder {
            border-bottom: 0;
        }

    }
 @media(max-width: 360px) {

        .row {
            position: relative; /* Contêiner pai deve ter position: relative */
        }

        .menuContainer {
            width: 180px;
            height: 230px;
            align-items: center;
            justify-content: center;
            padding-top: 0;
            
            position: absolute;
            top: 0;
            left: 0;
        }
        
        .openButton{
            background-color: ${(props) => props.theme.themeColor.primary};
            color: ${(props) => props.theme.themeColor.secondary};
        }

        .iconMenuButton {
            cursor: pointer;
            border: 0;
            padding-left: 15px;
            width: 40px;
            height: 40px;
        }
    }
        .iconCloseButton {
            padding: 0;
            width: 25px;
            height: 25px;
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: ${(props) => props.theme.themeColor.white};
            color: ${(props) => props.theme.themeColor.secondary};
        }
    }
    `;

export default StyledMenu;

