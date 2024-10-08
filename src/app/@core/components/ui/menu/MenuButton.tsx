'use client'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";
import { themed } from '../../../../@theme/themed';
import AsideMenu from './AsideMenu';
import styleMenu from '../../../../@theme/styles/Menu.module.css';





export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <>
            <button style={{ backgroundColor: themed.themeColor.primary, color: themed.themeColor.secondary }}
                className={styleMenu.iconButton} onClick={toggleMenu}><MenuOutlinedIcon />{isOpen ? <AsideMenu /> : <></>}</button>
        </>

    )
}