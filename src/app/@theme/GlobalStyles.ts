"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.themeColor.backgroundBase};
    font-family: ${(props) => props.theme.themeFonts.inter};
  }

  .btn {
    font-size: ${(props) => props.theme.themeFonts.btn.fontSize};
    /* font-weight: ${(props) => props.theme.themeFonts.btn.fontWeight};
    line-height: ${(props) => props.theme.themeFonts.btn.lineHeight}; */
    text-align: ${(props) => props.theme.themeFonts.btn.textAlign};
  }

  .btn:hover {
    background-color: ${(props) => props.theme.themeColor.dark};
    color: ${(props) => props.theme.themeColor.white};
    border: 1px solid ${(props) => props.theme.themeColor.white};      
  }

  .btn-green {
      background-color: ${(props) => props.theme.themeColor.success};
      color: ${(props) => props.theme.themeColor.white};
  }
  

  .btn-green-outline {
      background-color: transparent;
      color: ${(props) => props.theme.themeColor.success};
      border: 1px solid ${(props) => props.theme.themeColor.success};     
  }

  .btn-orange {
      background-color: ${(props) => props.theme.themeColor.secondary};
      color: ${(props) => props.theme.themeColor.white};
    }

  .btn-base {
      background-color: ${(props) => props.theme.themeColor.primary};
      color: ${(props) => props.theme.themeColor.white};
  }

  .btn-dark {
      background-color: ${(props) => props.theme.themeColor.dark};
      color: ${(props) => props.theme.themeColor.white};
  }

  .btn-dark-outline {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.themeColor.dark};
      color: ${(props) => props.theme.themeColor.dark};
  }

  .w-icon {
    width: 40px;
    height: 40px;
    padding: 0px;
  }

  `;

export default GlobalStyles;
