import StyledMenu from '@/app/@theme/custom/StyledMenu';
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';



export default function AsideMenu() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <StyledMenu className="row no-gutters menuContainer">
            
            <div className="menuContainer">
            
                <nav className=" itensMenu">
                    <Link href="/" className="itensMenuBorder">Início</Link>
                    <Link href="/" className=" itensMenuBorder">Transferências</Link>
                    <Link href="/" className=" itensMenuBorder">Investimentos</Link>
                    <Link href="https://www.udemy.com/">Outros serviços</Link>
                </nav>
                <button
                    className="iconButton" onClick={toggleMenu}><CloseIcon />{isOpen ? <AsideMenu /> : <></>}</button>
            </div>

        </StyledMenu>

    )
}

