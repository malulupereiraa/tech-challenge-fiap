'use client'

import StyledMenu from '@/app/@theme/custom/StyledMenu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from "react";
import AsideMenu from './AsideMenu';


export default function MenuButton() {
    const [isClosed, setisClosed] = useState(true);
    
    const toggleMenu = () => {
        setisClosed(!isClosed);
    };

    return (
        <StyledMenu>
            <button  className="iconMenuButton openButton" 
            onClick={toggleMenu}> {isClosed ? <MenuOutlinedIcon/> : <AsideMenu />}</button>
        </StyledMenu>
    )
}