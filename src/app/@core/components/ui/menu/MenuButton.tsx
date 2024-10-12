'use client'

import StyledMenu from '@/app/@theme/custom/StyledMenu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";
import { themed } from '../../../../@theme/themed';
import AsideMenu from './AsideMenu';





export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <StyledMenu>
            <button  className="iconMenuButton openButton" onClick={toggleMenu}><MenuOutlinedIcon />{isOpen ? <AsideMenu /> : <></>}</button>
        </StyledMenu>

    )
}