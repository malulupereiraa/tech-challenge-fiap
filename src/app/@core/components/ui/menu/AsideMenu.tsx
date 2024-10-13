import StyledMenu from '@/app/@theme/custom/StyledMenu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { useState } from 'react';
import useWindowSize from '../../hooks/WindowsSize';



export default function AsideMenu() {

    const { width } = useWindowSize();

    const VisibleCloseButton = () => {

        return (

            <>
                {width <= 360 ? (
                    <button className="iconMenuButton iconCloseButton" onClick={toggleMenu}>
                        <CloseIcon />{isOpen ? <AsideMenu /> : <></>}</button>) :
                    (<></>)
                }
            </>
        )
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (


        <StyledMenu className="row no-gutters menuContainer">
            <div className="no-gutters menuContainer">
                <nav className=" itensMenu">
                    <VisibleCloseButton />
                    <Link href="/" className="itensMenuBorder">Início</Link>
                    <Link href="/" className=" itensMenuBorder">Transferências</Link>
                    <Link href="/" className=" itensMenuBorder">Investimentos</Link>
                    <Link href="https://www.udemy.com/">Outros serviços</Link>
                </nav>

            </div>



        </StyledMenu>

    )
}

