import styled from "styled-components";

const StyledMenuScreen = styled.div`
    a {
            color: ${(props) => props.theme.themeColor.primary};
            text-decoration: none; 
      
            &:hover {
                font-weight: 700;
                color: ${(props) => props.theme.themeColor.primary};
                border-bottom: 1px solid ${(props) =>
                  props.theme.themeColor.primary};
            }
        }

    .menuContainer {
        display: flex;
        justify-content: center;
        width: 180px;
        height: 100vh;
        text-align: center;
        padding: 5px;
        margir: 0;
        background-color: ${(props) => props.theme.themeColor.white};
        border-radius: 8px;

    }

    .itensMenu {
        display: flex;
        width: 100%;
        padding: 0 20px 0 20px;
        font-size: 16px;
        flex-direction: column;
        font-weght: 400;
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


    `;

export default StyledMenuScreen;
