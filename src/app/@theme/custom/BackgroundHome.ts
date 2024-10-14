import styled from "styled-components";


export const BackgroundHome = styled.div`
  background: linear-gradient(180deg, #004D61 0%, #FFFFFF 100%);
  h1 {
    font-size: ${({ theme }) => theme.themeFonts.textHomeMain.fontSize};
    fontFamily: ${({ theme }) => theme.themeFonts.textHomeMain.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.textHomeMain.lineHeight}; 
    text-align: ${({ theme }) => theme.themeFonts.textHomeMain.textAlign};
  }


  .main_image {
    width: 100%;
    height: 100%;
  }

  .advantage_image {
      width: 60px;
      height: 50px;
  }

  .section_title {
      fontFamily: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
      fontWeight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
      lineHeight: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight};
      color: ${({ theme }) => theme.themeColor.dark};
      fontSize: ${({ theme }) => theme.font_size.fontsizexlarge};
  }

  .advantage_title {
    color: ${({ theme }) => theme.themeColor.success};
  }
  
  .advantage_text {
      color: ${({ theme }) => theme.themeColor.grey};
  }

   `;

export const FooterStyler = styled.div` 
  .footer_title {
    font-family: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
    font-size: ${({ theme }) => theme.themeFonts.headerSemibold.fontSize};
    font-weight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight}; 
    color: ${({ theme }) => theme.themeColor.white};
   }

   .footer_ul {
    color: ${({ theme }) => theme.themeColor.white};
    fontSize: ${({ theme }) => theme.font_size.fontsizemedium};
   }

   .footer_img_logo {
       width: 29px;
      height: 29px;
   }

   .footer_img {
            width:145.69px;
      height: 32;
   }
`


export const HeaderStyler = styled.div` 

 .header_bg{
      background: ${({ theme }) => theme.themeColor.dark};
  }

  .header_title {
    font-family: ${({ theme }) => theme.themeFonts.headerSemibold.fontFamily};
    font-size: ${({ theme }) => theme.themeFonts.headerSemibold.fontSize};
    font-weight: ${({ theme }) => theme.themeFonts.headerSemibold.fontWeight};
    line-height: ${({ theme }) => theme.themeFonts.headerSemibold.lineHeight}; 
    color: ${({ theme }) => theme.themeColor.success};
   }

   .header_img {
      width: 145.69px;
      height: 32px;
   }
`