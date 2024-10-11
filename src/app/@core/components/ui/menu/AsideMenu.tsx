import { themed } from '../../../../@theme/themed';
import Link from "next/link";
import styleMenu from '../../../../@theme/styles/Menu.module.css';
import { useState } from "react";
import useWindowSize from '../../hooks/WindowsSize';
import CloseIcon from '@mui/icons-material/Close';
import StyledMenu from '@/app/@theme/custom/StyledMenu';



export default function AsideMenu() {


    return (
        <div className={styleMenu.menuContainer} style={{ backgroundColor: themed.themeColor.white, color: themed.themeColor.dark }} >
                <StyledMenu className={styleMenu.itensMenu}>
                    <Link href="/" className={styleMenu.itensMenuBorder} >Início</Link>
                    <Link href="/" className={styleMenu.itensMenuBorder}>Transferências</Link>
                    <Link href="/" className={styleMenu.itensMenuBorder} >Investimentos</Link>
                    <Link href="https://www.udemy.com/">Outros serviços</Link>
                </StyledMenu>
        </div>
    )
}

