import styled from "styled-components";

const StyledMenuMobile = styled.div`
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
        text-align: center;
        background-color: ${(props) => props.theme.themeColor.white};
        border-radius: 8px;
        width: 180px;
         height: 230px;
         align-items: center;
         padding-top: 0;
         position: absolute;
         top: 0;
         left: 0;
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



        .row {
            position: relative;
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
    
    `;

export default StyledMenuMobile;
