import { themed } from '../../../../@theme/themed';
import Link from "next/link";
import styleMenu from '../../../../@theme/styles/Menu.module.css';
import { useState } from "react";
import useWindowSize from '../../hooks/WindowsSize';
import CloseIcon from '@mui/icons-material/Close';
import { ColorsLinks } from '@/app/@theme/custom/ColorsLinks';


export default function AsideMenu() {


    return (
        <div className={styleMenu.menuContainer} style={{ backgroundColor: themed.themeColor.grey, color: themed.themeColor.dark }} >
            <nav className={styleMenu.itensMenu}>
                
            <ColorsLinks><Link href="/" className={styleMenu.itensMenuBorder}>Início</Link></ColorsLinks>
                    <Link href="/" className={styleMenu.itensMenuBorder}>Transferências</Link>
                    <Link href="/" className={styleMenu.itensMenuBorder} >Investimentos</Link>
                    <Link href="/">Outros serviços</Link>
                
            </nav>
        </div>
    )
}

